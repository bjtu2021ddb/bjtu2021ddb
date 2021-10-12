package com.osm.station.ui

import android.view.View
import android.widget.Toast
import cn.leancloud.LCObject
import com.bumptech.glide.Glide
import com.osm.station.base.BaseActivity
import com.osm.station.bean.StationBean
import com.osm.station.databinding.ActivityAddBinding
import com.osm.station.viewmodel.StationViewModel
import com.luck.picture.lib.entity.LocalMedia
import com.luck.picture.lib.listener.OnResultCallbackListener
import com.luck.picture.lib.config.PictureMimeType
import com.luck.picture.lib.PictureSelector
import com.luck.picture.lib.config.PictureConfig
import com.osm.station.ext.*
import com.osm.station.net.Api
import com.osm.station.net.RetrofitManager
import com.osm.station.room.SQLConstant.KEY_DATA
import com.osm.station.room.SQLConstant.STATION_KEY_FLAG_INT
import io.reactivex.Observer
import io.reactivex.disposables.Disposable
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.MultipartBody
import okhttp3.RequestBody.Companion.asRequestBody
import java.io.File

/**
 * @des: 添加站点信息页面
 * @author: zhangjian
 * @time: 2021/9/19
 */
class StationActivity : BaseActivity<StationViewModel, ActivityAddBinding>() {

    private var mData: StationBean? = null
    private var mImagePath = ""

    //true==详情,false==添加
    private var flag: Boolean = false

    //详情和添加的标识
    private var flagInt = 0

    override fun initView() {
        //返回键
        mViewBinding?.back?.setOnClickListener {
            finish()
        }
        //保存
        mViewBinding?.tvOk?.setOnClickListener {
            if(mViewBinding?.etTrack?.text?.isEmpty() == true){
                Toast.makeText(this,"轨道号不能为空",Toast.LENGTH_LONG).show()
                return@setOnClickListener
            }
            if(mViewBinding?.etPosition?.text?.isEmpty() == true){
                Toast.makeText(this,"位置数据不能为空",Toast.LENGTH_LONG).show()
                return@setOnClickListener
            }
            submitToDb()
        }
        //添加图片
        mViewBinding?.ivBg?.setOnClickListener {
            selectPic()
        }
        //修改图片
        mViewBinding?.tvModify?.setOnClickListener {
            selectPic()
        }
    }

    override fun initData() {
        mData = intent.extras?.getSerializable(KEY_DATA) as StationBean?
        flagInt = intent.extras?.getInt(STATION_KEY_FLAG_INT) ?: 0
        flag = flagInt == 1
        if (mData == null) {
            mData = StationBean()
        }
        if (flag) {
            showData(mData!!)
            mViewBinding?.tvOk?.text = "修改"
            mViewBinding?.tvTitle?.text = "查看信息"
        } else {
            mViewBinding?.tvOk?.text = "保存"
            mViewBinding?.tvTitle?.text = "添加信息"
        }
    }

    override fun startObserve() {
        //点击添加
        mViewBinding?.tvTitle?.setOnClickListener {

        }

    }

    /**
     * 选择图片
     */
    private fun selectPic() {
        PictureSelector.create(this)
            .openGallery(PictureMimeType.ofImage())
            .selectionMode(PictureConfig.SINGLE)
            .isCamera(true)
            .isCompress(true)
            .imageEngine(GlideEngine.createGlideEngine())
            .forResult(object : OnResultCallbackListener<LocalMedia?> {
                override fun onResult(result: List<LocalMedia?>) {
                    if (result.isNotEmpty()) {
                        result[0]?.apply {
                            when {
                                compressPath.isNotEmpty() -> {
                                    showImg(compressPath)
                                    return
                                }
                                realPath.isNotEmpty() -> {
                                    showImg(realPath)
                                    return
                                }
                                else -> {
                                    showImg(path)
                                    return
                                }
                            }
                        }
                    }
                }

                override fun onCancel() {
                    // 取消
                }
            })
    }

    private fun showImg(str: String) {
        if (str.isNotEmpty()) {
            mData?.picImg = arrayListOf(str)
            mViewBinding?.ivPic?.visibility = View.VISIBLE
            mViewBinding?.ivPic?.apply {
                Glide.with(this@StationActivity)
                    .load(str).into(this)
            }
            mViewBinding?.ivBg?.visibility = View.GONE
            mViewBinding?.tvAdd?.visibility = View.GONE
            mViewBinding?.tvModify?.visibility = View.VISIBLE
            upLocalData(str)
        } else {
            mViewBinding?.ivPic?.visibility = View.GONE
            mViewBinding?.ivBg?.visibility = View.GONE
            mViewBinding?.tvAdd?.visibility = View.GONE
            mViewBinding?.tvModify?.visibility = View.GONE
        }
    }

    //更新本地数据库数据
    private fun upLocalData(str:String) {
        if (!flag && mData?.picImg?.isNotEmpty() == true) {
            val file = File(mData?.picImg!![0])
            val fileRq = file.asRequestBody("*/*".toMediaTypeOrNull())
            val part = MultipartBody.Part.createFormData("file", file.name, fileRq)

            RetrofitManager.INSTANCE.create(Api::class.java).uploadImage(part).observe(this, {
                if (it.errorCode == 200) {
                    mData?.isImgUpload = true
                    mData?.picImg = arrayListOf(it.data?.url ?: "")
                } else {
                    Toast.makeText(this@StationActivity, it.errorMsg, Toast.LENGTH_LONG).show()
                }
            })
        }
    }




    /**
     * 读取页面的信息
     */
    private fun submitToDb() {
        mViewBinding?.apply {
            //车站名称
            mData?.stationName = etStationName.text.toString()
            //关键点类型
            mData?.keyType = etKeyType.text.toString()
            //名称
            mData?.name = etName.text.toString()
            //类型
            mData?.type = etType.text.toString()
            //轨道号
            mData?.trackNum = etTrack.text.toString().toInt()
            //位置
            mData?.position = etPosition.text.toString().toInt()
            //里程
            mData?.mileage = etMileage.text.toString()
            //备注
            mData?.remark = etRemark.text.toString()
        }
        if(flag){
            //修改数据
            modifyToDb(mData)
        }else{
            //上传数据
            uploadData(mData)
        }

    }

    /**
     * 修改数据(修改并保存)
     */
    private fun modifyToDb(mData: StationBean?)  {
        mData?.isSyncData = false
        modifyToServer(mData,::onModifySuccess,::onModifyError)
    }

    private fun onModifySuccess(mData: StationBean?,t:LCObject){
        t.saveInBackground().subscribe(object : Observer<LCObject> {
            override fun onSubscribe(d: Disposable) {

            }

            override fun onNext(t: LCObject) {
                //update本地数据
                mData?.isSyncData = true
                updateRoom(this@StationActivity,mData)
                Toast.makeText(this@StationActivity,"数据更新成功", Toast.LENGTH_LONG).show()
                finish()
            }

            override fun onError(e: Throwable) {
                updateRoom(this@StationActivity,mData)
                Toast.makeText(this@StationActivity,"更新失败,已保存本地", Toast.LENGTH_LONG).show()
                finish()
            }

            override fun onComplete() {
            }

        })
    }

    private fun onModifyError(){
        updateRoom(this@StationActivity,mData)
        Toast.makeText(this@StationActivity,"更新失败,已保存本地", Toast.LENGTH_LONG).show()
        finish()
    }




    /**
     * 添加数据
     */
    private fun uploadData(mData: StationBean?) {
        submitToServer(mData,::onSuccess,::onError)
    }

    private fun onSuccess(mData: StationBean?,t:LCObject){
        Toast.makeText(this@StationActivity,"数据上传服务器成功", Toast.LENGTH_LONG).show()
        finish()
    }

    private fun onError(){
        addRoom(this@StationActivity, mData)
        Toast.makeText(this@StationActivity,"数据上传服务器失败,已经保存到本地", Toast.LENGTH_LONG).show()
        finish()
    }

    /**
     * 查看详情
     */
    private fun showData(mData: StationBean) {
        //修改的情况 设置下id
        if(mData.objectId?.isEmpty() != true){
            queryIDByObjectID(this,mData,::getID)
        }
        mViewBinding?.apply {
            etStationName.setText(mData.stationName)
            etKeyType.setText(mData.keyType)
            etName.setText(mData.name)
            etType.setText(mData.type)
            etTrack.setText(mData.trackNum?.toString()?:"0")
            etPosition.setText(mData.position?.toString()?:"0")
            etMileage.setText(mData.mileage)
            etRemark.setText(mData.remark)
            if (mData.picImg.isNotEmpty()) {
                showImg(mData.picImg[0])
            }
        }
    }

    private fun getID(id: Int){
        this.mData?.id = id
    }
}
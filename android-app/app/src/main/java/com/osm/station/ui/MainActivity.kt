package com.osm.station.ui

import android.app.AlertDialog
import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import cn.leancloud.LCObject
import cn.leancloud.LCQuery
import com.osm.station.adapter.StationAdapter
import com.osm.station.base.BaseActivity
import com.osm.station.bean.StationBean
import com.osm.station.databinding.ActivityMainBinding
import com.osm.station.ext.deleteRoom
import com.osm.station.ext.isExitAddData
import com.osm.station.ext.queryRoomBySync
import com.osm.station.room.PicConvert
import com.osm.station.room.SQLConstant
import com.osm.station.room.StationEntity
import com.osm.station.viewmodel.StationViewModel
import io.reactivex.Observer
import io.reactivex.disposables.Disposable


/**
 * @des: 首页,标题展示同步和添加按钮
 * @author: zhangjian
 * @time: 2021/9/19
 */
class MainActivity : BaseActivity<StationViewModel, ActivityMainBinding>() {

    private var mAdapter: StationAdapter? = null

    private var mData: ArrayList<StationBean>? = arrayListOf()
    private var mServerData: ArrayList<StationBean> = arrayListOf()
    private var mLocalData: ArrayList<StationBean> = arrayListOf()

    private var PAGE_INDEX = 1

    private val PAGE_SIZE = 100

    override fun initView() {
        initTitle()
        initRecycler()
    }

    override fun initData() {
        queryDataByLeanCloud()
        queryDataByLocalData()
    }

    override fun startObserve() {

    }

    /**
     * 设置标题
     */
    private fun initTitle() {
        mViewBinding?.title.also {
            it?.onAddClick = {
                startAddActivity()
            }

            it?.onSyncClick = {

            }
            it?.onTitleClick = {
//                RoomExplorer.show(this, AppDataBase::class.java, "station_db")
            }
        }
    }

    override fun onResume() {
        super.onResume()
    }

    private fun queryDataByLocalData() {
        queryRoomBySync(this, ::getLocalData)
    }

    private fun getLocalData(list: List<StationEntity>) {
        val temp = ArrayList<StationBean>()
        list.forEach {
            temp.add(SQLConstant.convertStationEntity(it))
        }
        mAdapter?.insertData(temp)
    }

    /**
     * 请求servless服务端的数据 保存到本地数据库
     */
    private fun queryDataByLeanCloud() {
        val query = LCQuery<LCObject>(SQLConstant.LC_OBJECT_NAME)
        query.skip = (PAGE_INDEX - 1) * PAGE_SIZE
        query.limit = PAGE_SIZE
        query.orderByDescending("createdAt")
        query.whereNotEqualTo(SQLConstant.TABLE_DELETE, true)
        query.findInBackground().subscribe(object : Observer<List<LCObject>> {
            override fun onSubscribe(d: Disposable) {
            }

            override fun onError(e: Throwable) {

            }

            override fun onComplete() {
            }

            override fun onNext(t: List<LCObject>) {
                if (t.isNotEmpty() && t.size == PAGE_SIZE) {
                    PAGE_INDEX++
                }
                t.forEach {
                    val station = StationBean()
                    station.objectId = it.getString(SQLConstant.TABLE_OBJECT_ID)
                    station.keyType = it.getString(SQLConstant.TABLE_KEY_TYPE)
                    station.mileage = it.getString(SQLConstant.TABLE_MILEAGE)
                    station.name = it.getString(SQLConstant.TABLE_NAME)
                    station.num = it.getLong(SQLConstant.TABLE_NO)
                    station.position = it.getInt(SQLConstant.TABLE_POSITION)
                    station.remark = it.getString(SQLConstant.TABLE_REMARK)
                    station.stationName = it.getString(SQLConstant.TABLE_STATION_NAME)
                    station.trackNum = it.getInt(SQLConstant.TABLE_TRACK_ID)
                    station.type = it.getString(SQLConstant.TABLE_TYPE)
                    station.isDelete = it.getBoolean(SQLConstant.TABLE_DELETE)
                    if (it.getString(SQLConstant.TABLE_IMG) != null) {
                        station.picImg =
                            PicConvert().getPicFromString(it.getString(SQLConstant.TABLE_IMG))
                                ?: arrayListOf()
                    }
                    station.isSyncData = true
                    mServerData.add(station)
                    isExitAddData(this@MainActivity, station)
                }
                mAdapter?.setData(mServerData)
            }

        })

    }


    /**
     * 设置列表展示
     */
    private fun initRecycler() {
        mViewBinding?.refreshLayout?.apply {
            setEnableLoadMore(true)
            setEnableRefresh(true)
            setOnRefreshListener {
                finishRefresh()
                PAGE_INDEX = 1
                mAdapter?.clearData()
                queryDataByLeanCloud()
            }
            setOnLoadMoreListener {
                finishLoadMore()
                queryDataByLeanCloud()
            }
        }
        mAdapter =
            StationAdapter(this, mData as ArrayList<StationBean>, ::onDelete, ::startAddActivity1)
        mViewBinding?.rvList?.apply {
            adapter = mAdapter
            layoutManager =
                LinearLayoutManager(this@MainActivity, LinearLayoutManager.VERTICAL, false)
        }
    }

    private fun onDelete(mData: StationBean) {
        val alert = AlertDialog.Builder(this)
        alert.apply {
            setTitle("确定删除")
            setPositiveButton("确定") { p0, p1 ->
                deleteItem(mData)
                alert.create().dismiss()
            }
            setNegativeButton("取消", null)
        }
        alert.create().show()
    }

    private fun deleteItem(mData: StationBean) {
        //服务器删除
        deleteFromLeanCloud(mData)
    }

    private fun deleteFromLeanCloud(mData: StationBean) {
        val query = LCQuery<LCObject>(SQLConstant.LC_OBJECT_NAME)
        query.getInBackground(mData.objectId).subscribe(object : Observer<LCObject> {
            override fun onSubscribe(d: Disposable) {
            }

            override fun onNext(t: LCObject) {
                t.put(SQLConstant.TABLE_DELETE, true)
                saveData(t,mData)
            }

            override fun onError(e: Throwable) {
            }

            override fun onComplete() {
            }

        })
    }

    //保存数据
    private fun saveData(t:LCObject,mData: StationBean){
        t.saveInBackground().subscribe(object :Observer<LCObject>{
            override fun onSubscribe(d: Disposable) {

            }

            override fun onNext(t: LCObject) {
                //本地删除
                deleteRoom(this@MainActivity, mData)
                mAdapter?.removeItem(mData)
                Toast.makeText(this@MainActivity,"删除成功",Toast.LENGTH_LONG).show()
            }

            override fun onError(e: Throwable) {
                Toast.makeText(this@MainActivity,"删除失败",Toast.LENGTH_LONG).show()
            }

            override fun onComplete() {
            }

        })
    }



    private fun startAddActivity() {
        val intent = Intent(this, StationActivity::class.java)
        startActivity(intent)
    }

    private fun startAddActivity1(mData: StationBean) {
        val intent = Intent(this, StationActivity::class.java)
        val bundle = Bundle()
        bundle.putSerializable(SQLConstant.KEY_DATA, mData)
        bundle.putInt(SQLConstant.STATION_KEY_FLAG_INT, 1)
        intent.putExtras(bundle)
        startActivity(intent)
    }

}
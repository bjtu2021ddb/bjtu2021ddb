package com.osm.station.ext

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.LifecycleOwner
import cn.leancloud.LCObject
import cn.leancloud.LCQuery
import com.osm.station.bean.StationBean
import com.osm.station.room.AppDataBase
import com.osm.station.room.PicConvert
import com.osm.station.room.SQLConstant
import com.osm.station.room.StationEntity
import io.reactivex.Observer
import io.reactivex.disposables.Disposable

/**
 * @des:
 * @author: zhangjian
 * @time: 2021/9/25
 */

/**
 * 添加某条数据
 */
fun AppCompatActivity.addRoom(context: Context, mData: StationBean?) {
    Thread(Runnable {
        AppDataBase.getDataBase(context)
            ?.stationDao()
            ?.insertStation(SQLConstant.convertStationBean(mData))
    }).start()
}

/**
 * 更新某条数据
 */
fun AppCompatActivity.updateRoom(context: Context, mData: StationBean?) {
    Thread(Runnable {
        AppDataBase.getDataBase(context)
            ?.stationDao()
            ?.updateStation(SQLConstant.convertStationBean(mData))
    }).start()
}

/**
 * 通过isSyncData数据条数判断是否上传
 */
fun AppCompatActivity.queryRoomBySync(
    context: Context,
    onResult: ((list: List<StationEntity>) -> Unit)
) {
    AppDataBase.getDataBase(context)
        ?.stationDao()
        ?.queryDataByIsSyncData(0)
        ?.observe(context as LifecycleOwner, {
            onResult.invoke(it)
        })
}


/**
 * 通过delete数据条数判断是否删除
 */
fun AppCompatActivity.queryRoomByDelete(
    context: Context,
    onResult: ((list: List<StationEntity>) -> Unit)
) {
    AppDataBase.getDataBase(context)
        ?.stationDao()
        ?.queryDataByIsSyncData(0)
        ?.observe(context as LifecycleOwner, {
            onResult.invoke(it)
        })
}

/**
 * 添加数据库前,判断是否存在该条数据
 */
fun AppCompatActivity.isExitAddData(context: Context, mData: StationBean?) {
    AppDataBase.getDataBase(context)
        ?.stationDao()
        ?.queryDataByNum(mData?.objectId ?: "")
        ?.observe(context as LifecycleOwner, {
            if (it == null) {
                addRoom(context, mData)
            }
        })
}

/**
 * 删除某条数据
 */
fun AppCompatActivity.deleteRoom(context: Context, mData: StationBean?) {
    Thread {
        AppDataBase.getDataBase(this)
            ?.stationDao()
            ?.deleteItem(SQLConstant.convertStationBean(mData))
    }.start()

}

/**
 * 保存数据到server端
 */
fun AppCompatActivity.submitToServer(
    mData: StationBean?,
    success: ((mData: StationBean?) -> Unit),
    error: (() -> Unit)
) {
    val uploadData = LCObject(SQLConstant.LC_OBJECT_NAME)
    //为属性赋值
    uploadData.put(SQLConstant.TABLE_KEY_TYPE, mData?.keyType)
    uploadData.put(SQLConstant.TABLE_NAME, mData?.name)
    uploadData.put(SQLConstant.TABLE_TYPE, mData?.type)
    uploadData.put(SQLConstant.TABLE_TRACK_ID, mData?.trackNum)
    uploadData.put(SQLConstant.TABLE_POSITION, mData?.position)
    uploadData.put(SQLConstant.TABLE_MILEAGE, mData?.mileage)
    uploadData.put(SQLConstant.TABLE_REMARK, mData?.remark)
    uploadData.put(SQLConstant.TABLE_STATION_NAME, mData?.stationName)
    uploadData.put(
        SQLConstant.TABLE_IMG,
        PicConvert().storePicToString(mData?.picImg ?: arrayListOf())
    )
    //将对象保存到云端
    uploadData.saveInBackground().subscribe(object : Observer<LCObject> {
        override fun onSubscribe(d: Disposable) {
        }

        override fun onNext(t: LCObject) {
            success.invoke(mData)
        }

        override fun onError(e: Throwable) {
            error.invoke()
        }

        override fun onComplete() {
        }

    })

}

/**
 * 修改数据到server端,并保存
 */
fun AppCompatActivity.modifyToServer(
    mData: StationBean?,
    success: ((mData: StationBean?,t:LCObject) -> Unit),
    error: (() -> Unit)
){
    val query = LCQuery<LCObject>(SQLConstant.LC_OBJECT_NAME)
    query.getInBackground(mData?.objectId).subscribe(object : Observer<LCObject> {
        override fun onSubscribe(d: Disposable) {
        }

        override fun onNext(uploadData: LCObject) {
            //为属性赋值
            uploadData.put(SQLConstant.TABLE_KEY_TYPE, mData?.keyType)
            uploadData.put(SQLConstant.TABLE_NAME, mData?.name)
            uploadData.put(SQLConstant.TABLE_TYPE, mData?.type)
            uploadData.put(SQLConstant.TABLE_TRACK_ID, mData?.trackNum)
            uploadData.put(SQLConstant.TABLE_POSITION, mData?.position)
            uploadData.put(SQLConstant.TABLE_MILEAGE, mData?.mileage)
            uploadData.put(SQLConstant.TABLE_REMARK, mData?.remark)
            uploadData.put(SQLConstant.TABLE_STATION_NAME, mData?.stationName)
            uploadData.put(
                SQLConstant.TABLE_IMG,
                PicConvert().storePicToString(mData?.picImg ?: arrayListOf())
            )
            success.invoke(mData,uploadData)
        }

        override fun onError(e: Throwable) {
            error.invoke()
        }

        override fun onComplete() {
        }

    })
}

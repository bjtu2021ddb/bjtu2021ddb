package com.osm.station.ext

import android.content.Context
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.LifecycleOwner
import com.osm.station.bean.StationBean
import com.osm.station.room.AppDataBase
import com.osm.station.room.SQLConstant
import com.osm.station.room.StationEntity

/**
 * @des:
 * @author: zhangjian
 * @time: 2021/9/25
 */

/**
 * 添加某条数据
 */
fun AppCompatActivity.addRoom(context:Context, mData:StationBean?){
    Thread(Runnable {
        AppDataBase.getDataBase(context)
            ?.stationDao()
            ?.insertStation(SQLConstant.convertStationBean(mData))
    }).start()
}

/**
 * 更新某条数据
 */
fun AppCompatActivity.updateRoom(context:Context, mData:StationBean?){
    Thread(Runnable {
        AppDataBase.getDataBase(context)
            ?.stationDao()
            ?.updateStation(SQLConstant.convertStationBean(mData))
    }).start()
}

/**
 * 通过isSyncData数据条数判断是否上传
 */
fun AppCompatActivity.queryRoomBySync(context:Context,onResult:((list:List<StationEntity>)->Unit)){
    AppDataBase.getDataBase(context)
        ?.stationDao()
        ?.queryDataByIsSyncData(0)
        ?.observe(context as LifecycleOwner,{
            onResult.invoke(it)
        })
}


/**
 * 通过delete数据条数判断是否删除
 */
fun AppCompatActivity.queryRoomByDelete(context:Context,onResult:((list:List<StationEntity>)->Unit)){
    AppDataBase.getDataBase(context)
        ?.stationDao()
        ?.queryDataByIsSyncData(0)
        ?.observe(context as LifecycleOwner,{
            onResult.invoke(it)
        })
}

/**
 * 添加数据库前,判断是否存在该条数据
 */
fun AppCompatActivity.isExitAddData(context:Context, mData:StationBean?){
    AppDataBase.getDataBase(context)
        ?.stationDao()
        ?.queryDataByNum(mData?.objectId?:"")
        ?.observe(context as LifecycleOwner,{
            if(it==null){
                addRoom(context, mData)
            }
        })
}

/**
 * 删除某条数据
 */
fun AppCompatActivity.deleteRoom(context:Context, mData:StationBean?){
    Thread {
        AppDataBase.getDataBase(this)
            ?.stationDao()
            ?.deleteItem(SQLConstant.convertStationBean(mData))
    }.start()

}

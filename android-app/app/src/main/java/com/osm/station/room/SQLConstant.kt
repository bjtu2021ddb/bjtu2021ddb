package com.osm.station.room

import com.osm.station.bean.StationBean

/**
 * @des:
 * @author: zhangjian
 * @time: 2021/9/19
 */
object SQLConstant {
    const val SQL_NAME = "station_db"
    const val LC_OBJECT_NAME = "POI"

    const val TABLE_KEY_TYPE = "key_type"
    const val TABLE_MILEAGE = "mileage"
    const val TABLE_NAME = "name"
    const val TABLE_NO = "no"
    const val TABLE_POSITION = "position"
    const val TABLE_REMARK = "remark"
    const val TABLE_STATION_NAME = "station_name"
    const val TABLE_TRACK_ID = "track_id"
    const val TABLE_TYPE = "type"
    const val TABLE_DELETE = "deleted"
    const val TABLE_IMG = "img"
    const val TABLE_OBJECT_ID = "objectId"

    const val KEY_DATA = "station_data"
    const val STATION_KEY_FLAG = "station_flag"
    const val STATION_KEY_FLAG_INT = "station_flag_int"

    fun convertStationBean(data: StationBean?): StationEntity {
        val station = StationEntity()
        data?.also {
            station._id = it.id
            station.objectId = it.objectId ?: ""
            station.num = it.num ?: 0L
            station.stationName = it.stationName.toString()
            station.keyType = it.keyType.toString()
            station.name = it.name.toString()
            station.type = it.type.toString()
            station.trackNum = it.trackNum ?: 0
            station.position = it.position ?: 0
            station.mileage = it.mileage.toString()
            station.remark = it.remark.toString()
            station.picImg = it.picImg
            station.isImgUpload = it.isImgUpload
            station.isUpload = it.isUpload
            station.isSyncData = it.isSyncData
        }

        return station
    }

    fun convertStationEntity(data: StationEntity?): StationBean {
        val station = StationBean()
        data?.also {
            station.objectId = it.objectId
            station.num = it.num
            station.picImg = it.picImg
            station.stationName = it.stationName
            station.keyType = it.keyType
            station.name = it.name
            station.type = it.type
            station.trackNum = it.trackNum
            station.position = it.position
            station.mileage = it.mileage
            station.remark = it.remark
            station.picImg = it.picImg
            station.id = it._id
            station.isImgUpload = it.isImgUpload
            station.isUpload = it.isUpload
            station.isSyncData = it.isSyncData
        }

        return station
    }
}
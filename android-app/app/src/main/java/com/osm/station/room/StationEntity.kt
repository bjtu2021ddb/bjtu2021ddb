package com.osm.station.room

import androidx.room.*
import org.jetbrains.annotations.NotNull

/**
 * @des:
 * @author: zhangjian
 * @time: 2021/9/19
 */

@Entity(tableName = SQLConstant.SQL_NAME)
@TypeConverters(PicConvert::class)
data class StationEntity (
    @NotNull
    @PrimaryKey(autoGenerate = true)
    var _id:Int = 0,
    //序号
    @ColumnInfo
    var num: Long = 0L,
    //车站名称
    @ColumnInfo
    var stationName: String = "",
    //关键点类型
    @ColumnInfo
    var keyType: String = "",
    //名称
    @ColumnInfo
    var name: String = "",
    //类型
    @ColumnInfo
    var type: String = "",
    //轨道号
    @ColumnInfo
    var trackNum: Int = 0,
    //位置(厘米)
    @ColumnInfo
    var position: Int = 0,
    //里程
    @ColumnInfo
    var mileage: String= "",
    //备注
    @ColumnInfo
    var remark: String = "",
    //图片地址
    @ColumnInfo
    var picImg: ArrayList<String> = arrayListOf(),
    //是否删除
    @ColumnInfo
    var deleted:Boolean = false,
    //数据是否已经上传
    @ColumnInfo
    var isUpload: Boolean = false,
    //关键点类型
    @ColumnInfo
    var objectId: String = "",
    //图片是否已经上传
    @ColumnInfo
    var isImgUpload:Boolean = false,
    @ColumnInfo
    var isSyncData:Boolean = false
)
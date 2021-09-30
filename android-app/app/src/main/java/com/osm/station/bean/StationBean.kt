package com.osm.station.bean

import android.os.Parcel
import android.os.Parcelable
import java.io.Serializable

/**
 * @des: 站点信息采集bean
 * @author: zhangjian
 * @time: 2021/9/19
 */
data class StationBean(
    //映射id
    var id:Int = 0,
    //序号
    var num: Long? = 0L,
    //车站名称
    var stationName: String? = "",
    //关键点类型
    var keyType: String? = "",
    //名称
    var name: String? = "",
    //类型
    var type: String? = "",
    //轨道号
    var trackNum: Int? = 0,
    //位置(厘米)
    var position: Int? = 0,
    //里程
    var mileage: String? = "",
    //备注
    var remark: String? = "",
    //图片地址
    var picImg: ArrayList<String> = arrayListOf(),
    //是否已经上传
    var isUpload: Boolean = false,
    //图片是否已经上传
    var isImgUpload: Boolean = false,
    //标识
    var isDetail: Boolean = false,
    //是否是同步数据
    var isSyncData: Boolean = false,
    //是否已经删除
    var isDelete: Boolean = false,
    //objectId
    var objectId: String? = ""
):Serializable
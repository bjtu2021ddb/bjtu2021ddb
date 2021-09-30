package com.osm.station.net

/**
 * @des:
 * @author: zhangjian
 * @time: 2021/9/21
 */
class ApiResponse<T>(
    var data: T?,
    var errorCode: Int,
    var errorMsg: String
)
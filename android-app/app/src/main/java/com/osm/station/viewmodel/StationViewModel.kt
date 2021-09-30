package com.osm.station.viewmodel

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import com.osm.station.net.Api
import com.osm.station.net.ApiResponse
import com.osm.station.net.RetrofitManager

/**
 * @des: 接口情况
 * @author: zhangjian
 * @time: 2021/9/19
 */
class StationViewModel:ViewModel() {
    private val api = RetrofitManager.INSTANCE.create(Api::class.java)

}
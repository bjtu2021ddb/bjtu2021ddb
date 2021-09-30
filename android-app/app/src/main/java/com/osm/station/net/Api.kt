package com.osm.station.net

import androidx.lifecycle.LiveData
import com.osm.station.bean.UploadBean
import okhttp3.MultipartBody
import retrofit2.http.FormUrlEncoded
import retrofit2.http.Multipart
import retrofit2.http.POST
import retrofit2.http.Part

/**
 * @des:
 * @author: zhangjian
 * @time: 2021/9/20
 */
interface Api {

    /**
     * 图片上传
     */
    @Multipart
    @POST("upload")
    fun uploadImage(@Part body:MultipartBody.Part): LiveData<ApiResponse<UploadBean>>
}
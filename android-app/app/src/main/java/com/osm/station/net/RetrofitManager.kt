package com.osm.station.net

import okhttp3.Interceptor
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.util.concurrent.TimeUnit

/**
 * @des:
 * @author: zhangjian
 * @time: 2021/9/21
 */
class RetrofitManager private constructor() {
    /**
     * 单例实现
     */
    companion object {
        val INSTANCE: RetrofitManager by lazy { RetrofitManager() }
    }

    private val interceptor: Interceptor
    private val retrofit: Retrofit

    //初始化
    init {
        //通用拦截
        interceptor = Interceptor { chain ->
            val request: Request = chain.request()
                .newBuilder()
//                .addHeader("Content-Type", "application/json")
//                .addHeader("charset", "UTF-8")
                .build()

            chain.proceed(request)
        }

        //Retrofit实例化
        retrofit = Retrofit.Builder()
            .baseUrl("http://118.190.2.36:8898/")
            .addCallAdapterFactory(LiveDataCallAdapterFactory())
            .addConverterFactory(GsonConverterFactory.create()) //设置数据格式化工具
            .client(initClient())
            .build()
    }

    /*
        OKHttp创建
     */
    private fun initClient(): OkHttpClient {
        return OkHttpClient.Builder()
            .addInterceptor(initLogInterceptor())
            .addInterceptor(interceptor)
            .connectTimeout(30, TimeUnit.SECONDS)
            .readTimeout(30, TimeUnit.SECONDS)
            .build()
    }

    /*
        日志拦截器
     */
    private fun initLogInterceptor(): HttpLoggingInterceptor {
        val interceptor = HttpLoggingInterceptor()
        interceptor.level = HttpLoggingInterceptor.Level.BODY
        return interceptor
    }

    /*
        具体服务实例化
     */
    fun <T> create(service: Class<T>): T {
        return retrofit.create(service)
    }
}
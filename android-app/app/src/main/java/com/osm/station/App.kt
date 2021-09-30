package com.osm.station

import android.app.Application
import cn.leancloud.LeanCloud

/**
 * @des:
 * @author: zhangjian
 * @time: 2021/9/20
 */
class App : Application() {

    val SERVER_URL = "https://73rqc9rc.lc-cn-n1-shared.com"
    val SERVER_URL1 = "https://73rqc9rc.lc-cn-n1-shared.com/1.1/date"
    val APP_ID = "73rQc9RCXmXDgXg2fD2pPrkS-gzGzoHsz"
    val APP_KEY = "FT6wlcV9U6XUNHRinau5pXa8"

    override fun onCreate() {
        super.onCreate()
        // 提供 this、App ID、App Key、Server Host 作为参数
        // 注意这里千万不要调用 cn.leancloud.core.LeanCloud 的 initialize 方法，否则会出现 NetworkOnMainThread 等错误。
        LeanCloud.initialize(this, APP_ID, APP_KEY, SERVER_URL);


    }
}
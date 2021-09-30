package com.osm.station.ext

import android.content.res.Resources
import android.util.TypedValue

/**
 * @des:扩展方法
 * @author: zhangjian
 * @time: 2021/9/20
 */
val Int.dp
    get() = dpF.toInt()

val Int.dpF
    get() = TypedValue.applyDimension(
        TypedValue.COMPLEX_UNIT_DIP,
        toFloat(),
        Resources.getSystem().displayMetrics
    )
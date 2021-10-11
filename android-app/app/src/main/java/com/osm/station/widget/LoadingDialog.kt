package com.osm.station.widget

import android.app.Dialog
import android.content.Context
import android.view.Gravity
import com.osm.station.R

/**
 * @author zhangjian
 * @date 2021/10/11 15:50
 */
class LoadingDialog : Dialog {
    constructor(context: Context) : super(context) {

    }

    constructor(context: Context, theme: Int) : super(context, theme) {

    }

    fun showDialog(): LoadingDialog {
        this.apply {
            setTitle("")
            setContentView(R.layout.view_loading)
            setCancelable(true)
            window?.attributes?.gravity = Gravity.CENTER
            val param = window?.attributes
            param?.dimAmount = 0.3f
            window?.attributes = param
            show()
        }
        return this
    }

}
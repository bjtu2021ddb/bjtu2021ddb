package com.osm.station.widget

import android.content.Context
import android.util.AttributeSet
import android.view.LayoutInflater
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import com.osm.station.R

/**
 * @des: 标题栏展示
 * @author: zhang
 * @time: 2020-12-19 16:05:40
 */
class CommonTitle : LinearLayout {

    var addBtn: ImageView? = null
    var ivDot: ImageView? = null
    var syncBtn: ImageView? = null
    var title: TextView? = null
    var onAddClick: (() -> Unit)? = null
    var onSyncClick: (() -> Unit)? = null
    var onTitleClick: (() -> Unit)? = null


    constructor(context: Context?) : super(context) {
        initView(context)
    }

    constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {
        initView(context)
    }

    constructor(context: Context?, attrs: AttributeSet?, defStyleAttr: Int) : super(
        context,
        attrs,
        defStyleAttr
    ) {
        initView(context)
    }

    private fun initView(context: Context?) {
        val view = LayoutInflater.from(context).inflate(R.layout.view_title, null)
        addBtn = view.findViewById(R.id.add)
        ivDot = view.findViewById(R.id.dot)
        syncBtn = view.findViewById(R.id.sync)
        title = view.findViewById(R.id.title)
        val param = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)
        view.layoutParams = param
        addView(view)

        addBtn?.setOnClickListener {
            onAddClick?.invoke()
        }
        syncBtn?.setOnClickListener {
            onSyncClick?.invoke()
        }
        title?.setOnClickListener {
            onTitleClick?.invoke()
        }
    }

    fun setDotState(state:Int){
        ivDot?.visibility = state
    }

}
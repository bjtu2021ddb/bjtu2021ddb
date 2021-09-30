package com.osm.station.base

import android.os.Bundle
import android.view.LayoutInflater
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.ViewDataBinding
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.viewbinding.ViewBinding
import org.greenrobot.eventbus.EventBus
import java.lang.reflect.ParameterizedType

/**
 * @des: Activity基类
 * @author: zhangjian
 * @time: 2020/8/20
 */
abstract class BaseActivity<VM : ViewModel, VB : ViewBinding> : AppCompatActivity() {
    protected var mViewBinding: VB? = null
    protected var mViewModel: VM? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        initViewModel(this)
        initViewBindingLayout(this)
        startObserve()
        initView()
        initData()
    }


    /**
     * 初始化viewmodel
     */
    private fun initViewModel(activity: AppCompatActivity) {
        val type = javaClass.genericSuperclass
        if (type is ParameterizedType) {
            val clazz = type.actualTypeArguments[0] as? Class<VM>
            clazz?.let {
                if (mViewModel == null) {
                    mViewModel = ViewModelProvider
                        .AndroidViewModelFactory
                        .getInstance(activity.application)
                        .create(it)
                }
            }
        }
    }


    /**
     * 初始化viewbinding
     */
    private fun initViewBindingLayout(activity: AppCompatActivity) {
        val type = javaClass.genericSuperclass
        if (type is ParameterizedType) {
            val clazz = type.actualTypeArguments[1] as? Class<VB>
            val method = clazz?.getMethod("inflate", LayoutInflater::class.java)
            mViewBinding = (method?.invoke(null, layoutInflater) as? VB)?.apply {
                setContentView(root)
                if (this is ViewDataBinding) {
                    this.lifecycleOwner = activity
                }
            }
        }
    }

    override fun onDestroy() {
        super.onDestroy()
    }

    abstract fun initView()
    abstract fun initData()
    abstract fun startObserve()
}
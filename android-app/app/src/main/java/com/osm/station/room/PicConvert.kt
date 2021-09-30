package com.osm.station.room

import androidx.room.TypeConverter
import com.google.gson.Gson

import com.google.gson.reflect.TypeToken
import java.lang.reflect.Type


/**
 * @des:
 * @author: zhangjian
 * @time: 2021/9/25
 */
class PicConvert {
    @TypeConverter
    fun getPicFromString(value: String):ArrayList<String>? {
        val listType: Type = object : TypeToken<ArrayList<String?>?>() {}.type
        return Gson().fromJson(value, listType)
    }

    @TypeConverter
    fun storePicToString(list: ArrayList<String>): String {
        val gson = Gson()
        return gson.toJson(list)
    }
}
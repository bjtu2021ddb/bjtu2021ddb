package com.osm.station.room

import android.content.Context
import androidx.room.Database
import androidx.room.RoomDatabase
import androidx.room.Room


/**
 * @des:
 * @author: zhangjian
 * @time: 2021/9/19
 */
@Database(entities = [StationEntity::class], version = 2,exportSchema = true)
abstract class AppDataBase : RoomDatabase() {

    abstract fun stationDao(): StationDao?

    companion object {
        @Volatile
        private var INSTANCE: AppDataBase? = null
        fun getDataBase(context: Context): AppDataBase? {
            val temp = INSTANCE
            if (temp != null) {
                return temp
            }
            synchronized(this) {
                val instance = Room
                    .databaseBuilder(
                        context.applicationContext,
                        AppDataBase::class.java,
                        SQLConstant.SQL_NAME
                    )
                    .build()
                INSTANCE = instance
                return INSTANCE
            }
        }
    }
}
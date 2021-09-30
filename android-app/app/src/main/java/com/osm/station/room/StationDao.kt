package com.osm.station.room

import androidx.lifecycle.LiveData
import androidx.room.*

/**
 * @des: 操作数据库语句
 * @author: zhangjian
 * @time: 2021/9/19
 */
@Dao
interface StationDao {
    @Insert
    fun insertStation(data: StationEntity)

    @Query("select * from station_db where deleted = :state")
    fun queryAllData(state: Int? = 0): LiveData<List<StationEntity>>

    @Query("select * from station_db where objectId =:number")
    fun queryDataByNum(number: String): LiveData<StationEntity>

    @Update
    fun updateStation(data: StationEntity)

    @Query("select * from station_db where name = :name")
    fun queryDataByName(name: String): LiveData<StationEntity>

    @Query("select * from station_db where isSyncData = :isSync order by _id desc")
    fun queryDataByIsSyncData(isSync: Int): LiveData<List<StationEntity>>


    @Delete
    fun deleteItem(data: StationEntity)


}
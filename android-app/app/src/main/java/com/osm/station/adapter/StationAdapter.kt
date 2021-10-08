package com.osm.station.adapter

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.osm.station.R
import com.osm.station.bean.StationBean

/**
 * @des: 列表数据展示adapter
 * @author: zhangjian
 * @time: 2021/9/19
 */
class StationAdapter(var context:Context,
                     var list:ArrayList<StationBean>,
                     var onLongClick:((mData:StationBean)->Unit),
                     var onClick:((mData:StationBean)->Unit)):RecyclerView.Adapter<StationAdapter.MyViewHolder>() {

    inner class MyViewHolder(itemView: View):RecyclerView.ViewHolder(itemView){
        //总布局
        var allContainer:ConstraintLayout = itemView.findViewById(R.id.container)
        //车站名称
        var tvStation:TextView = itemView.findViewById(R.id.tvStationName)
        //序号
        var tvNum:TextView = itemView.findViewById(R.id.tvNum)
        //关键点类型
        var tvKeyType:TextView = itemView.findViewById(R.id.tvKeyType)
        //名称(+类型)
        var tvName:TextView = itemView.findViewById(R.id.tvName)
        //轨道号
        var tvTrack:TextView = itemView.findViewById(R.id.tvTrackNum)
        //位置(+里程)
        var tvPosition:TextView = itemView.findViewById(R.id.tvPosition)
        //详情按钮
        var tvDetail:TextView = itemView.findViewById(R.id.tvDetail)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        val view = LayoutInflater.from(context).inflate(R.layout.item_station,parent,false)
        return MyViewHolder(view)
    }

    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
        if(list[position].isDelete){
            holder.allContainer.visibility = View.GONE
        }else{
            holder.allContainer.visibility = View.VISIBLE
        }
        holder.tvNum.text = list[position].num.toString()
        holder.tvStation.text = "车站名称:${list[position].stationName}"
        holder.tvKeyType.text = "关键点类型:${list[position].keyType}"
        holder.tvName.text = list[position].name+" 类型:"+list[position].type
        holder.tvTrack.text = "轨道号:${list[position].trackNum}"
        holder.tvPosition.text = "位置:${list[position].position}  里程:${list[position].mileage}"
        holder.tvDetail.setOnClickListener{
            onClick.invoke(list[position])
        }
        holder.tvDetail.setOnLongClickListener {
            onLongClick.invoke(list[position])
            true
        }
    }

    override fun getItemCount(): Int= list.size

    fun setData(list:ArrayList<StationBean>){
        this.list.clear()
        this.list.addAll(list)
        notifyDataSetChanged()
    }

    fun insertLocalData(list:ArrayList<StationBean>){
        val temp = ArrayList<StationBean>()
        list.forEach {
            if(!this.list.contains(it)){
                temp.add(it)
            }
        }
        this.list.addAll(0,temp)
        notifyDataSetChanged()
    }

    fun clearData(){
        this.list.clear()
        notifyDataSetChanged()
    }

    fun removeItem(item:StationBean){
        this.list.remove(item)
        notifyDataSetChanged()
    }
}
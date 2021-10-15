### 项目逻辑梳理
1. 打卡App后,请求learnCloud上面的数据
    * 请求数据,筛选delete为false的数据,分页展示
    * 将数据保存到app端数据库,分页缓存展示
2. 添加操作
    * 各个数据填写正确后点击保存,先上传图片,再向本地数据库填写数据,再上传learnCloud
    * 上传图片失败--直接保存本地图片地址
    * 填写完数据以后,上传失败--返回列表页置顶显示()
3. 修改操作(无)
4. 删除操作
    * 长按item 弹窗删除,本地数据库清除该条目(本地item置为false,更新)
    * 将learnCloud的该条目 重置为false
    * 更新learnCloud失败,则同步
5. 同步功能
    * 本地数据库信息优先原则
    * 将远程数据和本地数据进行对比,不一致的把本地数据库数据更新过去(图片是本地路径的则先上传在同步)
    * 本地图片上传失败,则同步完成以后提示
    
###### 注:
1. 图片目前只能上传一张
    
    
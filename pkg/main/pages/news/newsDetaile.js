var t = require("../../utils/api.js");

Page({
    data: {},
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: JSON.parse(t.item).title
        }), console.log(JSON.parse(t.item)), this.detail(JSON.parse(t.item).id);
    },
    onReady: function() {},
    detail: function(n) {
        var e = this;
        console.log(n);
        var i = {
            id: n
        };
        t.detail(i).then(function(t) {
            var n = Date.parse(new Date());
            n = n, e.setData({
                num: wx.getStorageSync("langIndex"),
                timestamp: n,
                list: t
            });
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
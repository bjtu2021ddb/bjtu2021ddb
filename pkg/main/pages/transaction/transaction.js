require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var e = require("../../utils/api.js");

Page({
    data: {
        list: []
    },
    onLoad: function(e) {
        this.onPullDownRefresh(), console.log(e.name), wx.setNavigationBarTitle({
            title: e.title
        }), console.log(wx.T.getLanguage().order), this.setData({
            name: e.name,
            order: wx.T.getLanguage().order
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    getlist: function() {
        var t = this;
        wx.getNetworkType({
            success: function(e) {
                "none" != e.networkType ? t.setData({
                    none: !0
                }) : t.setData({
                    none: !1
                });
            }
        });
        var n = {
            pageNum: 0,
            pageSize: 5
        };
        e.payList(n).then(function(e) {
            wx.showNavigationBarLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            var n = t.data.list, o = e.list;
            n = n.concat(o), !(o.length < 5), t.setData({
                list: n
            });
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.setData({
            list: []
        }), this.getlist();
    },
    onReachBottom: function() {}
});
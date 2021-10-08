require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var e = require("../../utils/api.js"), t = !0, a = 1, n = getApp();

Page({
    data: {
        disabled: !0,
        active: 0,
        newone: [],
        newtwo: []
    },
    onLoad: function(e) {
        wx.setNavigationBarTitle({
            title: e.title
        }), null != e.status && this.setData({
            active: parseInt(e.status)
        });
    },
    getahjrej: function() {
        var n = this, i = {
            pageNum: a,
            pageSize: 10
        };
        e.message(i).then(function(e) {
            var a = Date.parse(new Date());
            a = a, wx.showNavigationBarLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), 
            t = !(e.list.length < 10);
            var i = e.list, o = n.data.newone;
            o = o.concat(i), n.setData({
                num: wx.getStorageSync("langIndex"),
                status: wx.T.getLanguage().tips,
                timestamp: a,
                disabled: !1,
                newone: o
            });
        });
    },
    message: function() {
        var e = this;
        wx.getNetworkType({
            success: function(t) {
                "none" != t.networkType ? e.setData({
                    none: !0
                }) : e.setData({
                    none: !1
                });
            }
        }), this.data.active > 0 ? this.getotehbnr() : this.getahjrej();
    },
    getotehbnr: function() {
        var i = this, o = {
            countryId: null != n.globalData.userinfo ? n.globalData.userinfo.disVo.id : wx.getStorageSync("showcontvalue"),
            pageNum: a,
            pageSize: 10
        };
        e.getCountryNotice(o).then(function(e) {
            var a = Date.parse(new Date());
            a = a, wx.showNavigationBarLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), 
            t = !(e.list.length < 10);
            var n = e.list, o = i.data.newtwo;
            o = o.concat(n), i.setData({
                disabled: !1,
                num: wx.getStorageSync("langIndex"),
                status: wx.T.getLanguage().tips,
                timestamp: a,
                newtwo: o
            });
        });
    },
    hdjwjkr: function(e) {
        wx.navigateTo({
            url: "../urlPage/urlPage?id=" + e.currentTarget.dataset.id + "&type=4"
        });
    },
    onChange: function(e) {
        a = 1;
        var t = e.detail.index;
        console.log("code", t), t < 1 ? null != n.globalData.userinfo ? this.isgeort(t) : wx.showModal({
            title: wx.T.getLanguage().tips[0],
            content: wx.T.getLanguage().status[0],
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            success: function(e) {
                e.confirm ? wx.navigateTo({
                    url: "../login/login"
                }) : e.cancel;
            }
        }) : this.isgeort(t);
    },
    isgeort: function(e) {
        this.setData({
            active: parseInt(e),
            disabled: !0
        }), this.onPullDownRefresh();
    },
    godetaile: function(e) {
        console.log(e), 0 == e.currentTarget.dataset.item.isRead ? n.globalData.fleshnews = "0" : n.globalData.fleshnews = null, 
        wx.navigateTo({
            url: "./newsDetaile?item=" + JSON.stringify(e.currentTarget.dataset.item)
        });
    },
    onReady: function() {},
    onShow: function() {
        "0" == n.globalData.fleshnews && (n.globalData.fleshnews = null, wx.stopPullDownRefresh(), 
        wx.hideNavigationBarLoading(), this.onPullDownRefresh());
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        a = 1, this.setData({
            newone: [],
            newtwo: []
        }), this.message();
    },
    onReachBottom: function() {
        t ? (wx.showNavigationBarLoading(), a++, this.message()) : this.setData({
            text: "没有更多了"
        });
    }
});
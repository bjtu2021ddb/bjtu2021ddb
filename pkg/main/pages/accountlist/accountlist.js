require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var e = require("../../utils/api.js"), t = (getApp(), 1), a = !0;

Page({
    data: {
        active: 0,
        list: []
    },
    onLoad: function(e) {
        this.setData({
            zhmx: wx.T.getLanguage().zhye,
            ye: wx.T.getLanguage().my.ye,
            keynbr: wx.T.getLanguage().keynbr,
            licz: wx.T.getLanguage().licz,
            ddzf: wx.T.getLanguage().ddzf,
            qb: wx.T.getLanguage().qb,
            sr: wx.T.getLanguage().sr,
            zhcz: wx.T.getLanguage().zhcz,
            zc: wx.T.getLanguage().zc,
            zhtk: wx.T.getLanguage().zhtk
        }), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().zhye
        }), this.onPullDownRefresh();
    },
    onReady: function() {},
    accountrecord: function() {
        var n = this, i = {
            pageNum: t,
            pageSize: 10,
            type: 0 == parseInt(this.data.active) ? null : this.data.active
        };
        e.accountrecord(i).then(function(e) {
            var t = n.data.list, i = e.list;
            t = t.concat(i), a = !(i.length < 10), n.setData({
                list: t
            }), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
        }).catch(function(e) {
            wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
        });
    },
    onShow: function() {
        t = 1;
    },
    onHide: function() {},
    onChange: function(e) {
        console.log(e), this.setData({
            active: e.detail.name
        }), this.onPullDownRefresh(), console.log(this.data.active);
    },
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading();
        var e = this;
        setTimeout(function() {
            t = 1, e.setData({
                list: []
            }), e.accountrecord();
        }, 500);
    },
    onReachBottom: function() {
        a && (wx.showNavigationBarLoading(), t++, this.accountrecord());
    },
    onShareAppMessage: function() {}
});
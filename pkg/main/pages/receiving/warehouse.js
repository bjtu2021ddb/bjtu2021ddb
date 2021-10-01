var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = (e(require("../../utils/event")), 
e(require("../../dist/notify/notify")), require("../../utils/api.js")), a = getApp();

Page({
    data: {},
    onLoad: function(e) {
        console.log(wx.T.getLanguage().warehouse), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().homePage.menu.menuList[0].title
        }), console.log(a.globalData), this.whouseDetaie(e.code), this.setData({
            title: e.title,
            counthy: a.globalData.userinfo.disVo.name,
            warehouse: wx.T.getLanguage().warehouse
        });
    },
    copy: function(e) {
        wx.setClipboardData({
            data: e.currentTarget.dataset.name,
            success: function(e) {}
        });
    },
    copytwo: function() {
        wx.setClipboardData({
            data: this.data.par.detail,
            success: function(e) {}
        });
    },
    gotoRecever: function() {
        wx.navigateTo({
            url: "./receiving?title=" + this.data.title
        });
    },
    whouseDetaie: function(e) {
        var a = this, i = {
            countryId: e
        };
        t.whouseDetaie(i).then(function(t) {
            a.setData({
                par: t,
                id: e
            });
        });
    },
    onReady: function() {},
    onShow: function() {
        null != this.data.id && this.whouseDetaie(this.data.id);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
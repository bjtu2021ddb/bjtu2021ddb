require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var e = require("../../utils/api.js"), n = getApp();

Page({
    data: {},
    onLoad: function(e) {
        this.setData({
            zhmx: wx.T.getLanguage().zhye,
            ye: wx.T.getLanguage().ye,
            keynbr: wx.T.getLanguage().keynbr,
            licz: wx.T.getLanguage().licz,
            yuehr: wx.T.getLanguage().ye
        }), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().zhye
        });
    },
    hejjr: function() {
        wx.navigateTo({
            url: "../accountlist/accountlist"
        });
    },
    getUserAccountalr: function() {
        var t = this;
        console.log(n.globalData.userinfo);
        var a = {
            id: n.globalData.userinfo.id
        };
        e.getUserAccountalr(a).then(function(e) {
            t.setData({
                money: e.money
            });
        });
    },
    hejjrsss: function() {
        wx.navigateTo({
            url: "../recharge/recharge"
        });
    },
    onReady: function() {},
    onShow: function() {
        this.getUserAccountalr();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
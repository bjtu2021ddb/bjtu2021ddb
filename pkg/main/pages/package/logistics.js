require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var t = require("../../utils/api.js"), e = getApp();

Page({
    data: {
        active: 0,
        steps: []
    },
    onLoad: function(t) {
        console.log(t), wx.setNavigationBarTitle({
            title: t.title
        }), console.log(e.globalData.userinfo.coustid), this.setData({
            coustid: e.globalData.userinfo.coustid,
            nickName: e.globalData.userinfo.accountName,
            avatarUrl: e.globalData.userinfo.avatarUrl
        }), 1 == t.type ? this.getLogisticsInfo(t.id) : this.logisticsInfo(t.id, t.name), 
        this.setData({
            type: t.type
        });
    },
    onReady: function() {},
    copy: function() {
        wx.setClipboardData({
            data: this.data.nu,
            success: function(t) {}
        });
    },
    getLogisticsInfo: function(e) {
        var n = this, a = {
            id: e
        };
        t.orderDetail(a).then(function(t) {
            if (console.log(t), t.trackDetail.detailsList) {
                var e = t.trackDetail.detailsList.map(function(t) {
                    return {
                        text: t.eventscan,
                        desc: t.eventtime
                    };
                }), a = {
                    text: t.userAddress.concatAddress
                };
                e.unshift(a), console.log(e), n.setData({
                    nu: t.trackDetail.trackingnumber,
                    kefu: wx.T.getLanguage().homePage.menu.menuList[5].title,
                    buton: wx.T.getLanguage().warehouse[1],
                    steps: e,
                    name: wx.T.getLanguage().status[1]
                });
            }
        });
    },
    logisticsInfo: function(e, n) {
        var a = this, i = {
            num: e
        };
        t.logisticsInfo(i).then(function(t) {
            var e = t.list.map(function(t) {
                return {
                    text: t.status,
                    desc: t.time
                };
            });
            a.setData({
                nu: t.number,
                steps: e,
                name: n
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
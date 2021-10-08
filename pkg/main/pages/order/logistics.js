require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var t = require("../../utils/api.js"), e = getApp();

Page({
    data: {
        type: !0,
        customerSwitch: 1
    },
    onLoad: function(t) {
        this.setData({
            customerSwitch: e.globalData.customerSwitch,
            coustid: e.globalData.coustid,
            nickName: e.globalData.userinfo.accountName,
            avatarUrl: e.globalData.userinfo.avatarUrl,
            kefu: wx.T.getLanguage().homePage.menu.menuList[3].title
        }), console.log(e.globalData.customerSwitch), this.getLogisticsInfo(t.id);
    },
    getLogisticsInfo: function(e) {
        var a = this, i = {
            orderId: e
        };
        t.getLogisticsInfo(i).then(function(t) {
            if (t) {
                var e = t.detailsList.filter(function(t, e, a) {
                    return e <= 3;
                });
                console.log(e), a.setData({
                    adrers: t,
                    lisionr: e,
                    allliet: e,
                    list: t.detailsList
                });
            }
        });
    },
    gorhhrtj: function() {
        wx.navigateTo({
            url: "../coust/coust"
        });
    },
    ishjrer: function() {
        this.setData({
            type: !this.data.type,
            allliet: this.data.type ? this.data.list : this.data.lisionr
        });
    },
    copy: function(t) {
        console.log(t.currentTarget.dataset.name), wx.setClipboardData({
            data: t.currentTarget.dataset.name,
            success: function(t) {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
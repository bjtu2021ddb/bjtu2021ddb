var t = require("../../@babel/runtime/helpers/interopRequireDefault"), a = (t(require("../../utils/event")), 
t(require("../../dist/notify/notify"))), e = require("../../utils/api.js"), i = getApp();

Page({
    data: {
        country: "",
        countryList: [],
        show: !1
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: t.title
        }), this.setData({
            opeartionname: wx.T.getLanguage().order.listTitle[0],
            title: t.title,
            opeartion: wx.T.getLanguage().trial.opeartion,
            op: wx.T.getLanguage().opeartion[1],
            country: null != i.globalData.userinfo.disVo.name ? i.globalData.userinfo.disVo.name : wx.T.getLanguage().trial.opeartion[3],
            id: null != i.globalData.userinfo.disVo.name ? i.globalData.userinfo.disVo.id : null,
            warehouse: wx.T.getLanguage().warehouse
        }), this.gudio();
    },
    gudio: function() {
        var t = this;
        e.getCountry().then(function(a) {
            t.setData({
                list: a
            });
        });
    },
    updataCountry: function(t) {
        var a = this, i = {
            countryId: t
        };
        e.updataCountry(i).then(function(t) {
            a.getUserinfo();
        });
    },
    getUserinfo: function() {
        e.userIfo().then(function(t) {
            wx.setStorageSync("userinfo", JSON.stringify(t)), i.globalData.userinfo = JSON.parse(wx.getStorageSync("userinfo"));
        });
    },
    bindPickerChange: function(t) {
        var a = getCurrentPages();
        a[a.length - 2].setData({
            id: this.data.list[t.detail.value].id
        }), this.updataCountry(this.data.list[t.detail.value].id), this.setData({
            country: this.data.list[t.detail.value].name,
            id: this.data.list[t.detail.value].id
        });
    },
    brateLong: function() {
        wx.vibrateLong({
            success: function(t) {},
            fail: function(t) {}
        });
    },
    trial: function() {
        this.data.country == this.data.opeartion[3] ? (0, a.default)({
            type: "danger",
            duration: 1e3,
            brateLong: !0,
            message: this.data.opeartion[3] + this.data.opeartion[0]
        }) : null != i.globalData.userinfo.disVo.name ? wx.navigateBack({
            data: 1
        }) : wx.navigateTo({
            url: "./warehouse?title=" + this.data.title + "&code=" + this.data.id
        });
    },
    onClose: function() {
        this.setData({
            show: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var t = require("../../utils/api.js");

getApp();

Page({
    data: {
        code: 0,
        list: [],
        des: ""
    },
    onLoad: function(t) {
        this.setData({
            czje: wx.T.getLanguage().czje,
            wxzf: wx.T.getLanguage().wxzf,
            qrcz: wx.T.getLanguage().qrcz,
            zffs: wx.T.getLanguage().zffs
        }), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().zhcz
        }), this.getlist();
    },
    geuicne: function(t) {
        this.data.code != t.currentTarget.dataset.index && (this.setData({
            code: t.currentTarget.dataset.index
        }), console.log(t));
    },
    onReady: function() {},
    getlist: function() {
        var e = this;
        t.shopDeposit({}).then(function(t) {
            e.setData({
                list: t
            });
        }), t.payway().then(function(t) {
            e.setData({
                paylist: t
            });
        }), t.getPayWarnInfo().then(function(t) {
            console.log(t), e.setData({
                des: t
            });
        });
    },
    onShow: function() {},
    djkjkr: function() {
        var e = this.data.paylist.find(function(t) {
            return "wx" == t.code;
        }), n = {
            depositId: this.data.list[this.data.code].id,
            wayId: e.id
        };
        t.submittpay(n).then(function(t) {
            wx.requestPayment({
                timeStamp: t.timeStamp,
                nonceStr: t.orderId,
                package: t.packageValue,
                signType: t.signType,
                paySign: t.paySign,
                success: function(t) {
                    wx.showToast({
                        title: "充值成功",
                        icon: "loading",
                        duration: 3e3
                    }), setTimeout(function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }, 3e3);
                },
                fail: function(t) {}
            });
        }).catch(function(t) {
            console.log(t);
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
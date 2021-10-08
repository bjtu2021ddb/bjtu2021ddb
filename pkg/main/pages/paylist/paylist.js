require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var t = require("../../utils/api.js"), e = getApp();

Page({
    data: {
        code: 0,
        yhq: 0,
        list: [ 1, 2 ],
        je: ""
    },
    onLoad: function(t) {
        console.log(t);
        var e = t.allprice;
        this.setData({
            je: parseFloat(e),
            id: t.id,
            qbye: wx.T.getLanguage().qbye,
            ddje: wx.T.getLanguage().ddje,
            jysxf: wx.T.getLanguage().jysxf,
            yfze: wx.T.getLanguage().yfze,
            wxzf: wx.T.getLanguage().wxzf,
            qrcz: wx.T.getLanguage().qrzf,
            zffs: wx.T.getLanguage().zffs
        }), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().syt
        }), this.couponsallCount(), this.paywaytwo();
    },
    paywaytwo: function() {
        var e = this;
        t.paywaytwo().then(function(t) {
            e.setData({
                paylist: t
            });
        });
    },
    couponsallCount: function() {
        var a = this, n = {
            id: e.globalData.userinfo.id
        };
        t.getUserAccountalr(n).then(function(t) {
            a.setData({
                yhq: parseFloat((t.money / 100).toFixed(2))
            });
        });
    },
    gochonzhi: function() {
        wx.navigateTo({
            url: "../account/account"
        });
    },
    geyinr: function(t) {
        console.log(t), this.data.code != t.currentTarget.dataset.index && this.setData({
            code: t.currentTarget.dataset.index
        });
    },
    onReady: function() {},
    submitehcone: function() {
        parseInt(this.data.code) > 0 ? this.weipa() : parseFloat(this.data.yhq) >= parseFloat(this.data.je) ? this.yuzhi() : wx.showToast({
            title: "您的账户余额不足，请选择别的支付方式",
            icon: "none"
        });
    },
    yuzhi: function() {
        wx.showLoading({
            title: "请稍等...",
            mask: !0
        });
        var a = {
            orderId: this.data.id
        };
        t.localPay(a).then(function(t) {
            wx.showToast({
                title: "支付成功",
                icon: "none",
                duration: 3e3
            }), setTimeout(function() {
                e.globalData.fleshOrder = "0", wx.switchTab({
                    url: "../order/order"
                });
            }, 2e3);
        });
    },
    weipa: function() {
        var a = this.data.paylist.find(function(t) {
            return "wx" == t.code;
        });
        wx.showLoading({
            title: "请稍等...",
            mask: !0
        });
        var n = {
            orderId: this.data.id,
            wayId: a.id
        };
        t.submitpaytwo(n).then(function(t) {
            wx.requestPayment({
                timeStamp: t.timeStamp,
                nonceStr: t.orderId,
                package: t.packageValue,
                signType: t.signType,
                paySign: t.paySign,
                success: function(t) {
                    e.globalData.fleshOrder = "0", wx.switchTab({
                        url: "../order/order"
                    });
                },
                fail: function(t) {
                    wx.switchTab({
                        url: "../order/order"
                    }), e.globalData.fleshOrder = "0";
                }
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
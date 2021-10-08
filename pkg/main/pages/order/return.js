require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var a = require("../../utils/api.js"), e = getApp();

Page({
    data: {
        par: {},
        timeprice: 0
    },
    onLoad: function(a) {
        console.log(a), console.log(wx.T.getLanguage().createOrder), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().createOrder.name[0]
        });
        var e = this.data.par;
        e.address = JSON.parse(a.address), this.setData({
            par: e,
            id: a.id,
            list: JSON.parse(a.container),
            day: wx.T.getLanguage().package.menu[4],
            spacel: wx.T.getLanguage().package.status[13],
            prediction: wx.T.getLanguage().prediction,
            createOrder: wx.T.getLanguage().createOrder
        });
        var t = JSON.parse(a.container), i = this.sum(t, "weight"), n = this.sum(t, "timeprice");
        this.setData({
            timeprice: n
        }), console.log(i, n), this.appReback(i, n);
    },
    sum: function(a, e) {
        var t = 0;
        return a.forEach(function(a, i, n) {
            t += a[e] ? a[e] : 0;
        }, 0), t;
    },
    gopackdetail: function(a) {
        wx.navigateTo({
            url: "../package/details?id=" + a.currentTarget.dataset.id
        });
    },
    appReback: function(e, t) {
        var i = this;
        a.appReback().then(function(a) {
            var n = parseFloat(Math.ceil(e) * a.rebackPrice), r = parseFloat(t) + n;
            i.setData({
                allprice: n.toFixed(2),
                price: r.toFixed(2)
            });
        });
    },
    onReady: function() {},
    addAddress: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onShow: function() {},
    tosubmit: function() {
        var t = this, i = {
            parcleIds: JSON.parse(this.data.id)
        };
        a.parcelBackv2(Object.assign(i, this.data.par.address)).then(function(a) {
            e.globalData.fleshPackage = "0", e.globalData.fleshOrder = "0", wx.showModal({
                cancelText: wx.T.getLanguage().opeartion[0],
                confirmText: wx.T.getLanguage().opeartion[1],
                content: wx.T.getLanguage().opeartion[6],
                success: function(e) {
                    e.confirm ? t.pay(a.id) : e.cancel && wx.switchTab({
                        url: "../order/order"
                    });
                }
            });
        });
    },
    submitOrder: function() {
        e.globalData.userinfo.email ? this.tosubmit() : wx.navigateTo({
            url: "../login/login?show=1"
        });
    },
    pay: function(a) {
        wx.navigateTo({
            url: "../paylist/paylist?id=" + a + "&allprice=" + this.data.price
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
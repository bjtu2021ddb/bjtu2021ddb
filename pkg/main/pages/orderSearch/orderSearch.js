require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var t = require("../../utils/api.js"), e = getApp(), a = 1, n = !0;

Page({
    data: {
        packageList: []
    },
    onLoad: function(t) {
        this.setLanguage();
    },
    setLanguage: function() {
        wx.setNavigationBarTitle({
            title: wx.T.getLanguage().order.title
        }), console.log(wx.T.getLanguage().order.title), this.setData({
            sqqx: wx.T.getLanguage().sqqx,
            order: wx.T.getLanguage().order,
            package: wx.T.getLanguage().package
        });
    },
    getValue: function(t) {
        a = 1, this.setData({
            inputvalue: t.detail.value,
            packageList: []
        }), this.getlist();
    },
    pay: function(t) {
        var e = this;
        wx.showModal({
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: wx.T.getLanguage().opeartion[6],
            success: function(a) {
                a.confirm && e.topay(t.currentTarget.dataset.id);
            }
        });
    },
    topay: function(a) {
        var n = this, o = {
            id: a
        };
        t.wxpay(o).then(function(t) {
            wx.requestPayment({
                timeStamp: t.timeStamp,
                nonceStr: t.nonceStr,
                package: t.packageValue,
                signType: t.signType,
                paySign: t.paySign,
                success: function(t) {
                    e.globalData.fleshOrder = "0", n.onPullDownRefresh();
                },
                fail: function(t) {
                    n.onPullDownRefresh();
                }
            });
        });
    },
    copy: function(t) {
        console.log(t.currentTarget.dataset.name), wx.setClipboardData({
            data: t.currentTarget.dataset.name,
            success: function(t) {}
        });
    },
    getlist: function() {
        var e = this;
        wx.getNetworkType({
            success: function(t) {
                "none" != t.networkType ? e.setData({
                    none: !0
                }) : e.setData({
                    none: !1
                });
            }
        });
        var o = {
            keyword: this.data.inputvalue,
            pageNum: a,
            pageSize: 5,
            sort: !1,
            status: 0
        };
        t.orderSearch(o).then(function(t) {
            console.log(t);
            var a = e.data.packageList, o = t.list.map(function(t, e) {
                return t.checked = !1, t;
            });
            a = a.concat(o);
            var i = "加载中....";
            o.length < 5 ? (n = !1, i = "没有更多了") : (n = !0, i = "加载中...."), e.setData({
                packageList: a,
                text: i
            }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        });
    },
    cancel: function(a) {
        var n = this, o = e.globalData.countryList.filter(function(t) {
            return t.id == a.currentTarget.dataset.countryid;
        });
        wx.showModal({
            title: wx.T.getLanguage().ordertips[0],
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: "TW" == o[0].code ? "商超支付非即时入帐，存在2~3天延迟，如您已实际支付订单请不要取消订单，以免造成不便" : wx.T.getLanguage().ordertips[1],
            success: function(o) {
                if (o.confirm) {
                    var i = {
                        id: a.currentTarget.dataset.id
                    };
                    t.cancel(i).then(function(t) {
                        e.globalData.fleshOrder = "0", n.onPullDownRefresh();
                    });
                } else o.cancel && console.log("用户点击取消");
            }
        });
    },
    canceorder: function(a) {
        var n = this;
        a.currentTarget.dataset.id;
        wx.showModal({
            title: wx.T.getLanguage().cmmr,
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: wx.T.getLanguage().cancel,
            success: function(o) {
                if (o.confirm) {
                    var i = {
                        id: a.currentTarget.dataset.id
                    };
                    t.cancel(i).then(function(t) {
                        e.globalData.fleshPackage = "0", n.onPullDownRefresh();
                    });
                } else o.cancel && console.log("用户点击取消");
            }
        });
    },
    search: function(t) {
        this.setData({
            packageList: []
        }), this.getlist();
    },
    getbur: function(t) {
        a = 1, this.setData({
            inputvalue: t.detail.value
        });
    },
    clearinputvalue: function() {
        this.setData({
            inputvalue: "",
            packageList: []
        });
    },
    onReady: function() {},
    toDetail: function(t) {
        wx.navigateTo({
            url: "../order/details?id=" + t.currentTarget.dataset.id
        });
    },
    getwhouse: function(t) {
        console.log(t.currentTarget.dataset.id), wx.navigateTo({
            url: "../order/logistics?id=" + t.currentTarget.dataset.id + "&title=" + this.data.order.opearation[2] + "&type=1"
        });
    },
    onShow: function() {
        a = 1, wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
    },
    onHide: function() {},
    onUnload: function() {},
    deletd: function(e) {
        var a = this;
        wx.showModal({
            cancelText: this.data.package.menu[9],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: this.data.order.opearation[7],
            success: function(n) {
                n.confirm && t.delOrder(e.currentTarget.dataset.id).then(function(t) {
                    a.onPullDownRefresh();
                });
            }
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading();
        var t = this;
        setTimeout(function() {
            a = 1, t.setData({
                packageList: []
            }), t.getlist();
        }, 500);
    },
    onReachBottom: function() {
        n ? (wx.showNavigationBarLoading(), this.setData({
            text: "加载中...."
        }), a++, this.getlist()) : this.setData({
            text: "没有更多了"
        });
    },
    onShareAppMessage: function() {}
});
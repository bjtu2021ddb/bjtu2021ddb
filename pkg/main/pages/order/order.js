require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var t = require("../../utils/api.js"), e = getApp(), a = 0, n = 1, o = !0, i = !1;

Page({
    data: {
        inputvalue: "",
        disabled: !1
    },
    onLoad: function(t) {
        null != e.globalData.userinfo && "1" == e.globalData.fleshOrder && (this.onPullDownRefresh(), 
        this.setData({
            token: !0
        }));
    },
    pay: function(t) {
        var e = this;
        console.log(t), wx.showModal({
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: wx.T.getLanguage().opeartion[6],
            success: function(a) {
                a.confirm && e.topay(t.currentTarget.dataset.id, t.currentTarget.dataset.totalprice);
            }
        });
    },
    topay: function(t, e) {
        wx.navigateTo({
            url: "../paylist/paylist?id=" + t + "&allprice=" + e
        });
    },
    onReady: function() {},
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
        var r = {
            keyword: this.data.inputvalue,
            pageNum: n,
            pageSize: 5,
            sort: !0,
            status: a
        };
        t.orderList(r).then(function(t) {
            var a = e.data.packageList, n = t.list.map(function(t, e) {
                return t.checked = !1, t;
            });
            a = a.concat(n);
            var r = "加载中....";
            n.length < 5 ? (o = !1, r = "没有更多了") : (o = !0, r = "加载中...."), e.setData({
                packageList: a,
                text: r,
                disabled: !1
            }), i && e.simpleStatus(), wx.hideNavigationBarLoading();
        }).catch(function(t) {
            e.setData({
                disabled: !1
            }), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
        });
    },
    onShow: function() {
        this.setLanguage(), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading(), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().order.title
        }), null != e.globalData.userinfo && "0" == e.globalData.fleshOrder ? (this.onPullDownRefresh(), 
        e.globalData.fleshOrder = "1", this.setData({
            token: !0
        })) : null == e.globalData.userinfo && "1" == e.globalData.fleshOrder ? (e.globalData.fleshOrder = "0", 
        this.setData({
            token: !1
        })) : null != e.globalData.userinfo && "1" == e.globalData.fleshOrder && (e.globalData.fleshOrder = "1", 
        this.setData({
            token: !0
        }));
    },
    gologin: function() {
        wx.navigateTo({
            url: "../login/login"
        });
    },
    getwhouse: function(t) {
        console.log(t.currentTarget.dataset.id), wx.navigateTo({
            url: "./logistics?id=" + t.currentTarget.dataset.id + "&title=" + this.data.order.opearation[2] + "&type=1"
        });
    },
    toDetail: function(t) {
        console.log(t.currentTarget.dataset.id), wx.navigateTo({
            url: "./details?id=" + t.currentTarget.dataset.id
        });
    },
    copy: function(t) {
        console.log(t.currentTarget.dataset.name), wx.setClipboardData({
            data: t.currentTarget.dataset.name,
            success: function(t) {}
        });
    },
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
    onHide: function() {},
    onChange: function(t) {
        n = 1, a = t.detail.index, this.setData({
            code: a,
            inputvalue: "",
            disabled: !0,
            packageList: []
        }), this.onPullDownRefresh();
    },
    getSearch: function() {
        wx.navigateTo({
            url: "../orderSearch/orderSearch"
        });
    },
    setLanguage: function() {
        console.log(wx.T.getLanguage().order.title), this.setData({
            sqqx: wx.T.getLanguage().sqqx,
            order: wx.T.getLanguage().order,
            package: wx.T.getLanguage().package,
            titlename: wx.T.getLanguage().package.title
        });
    },
    canceorder: function(a) {
        var n = this, o = a.currentTarget.dataset.id;
        wx.showModal({
            title: wx.T.getLanguage().cmmr,
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: wx.T.getLanguage().cancel,
            success: function(a) {
                a.confirm ? t.cancelvorder({
                    id: o
                }).then(function(t) {
                    e.globalData.fleshPackage = "0", n.onPullDownRefresh();
                }) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    onUnload: function() {},
    simpleStatus: function() {
        var e = this;
        wx.stopPullDownRefresh(), t.simpleStatus().then(function(t) {
            console.log(t), e.setData({
                orderone: t[0] ? t[0] : "",
                ordertwo: t[1] ? t[1] : "",
                orderthree: t[2] ? t[2] : "",
                orderfour: t[3] ? t[3] : "",
                orderfive: t[4] ? t[4] : ""
            });
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading();
        var t = this;
        i = !0, setTimeout(function() {
            n = 1, t.setData({
                packageList: []
            }), t.getlist();
        }, 500);
    },
    cancel: function(a) {
        var n = this;
        console.log(e.globalData.countryList);
        var o = e.globalData.countryList.filter(function(t) {
            return t.id == a.currentTarget.dataset.countryid;
        });
        wx.showModal({
            title: wx.T.getLanguage().ordertips[0],
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: o.length > 0 && "TW" == o[0].code ? "商超支付非即时入帐，存在2~3天延迟，如您已实际支付订单请不要取消订单，以免造成不便" : wx.T.getLanguage().ordertips[1],
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
    onReachBottom: function() {
        o ? (i = !1, wx.showNavigationBarLoading(), this.setData({
            text: "加载中...."
        }), n++, this.getlist()) : this.setData({
            text: "没有更多了"
        });
    }
});
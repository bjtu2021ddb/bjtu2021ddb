var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../dist/notify/notify")), a = (e(require("../../utils/event")), 
require("../../utils/api.js"));

Page({
    data: {},
    onLoad: function(e) {
        null != e.num && this.setData({
            num: e.num
        }), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().address[0]
        }), this.setData({
            address: wx.T.getLanguage().address
        });
    },
    checkout: function(e) {
        this.defaultAddress(e.currentTarget.dataset.index);
    },
    defaultAddress: function(e) {
        var t = this, s = getCurrentPages(), n = s[s.length - 2], i = n.data.par, d = JSON.parse(n.data.orderids);
        console.log("orderids", d), a.servicePriceList("", "", this.data.list[e].countryId, d).then(function(a) {
            n.isdare;
            i.address = t.data.list[e], i.servicePriceList = a, n.setData({
                par: i,
                isdare: !0
            }), wx.navigateBack({
                data: 1
            });
        });
    },
    fixAddress: function(e) {
        console.log(e), wx.navigateTo({
            url: "./addAddress?title=" + this.data.address[3] + "&id=" + e.currentTarget.dataset.id
        });
    },
    delet: function(e) {
        var s = this;
        console.log(e.currentTarget.dataset.id), a.addressDeleted(e.currentTarget.dataset.id).then(function(e) {
            console.log(e), e ? s.next() : (0, t.default)({
                type: "warning",
                message: s.data.address[25]
            });
        }).catch(function(e) {
            console.log(e);
        });
    },
    next: function() {
        this.onPullDownRefresh(), (0, t.default)({
            type: "success",
            message: this.data.address[24]
        });
    },
    gonextpage: function() {
        wx.navigateTo({
            url: "./addAddress?title=" + this.data.address[2]
        });
    },
    onReady: function() {},
    onShow: function() {
        console.log(this.data.num), this.onPullDownRefresh();
    },
    onHide: function() {},
    onUnload: function() {},
    getAddress: function() {
        var e = this;
        a.addressList().then(function(t) {
            wx.showNavigationBarLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), 
            e.setData({
                list: t
            });
        });
    },
    onPullDownRefresh: function() {
        var e = this;
        wx.getNetworkType({
            success: function(t) {
                "none" != t.networkType ? (e.getAddress(), e.setData({
                    none: !0
                })) : e.setData({
                    none: !1
                });
            }
        });
    },
    onReachBottom: function() {}
});
require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var t = require("../../utils/api.js"), e = getApp(), a = 1, n = !0;

Page({
    data: {
        packageList: []
    },
    onLoad: function(t) {
        this.setLanguage();
    },
    onReady: function() {},
    setLanguage: function() {
        wx.setNavigationBarTitle({
            title: wx.T.getLanguage().package.title
        }), this.setData({
            tip: wx.T.getLanguage().status[7],
            package: wx.T.getLanguage().package
        });
    },
    getbur: function(t) {
        this.setData({
            inputvalue: t.detail.value
        });
    },
    rebrjkt: function(e) {
        var a = this;
        wx.showModal({
            cancelText: this.data.package.menu[9],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: this.data.package.opearation[7],
            success: function(n) {
                if (n.confirm) {
                    var i = {
                        id: e.currentTarget.dataset.id
                    };
                    t.parcelRejection(i).then(function(t) {
                        a.onPullDownRefresh();
                    });
                }
            }
        });
    },
    mkemkw: function(e) {
        var a = this;
        wx.showModal({
            cancelText: this.data.package.menu[9],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: this.data.package.opearation[9],
            success: function(n) {
                if (n.confirm) {
                    var i = {
                        id: e.currentTarget.dataset.id
                    };
                    t.parcelCancelRejection(i).then(function(t) {
                        a.onPullDownRefresh();
                    });
                }
            }
        });
    },
    return: function(t) {
        console.log(t.currentTarget.dataset.id), wx.navigateTo({
            url: "../address/return?id=" + t.currentTarget.dataset.id + "&name=" + this.data.package.menu[12] + "&weight=" + t.currentTarget.dataset.weight + "&express=" + t.currentTarget.dataset.express
        });
    },
    searchValue: function() {
        this.setData({
            packageList: []
        }), this.getlist();
    },
    getValue: function(t) {
        this.setData({
            inputvalue: t.detail.value,
            packageList: []
        }), this.getlist();
    },
    onShow: function() {
        wx.stopPullDownRefresh(), wx.hideNavigationBarLoading(), console.log(e.globalData.fleshPackageserrche), 
        "0" == e.globalData.fleshPackageserrche ? this.onPullDownRefresh() : a = 1;
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
        var i = {
            keyword: this.data.inputvalue,
            pageNum: a,
            pageSize: 100,
            sort: !1
        };
        t.packageSearch(i).then(function(t) {
            console.log(t);
            var a = e.data.packageList, i = t.list.map(function(t, e) {
                return t.checked = !1, t;
            });
            a = a.concat(i);
            var o = "加载中....";
            i.length < 5 ? (n = !1, o = "没有更多了") : (n = !0, o = "加载中...."), e.setData({
                packageList: a,
                text: o
            }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        }).catch(function(t) {
            wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
        });
    },
    search: function(t) {
        this.setData({
            packageList: []
        }), this.getlist();
    },
    clearinputvalue: function() {
        this.setData({
            inputvalue: "",
            packageList: []
        });
    },
    deletpackage: function(e) {
        var a = this;
        wx.showModal({
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: this.data.package.opearation[5] + this.data.package.opearation[4] + wx.T.getLanguage().package.title + "?",
            success: function(n) {
                n.confirm && t.deletPackage(e.currentTarget.dataset.id).then(function(t) {
                    a.onPullDownRefresh();
                });
            }
        });
    },
    goDetails: function(t) {
        t.currentTarget.dataset.status >= 11 && wx.navigateTo({
            url: "../package/details?id=" + t.currentTarget.dataset.id + "&index=" + t.currentTarget.dataset.index
        });
    },
    goPrediction: function(t) {
        var e = this.data.package.title + this.data.package.opearation[0];
        wx.navigateTo({
            url: "../prediction/prediction?title=" + e + "&id=" + t.currentTarget.dataset.id + "&cid=" + t.currentTarget.dataset.cid
        });
    },
    getwhouse: function(t) {
        console.log(t.currentTarget.dataset.id), wx.navigateTo({
            url: "../package/logistics?id=" + t.currentTarget.dataset.id + "&title=" + this.data.package.opearation[1] + "&type=2&name=" + t.currentTarget.dataset.name
        });
    },
    onHide: function() {},
    onUnload: function() {},
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
        n ? (this.setData({
            text: "加载中...."
        }), a++, this.getlist()) : this.setData({
            text: "没有更多了"
        });
    },
    onShareAppMessage: function() {}
});
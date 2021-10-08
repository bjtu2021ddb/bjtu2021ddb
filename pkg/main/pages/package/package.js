var t = require("../../@babel/runtime/helpers/interopRequireDefault"), a = (t(require("../../utils/event")), 
t(require("../../dist/notify/notify"))), e = require("../../utils/api.js"), n = getApp(), i = 0, o = 1, s = !1, c = !0;

Page({
    data: {
        trahs: "fade-up",
        none: !0,
        text: "没有更多了",
        inputvalue: "",
        packageList: [],
        addshow: !1,
        showcircle: !0,
        allcheck: !1,
        wight: 0,
        code: 0,
        disabled: !0,
        isred: !1
    },
    onLoad: function(t) {
        null != t.table && (this.setData({
            code: parseInt(t.table)
        }), i = parseInt(t.table)), null != n.globalData.userinfo && "1" == n.globalData.fleshPackage && (this.onPullDownRefresh(), 
        this.setData({
            token: !0
        }));
    },
    getMaxParcelNUm: function() {
        var t = this;
        e.getMaxParcelNUm().then(function(a) {
            t.setData({
                coutrypack: a
            }), console.log("asss", a);
        });
    },
    getid: function(t) {
        var a = this.data.packageList;
        console.log(a[t.currentTarget.dataset.index].checked), a[t.currentTarget.dataset.index].checked = !a[t.currentTarget.dataset.index].checked;
        var e = a.filter(function(t) {
            return t.checked;
        });
        if (e.length > 0) {
            if (parseInt(this.data.coutrypack) < e.length) return wx.showToast({
                title: this.data.hdhhrj + "(" + this.data.coutrypack + ")",
                icon: "none"
            }), void (a[t.currentTarget.dataset.index].checked = !a[t.currentTarget.dataset.index].checked);
        } else if (parseInt(this.data.coutrypack) < 1) return;
        var n = 0;
        a.some(function(t) {
            t.checked && (n += t.weight);
        });
        var i = a.find(function(t) {
            return 0 == t.checked && 11 != t.status && 0 != t.auditStatus;
        });
        this.setData({
            packageList: a,
            allcheck: null == i,
            wight: n.toFixed(2),
            isred: n > 0
        });
    },
    simpleStatus: function() {
        var t = this;
        wx.stopPullDownRefresh(), e.simpleStatusPackage().then(function(a) {
            t.setData({
                orderone: a[0] ? a[0] : "",
                ordertwo: a[1] ? a[1] : "",
                orderthree: a[2] ? a[2] : "",
                orderfour: a[3] ? a[3] : ""
            });
        });
    },
    getlist: function() {
        var t = this;
        wx.getNetworkType({
            success: function(a) {
                "none" != a.networkType ? t.setData({
                    none: !0
                }) : t.setData({
                    none: !1
                });
            }
        });
        var a = {
            keyword: this.data.inputvalue,
            pageNum: o,
            pageSize: 100,
            sort: !1,
            status: i
        };
        e.parcel(a).then(function(a) {
            s && t.simpleStatus();
            var e = t.data.packageList, n = a.list.map(function(t, a) {
                return t.checked = !1, t;
            });
            e = e.concat(n);
            var i = "加载中....";
            n.length < 5 ? (c = !1, i = "没有更多了") : (c = !0, i = "加载中...."), t.setData({
                packageList: e,
                text: i,
                disabled: !1
            }), wx.hideNavigationBarLoading();
        }).catch(function(a) {
            t.setData({
                disabled: !1
            }), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
        });
    },
    allsubmit: function() {
        var t = this.data.packageList.map(function(t, a) {
            return t.checked = !1, t;
        });
        this.setData({
            packageList: t,
            allcheck: !this.data.allcheck,
            wight: 0,
            isred: !1
        });
    },
    deletpackage: function(t) {
        var a = this;
        wx.showModal({
            cancelText: this.data.package.menu[9],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: this.data.package.opearation[5] + this.data.package.opearation[4] + wx.T.getLanguage().package.title + "?",
            success: function(n) {
                n.confirm && e.deletPackage(t.currentTarget.dataset.id).then(function(t) {
                    a.onPullDownRefresh();
                });
            }
        });
    },
    rebrjkt: function(t) {
        var a = this;
        console.log(t), wx.showModal({
            cancelText: this.data.package.menu[9],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: this.data.package.opearation[7],
            success: function(n) {
                if (n.confirm) {
                    var i = {
                        id: t.currentTarget.dataset.id
                    };
                    e.parcelRejection(i).then(function(t) {
                        a.onPullDownRefresh();
                    });
                }
            }
        });
    },
    mkemkw: function(t) {
        var a = this;
        wx.showModal({
            cancelText: this.data.package.menu[9],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: this.data.package.opearation[9],
            success: function(n) {
                if (n.confirm) {
                    var i = {
                        id: t.currentTarget.dataset.id
                    };
                    e.parcelCancelRejection(i).then(function(t) {
                        a.onPullDownRefresh();
                    });
                }
            }
        });
    },
    cancle: function() {
        var t = this.data.packageList.map(function(t, a) {
            return t.checked = !1, t;
        });
        this.setData({
            packageList: t,
            wight: 0,
            isred: !1,
            allcheck: !1
        });
    },
    allcancle: function() {
        var t = this.data.packageList, e = 0;
        if (t.some(function(t) {
            11 != t.status && 0 != t.auditStatus && (e += t.weight);
        }), console.log(e), 0 != e) {
            var n = t.map(function(t, a) {
                return t.checked = !0, t;
            });
            if (parseInt(this.data.coutrypack) < n.length) {
                wx.showToast({
                    title: this.data.hdhhrj + "(" + this.data.coutrypack + ")",
                    icon: "none"
                });
                n = t.map(function(t, a) {
                    return t.checked = !1, t;
                });
            } else {
                var i = 0;
                t.some(function(t) {
                    t.checked && (i += t.weight);
                }), this.setData({
                    packageList: n,
                    allcheck: !this.data.allcheck,
                    wight: i.toFixed(2),
                    isred: e > 0
                });
            }
        } else (0, a.default)({
            type: "warning",
            duration: 1e3,
            brateLong: !0,
            message: "暂无可合并的包裹"
        });
    },
    goPrediction: function(t) {
        var a = this.data.package.title + this.data.package.opearation[0];
        n.globalData.userinfo.disVo.id ? wx.navigateTo({
            url: "../prediction/prediction?title=" + a + "&id=" + t.currentTarget.dataset.id + "&cid=" + t.currentTarget.dataset.cid
        }) : wx.navigateTo({
            url: "../login/login?showlist=1"
        });
    },
    getpackage: function() {
        n.globalData.userinfo.disVo.id ? wx.navigateTo({
            url: "../prediction/prediction?title=" + this.data.package.name
        }) : wx.navigateTo({
            url: "../login/login?showlist=1"
        });
    },
    goDetails: function(t) {
        console.log(t), wx.navigateTo({
            url: "./details?id=" + t.currentTarget.dataset.id + "&index=" + t.currentTarget.dataset.index
        });
    },
    getwhouse: function(t) {
        console.log(t.currentTarget.dataset.id), wx.navigateTo({
            url: "./logistics?id=" + t.currentTarget.dataset.id + "&title=" + this.data.package.opearation[1] + "&type=2&name=" + t.currentTarget.dataset.name
        });
    },
    submit: function() {
        var t = this.data.packageList, a = [];
        t.forEach(function(t) {
            t.checked && 11 != t.status && a.push(t);
        }), a.length > 0 ? this.repet(a) : this.netRepet(a);
    },
    netRepet: function(t) {
        var e = [];
        t.forEach(function(t) {
            t.checked && 11 != t.status && 0 != t.auditStatus && e.push(t.id);
        }), t.length > 0 ? this.sunmitData(JSON.stringify(e)) : (0, a.default)({
            type: "warning",
            duration: 1e3,
            brateLong: !0,
            message: this.data.package.menu[11]
        });
    },
    repet: function(t) {
        for (var e = t[0], n = 0; n < t.length; n++) if (e.warehouse != t[n].warehouse) return void (0, 
        a.default)({
            type: "warning",
            duration: 1e3,
            brateLong: !0,
            message: this.data.package.tips
        });
        this.netRepet(t);
    },
    sunmitData: function(t) {
        var a = t;
        wx.showModal({
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: this.data.package.opearation[5] + this.data.package.menu[6] + "?",
            success: function(t) {
                t.confirm && wx.requestSubscribeMessage({
                    tmplIds: [ "q2XNuLOirw3691r-abobeUM22Qdo-8wCtGaDycCtvoE", "PcpUpfMB0vErgl5QcrzzcSQKKPkRlInGaLljc2N08rk" ],
                    success: function(t) {
                        console.log(t), console.log("成功");
                    },
                    complete: function(t) {
                        console.log("re", t), wx.navigateTo({
                            url: "../createOrder/createOrder?data=" + a
                        });
                    }
                });
            }
        });
    },
    onReady: function() {},
    setbottombar: function() {
        this.getMaxParcelNUm(), e.parcelReadNum().then(function(t) {
            t > 0 ? wx.setTabBarBadge({
                index: 1,
                text: t.toString()
            }) : wx.removeTabBarBadge({
                index: 1
            });
        });
    },
    onShow: function(t) {
        this.setLanguage(), null != n.globalData.userinfo && this.setbottombar(), wx.stopPullDownRefresh(), 
        wx.hideNavigationBarLoading(), n.globalData.fleshPackageserrche = "1", n.globalData.packcode && (this.setData({
            code: n.globalData.packcode
        }), i = n.globalData.packcode, n.globalData.packcode = null), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().package.title
        }), null != n.globalData.userinfo && "0" == n.globalData.fleshPackage ? (this.onPullDownRefresh(), 
        n.globalData.fleshPackage = "1", this.setData({
            token: !0
        })) : null == n.globalData.userinfo && "1" == n.globalData.fleshPackage ? (n.globalData.fleshPackage = "0", 
        this.setData({
            token: !1
        })) : null != n.globalData.userinfo && "1" == n.globalData.fleshPackage && (n.globalData.fleshPackage = "1", 
        this.setData({
            token: !0
        }));
    },
    gologin: function() {
        wx.navigateTo({
            url: "../login/login"
        });
    },
    onChange: function(t) {
        wx.showNavigationBarLoading(), o = 1, i = t.detail.index, this.setData({
            code: i,
            disabled: !0,
            inputvalue: "",
            packageList: []
        }), this.cancle(), this.getlist();
    },
    setLanguage: function() {
        console.log(wx.T.getLanguage().package), this.setData({
            gnth: wx.T.getLanguage().gnth,
            tip: wx.T.getLanguage().status[7],
            package: wx.T.getLanguage().package,
            hdhhrj: wx.T.getLanguage().hdhhrj,
            titlename: wx.T.getLanguage().package.title
        });
    },
    return: function(t) {
        console.log(t);
        var a = [], e = [ {
            express: t.currentTarget.dataset.express,
            timeprice: t.currentTarget.dataset.timeprice,
            weight: t.currentTarget.dataset.weight
        } ];
        a.push(t.currentTarget.dataset.id), wx.navigateTo({
            url: "../address/return?id=" + JSON.stringify(a) + "&name=" + this.data.package.menu[12] + "&container=" + JSON.stringify(e)
        });
    },
    returnall: function() {
        var t = this.data.packageList, a = [];
        t.forEach(function(t) {
            t.checked && 11 != t.status && a.push(t);
        }), a.length > 0 && this.netreturn(a);
    },
    netreturn: function(t) {
        var a = [], e = [];
        t.forEach(function(t) {
            t.checked && 11 != t.status && 0 != t.auditStatus && (a.push(t.id), e.push({
                express: t.expressNumber,
                timeprice: t.timeOutPrice,
                weight: t.weight
            }));
        }), wx.navigateTo({
            url: "../address/return?id=" + JSON.stringify(a) + "&name=" + this.data.package.menu[12] + "&container=" + JSON.stringify(e)
        });
    },
    getSearch: function() {
        wx.navigateTo({
            url: "../packageSearch/packageSearch"
        });
    },
    onHide: function() {
        this.cancle();
    },
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.removeStorageSync("packdetal"), wx.showNavigationBarLoading();
        var t = this;
        s = !0, setTimeout(function() {
            o = 1, t.setData({
                packageList: []
            }), t.getlist(), t.cancle();
        }, 500);
    },
    getpackdetr: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.packageList;
        e[a].look ? e[a].look = !1 : e[a].look = !0, this.setData({
            packageList: e
        });
    },
    onReachBottom: function() {
        s = !1, c ? (wx.showNavigationBarLoading(), this.setData({
            text: "加载中...."
        }), o++, this.getlist()) : this.setData({
            text: "没有更多了"
        });
    }
});
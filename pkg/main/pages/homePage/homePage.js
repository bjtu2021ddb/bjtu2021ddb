require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var t = require("../../utils/api.js"), e = getApp(), a = requirePlugin("myPlugin");

a.__configAppId("nTrPc3U70n0"), a._$configAppKey("2ae0e7640493795d063e35538c69a050"), 
Page({
    data: {
        show: !1,
        option: [],
        sholine: !1,
        totla: 0,
        copua: "",
        noticecontione: {
            id: 1e3
        },
        showadver: !1,
        showfirst: !0,
        showcontainer: !1,
        showactive: !1,
        shoactbe: 2,
        packnumber: 0,
        ordernumber: 0,
        customerSwitch: 0,
        packcontainer: [],
        ordercontainer: [],
        swiperContainer: [ {
            img: "https://app.huyuntong.com/app/static/images/mini/bend.png",
            type: 10
        } ]
    },
    onLoad: function(t) {
        var a = this;
        if (null != t.jsonStr && t.jsonStr && (e.globalData.parentId = t.jsonStr), null != t.rqCode && (e.globalData.codeurl = t.rqCode, 
        this.promotion(e.globalData.codeurl)), null != t.q) {
            var n = decodeURIComponent(t.q).split("=");
            n.length > 2 ? (e.globalData.codeurl = n[1].substring(0, n[1].indexOf("&")), e.globalData.parentId = n[2]) : (e.globalData.codeurl = n[1], 
            null == t.jsonStr && (e.globalData.parentId = "")), this.promotion(e.globalData.codeurl);
        } else e.globalData.codeurl = "";
        this.gudio(), this.getBanner(null), wx.getNetworkType({
            success: function(t) {
                "none" == t.networkType ? a.setData({
                    none: !1
                }) : a.next();
            }
        });
    },
    chengrgb: function() {
        this.setData({
            sholine: !this.data.sholine
        });
    },
    promotion: function(e) {
        var a = {
            promotionCode: e
        };
        t.promotion(a).then(function(t) {});
    },
    appContext: function() {
        t.appContext().then(function(t) {
            e.globalData.url = t;
        });
    },
    onSwitch2Change: function(t) {
        null != e.globalData.userinfo ? this.updataCountry(t.detail) : this.nextget(t.detail);
    },
    nextget: function(t) {
        wx.setStorageSync("showcontvalue", t), this.getBanner(t);
    },
    updataCountry: function(e) {
        var a = this, n = {
            countryId: e
        };
        this.getcoustid(e), t.updataCountry(n).then(function(t) {
            a.getUserinfo();
        });
    },
    next: function() {
        this.setData({
            none: !0
        });
    },
    hidefirst: function() {
        wx.setStorageSync("isred", 11), this.setData({
            showfirst: !1
        });
    },
    getBanner: function(a) {
        var n = this, i = {
            countryId: a || ""
        };
        t.banner(i).then(function(t) {
            var i = t.filter(function(t, e, a) {
                return 0 == t.useWay;
            });
            console.log("swiperContainer", i), n.setData({
                swiperContainer: i
            }), n.getHomeNotice(a), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading(), 
            null != e.globalData.userinfo && e.globalData.userinfo.disVo.id && n.setbottombar();
        }).catch(function(t) {});
    },
    getHomeNotice: function(e) {
        var a = this, n = {
            countryId: e
        }, i = this.data.noticecontione;
        t.getHomeNotice(n).then(function(t) {
            a.setData({
                noticecontione: t
            }), i && i.id != wx.getStorageSync("noticeconid") && a.setData({
                showadver: !!a.data.noticecontione
            });
        });
    },
    goUrl: function(t) {
        if (this.bannerpv(this.data.swiperContainer[t.currentTarget.dataset.index].id), 
        "1" == this.data.swiperContainer[t.currentTarget.dataset.index].type) if (-1 == this.data.swiperContainer[t.currentTarget.dataset.index].url.indexOf("?id") && -1 == this.data.swiperContainer[t.currentTarget.dataset.index].url.indexOf("&id")) wx.navigateTo({
            url: "../webView/webView?url=" + this.data.swiperContainer[t.currentTarget.dataset.index].url
        }); else {
            var e = this.data.swiperContainer[t.currentTarget.dataset.index].url.substring(0, this.data.swiperContainer[t.currentTarget.dataset.index].url.indexOf("?")), a = this.data.swiperContainer[t.currentTarget.dataset.index].url.substring(this.data.swiperContainer[t.currentTarget.dataset.index].url.indexOf("=") + 1, this.data.swiperContainer[t.currentTarget.dataset.index].url.length);
            wx.navigateTo({
                url: "../active/active?url=" + e + "&id=" + a
            });
        } else "0" == this.data.swiperContainer[t.currentTarget.dataset.index].type ? wx.navigateTo({
            url: "../urlPage/urlPage?id=" + this.data.swiperContainer[t.currentTarget.dataset.index].articleId + "&type=1"
        }) : "4" == this.data.swiperContainer[t.currentTarget.dataset.index].type && this.data.swiperContainer[t.currentTarget.dataset.index].miniRouteAddr && wx.navigateTo({
            url: this.data.swiperContainer[t.currentTarget.dataset.index].miniRouteAddr
        });
    },
    radioChange: function(t) {
        this.setData({
            value: t.currentTarget.dataset.id,
            showcontainer: !1,
            valuebname: t.currentTarget.dataset.name
        }), null != e.globalData.userinfo && this.updataCountry(t.currentTarget.dataset.id), 
        wx.setStorageSync("showcontainer", 2), wx.removeStorageSync("noticeconid"), wx.setStorageSync("showcontvalue", t.currentTarget.dataset.id), 
        wx.setStorageSync("showcontname", t.currentTarget.dataset.name), this.getBanner(t.currentTarget.dataset.id);
    },
    getUnreadList: function() {
        var a = this;
        (null == this.data.countryId || this.data.countryId != e.globalData.userinfo.disVo.id) && this.getBanner(e.globalData.userinfo.disVo.id), 
        !(e.globalData.userinfo.payType > 0) && this.getNewcoup(), t.getUnreadList().then(function(t) {
            a.getcoustid(e.globalData.userinfo.disVo.id), a.setData({
                valuebname: e.globalData.userinfo.disVo.name,
                value: e.globalData.userinfo.disVo.id,
                nickName: e.globalData.userinfo.accountName,
                avatarUrl: e.globalData.userinfo.avatarUrl,
                info: t.num
            });
        }), !wx.getStorageSync("showactive") && this.getActive();
    },
    getActive: function() {
        var e = this;
        t.getActive().then(function(t) {
            t && t.id ? wx.getStorageSync("showactive") ? wx.getStorageSync("showactive") != t.id && e.setData({
                activeid: t.id,
                showactive: !0,
                activdata: t
            }) : e.setData({
                activeid: t.id,
                showactive: !0,
                activdata: t
            }) : e.setData({
                activeid: null,
                showactive: !1
            });
        });
    },
    closeactive: function() {
        wx.setStorageSync("showactive", this.data.activeid), this.setData({
            showactive: !1
        });
    },
    goactive: function() {
        var t = this.data.activdata.linkUrl.substring(0, this.data.activdata.linkUrl.indexOf("?"));
        wx.navigateTo({
            url: "../active/active?url=" + t + "&id=" + this.data.activdata.id
        });
    },
    gudio: function() {
        var a = this;
        t.districtList({
            parentId: 0
        }).then(function(t) {
            var n = t.map(function(t) {
                return {
                    text: t.name,
                    value: t.id
                };
            });
            e.globalData.countryList = t, a.setData({
                option: n,
                counlist: t
            });
        });
    },
    bannerpv: function(e) {
        var a = {
            id: e
        };
        t.bannerpv(a).then(function(t) {});
    },
    claioenrf: function() {
        console.log(321);
    },
    onClickHide: function() {
        this.setData({
            show: !1
        });
    },
    getcoup: function() {
        var a = this;
        t.newcomer().then(function(t) {
            e.globalData.userinfo.payType, a.setData({
                show: !1
            }), a.getUserinfo();
        }).catch(function(t) {
            e.globalData.userinfo.payType, a.getUserinfo(), a.setData({
                show: !1
            });
        });
    },
    getUserinfo: function() {
        var a = this;
        t.userIfo().then(function(t) {
            wx.setStorageSync("userinfo", JSON.stringify(t)), e.globalData.userinfo = JSON.parse(wx.getStorageSync("userinfo")), 
            a.getBanner(e.globalData.userinfo.disVo.id);
        });
    },
    getcoustid: function(t) {
        var a = this.data.counlist.find(function(e, a, n) {
            return e.id == t;
        });
        this.setData({
            coustid: a.customerServiceId,
            customerSwitch: a.customerSwitch,
            coustspace: wx.T.getLanguage().homePage.coust
        }), e.globalData.customerQrcodeImg = a.customerQrcodeImg, e.globalData.customerSwitch = a.customerSwitch, 
        e.globalData.coustid = a.customerServiceId;
    },
    toMessage: function() {
        null != e.globalData.userinfo ? (e.globalData.fleshnews = "0", wx.navigateTo({
            url: "../news/news?title=" + wx.T.getLanguage().homePage.message.news + "&status=0"
        })) : wx.showModal({
            title: wx.T.getLanguage().tips[0],
            content: wx.T.getLanguage().status[0],
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "../login/login"
                }) : t.cancel;
            }
        });
    },
    gowevview: function() {
        wx.navigateTo({
            url: "../webView/webView?url=" + e.globalData.url.appGuidebook
        });
    },
    goorder: function() {
        wx.switchTab({
            url: "../order/order"
        });
    },
    toDetail: function(t) {
        parseInt(t.currentTarget.dataset.status) >= 11 ? (e.globalData.packcode = 1, wx.switchTab({
            url: "../package/package"
        })) : wx.navigateTo({
            url: "../package/logistics?id=" + t.currentTarget.dataset.expre + "&title=" + this.data.package.opearation[1] + "&type=2&name=" + t.currentTarget.dataset.exprecom
        });
    },
    deletpackage: function(e) {
        var a = this;
        wx.showModal({
            cancelText: this.data.package.menu[9],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: this.data.package.opearation[5] + this.data.package.opearation[4] + wx.T.getLanguage().package.title + "?",
            success: function(n) {
                n.confirm && t.deletPackage(e.currentTarget.dataset.id).then(function(t) {
                    a.getpacorder();
                });
            }
        });
    },
    goPrediction: function(t) {
        var a = this.data.package.title + this.data.package.opearation[0];
        e.globalData.userinfo.disVo.id ? wx.navigateTo({
            url: "../prediction/prediction?title=" + a + "&id=" + t.currentTarget.dataset.id + "&cid=" + t.currentTarget.dataset.cid
        }) : wx.navigateTo({
            url: "../login/login?showlist=1"
        });
    },
    toorderDetail: function(t) {
        wx.navigateTo({
            url: "../order/logistics?id=" + t.currentTarget.dataset.id
        });
    },
    goopacker: function() {
        wx.switchTab({
            url: "../package/package"
        });
    },
    navgetNextPage: function(t) {
        var a = parseInt(t.currentTarget.dataset.index);
        if (null != e.globalData.userinfo) switch (a) {
          case 4:
            wx.navigateTo({
                url: "../webView/webView?url=" + e.globalData.url.appGuidebook
            });
            break;

          case 3:
            wx.navigateTo({
                url: "../coust/coust"
            });
            break;

          case 1:
            wx.navigateTo({
                url: "../prediction/prediction?title=" + t.currentTarget.dataset.title
            });
            break;

          case 2:
            wx.navigateTo({
                url: "../account/account?title=" + t.currentTarget.dataset.title
            });
            break;

          case 0:
            null != e.globalData.userinfo.disVo.name ? wx.navigateTo({
                url: "../receiving/warehouse?title=" + t.currentTarget.dataset.title + "&code=" + e.globalData.userinfo.disVo.id
            }) : wx.navigateTo({
                url: "../receiving/receiving?title=" + t.currentTarget.dataset.title
            });
            break;

          case 5:
            wx.navigateTo({
                url: "../problem/problem?id=" + this.data.countryId
            });
            break;

          case 6:
            wx.navigateTo({
                url: "../trial/trial?title=" + t.currentTarget.dataset.title
            });
            break;

          case 7:
            wx.navigateTo({
                url: "../server/details?title=" + t.currentTarget.dataset.title + "&id=" + this.data.value
            });
        } else switch (a) {
          case 4:
            wx.navigateTo({
                url: "../webView/webView?url=" + e.globalData.url.appGuidebook
            });
            break;

          case 6:
            wx.navigateTo({
                url: "../trial/trial?title=" + t.currentTarget.dataset.title
            });
            break;

          case 5:
            wx.navigateTo({
                url: "../problem/problem?id=" + this.data.countryId
            });
            break;

          case 7:
            wx.navigateTo({
                url: "../server/details?title=" + t.currentTarget.dataset.title + "&id=" + this.data.value
            });
            break;

          default:
            wx.showModal({
                title: wx.T.getLanguage().tips[0],
                content: wx.T.getLanguage().status[0],
                cancelText: wx.T.getLanguage().opeartion[0],
                confirmText: wx.T.getLanguage().opeartion[1],
                success: function(t) {
                    t.confirm ? wx.navigateTo({
                        url: "../login/login"
                    }) : t.cancel;
                }
            });
        }
    },
    navgetNext: function(t) {
        var a = t.currentTarget.dataset.index;
        if (null != e.globalData.userinfo) switch (a) {
          case 0:
            null != e.globalData.userinfo.disVo.name ? wx.navigateTo({
                url: "../receiving/warehouse?title=" + this.data.homePage.menu.menuList[4].title + "&code=" + e.globalData.userinfo.disVo.id
            }) : wx.navigateTo({
                url: "../receiving/receiving?title=" + this.data.homePage.menu.menuList[4].title
            });
            break;

          case 1:
            wx.navigateTo({
                url: "../prediction/prediction?title=" + t.currentTarget.dataset.title
            });
            break;

          case 2:
            e.globalData.packcode = 1, wx.switchTab({
                url: "../package/package"
            });
            break;

          case 3:
            wx.switchTab({
                url: "../order/order"
            });
        } else wx.showModal({
            title: wx.T.getLanguage().tips[0],
            content: wx.T.getLanguage().status[0],
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            success: function(t) {
                t.confirm && wx.navigateTo({
                    url: "../login/login"
                });
            }
        });
    },
    setLanguage: function() {
        this.setData({
            homebotom: wx.T.getLanguage().homebotom,
            confirmText: wx.T.getLanguage().opeartion[1],
            tips: wx.T.getLanguage().tips,
            server: wx.T.getLanguage().server,
            copua: wx.T.getLanguage().yh,
            day: wx.T.getLanguage().package.menu[4],
            package: wx.T.getLanguage().package,
            order: wx.T.getLanguage().order,
            createOrder: wx.T.getLanguage().createOrder,
            homePage: wx.T.getLanguage().homePage,
            showfirst: !wx.getStorageSync("isred")
        });
    },
    getNewcoup: function() {
        var a = this;
        t.getNewcoup().then(function(t) {
            a.setData({
                show: !(e.globalData.userinfo.payType > 0 || !t),
                price: t ? t.price * t.num : null,
                nprice: t ? t.price : null,
                nnum: t ? t.num : null,
                coumname: t ? t.name : null,
                copuid: t.id
            });
        });
    },
    onReady: function() {},
    other: function() {
        wx.getStorageSync("showcontainer") ? this.setData({
            showcontainer: !1
        }) : this.setData({
            showcontainer: !0
        });
    },
    getpacorder: function() {
        var e = this, a = {
            pageNum: 0,
            pageSize: 10
        };
        t.parcelindexList(a).then(function(t) {
            var a = [ {
                status: 1,
                list: t.list.filter(function(t) {
                    return t.status < 11;
                })
            }, {
                status: 11,
                list: t.list.filter(function(t) {
                    return t.status >= 11;
                })
            } ];
            e.setData({
                packnumber: t.total,
                packcontainer: a
            });
        }), t.orderindexList(a).then(function(t) {
            var a = [ {
                status: 2,
                list: t.list.filter(function(t) {
                    return t.status < 3;
                })
            }, {
                status: 3,
                list: t.list.filter(function(t) {
                    return t.status >= 3;
                })
            } ];
            e.setData({
                ordernumber: t.total,
                ordercontainer: a
            });
        });
    },
    chepacje: function(t) {
        this.setData({
            shoactbe: parseInt(t.currentTarget.dataset.id)
        });
    },
    claidien: function() {},
    setserhjrh: function() {
        var t = {
            userId: "user111111111",
            data: [ {
                key: "real_name",
                value: e.globalData.userinfo.accountName
            }, {
                key: "mobile_phone",
                value: 15669060662
            }, {
                key: "email",
                value: e.globalData.userinfo.email ? e.globalData.userinfo.email : ""
            }, {
                index: 0,
                key: "country",
                label: "国家",
                value: e.globalData.userinfo.disVo.name
            }, {
                index: 1,
                key: "account",
                label: "会员号",
                value: e.globalData.userinfo.accountCode
            }, {
                index: 4,
                key: "avatar",
                label: "头像",
                value: e.globalData.userinfo.avatarUrl
            } ]
        };
        null != e.globalData.userinfo.coustid && a._$configStaffId(e.globalData.userinfo.coustid), 
        a._$setUserInfo(t);
    },
    onShow: function() {
        this.setLanguage(), console.log(wx.getStorageSync("showcontname")), wx.getStorageSync("showcontvalue") && wx.getStorageSync("showcontainer") && null == e.globalData.userinfo && (this.setData({
            valuebname: wx.getStorageSync("showcontname"),
            value: wx.getStorageSync("showcontvalue")
        }), this.getBanner(wx.getStorageSync("showcontvalue"))), null != e.globalData.userinfo && e.globalData.userinfo.disVo.id ? this.getUnreadList() : this.other(), 
        null != e.globalData.userinfo && e.globalData.userinfo.disVo.id && this.getUserinfo(), 
        this.appContext(), null != e.globalData.userinfo && e.globalData.userinfo.disVo.id && this.setData({
            showcontainer: !1
        }), null != e.globalData.userinfo && e.globalData.userinfo.disVo.id && this.getpacorder(), 
        wx.setNavigationBarTitle({
            title: wx.T.getLanguage().homePage.title
        });
    },
    setbottombar: function() {
        t.parcelReadNum().then(function(t) {
            t > 0 ? wx.setTabBarBadge({
                index: 1,
                text: t.toString()
            }) : wx.removeTabBarBadge({
                index: 1
            });
        });
    },
    getysher: function() {
        this.setData({
            showcontainer: !0
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var t = this;
        wx.showNavigationBarLoading(), setTimeout(function() {
            t.getBanner(null != e.globalData.userinfo ? e.globalData.userinfo.disVo.id : t.data.value);
        }, 1e3);
    },
    claienr: function() {
        e.globalData.fleshnews = "0", wx.navigateTo({
            url: "../news/news?title=" + wx.T.getLanguage().homePage.message.news + "&status=1"
        });
    },
    closviuejr: function() {
        var t = this.data.noticecontione.id;
        this.setData({
            showadver: !1
        }), wx.setStorageSync("noticeconid", t);
    },
    onReachBottom: function() {},
    noneEnoughPeople: function() {},
    onShareAppMessage: function() {}
});
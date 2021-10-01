var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event")), a = require("../../utils/md5.js"), e = require("../../utils/api.js"), n = getApp();

Page({
    data: {
        showcontainer: !1,
        close: !1,
        language: [ "zh_CN", "zh_TW", "en" ],
        show: !1,
        isbtb: !0,
        showlist: !0,
        canIUseGetUserProfile: !1,
        email: "",
        time: "获取验证码",
        currentTime: 60,
        disabled: !0,
        typeName: "password",
        code: "",
        passWord: ""
    },
    bindChange: function(t) {
        wx.showLoading({
            mask: "true"
        }), this.setData({
            showlist: !1
        }), this.getcoustid(t.currentTarget.dataset.id), this.updataUser(t.currentTarget.dataset.id, t.currentTarget.dataset.name);
    },
    oppone: function() {
        this.setData({
            close: !this.data.close,
            typeName: this.data.close ? "password" : "text"
        });
    },
    getpassward: function(t) {
        var a = t.detail.value;
        if (!/^[0-9]*$/.test(a) && a.length >= 6 && !a) return wx.showToast({
            title: "请输入6～20位非纯数字密码",
            duration: 2e3,
            icon: "none"
        }), !1;
        this.setData({
            passWord: t.detail.value
        });
    },
    getCode: function(t) {
        this.setData({
            code: t.detail.value
        });
    },
    formSubmit: function(t) {
        t.detail.value.userName ? t.detail.value.code ? t.detail.value.passWord ? this.data.isbtb && (this.setData({
            isbtb: !1
        }), this.submitAll(t.detail.value)) : wx.showToast({
            title: "请输入6～20位非纯数字密码",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "请输入邮箱验证码",
            icon: "none",
            duration: 2e3
        }) : wx.showToast({
            title: "请输入emai地址",
            icon: "none",
            duration: 2e3
        });
    },
    submitAll: function(t) {
        var n = this;
        t.passWord = (0, a.hexMD5)(t.passWord), e.bindEmail(t).then(function(t) {
            n.setData({
                show: !1,
                isbtb: !0
            }), n.getall();
        }).catch(function(t) {
            n.setData({
                isbtb: !0
            });
        });
    },
    getemail: function(t) {
        var a = t.detail.value;
        if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(a) && a) return wx.showToast({
            title: "邮箱输入有误",
            duration: 2e3,
            icon: "none"
        }), !1;
        this.setData({
            email: t.detail.value
        });
    },
    send: function() {
        var t = this;
        if (t.data.email && t.data.disabled) {
            var a = {
                email: t.data.email
            };
            e.getActive().then(function(a) {
                a ? t.setData({
                    showactive: !0,
                    activdata: a
                }) : t.setData({
                    showactive: !1
                });
            }), e.getemailcode(a).then(function(a) {
                wx.showModal({
                    showCancel: !1,
                    confirmText: "确认",
                    content: "注册验证码已发往您的邮箱，请至邮箱中查看您的邮件",
                    success: function(t) {}
                }), t.setData({
                    disabled: !1
                });
            }).catch(function(a) {
                t.setData({
                    time: "获取验证码",
                    suffix: "",
                    currentTime: 60,
                    disabled: !0
                });
            });
            var n = null, o = t.data.currentTime;
            n = setInterval(function() {
                o--, t.setData({
                    time: o + "S",
                    suffix: "秒后可重新获取"
                }), o <= 0 && (clearInterval(n), t.setData({
                    time: "获取验证码",
                    currentTime: 60,
                    disabled: !0
                }));
            }, 1e3);
        } else !t.data.email && t.data.disabled ? wx.showToast({
            title: "请输入emai地址",
            icon: "none",
            duration: 2e3
        }) : t.data.email && !t.data.disabled && wx.showToast({
            title: "验证码已发送",
            icon: "none",
            duration: 2e3
        });
    },
    onLoad: function(t) {
        wx.getUserProfile && this.setData({
            canIUseGetUserProfile: !0
        }), null != t.show ? this.setData({
            shoidsss: t.show,
            show: !0,
            isshowkls: !0
        }) : this.setData({
            isshowkls: !1
        }), null != t.showlist && this.setData({
            shoid: 1
        }), this.setLanguage();
    },
    onReady: function() {},
    onShow: function() {
        t.default.on("languageChanged", this, this.setLanguage), !n.globalData.countryId && !wx.getStorageSync("showcontvalue") || null == n.globalData.countryList ? this.gudio() : this.setData({
            countrd: wx.getStorageSync("showcontvalue") ? wx.getStorageSync("showcontvalue") : !n.globalData.countryId
        });
    },
    setLanguage: function() {
        wx.setNavigationBarTitle({
            title: wx.T.getLanguage().login.title
        }), this.setData({
            confirmText: wx.T.getLanguage().opeartion[1],
            descript: wx.T.getLanguage().my.userinfo.descript,
            actions: wx.T.getLanguage().my.userinfo.actions,
            login: wx.T.getLanguage().login,
            lg: this.data.language[wx.getStorageSync("langIndex")]
        });
    },
    gudio: function() {
        var t = this;
        e.districtList({
            parentId: 0
        }).then(function(a) {
            n.globalData.countryList = a;
            var e = a.map(function(t) {
                return {
                    text: t.name,
                    value: t.id
                };
            });
            t.setData({
                option: e,
                showcontainer: !0
            });
        });
    },
    onGotUserInfo: function() {
        var t = this;
        wx.showLoading({
            title: "请稍等...",
            mask: !0
        }), wx.getUserProfile({
            desc: "用于完善会员资料",
            success: function(a) {
                t.realogj(a);
            },
            fail: function(t) {
                wx.hideLoading();
            }
        });
    },
    getUserInfouejnnr: function(t) {
        var a = this;
        console.log(t), wx.showLoading({
            title: "请稍等...",
            mask: !0
        });
        var e = [];
        e = null != n.globalData.countryId ? n.globalData.countryList.filter(function(t) {
            return t.id == n.globalData.countryId;
        }) : n.globalData.countryList.filter(function(t) {
            return t.id == a.data.countrd;
        }), wx.login({
            success: function(o) {
                console.log(o);
                var i = {
                    code: o.code,
                    encryptedData: t.detail.encryptedData,
                    iv: t.detail.iv,
                    registeredPlace: e[0].name,
                    promotionCode: n.globalData.codeurl ? n.globalData.codeurl : "",
                    countryId: e[0].id,
                    parentId: n.globalData.parentId,
                    userName: t.detail.userInfo.nickName,
                    userSex: t.detail.userInfo.gender,
                    userUrl: t.detail.userInfo.avatarUrl
                };
                a.login(i);
            }
        });
    },
    realogj: function(t) {
        var a = this;
        wx.showLoading({
            title: "请稍等...",
            mask: !0
        });
        var e = [];
        e = null != n.globalData.countryId ? n.globalData.countryList.filter(function(t) {
            return t.id == n.globalData.countryId;
        }) : n.globalData.countryList.filter(function(t) {
            return t.id == a.data.countrd;
        }), wx.login({
            success: function(o) {
                console.log(o);
                var i = {
                    code: o.code,
                    encryptedData: t.encryptedData,
                    iv: t.iv,
                    registeredPlace: e[0].name,
                    promotionCode: n.globalData.codeurl ? n.globalData.codeurl : "",
                    countryId: e[0].id,
                    parentId: n.globalData.parentId,
                    userName: t.userInfo.nickName,
                    userSex: t.userInfo.gender,
                    userUrl: t.userInfo.avatarUrl
                };
                a.login(i);
            }
        });
    },
    radioChange: function(t) {
        n.globalData.countryId = t.currentTarget.dataset.id, wx.setStorageSync("showcontainer", 2), 
        wx.setStorageSync("showcontvalue", t.currentTarget.dataset.id), wx.setStorageSync("showcontname", t.currentTarget.dataset.name), 
        this.setData({
            showcontainer: !1
        });
    },
    updataUser: function(t, a) {
        var o = this, i = {
            areaId: n.globalData.userinfo.areaId,
            cityId: n.globalData.userinfo.cityId,
            countryId: t,
            language: n.globalData.userinfo.language,
            provinceId: n.globalData.userinfo.areaId,
            sex: n.globalData.userinfo.areaId,
            registeredPlace: a
        };
        e.userUpdata(i).then(function(t) {
            !n.globalData.userinfo.email && o.data.isshowkls ? (o.setData({
                show: !0
            }), o.geother()) : o.getall();
        });
    },
    geother: function() {
        e.userIfo().then(function(t) {
            n.globalData.fleshPackage = "0", n.globalData.fleshOrder, wx.hideLoading(), wx.setStorageSync("userinfo", JSON.stringify(t)), 
            n.globalData.userinfo = JSON.parse(wx.getStorageSync("userinfo"));
        });
    },
    getall: function() {
        var t = this;
        e.userIfo().then(function(a) {
            n.globalData.fleshPackage = "0", n.globalData.fleshOrder, wx.hideLoading(), wx.setStorageSync("userinfo", JSON.stringify(a)), 
            n.globalData.userinfo = JSON.parse(wx.getStorageSync("userinfo")), wx.hideLoading(), 
            null == t.data.shoidsss && t.dintgyue();
        });
    },
    dintgyue: function() {
        wx.showModal({
            title: "订阅新消息提醒通知",
            confirm: !0,
            showCancel: !1,
            success: function(t) {
                wx.requestSubscribeMessage({
                    tmplIds: [ "34qaVbwjHpXQWryo_uGZDpGzt3iPjYQ20z5FZQ12Xcg", "UFVZOAHPDfGPEGbr2dC_kAL7gvg6uQKFZ0wldJ_rakE" ],
                    success: function(t) {
                        console.log(t), console.log("成功");
                    },
                    complete: function(t) {
                        console.log("re", t), wx.navigateBack({
                            data: 0
                        });
                    }
                });
            }
        });
    },
    getUserinfo: function() {
        var t = this;
        e.userIfo().then(function(a) {
            n.globalData.fleshPackage = "0", n.globalData.fleshOrder, wx.setStorageSync("userinfo", JSON.stringify(a)), 
            n.globalData.userinfo = JSON.parse(wx.getStorageSync("userinfo")), t.nextType();
        });
    },
    gobacek: function() {
        wx.navigateBack({
            data: 0
        });
    },
    login: function(t) {
        var a = this;
        wx.showLoading({
            title: "请稍等...",
            mask: "true"
        }), e.login(t).then(function(t) {
            wx.setStorageSync("token", t.accessToken), wx.setStorageSync("refreshToken", t.refreshToken), 
            a.getUserinfo();
        }).catch(function(t) {
            wx.hideLoading(), wx.showToast({
                title: "登录失败请重新登陆",
                icon: "none"
            }), wx.hideLoading();
        });
    },
    nextType: function() {
        !n.globalData.userinfo.email && this.data.isshowkls ? (wx.hideLoading(), this.setData({
            show: !0
        })) : this.getall();
    },
    onHide: function() {},
    onUnload: function() {},
    geturlone: function(t) {
        wx.navigateTo({
            url: "../webView/webView?url=" + n.globalData.url.appUseAgreement
        });
    },
    geturltwo: function(t) {
        wx.navigateTo({
            url: "../webView/webView?url=" + n.globalData.url.appPrivacyAgreement
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
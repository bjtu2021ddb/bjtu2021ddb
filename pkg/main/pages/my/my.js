var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event")), a = require("../../utils/api.js"), t = getApp();

Page({
    data: {
        show: !1,
        credit: 0,
        money: 0,
        yhq: 0,
        userImg: "/images/icon_not_login.png"
    },
    onLoad: function(e) {
        console.log(wx.T.getLanguage().createOrder), console.log(wx.T.getLanguage().orderDetails), 
        console.log(wx.T.getLanguage().order), console.log(wx.T.getLanguage().prediction), 
        this.setLanguage(), console.log(t.globalData);
    },
    cloes: function() {
        this.setData({
            show: !1
        });
    },
    showLanguage: function() {
        this.setData({
            show: !0
        });
    },
    onSelect: function(e) {
        wx.setStorageSync("langIndex", e.detail.index), null != t.globalData.userinfo ? this.updataUser(e.detail.index + 1) : this.next(e.detail.index + 1);
    },
    next: function(e) {
        wx.T.setLocaleByIndex(e - 1), this.changlanguage();
    },
    uploduserimg: function() {},
    updataUser: function(e) {
        var n = this;
        console.log(t.globalData.userinfo);
        var o = {
            areaId: t.globalData.userinfo.areaId,
            cityId: t.globalData.userinfo.cityId,
            countryId: t.globalData.userinfo.countryId,
            language: e,
            provinceId: t.globalData.userinfo.areaId,
            sex: t.globalData.userinfo.areaId,
            registeredPlace: t.globalData.userinfo.registeredPlace
        };
        a.userUpdata(o).then(function(a) {
            wx.T.setLocaleByIndex(e - 1), n.changlanguage();
        });
    },
    changlanguage: function() {
        this.setData({
            show: !1
        }), this.onShow();
    },
    gopage: function(e) {
        console.log(e);
        var a = parseInt(e.currentTarget.dataset.index);
        if (console.log(t.globalData), null != t.globalData.userinfo) switch (a) {
          case 0:
            wx.navigateTo({
                url: "../account/account"
            });
            break;

          case 1:
            wx.navigateTo({
                url: "../transaction/transaction?title=" + e.currentTarget.dataset.title + "&name=" + wx.T.getLanguage().createOrder.goods[11]
            });
            break;

          case 2:
            wx.navigateTo({
                url: "../coupon/coupon?title=" + e.currentTarget.dataset.title
            });
            break;

          case 3:
            t.globalData.userinfo.disVo.id ? wx.navigateTo({
                url: "../address/address"
            }) : wx.navigateTo({
                url: "../login/login?showlist=1"
            });
            break;

          case 4:
            wx.navigateTo({
                url: "../inviteFriends/inviteFriends"
            });
            break;

          case 5:
            wx.navigateTo({
                url: "../feedback/feedback?title=" + e.currentTarget.dataset.title
            });
        } else wx.showModal({
            title: wx.T.getLanguage().tips[0],
            content: wx.T.getLanguage().status[0],
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            success: function(e) {
                e.confirm ? wx.navigateTo({
                    url: "../login/login"
                }) : e.cancel && console.log("用户点击取消");
            }
        });
    },
    setLanguage: function() {
        wx.setNavigationBarTitle({
            title: wx.T.getLanguage().my.title
        });
    },
    upShopLogo: function() {
        var e = this;
        wx.showActionSheet({
            itemList: [ "从相册中选择", "拍照" ],
            itemColor: "#f7982a",
            success: function(a) {
                a.cancel || (0 == a.tapIndex ? e.chooseWxImageShop("album") : 1 == a.tapIndex && e.chooseWxImageShop("camera"));
            }
        });
    },
    chooseWxImageShop: function(e) {
        var a = this;
        wx.chooseImage({
            sizeType: [ "original", "compressed" ],
            sourceType: [ e ],
            success: function(e) {
                a.data.userimg = e.tempFilePaths[0], a.upload_file(e.tempFilePaths[0]);
            }
        });
    },
    upload_file: function(e) {
        var t = this, n = {
            file: {
                path: e
            }
        };
        a.uplodUserimg(n).then(function(e) {
            t.getUserinfo();
        });
    },
    getUserinfo: function() {
        var e = this;
        a.userIfo().then(function(a) {
            wx.setStorageSync("userinfo", JSON.stringify(a)), t.globalData.userinfo = JSON.parse(wx.getStorageSync("userinfo")), 
            e.setLanguage(), e.getUserCredit(), e.getmusername(), e.couponsallCount(), e.getUserAccountalr();
        });
    },
    getUserAccountalr: function() {
        var e = this;
        console.log(t.globalData.userinfo);
        var n = {
            id: t.globalData.userinfo.id
        };
        a.getUserAccountalr(n).then(function(a) {
            e.setData({
                money: a.money
            });
        });
    },
    getUserCredit: function() {
        var e = this;
        a.getUserCredit().then(function(a) {
            e.setData({
                credit: a.credit
            });
        });
    },
    couponsallCount: function() {
        var e = this;
        a.couponsallCount().then(function(a) {
            e.setData({
                yhq: a
            });
        });
    },
    gouyennr: function() {
        null != t.globalData.userinfo ? wx.navigateTo({
            url: "../userjifen/userjifen"
        }) : wx.showModal({
            title: wx.T.getLanguage().tips[0],
            content: wx.T.getLanguage().status[0],
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            success: function(e) {
                e.confirm ? wx.navigateTo({
                    url: "../login/login"
                }) : e.cancel && console.log("用户点击取消");
            }
        });
    },
    onReady: function() {},
    cop: function() {
        console.log(4321), wx.setClipboardData({
            data: this.data.userid,
            success: function(e) {}
        });
    },
    getmusername: function() {
        console.log("2222", t.globalData.userinfo), null != t.globalData.userinfo ? this.setData({
            islofin: !1,
            username: t.globalData.userinfo.nickName ? t.globalData.userinfo.nickName : "",
            userImg: t.globalData.userinfo.avatarUrl,
            userid: t.globalData.userinfo.accountCode
        }) : this.setData({
            islofin: !0,
            username: "去登陆",
            userImg: "/images/icon_not_login.png"
        });
    },
    onShow: function() {
        this.getmusername(), this.setData({
            my: wx.T.getLanguage().my
        }), e.default.on("languageChanged", this, this.setLanguage), null != t.globalData.userinfo && this.getUserinfo();
    },
    onHide: function() {},
    getusrr: function() {
        var e = this;
        wx.getUserProfile({
            desc: "用于完善会员资料",
            success: function(t) {
                console.log(t);
                var n = {
                    userName: t.userInfo.nickName,
                    userSex: t.userInfo.gender,
                    userUrl: t.userInfo.avatarUrl
                };
                a.updateWxInfo(n).then(function(a) {
                    e.getUserinfo();
                });
            }
        });
    },
    tologin: function() {
        wx.navigateTo({
            url: "../login/login"
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
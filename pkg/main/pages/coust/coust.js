require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var e = getApp(), o = require("../../utils/api.js");

Page({
    data: {
        ishowhe: !1
    },
    onLoad: function(o) {
        wx.setNavigationBarTitle({
            title: wx.T.getLanguage().homePage.coust
        }), this.setData({
            coustid: e.globalData.coustid,
            nickName: e.globalData.userinfo.accountName,
            avatarUrl: e.globalData.userinfo.avatarUrl,
            inviafriend: wx.T.getLanguage().inviafriend,
            tsbhhr: wx.T.getLanguage().homePage.tsbhhr,
            kewke: wx.T.getLanguage().homePage.kewke,
            hjdejh: wx.T.getLanguage().homePage.hjdejh,
            jewj: wx.T.getLanguage().homePage.jewj,
            customerQrcodeImg: e.globalData.customerQrcodeImg + "?numbpa=" + this.getRandom(3, "string")
        }), this.isShowCustomerService(), console.log(e.globalData);
    },
    isShowCustomerService: function() {
        var e = this;
        o.isShowCustomerService().then(function(o) {
            e.setData({
                ishowhe: o
            }), console.log(o);
        });
    },
    getRandom: function(e, o) {
        var t = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], a = "";
        if ("0" === o) for (var n = 0; n < e; n++) {
            a += t[parseInt(Math.floor(Math.random() * t.length + 0))];
        } else for (n = 0; n < e; n++) {
            a += t[parseInt(Math.floor(10 * Math.random() + 0))];
        }
        return a;
    },
    onReady: function() {},
    svaeimng: function() {
        wx.showLoading({
            title: "请稍等...",
            mask: !0
        }), wx.downloadFile({
            url: this.data.customerQrcodeImg,
            success: function(e) {
                wx.saveImageToPhotosAlbum({
                    filePath: e.tempFilePath,
                    success: function(e) {
                        wx.hideLoading(), wx.showToast({
                            title: "保存成功",
                            icon: "success",
                            duration: 2e3
                        });
                    },
                    fail: function(e) {
                        function o(o) {
                            return e.apply(this, arguments);
                        }
                        return o.toString = function() {
                            return e.toString();
                        }, o;
                    }(function(e) {
                        wx.hideLoading(), console.log(e), "saveImageToPhotosAlbum:fail auth deny" == fail.errMsg ? wx.showToast({
                            title: "用户取消授权，保存相册失败",
                            icon: "none",
                            duration: 2e3
                        }) : wx.showToast({
                            title: "保存失败",
                            icon: "none",
                            duration: 2e3
                        });
                    })
                });
            },
            fail: function(e) {
                wx.hideLoading(), wx.showToast({
                    title: "保存失败",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
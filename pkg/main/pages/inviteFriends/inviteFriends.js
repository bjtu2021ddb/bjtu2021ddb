require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var t = getApp(), o = require("../../utils/api.js");

Page({
    data: {
        show: !1,
        imgUrl: "https://app.huyuntong.com/app/static/images/mini/img.jpg",
        noshow: !1
    },
    onLoad: function(o) {
        console.log(t.globalData), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().my.userinfo.menu[3].name
        }), this.buildAppQR(), this.getsgar(), this.setData({
            inviafriend: wx.T.getLanguage().inviafriend
        });
    },
    getsgar: function() {
        var e = this, n = {
            countryId: t.globalData.userinfo.disVo.id
        };
        o.buildAppQR(n).then(function(t) {
            e.setData({
                des: t.des,
                img: t.img
            });
        });
    },
    buildAppQR: function() {
        var t = this;
        o.buildAppQR().then(function(o) {
            t.setData({
                imgurl: o.wxShareImage
            });
        });
    },
    onReady: function() {},
    recode: function() {
        wx.navigateTo({
            url: "../record/record"
        });
    },
    onClose: function() {
        this.setData({
            show: !1
        });
    },
    share: function() {
        this.setData({
            show: !0
        });
    },
    onShow: function() {},
    onHide: function() {},
    save: function() {
        var t = this;
        wx.showToast({
            icon: "loading",
            title: "正在保存图片",
            duration: 1e3
        }), wx.getSetting({
            success: function(o) {
                o.authSetting["scope.writePhotosAlbum"] ? t.savePhoto() : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function(o) {
                        t.savePhoto();
                    },
                    fail: function(o) {
                        wx.showToast({
                            title: "用户取消授权，保存相册失败",
                            icon: "none",
                            duration: 2e3
                        }), wx.openSetting({
                            success: function(o) {
                                wx.authorize({
                                    scope: "scope.writePhotosAlbum",
                                    success: function(o) {
                                        console.log(o), t.savePhoto();
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    savePhoto: function() {
        wx.downloadFile({
            url: this.data.imgurl,
            success: function(t) {
                200 === t.statusCode && wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        wx.showToast({
                            title: "保存图片成功！"
                        });
                    },
                    fail: function(t) {
                        wx.showToast({
                            title: "保存图片失败！",
                            icon: "none"
                        });
                    }
                });
            }
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(o) {
        if (console.log(o), this.onClose(), "button" === o.from) return {
            title: this.data.des,
            path: "/pages/homePage/homePage?jsonStr=" + t.globalData.userinfo.id,
            imgUrl: this.data.img,
            success: function(t) {}
        };
    }
});
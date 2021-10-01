var e = require("@babel/runtime/helpers/interopRequireDefault"), a = e(require("./utils/locales")), t = e(require("./utils/i18n")), n = e(require("umtrack-wx"));

t.default.registerLocale(a.default), App({
    onLaunch: function() {
        var e = this;
        if (wx.canIUse("getUpdateManager")) {
            var a = wx.getUpdateManager();
            a.onCheckForUpdate(function(e) {
                e.hasUpdate && (wx.clearStorage(), wx.clearStorageSync(), a.onUpdateReady(function() {
                    wx.showModal({
                        title: "更新提示",
                        showCancel: !1,
                        content: "新版本已经准备好，是否重启应用？",
                        success: function(e) {
                            e.confirm && (wx.clearStorage(), wx.clearStorageSync(), a.applyUpdate());
                        }
                    });
                }), a.onUpdateFailed(function() {
                    wx.clearStorage(), wx.clearStorageSync(), wx.showModal({
                        title: "已经有新版本了哟~",
                        content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                    });
                }));
            });
        }
        wx.removeStorageSync("showactive"), wx.getStorageSync("userinfo") && (this.globalData.userinfo = JSON.parse(wx.getStorageSync("userinfo"))), 
        this.globalData.envVersion = __wxConfig.envVersion, "release" == this.globalData.envVersion && (console.log = function() {
            return !1;
        }), wx.getSystemInfo({
            success: function(a) {
                if (console.log(a), console.log(-1 != a.system.indexOf("Android")), -1 != a.system.indexOf("Android") ? e.globalData.system = "android" : e.globalData.system = "ios", 
                e.globalData.windowHeight = a.windowHeight, wx.getStorageSync("langIndex")) t.default.setLocaleByIndex(wx.getStorageSync("langIndex") || 2), 
                wx.T = t.default; else switch (a.language) {
                  case "zh_TW":
                  case "zh_HK":
                    wx.setStorageSync("langIndex", 1), t.default.setLocaleByIndex(wx.getStorageSync("langIndex") || 1), 
                    wx.T = t.default;
                    break;

                  default:
                    wx.setStorageSync("langIndex", 0), t.default.setLocaleByIndex(wx.getStorageSync("langIndex") || 0), 
                    wx.T = t.default;
                }
            }
        });
    },
    globalData: {
        userinfo: null,
        parentId: "0",
        url: {},
        uma: n.default,
        fleshPackage: "0",
        fleshOrder: "0"
    }
});
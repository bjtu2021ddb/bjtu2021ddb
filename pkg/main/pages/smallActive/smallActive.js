require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var n = require("../../utils/api.js"), t = getApp();

Page({
    data: {},
    onLoad: function(n) {
        console.log(wx.getStorageSync("token")), this.miniContext(), null != n.codeurl ? (t.globalData.codeurl = n.codeurl, 
        this.promotion(t.globalData.codeurl)) : t.globalData.codeurl = "";
    },
    getRandom: function(n, t) {
        var o = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], e = "";
        if ("0" === t) for (var a = 0; a < n; a++) {
            e += o[parseInt(Math.floor(Math.random() * o.length + 0))];
        } else for (a = 0; a < n; a++) {
            e += o[parseInt(Math.floor(10 * Math.random() + 0))];
        }
        return e;
    },
    promotion: function(t) {
        var o = {
            promotionCode: t
        };
        n.promotion(o).then(function(n) {});
    },
    miniContext: function() {
        var t = this;
        n.miniContext().then(function(n) {
            console.log(n), wx.getStorageSync("token") ? t.setData({
                url: n.miniWebShareUrl + "&cnm=" + wx.getStorageSync("token") + "&numbpa=" + t.getRandom(3, "string")
            }) : t.setData({
                url: n.miniWebShareUrl + "&numbpa=" + t.getRandom(3, "string")
            });
        });
    },
    onReady: function() {},
    onShow: function() {
        null != this.data.url && wx.getStorageSync("token") && this.setData({
            url: this.data.url + "&cnm=" + wx.getStorageSync("token")
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
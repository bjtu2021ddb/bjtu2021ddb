require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var t = require("../../utils/api.js"), n = getApp();

Page({
    data: {},
    onLoad: function(t) {
        this.miniContext(), null != t.codeurl ? (this.setData({
            codeurl: t.codeurl
        }), n.globalData.codeurl = t.codeurl, this.promotion(n.globalData.codeurl)) : n.globalData.codeurl = "";
    },
    getRandom: function(t, n) {
        var o = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], e = "";
        if ("0" === n) for (var a = 0; a < t; a++) {
            e += o[parseInt(Math.floor(Math.random() * o.length + 0))];
        } else for (a = 0; a < t; a++) {
            e += o[parseInt(Math.floor(10 * Math.random() + 0))];
        }
        return e;
    },
    promotion: function(n) {
        var o = {
            promotionCode: n
        };
        t.promotion(o).then(function(t) {});
    },
    miniContext: function() {
        var n = this;
        t.miniContext().then(function(t) {
            console.log(t), wx.getStorageSync("token") ? n.setData({
                url: t.miniWebOldShareUrl + "&cnm=" + wx.getStorageSync("token") + "&numbpa=" + n.getRandom(3, "string")
            }) : n.setData({
                url: t.miniWebOldShareUrl + "&numbpa=" + n.getRandom(3, "string")
            });
        });
    },
    onReady: function() {},
    onShow: function() {
        null != this.data.url && -1 == this.data.url.indexOf("cnm") && wx.getStorageSync("token") && this.setData({
            url: this.data.url + "&cnm=" + wx.getStorageSync("token")
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "88折运费券来袭！",
            path: "/pages/oldActive/oldActive?codeurl=" + this.data.codeurl,
            imageUrl: "https://app.huyuntong.com/app/static/images/zhounian/share.jpg"
        };
    }
});
require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event")), 
require("../../utils/api.js");

var e = getApp();

Page({
    data: {},
    onLoad: function(t) {
        var n = "";
        switch (e.globalData.envVersion) {
          case "develop":
            n = "https://hyt.sjlexpress.com";
            break;

          case "trial":
          case "release":
            n = "https://huyuntong.com";
        }
        this.setData({
            appGuidebook: n + "/res/appservice/m/article/index.html?id=" + t.id + "&type=" + t.type + "&numbpa=" + this.getRandom(3, "string")
        });
    },
    getRandom: function(e, t) {
        var n = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], o = "";
        if ("0" === t) for (var a = 0; a < e; a++) {
            o += n[parseInt(Math.floor(Math.random() * n.length + 0))];
        } else for (a = 0; a < e; a++) {
            o += n[parseInt(Math.floor(10 * Math.random() + 0))];
        }
        return o;
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
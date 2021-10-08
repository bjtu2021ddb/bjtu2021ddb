var n = getApp();

Page({
    data: {},
    onLoad: function(t) {
        n.globalData.codeurl = "", null != t.codeurl && (n.globalData.codeurl = t.codeurl), 
        this.setData({
            url: t.url + "?id=" + t.id + "&numbpa=" + this.getRandom(3, "string")
        });
    },
    getRandom: function(n, t) {
        var o = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], a = "";
        if ("0" === t) for (var e = 0; e < n; e++) {
            a += o[parseInt(Math.floor(Math.random() * o.length + 0))];
        } else for (e = 0; e < n; e++) {
            a += o[parseInt(Math.floor(10 * Math.random() + 0))];
        }
        return a;
    },
    onReady: function() {},
    onShow: function(n) {
        wx.getStorageSync("token") && this.setData({
            url: this.data.url + "&cnm=" + wx.getStorageSync("token") + "&numbpa=" + this.getRandom(3, "string")
        }), console.log(this.data.url);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
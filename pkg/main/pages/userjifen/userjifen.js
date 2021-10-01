var t = getApp();

Page({
    data: {},
    onLoad: function() {
        console.log(123);
        var e = "";
        switch (t.globalData.envVersion) {
          case "develop":
          case "trial":
            e = "https://hyt.sjlexpress.com/res/m/#/Userjifen";
            break;

          case "release":
            e = "https://huyuntong.com/res/m/#/Userjifen";
        }
        this.setData({
            url: e + "?numbpa=" + this.getRandom(3, "string")
        });
    },
    getmessage: function(t) {
        console.log("参数"), console.log(t);
    },
    getRandom: function(t, e) {
        var n = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], o = "";
        if ("0" === e) for (var a = 0; a < t; a++) {
            o += n[parseInt(Math.floor(Math.random() * n.length + 0))];
        } else for (a = 0; a < t; a++) {
            o += n[parseInt(Math.floor(10 * Math.random() + 0))];
        }
        return o;
    },
    onReady: function() {},
    onShow: function(t) {
        wx.getStorageSync("token") && this.setData({
            url: this.data.url + "&cnm=" + wx.getStorageSync("token") + "&numbpa=" + this.getRandom(3, "string")
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "哈哈哈哈哈",
            path: "/pages/share/share?url=",
            imageUrl: this.data.imageUrl
        };
    }
});
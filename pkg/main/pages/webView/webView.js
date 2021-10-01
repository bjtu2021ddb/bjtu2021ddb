Page({
    data: {},
    onLoad: function(n) {
        console.log(n), this.setData({
            url: n.url + "?numbpa=" + this.getRandom(3, "string")
        });
    },
    getRandom: function(n, o) {
        var t = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], a = "";
        if ("0" === o) for (var e = 0; e < n; e++) {
            a += t[parseInt(Math.floor(Math.random() * t.length + 0))];
        } else for (e = 0; e < n; e++) {
            a += t[parseInt(Math.floor(10 * Math.random() + 0))];
        }
        return a;
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var e = require("../../utils/api.js");

getApp();

Page({
    data: {},
    onLoad: function(e) {
        console.log(e), this.setLanguage(e.id);
    },
    onReady: function() {},
    goNext: function(e) {
        wx.navigateTo({
            url: "../urlPage/urlPage?id=" + e.currentTarget.dataset.index + "&type=2"
        }), console.log(e);
    },
    onShow: function() {},
    setLanguage: function(n) {
        var t = this;
        wx.setNavigationBarTitle({
            title: wx.T.getLanguage().problem.title
        });
        var o = {
            countryId: n
        };
        e.config(o).then(function(e) {
            console.log(e), t.setData({
                problem: e
            });
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
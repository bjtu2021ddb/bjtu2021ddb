require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var e = require("../../utils/api.js");

Page({
    data: {},
    onLoad: function(e) {
        wx.setNavigationBarTitle({
            title: wx.T.getLanguage().homePage.menu.menuList[7].title
        }), console.log(e), console.log(e.id), this.listByCountry(e.id), this.setData({
            server: wx.T.getLanguage().server,
            serlist: wx.T.getLanguage().serlist
        });
    },
    listByCountry: function(t) {
        var n = this, i = {
            countryId: t
        };
        e.listByCountry(i).then(function(e) {
            n.setData({
                par: e
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
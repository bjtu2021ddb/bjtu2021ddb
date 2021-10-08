require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var e = getApp();

require("../../utils/api.js");

Page({
    data: {
        index: 0,
        swiperContainer: []
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: t.title
        }), this.setData({
            appGuidebook: e.globalData.url.appGuidebook
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
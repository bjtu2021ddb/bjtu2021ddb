require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var i = require("../../utils/api.js");

Page({
    data: {
        par: {
            num: 3,
            price: 20
        }
    },
    onLoad: function(i) {
        console.log(wx.T.getLanguage().record), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().record[0]
        }), this.setData({
            record: wx.T.getLanguage().record
        }), this.invitfriendList();
    },
    invitfriendList: function() {
        var e = this;
        i.invitfriendList().then(function(i) {
            e.setData({
                list: i.userList,
                invitePrice: i.invitePrice,
                inviteCount: i.inviteCount
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
require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var t = require("../../utils/api.js");

Page({
    data: {
        active: 0,
        inputvalue: "",
        couplist: []
    },
    onLoad: function(t) {
        console.log(wx.T.getLanguage().coupon), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().my.userinfo.menu[2].name
        }), this.setData({
            coupon: wx.T.getLanguage().coupon
        }), this.getcoup(1), this.getcouptwo(4);
    },
    getname: function(t) {
        this.setData({
            inputvalue: t.detail.value
        });
    },
    clear: function() {
        this.setData({
            inputvalue: ""
        });
    },
    getinputCoup: function() {
        var n = this;
        if (this.data.inputvalue) {
            var e = {
                code: this.data.inputvalue
            };
            t.coupExchange(e).then(function(t) {
                n.setData({
                    couplist: []
                }), n.getcoup(1), n.getcouptwo(2);
            });
        }
    },
    getcoup: function(n) {
        var e = this, o = {
            status: n
        };
        t.coupons(o).then(function(t) {
            e.setData({
                couplist: t
            });
        });
    },
    getcouptwo: function(n) {
        var e = this, o = {
            status: n
        };
        t.coupons(o).then(function(t) {
            e.setData({
                couplisttwo: t
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
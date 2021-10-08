var a = require("../../@babel/runtime/helpers/interopRequireDefault"), e = (a(require("../../utils/event")), 
a(require("../../dist/notify/notify")));

require("../../utils/api.js");

Page({
    data: {
        id: {},
        par: {
            address: "",
            mobile: "",
            name: "",
            postalCode: ""
        }
    },
    onLoad: function(a) {
        console.log(a), wx.setNavigationBarTitle({
            title: a.name + wx.T.getLanguage().address[31]
        }), this.setData({
            id: a.id,
            container: a.container,
            address: wx.T.getLanguage().address
        });
    },
    bindPickerChange: function(a) {
        var t = this.data.par;
        -1 != a.detail.value[0].indexOf("台湾") || -1 != a.detail.value[0].indexOf("香港") || -1 != a.detail.value[0].indexOf("澳门") ? (0, 
        e.default)({
            type: "danger",
            brateLong: !0,
            message: wx.T.getLanguage().tips[3]
        }) : (t.provinceName = a.detail.value[0], t.cityName = a.detail.value[1], t.areaName = a.detail.value[2], 
        t.allname = a.detail.value.toString(), this.setData({
            par: t
        }));
    },
    getaddress: function(a) {
        var e = this.data.par;
        e.address = a.detail.value, this.setData({
            par: e
        });
    },
    getname: function(a) {
        var e = this.data.par;
        e.name = a.detail.value, this.setData({
            par: e
        });
    },
    getmobile: function(a) {
        var e = this.data.par;
        e.mobile = a.detail.value, this.setData({
            par: e
        });
    },
    getpostalCode: function(a) {
        var e = this.data.par;
        e.postalCode = a.detail.value, this.setData({
            par: e
        });
    },
    onReady: function() {},
    submit: function() {
        console.log(this.data.par), this.data.par.name ? this.data.par.mobile ? this.data.par.allname ? this.data.par.address ? wx.navigateTo({
            url: "../order/return?id=" + this.data.id + "&address=" + JSON.stringify(this.data.par) + "&container=" + this.data.container
        }) : (0, e.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.address[26] + this.data.address[32]
        }) : (0, e.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.address[27] + this.data.address[31]
        }) : (0, e.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.address[26] + this.data.address[7]
        }) : (0, e.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.address[26] + this.data.address[5]
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
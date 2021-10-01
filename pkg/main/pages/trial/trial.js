var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = (t(require("../../utils/event")), 
t(require("../../dist/notify/notify"))), a = require("../../utils/api.js"), i = getApp();

Page({
    data: {
        name: "",
        inputVlaue: "",
        state: !1,
        showContainer: !1
    },
    onLoad: function(t) {
        console.log(wx.T.getLanguage().trial.opeartion), console.log(i.globalData.userinfo), 
        this.onPullDownRefresh(), wx.setNavigationBarTitle({
            title: t.title
        }), this.setData({
            createOrder: wx.T.getLanguage().createOrder,
            title: t.title,
            mudi: wx.T.getLanguage().order.listTitle[0],
            opeartion: wx.T.getLanguage().trial.opeartion
        });
    },
    gudio: function() {
        var t = this;
        a.districtList({
            parentId: 0
        }).then(function(e) {
            t.setData({
                countrylist: e,
                countryName: null != i.globalData.userinfo ? i.globalData.userinfo.disVo.name : e[0].name
            }), t.getlist(null != i.globalData.userinfo ? i.globalData.userinfo.disVo.id : e[0].id);
        });
    },
    getlist: function(t) {
        var e = this, i = {
            countryId: t
        };
        a.listByCountry(i).then(function(t) {
            console.log(t), wx.stopPullDownRefresh(), e.setData({
                linelist: t,
                linename: t[0].transCode,
                id: t[0].id,
                transportationType: t[0].transportationType > 1 ? "时效优先" : "经济优先"
            });
        });
    },
    bindPickerChangecountry: function(t) {
        this.setData({
            countryName: this.data.countrylist[t.detail.value].name
        }), this.getlist(this.data.countrylist[t.detail.value].id);
    },
    bindPickerChange: function(t) {
        this.setData({
            linename: this.data.linelist[t.detail.value].transCode,
            id: this.data.linelist[t.detail.value].id,
            transportationType: this.data.linelist[t.detail.value].transportationType > 1 ? "时效优先" : "经济优先"
        }), this.data.inputVlaue && this.countPrice();
    },
    getValue: function(t) {
        console.log(t.detail.value), this.setData({
            inputVlaue: t.detail.value
        });
    },
    trial: function() {
        this.data.country == this.data.opeartion[3] ? (0, e.default)({
            type: "danger",
            duration: 1e3,
            brateLong: !0,
            message: this.data.opeartion[3] + this.data.opeartion[0]
        }) : this.data.name == this.data.opeartion[3] ? (0, e.default)({
            type: "danger",
            duration: 1e3,
            brateLong: !0,
            message: this.data.opeartion[3] + this.data.opeartion[1]
        }) : this.data.inputVlaue ? this.countPrice() : (0, e.default)({
            type: "danger",
            duration: 1e3,
            brateLong: !0,
            message: this.data.opeartion[4] + this.data.opeartion[2]
        });
    },
    countPrice: function() {
        var t = this, e = {
            id: this.data.id,
            weight: this.data.inputVlaue
        };
        a.countPrice(e).then(function(e) {
            console.log(e), t.setData({
                tocountryName: e.toCountryName,
                billingRange: e.billingRange,
                firstPrice: e.firstPrice,
                additionalWeight: e.additionalWeight,
                price: e.price,
                memo: e.memo,
                weight: t.data.inputVlaue,
                showContainer: !0
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var t = this;
        wx.getNetworkType({
            success: function(e) {
                "none" != e.networkType ? (t.gudio(), t.setData({
                    none: !0
                })) : t.setData({
                    none: !1
                });
            }
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
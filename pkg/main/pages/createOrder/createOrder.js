var t = require("../../@babel/runtime/helpers/interopRequireDefault"), a = (t(require("../../utils/event")), 
t(require("../../dist/notify/notify"))), e = require("../../utils/api.js"), i = getApp();

Page({
    data: {
        allcoupons: [],
        checkedtwo: !1,
        counp: "",
        isRein: {},
        replace: !1,
        isProtection: 0,
        isReinforce: 0,
        counptryList: [],
        couponsid: "",
        isdare: null,
        show: !1,
        allprice: 0,
        devalue: 0,
        code: null,
        replacePrice: null
    },
    onLoad: function(t) {
        this.setData({
            alltip: wx.T.getLanguage().alltip,
            day: wx.T.getLanguage().package.menu[4],
            spacel: wx.T.getLanguage().package.status[9],
            prediction: wx.T.getLanguage().prediction,
            createOrder: wx.T.getLanguage().createOrder,
            coupononother: wx.T.getLanguage().coupon,
            package: wx.T.getLanguage().package,
            orderids: t.data
        }), console.log(this.data.createOrder), console.log(t.data), this.getpar(t.data);
    },
    gopackdetail: function(t) {
        wx.navigateTo({
            url: "../package/details?id=" + t.currentTarget.dataset.id
        });
    },
    onClose: function() {
        this.setData({
            show: !1
        });
    },
    shocup: function() {
        this.setData({
            show: this.data.allcoupons.length > 0
        });
    },
    getpar: function(t) {
        var a = this, i = "?ids=" + JSON.parse(t).join("&ids=");
        e.orderReady(i).then(function(t) {
            var e = t;
            console.log(e);
            var i = [], o = e.parcelList;
            o.some(function(t) {
                i.push(t.list);
            });
            var s = [];
            o.some(function(t) {
                s.push(t.id);
            }), e.address.id && a.isReinforce(e.address.countryId), a.setData({
                par: e,
                ids: s
            }), console.log(a.data.par), wx.setNavigationBarTitle({
                title: wx.T.getLanguage().createOrder.title
            }), a.data.par.servicePriceList.length > 0 && a.getlist(JSON.stringify(a.data.par.servicePriceList[0].list));
        });
    },
    isReinforce: function(t) {
        var a = this, i = {
            countryId: t
        };
        e.isReinforce(i).then(function(e) {
            a.setData({
                isRein: e
            }), a.hasMallInfo(t);
        });
    },
    hasMallInfo: function(t) {
        var a = this, i = {
            countryId: t
        };
        e.hasMallInfo(i).then(function(t) {
            a.setData({
                ispae: t
            });
        });
    },
    chagenpei: function() {
        this.data.ispae && wx.showActionSheet({
            itemList: [ "宅配", "超商配送" ],
            success: function(t) {
                t.tapIndex, (0, a.default)({
                    type: "danger",
                    brateLong: !0,
                    message: "超商配送请至biubiulinkApp下单",
                    duration: 5e3
                });
            },
            fail: function(t) {
                console.log(t.errMsg);
            }
        });
    },
    getcoupCountry: function(t, a) {
        var e = JSON.parse(t).filter(function(t) {
            return t.countryId == a || !t.countryId;
        });
        console.log(e), this.setData({
            allcoupons: e
        }), e.length > 0 ? this.coupone(e) : this.setData({
            counp: wx.T.getLanguage().createOrder.goods[19]
        });
    },
    coupone: function(t) {
        var a = this;
        console.log("res", t), console.log("price", this.data.pric);
        var e = t.filter(function(t) {
            return t.thresholdPrice <= a.data.pric;
        });
        if (console.log("findvalue", e), e.length > 0) {
            var i = t.findIndex(function(t, a, i) {
                return t.id == e[0].id;
            });
            console.log("index", i), this.setData({
                counp: wx.T.getLanguage().createOrder.goods[22],
                code: i >= 0 ? i : null
            }), this.getcoupprice();
        } else this.setData({
            code: null,
            counp: wx.T.getLanguage().createOrder.goods[19]
        }), this.getcoupprice();
        console.log("findvalue", e);
    },
    onChangetwo: function(t) {
        var a = t.detail;
        this.setData({
            checkedtwo: a,
            isReinforce: a ? 1 : 0
        }), this.price(this.data.pric);
    },
    onChangeone: function(t) {
        var a = t.detail;
        this.setData({
            checkedone: a,
            isProtection: a ? 1 : 0
        }), this.price(this.data.pric);
    },
    onChangethree: function(t) {
        var a = t.detail;
        console.log(a), this.setData({
            replace: 1 == this.data.par.address.isReplace && a
        });
    },
    onReady: function() {},
    getservevalue: function(t) {
        this.setData({
            replacePrice: parseFloat(t.detail.value)
        });
    },
    addAddress: function() {
        wx.navigateTo({
            url: "../address/address?num=" + (this.data.par.address.id ? this.data.par.address.id : 0)
        });
    },
    bindPickerChange: function(t) {
        this.data.countryid != this.data.countryList[t.detail.value].id && this.setData({
            code: null,
            couponsid: "",
            devalue: 0,
            counp: this.data.coupononother[9],
            country: this.data.countryList[t.detail.value].transCode,
            countryid: this.data.countryList[t.detail.value].id,
            elapsedTime: this.data.countryList[t.detail.value].elapsedTime
        }), this.countPrice(this.data.countryList[t.detail.value].id);
    },
    price: function(t) {
        var a = 0, e = 0;
        a = this.data.isReinforce > 0 ? this.data.par.reinforcePrice : 0, e = this.data.isProtection > 0 ? this.data.par.protectionPrice : 0, 
        t = t - this.data.devalue > 0 ? t + a + e - this.data.devalue : a + e, this.setData({
            allprice: (t + this.data.par.timeOutPrice + parseFloat(this.data.par.billing.rat) + .004).toFixed(2)
        }), this.onClose();
    },
    valueType: function(t, a, e) {
        console.log(a), console.log(t);
        var i = this.data.pric, o = 0;
        o = 2 == t ? i - i * a / 10 : a, console.log("allcoupons", this.data.allcoupons[this.data.code]), 
        this.setData({
            devalue: o,
            counp: this.data.allcoupons[this.data.code].name + "(" + o.toFixed(2) + "CNY)"
        }), this.price(i);
    },
    getcoup: function(t) {
        this.data.allcoupons[t.currentTarget.dataset.index].thresholdPrice > this.data.pric || 2 != this.data.allcoupons[t.currentTarget.dataset.index].type && (console.log(this.data.allcoupons[t.currentTarget.dataset.index].price), 
        console.log(this.data.pric), this.data.allcoupons[t.currentTarget.dataset.index].price >= this.data.pric) || this.setData({
            code: null != this.data.code ? null : t.currentTarget.dataset.index
        });
    },
    getcoupprice: function() {
        this.data.counp;
        null != this.data.code ? (console.log(this.data.allcoupons[this.data.code].price), 
        this.valueType(this.data.allcoupons[this.data.code].type, this.data.allcoupons[this.data.code].price, this.data.allcoupons[this.data.code].thresholdPrice), 
        this.setData({
            couponsid: this.data.allcoupons[this.data.code].id
        })) : (this.setData({
            couponsid: "",
            devalue: 0,
            counp: this.data.coupononother[9]
        }), this.price(this.data.pric));
    },
    onShow: function() {
        this.data.isdare && this.getoncegan();
    },
    getoncegan: function() {
        console.log(this.data.par.coupons), this.data.par.address.id && this.isReinforce(this.data.par.address.countryId), 
        this.getlist(JSON.stringify(this.data.par.servicePriceList[0].list));
    },
    getlist: function(t) {
        var e = JSON.parse(t);
        console.log(e);
        var i;
        i = this.data.par.parcelList.filter(function(t) {
            return 1 === t.type;
        });
        var o = e.filter(function(t) {
            return 1 === t.type;
        });
        console.log(o), console.log("log", i);
        var s = [];
        (s = i.length > 0 ? o : e).length > 0 ? this.countPrice(s[0].id) : (0, a.default)({
            type: "danger",
            brateLong: !0,
            duration: 5e3,
            message: this.data.createOrder.goods[18]
        }), this.setData({
            elapsedTime: s.length > 0 ? s[0].elapsedTime : null,
            countryList: s.length > 0 ? s : [],
            country: s.length > 0 ? s[0].transCode : null,
            countryid: s.length > 0 ? s[0].id : null
        });
    },
    countPrice: function(t) {
        var a = this, i = {
            id: t,
            weight: this.data.par.weight
        }, o = this.data.par;
        e.realPrice(i).then(function(t) {
            console.log(t), 1 == t.isGoodsTax ? t.rat = (t.taxRate / 100 * o.totalPrice).toFixed(2) : t.rat = 0, 
            o.billing = t, a.setData({
                par: o,
                pric: o.billing.price
            }), a.data.par.address.id && a.getcoupCountry(JSON.stringify(a.data.par.coupons), a.data.par.address.countryId), 
            null != a.data.code ? (console.log(444), a.valueType(a.data.allcoupons[a.data.code].type, a.data.allcoupons[a.data.code].price)) : (console.log(555), 
            a.price(o.billing.price));
        });
    },
    getjej: function(t) {
        var a = this.data.par;
        t.detail.value ? a.totalPrice = t.detail.value : a.totalPrice = 0, a.declaredPrice = t.detail.value, 
        this.setData({
            par: a
        });
    },
    submitOrder: function() {
        1 == this.data.par.address.isReplace && this.data.replace ? this.data.replacePrice >= this.data.par.address.minPayment ? this.summit() : (0, 
        a.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.createOrder.server[3] + this.data.par.address.minPayment
        }) : (i.globalData.userinfo.email ? this.checkSubmit() : this.getUserinfo(), console.log(i.globalData.userinfo));
    },
    getUserinfo: function() {
        var t = this;
        e.userIfo().then(function(a) {
            wx.setStorageSync("userinfo", JSON.stringify(a)), i.globalData.userinfo = JSON.parse(wx.getStorageSync("userinfo")), 
            a.email ? t.checkSubmit() : wx.navigateTo({
                url: "../login/login?show=1"
            });
        });
    },
    checkSubmit: function() {
        var t = this, a = {
            price: this.data.par.totalPrice,
            serviceId: this.data.countryid
        };
        e.checkSubmit(a).then(function(a) {
            console.log(a), a.status ? t.summit() : t.othner(a.code, a.text);
        });
    },
    othner: function(t, e) {
        var i = this;
        "1001" == t ? (0, a.default)({
            type: "danger",
            brateLong: !0,
            message: e,
            duration: 5e3
        }) : wx.showModal({
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: e,
            success: function(t) {
                t.confirm && i.summit();
            }
        });
    },
    summit: function() {
        var t = this, a = {
            address: this.data.par.address.id,
            couponsId: this.data.couponsid,
            ids: this.data.ids,
            isProtection: this.data.isRein.isProtection ? this.data.isProtection : 0,
            isReinforce: this.data.isRein.isProtection ? this.data.isReinforce : 0,
            serviceId: this.data.countryid,
            isReplace: this.data.replace,
            declaredPrice: 0 == this.data.par.billing.goodsValueRequired ? this.data.par.totalPrice : "",
            replacePrice: this.data.replace ? this.data.replacePrice : null
        };
        e.submitOrder(a).then(function(a) {
            i.globalData.fleshPackage = "0", i.globalData.fleshOrder = "0", wx.showModal({
                cancelText: wx.T.getLanguage().opeartion[0],
                confirmText: wx.T.getLanguage().opeartion[1],
                content: wx.T.getLanguage().opeartion[6],
                success: function(e) {
                    e.confirm ? t.pay(a.id) : e.cancel && wx.switchTab({
                        url: "../order/order"
                    });
                }
            });
        });
    },
    pay: function(t) {
        wx.navigateTo({
            url: "../paylist/paylist?id=" + t + "&allprice=" + this.data.allprice
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
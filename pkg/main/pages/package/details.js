var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = (t(require("../../utils/event")), 
t(require("../../dist/notify/notify")), require("../../utils/api.js")), a = getApp();

Page({
    data: {
        totalPrice: 0,
        list: [ {
            id: "",
            name: "",
            num: 1,
            price: null,
            url: ""
        } ]
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: wx.T.getLanguage().package.details[0]
        }), this.getMinParcelGoodsPrice(), this.setData({
            tieoppor: wx.T.getLanguage().tieoppor,
            status: t.status,
            kkekr: wx.T.getLanguage().kkekr,
            prediction: wx.T.getLanguage().prediction,
            package: wx.T.getLanguage().package,
            mes: wx.T.getLanguage().trial.opeartion[3]
        }), this.parcelDetail(t.id), this.changepahcer(t.index);
    },
    changepahcer: function(t) {
        setTimeout(function() {
            var e = getCurrentPages(), a = e[e.length - 2], i = a.data.packageList;
            console.log("packageList", i), console.log("packageList", i[t]), 0 == i[t].isRead && (i[t].isRead = 1, 
            a.setData({
                packageList: i
            }));
        }, 500);
    },
    previewImg: function(t) {
        var e = [];
        e[0] = this.data.par.image, console.log(e), wx.previewImage({
            current: e[0],
            urls: e
        });
    },
    parcelDetail: function(t) {
        var i = this, n = {
            id: t
        };
        e.parcelDetail(n).then(function(t) {
            console.log(t), console.log(a.globalData.countryList);
            !t.image && (t.image = "https://app.huyuntong.com/app/static/images/mini/empty.png"), 
            11 == t.status && i.getAllvalue(t.list), (14 == t.status || 0 == t.isCheck) && i.getalllist(t.list);
            var e = a.globalData.countryList.find(function(e) {
                return e.id == t.countryId;
            }), n = t.list.filter(function(t) {
                return !t.price || 0 == t.price;
            });
            console.log(n), i.setData({
                counCode: null != e ? e : "",
                par: t,
                orderlist: t.list,
                idjjr: n.length > 0
            });
        });
    },
    getalllist: function(t) {
        t.length > 0 && (this.getAllvalue(t), this.setData({
            list: t
        }));
    },
    onChange: function(t) {
        console.log(t);
        var e = this.data.list;
        e[t.currentTarget.dataset.inde].num = t.detail, this.setData({
            list: e
        }), this.getAllvalue(e);
    },
    getMinParcelGoodsPrice: function() {
        var t = this;
        e.getMinParcelGoodsPrice().then(function(e) {
            t.setData({
                coutpriuce: e
            }), console.log(e);
        });
    },
    getvaluePrice: function(t) {
        var e = this, a = this.data.list, i = this.data.coutpriuce.filter(function(t) {
            return t.countryId == e.data.counCode.id;
        });
        parseFloat(t.detail.value) < parseFloat(i[0].value) ? (a[t.currentTarget.dataset.index].price = "", 
        this.setData({
            list: a
        }), wx.showToast({
            title: this.data.tieoppor + i[0].value + "元," + this.data.kkekr,
            icon: "none"
        })) : (a[t.currentTarget.dataset.index].price = this.money(t.detail.value), this.setData({
            list: a
        }), this.getAllvalue(a));
    },
    addshop: function() {
        var t = this.data.list;
        t.push({
            id: "",
            name: "",
            num: 1,
            price: "",
            url: ""
        }), this.setData({
            list: t
        });
    },
    delet: function(t) {
        var e = this.data.list;
        e[t.currentTarget.dataset.index].id && this.parcel(e[t.currentTarget.dataset.index].id), 
        e.splice(t.currentTarget.dataset.index, 1), this.setData({
            list: e
        }), this.getAllvalue(e);
    },
    getAllvalue: function(t) {
        var e = this.sum(t);
        console.log(), this.setData({
            totalPrice: e.toFixed(2)
        });
    },
    godetalie: function(t) {
        console.log(t);
        var e = "";
        e = null != e ? t.currentTarget.dataset.goodname : "", wx.navigateTo({
            url: "../prediction/goodsName?title=" + this.data.prediction[10] + "&place=" + t.currentTarget.dataset.place + "&index=" + t.currentTarget.dataset.index + "&name=" + t.currentTarget.dataset.name + "&shur=" + this.data.prediction[6] + "&history=" + wx.T.getLanguage().trial.opeartion[16] + "&common=" + wx.T.getLanguage().trial.opeartion[17] + "&goodname=" + e + "&code=" + this.data.counCode.id
        });
    },
    godeurl: function(t) {
        wx.navigateTo({
            url: "../prediction/goodsUrl?title=" + this.data.prediction[26] + "&place=" + this.data.prediction[28] + "&index=" + t.currentTarget.dataset.index + "&name=" + t.currentTarget.dataset.name
        });
    },
    godeurlto: function(t) {
        wx.navigateTo({
            url: "../prediction/goodsUrl?title=" + this.data.prediction[26] + "&place=" + this.data.prediction[28] + "&index=" + t.currentTarget.dataset.index + "&name=" + t.currentTarget.dataset.name + "&par=" + t.currentTarget.dataset.par
        });
    },
    lookurl: function(t) {
        console.log(t.currentTarget.dataset.url), wx.showModal({
            content: t.currentTarget.dataset.url,
            showCancel: !1
        });
    },
    getvaluej: function(t) {
        var e = this.data.orderlist;
        e[t.currentTarget.dataset.index].price = t.detail.value, this.setData({
            orderlist: e
        }), this.getAllvalue(this.data.orderlist);
    },
    sum: function(t) {
        console.log(t);
        var e = 0;
        return t.forEach(function(t, a, i) {
            e += t.price * t.num;
        }, 0), e;
    },
    onReady: function() {},
    onShow: function() {},
    getvalue: function(t) {
        console.log(t.detail.value);
        var e = this.data.par;
        e.list[t.currentTarget.dataset.index].price = this.money(t.detail.value), this.setData({
            par: e
        }), this.getAllvalue(e.list);
    },
    money: function(t) {
        var e = t.toString();
        return 0 == e.indexOf(".") && (e = "0" + e), (e = (e = (e = (e = e.replace(/[^\d.]/g, "")).replace(/\.{2,}/g, ".")).replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")).replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3")).indexOf(".") < 0 && "" != e && (e = parseFloat(e)), 
        e;
    },
    onHide: function() {},
    allsave: function() {
        var t = {
            id: this.data.par.id,
            products: 11 == this.data.par.status ? this.data.par.list : this.data.list
        }, i = t.products, n = i.find(function(t) {
            return !t.price;
        }), o = i.find(function(t) {
            return !t.name;
        });
        console.log(o), console.log(n);
        var r = i.find(function(t) {
            return !t.num;
        }), s = i.find(function(t) {
            return !t.url;
        });
        null != n ? (console.log(123), wx.showToast({
            title: this.data.prediction[1] + this.data.prediction[12],
            icon: "none"
        })) : (s = 1 == this.data.counCode.goodsLinkRequired) && "JP" == this.data.counCode.code ? (console.log(3422), 
        wx.showToast({
            title: this.data.prediction[1] + this.data.prediction[26],
            icon: "none"
        })) : null != o ? (console.log(3333), wx.showToast({
            title: this.data.prediction[1] + this.data.prediction[10],
            icon: "none"
        })) : null != r ? (console.log(333), wx.showToast({
            title: this.data.prediction[1] + this.data.prediction[11],
            icon: "none"
        })) : 11 == this.data.par.status ? null != n ? wx.showToast({
            title: this.data.prediction[1] + this.data.prediction[12],
            icon: "none"
        }) : null != s && 1 == this.data.counCode.goodsLinkRequired && "JP" == this.data.counCode.code ? wx.showToast({
            title: this.data.prediction[1] + this.data.prediction[26],
            icon: "none"
        }) : e.complete(t).then(function(t) {
            a.globalData.fleshPackage = "0", wx.navigateBack({
                data: 1
            });
        }) : e.complete(t).then(function(t) {
            a.globalData.fleshPackage = "0", wx.navigateBack({
                data: 1
            });
        });
    },
    save: function() {
        12 == this.data.par.status && 1 == this.data.par.isCheck ? this.othenbvrj() : this.allsave();
    },
    othenbvrj: function() {
        e.updateProductPrices(this.data.orderlist).then(function(t) {
            wx.navigateBack({
                data: 1
            });
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
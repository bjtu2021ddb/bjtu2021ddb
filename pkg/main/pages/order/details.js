var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/defineProperty"), a = (e(require("../../utils/event")), 
require("../../utils/api.js"));

getApp();

Page({
    data: {
        show: !1
    },
    onLoad: function(e) {
        wx.setNavigationBarTitle({
            title: wx.T.getLanguage().orderDetails[0]
        }), console.log(wx.T.getLanguage().createOrder), console.log(wx.T.getLanguage().orderDetails), 
        console.log(wx.T.getLanguage().order), console.log(wx.T.getLanguage().prediction), 
        this.setData(t({
            spacel: wx.T.getLanguage().package.status[9],
            createOrder: wx.T.getLanguage().createOrder,
            prediction: wx.T.getLanguage().prediction,
            order: wx.T.getLanguage().order,
            orderDetails: wx.T.getLanguage().orderDetails,
            package: wx.T.getLanguage().package,
            status: wx.T.getLanguage().status
        }, "createOrder", wx.T.getLanguage().createOrder)), this.orderDetail(e.id);
    },
    gopackdetail: function(e) {
        wx.navigateTo({
            url: "../package/details?id=" + e.currentTarget.dataset.id
        });
    },
    actvieshow: function() {
        this.setData({
            show: !this.data.show
        });
    },
    onReady: function() {},
    orderDetail: function(e) {
        var t = this, o = {
            id: e
        };
        a.orderDetail(o).then(function(e) {
            console.log(e);
            var a = [], o = e.parcelList;
            o.some(function(e) {
                a.push(e.list);
            });
            var n = 0, r = 0;
            function i(e) {
                for (;e.some(function(e) {
                    return Array.isArray(e);
                }); ) e = [].concat.apply([], e);
                return e;
            }
            o.some(function(e) {
                n += e.weight, r += e.totalPrice;
            }), 1 == e.isGoodsTax ? e.rat = (e.taxRate / 100 * r).toFixed(2) : e.rat = 0, console.log(i(a)), 
            console.log(e), t.setData({
                par: e,
                goods: i(a),
                weig: n,
                allprice: r
            });
        });
    },
    copy: function(e) {
        console.log(e.currentTarget.dataset.name), wx.setClipboardData({
            data: e.currentTarget.dataset.name,
            success: function(e) {}
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    pay: function() {
        var e = this;
        wx.showModal({
            cancelText: wx.T.getLanguage().opeartion[0],
            confirmText: wx.T.getLanguage().opeartion[1],
            content: wx.T.getLanguage().opeartion[6],
            success: function(t) {
                t.confirm && e.topay();
            }
        });
    },
    topay: function() {
        wx.navigateTo({
            url: "../paylist/paylist?id=" + this.data.par.id + "&allprice=" + this.data.par.totalprice
        });
    },
    onReachBottom: function() {}
});
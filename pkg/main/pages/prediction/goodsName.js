require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

var t = require("../../utils/api.js");

getApp();

Page({
    data: {
        value: "",
        showbanner: !1,
        shopList: [ "书", "内衣", "收纳盒", "毛巾", "袜子", "镜子", "花瓶", "购置物" ]
    },
    onChange: function(t) {
        console.log(t), this.setData({
            value: t.detail.value
        });
    },
    onSearch: function() {},
    onChangenfirm: function(t) {
        this.setData({
            value: t.detail.value
        }), this.onClick();
    },
    closebanner: function() {
        this.setData({
            showbanner: !1
        });
    },
    onClick: function() {
        var t = JSON.parse(wx.getStorageSync("goodList"));
        this.data.value && t.push(this.data.value), wx.setStorageSync("goodList", JSON.stringify(t)), 
        this.getback(null);
    },
    getback: function(t) {
        var e = this, n = getCurrentPages(), a = n[n.length - 2], o = a.data.list;
        o[this.data.index].name = t || this.data.value;
        var i = JSON.parse(wx.getStorageSync("goodList")), s = i.find(function(t) {
            return t == o[e.data.index].name;
        });
        console.log(s), null == s && i.push(o[this.data.index].name), wx.setStorageSync("goodList", JSON.stringify(i)), 
        a.setData({
            list: o
        }), wx.navigateBack({
            delta: 1
        });
    },
    getvalue: function(t) {
        this.getback(t.currentTarget.dataset.name);
    },
    onLoad: function(t) {
        console.log(t);
        !wx.getStorageSync("goodList") && wx.setStorageSync("goodList", JSON.stringify([])), 
        console.log(wx.getStorageSync("goodList")), wx.setNavigationBarTitle({
            title: t.name
        }), this.getContrabandTextInfoByCountry(t.code);
        var e = JSON.parse(wx.getStorageSync("goodList")).filter(function(t) {
            return "" != t;
        });
        this.setData({
            place: t.place,
            shur: t.shur,
            name: t.name,
            value: t.goodname,
            gootips: wx.T.getLanguage().gootips,
            rjjt: wx.T.getLanguage().rjjt,
            history: t.history,
            common: t.common,
            index: t.index,
            goodList: e
        });
    },
    getContrabandTextInfoByCountry: function(e) {
        var n = this, a = {
            id: e
        };
        t.getContrabandTextInfoByCountry(a).then(function(t) {
            n.setData({
                baneinfof: t,
                showbanner: !!t.context
            }), console.log("res", t);
        }).catch(function(t) {
            n.setData({
                showbanner: !1
            });
        });
    },
    geiomrn: function() {
        var t = this.data.baneinfof.url.substring(this.data.baneinfof.url.indexOf("id") + 3, this.data.baneinfof.url.indexOf("&"));
        wx.navigateTo({
            url: "../urlPage/urlPage?id=" + t + "&type=2"
        });
    },
    delet: function() {
        wx.removeStorageSync("goodList");
        wx.setStorageSync("goodList", JSON.stringify([])), this.setData({
            goodList: JSON.parse(wx.getStorageSync("goodList"))
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
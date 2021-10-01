var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = (t(require("../../utils/event")), 
t(require("../../dist/notify/notify"))), a = require("../../utils/api.js"), i = require("../../utils/util"), n = getApp();

Page({
    data: {
        number: "",
        price: "",
        tips: "",
        show: !1,
        isSpecialGoods: [],
        showbanner: !1,
        allprice: 0,
        expressCompany: "",
        switch1Checked: !1,
        counCode: "",
        country: {},
        checked: !1,
        list: [ {
            id: "",
            name: "",
            num: 1,
            price: null,
            url: ""
        } ]
    },
    onLoad: function(t) {
        this.getMinParcelGoodsPrice(), wx.setNavigationBarTitle({
            title: wx.T.getLanguage().homePage.menu.menuList[1].title
        }), null != t.id ? this.getdetail(t.id) : (console.log(n.globalData.userinfo.disVo), 
        this.setData({
            counCode: n.globalData.userinfo.disVo,
            countryname: n.globalData.userinfo.disVo.name,
            showbanner: "NZ" == n.globalData.userinfo.disVo.code
        }), this.getCountry(t.cid)), this.setData({
            goonamtips: wx.T.getLanguage().goonamtips,
            title: wx.T.getLanguage().package.expre,
            cid: null != t.cid ? t.cid : null,
            id: null != t.id ? t.id : "",
            prediction: wx.T.getLanguage().prediction,
            tieoppor: wx.T.getLanguage().tieoppor,
            kkekr: wx.T.getLanguage().kkekr,
            mes: wx.T.getLanguage().trial.opeartion[3],
            address: wx.T.getLanguage().package.details[3],
            tips: wx.T.getLanguage().prediction[3],
            ishow: !0
        });
    },
    getMinParcelGoodsPrice: function() {
        var t = this;
        a.getMinParcelGoodsPrice().then(function(e) {
            t.setData({
                coutpriuce: e
            }), console.log(e);
        });
    },
    closebanner: function() {
        this.setData({
            showbanner: !1
        });
    },
    bindPickerChange: function(t) {
        this.setData({
            country: this.data.countryList[t.detail.value]
        });
    },
    getCountry: function(t) {
        var e = this;
        a.whouse().then(function(t) {
            console.log(t), e.setData({
                countryList: t,
                country: t[0]
            });
        }).catch(function(t) {
            console.log(t);
        });
    },
    onClickShow: function() {
        this.setData({
            show: !0
        });
    },
    queryLogisticsNameInfo: function() {
        var t = this, e = {
            num: this.data.number
        };
        a.queryLogisticsNameInfo(e).then(function(e) {
            console.log(e), t.setData({
                tips: e ? e.shipperName : wx.T.getLanguage().prediction[3],
                expressCompany: e ? e.shipperName : ""
            });
        }).catch(function(e) {
            t.setData({
                tips: wx.T.getLanguage().prediction[3],
                expressCompany: ""
            });
        });
    },
    onClickHide: function() {
        this.setData({
            show: !1
        });
    },
    getdetail: function(t) {
        var e = this, i = {
            id: t
        };
        a.parcelDetail(i).then(function(t) {
            console.log(t), console.log(n.globalData.countryList);
            var a = n.globalData.countryList.find(function(e) {
                return e.id == t.countryId;
            });
            console.log(a);
            var i = {
                name: t.warehouseName,
                id: t.warehouseId,
                parcelFlag: a.parcelFlag
            };
            console.log(i), e.setData({
                country: i,
                countryname: a.name,
                counCode: a,
                showbanner: "NZ" == a.code,
                number: t.expressNumber,
                isSpecialGoods: t.isSpecialGoods > 0 ? [ "1" ] : [],
                checked: t.isSpecialGoods > 0,
                expressCompany: t.expressCompany,
                list: t.list,
                allprice: t.totalPrice.toFixed(2)
            });
        });
    },
    onReady: function() {},
    godetalie: function(t) {
        console.log(t);
        var e = "";
        e = null != e ? t.currentTarget.dataset.goodname : "", wx.navigateTo({
            url: "./goodsName?title=" + this.data.prediction[10] + "&place=" + t.currentTarget.dataset.place + "&index=" + t.currentTarget.dataset.index + "&name=" + t.currentTarget.dataset.name + "&shur=" + this.data.prediction[6] + "&history=" + wx.T.getLanguage().trial.opeartion[16] + "&common=" + wx.T.getLanguage().trial.opeartion[17] + "&goodname=" + e + "&code=" + this.data.counCode.id
        });
    },
    godeurl: function(t) {
        wx.navigateTo({
            url: "./goodsUrl?title=" + this.data.prediction[26] + "&place=" + this.data.prediction[28] + "&index=" + t.currentTarget.dataset.index + "&name=" + t.currentTarget.dataset.name
        });
    },
    onShow: function() {
        !wx.getStorageSync("exnumlist") && wx.setStorageSync("exnumlist", JSON.stringify([]));
        var t = this;
        wx.getClipboardData({
            success: function(e) {
                if (wx.hideToast(), /.*[\u4e00-\u9fa5]+.*$/.test(e.data) && e.data) return !1;
                t.getnumberjrj(e.data);
            }
        });
    },
    getnumberjrj: function(t) {
        console.log(i);
        var e = i.exnumberregList.filter(function(e) {
            var a = e.reg;
            return new RegExp(a).test(t);
        });
        if (e.length > 0) {
            var a = JSON.parse(wx.getStorageSync("exnumlist")).filter(function(e) {
                return e == t;
            });
            console.log(a), a.length < 1 && this.isgehjrhj(t);
        }
        console.log(e);
    },
    isgehjrhj: function(t) {
        var e = this;
        wx.showToast({
            title: wx.T.getLanguage().status[6],
            icon: "none"
        });
        var a = JSON.parse(wx.getStorageSync("exnumlist"));
        t && a.push(t), wx.setStorageSync("exnumlist", JSON.stringify(a)), this.setData({
            number: t
        }), setTimeout(function() {
            e.queryLogisticsNameInfo();
        }, 100);
    },
    onHide: function() {},
    switch1Change: function(t) {
        this.setData({
            switch1Checked: t.detail.value
        });
    },
    onUnload: function() {},
    checknumber: function(t) {
        return !!new RegExp("[\\u4E00-\\u9FFF]+", "g").test(t);
    },
    getnumber: function(t) {
        console.log(this.checknumber(t.detail.value)), !this.checknumber(t.detail.value) && t.detail.value ? (this.setData({
            number: t.detail.value.replace(/\s+/g, "")
        }), this.queryLogisticsNameInfo()) : this.setData({
            tips: wx.T.getLanguage().prediction[3],
            expressCompany: "",
            number: ""
        });
    },
    getprice: function(t) {
        this.setData({
            price: t.detail.value
        });
    },
    brateLong: function() {
        wx.vibrateLong({
            success: function(t) {},
            fail: function(t) {}
        });
    },
    delet: function(t) {
        var e = this.data.list;
        e[t.currentTarget.dataset.index].id && this.parcel(e[t.currentTarget.dataset.index].id), 
        e.splice(t.currentTarget.dataset.index, 1), this.setData({
            list: e
        }), this.getAllvalue();
    },
    parcel: function(t) {
        a.deletParcel(t).then(function(t) {
            console.log(t);
        });
    },
    onChange: function(t) {
        console.log(t);
        var e = this.data.list;
        e[t.currentTarget.dataset.inde].num = t.detail, this.setData({
            list: e
        }), this.getAllvalue();
    },
    getvalue: function(t) {
        var e = this, a = this.data.coutpriuce.filter(function(t) {
            return t.countryId == e.data.counCode.id;
        });
        console.log(a);
        var i = this.data.list;
        parseFloat(t.detail.value) < parseFloat(a[0].value) ? (i[t.currentTarget.dataset.index].price = "", 
        this.setData({
            list: i
        }), wx.showToast({
            title: this.data.tieoppor + a[0].value + "元," + this.data.kkekr,
            icon: "none"
        })) : (i[t.currentTarget.dataset.index].price = this.money(t.detail.value), this.setData({
            list: i
        }), this.getAllvalue());
    },
    money: function(t) {
        var e = t.toString();
        return 0 == e.indexOf(".") && (e = "0" + e), (e = (e = (e = (e = e.replace(/[^\d.]/g, "")).replace(/\.{2,}/g, ".")).replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")).replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3")).indexOf(".") < 0 && "" != e && (e = parseFloat(e)), 
        e;
    },
    getAllvalue: function() {
        var t = this.sum(this.data.list);
        console.log(), this.setData({
            allprice: t.toFixed(2)
        });
    },
    sum: function(t) {
        var e = 0;
        return t.forEach(function(t, a, i) {
            e += t.price * t.num;
        }, 0), e;
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
    bindchange: function(t) {
        console.log(t), this.setData({
            isSpecialGoods: t.detail.value.length
        });
    },
    shure: function() {
        console.log(this.data.isSpecialGoods), this.data.number ? this.data.country.name ? this.next() : (this.brateLong(), 
        (0, e.default)({
            type: "danger",
            duration: 1e3,
            message: this.data.prediction[17]
        })) : (this.brateLong(), (0, e.default)({
            type: "danger",
            duration: 1e3,
            message: this.data.prediction[1] + this.data.prediction[0]
        }));
    },
    next: function() {
        this.data.country.parcelFlag > 0 ? this.lastone() : this.packageValue();
    },
    lastone: function() {
        var t = this.data.list, a = t.find(function(t) {
            return !t.name;
        }), i = t.find(function(t) {
            return !t.num;
        }), n = t.find(function(t) {
            return !t.price;
        }), o = t.find(function(t) {
            return !t.url;
        });
        console.log(a), null != a ? (this.brateLong(), (0, e.default)({
            type: "danger",
            duration: 1e3,
            message: this.data.prediction[1] + this.data.prediction[10]
        })) : null != i ? (this.brateLong(), (0, e.default)({
            type: "danger",
            duration: 1e3,
            message: this.data.prediction[1] + this.data.prediction[11]
        })) : null != n ? (this.brateLong(), (0, e.default)({
            type: "danger",
            duration: 1e3,
            message: this.data.prediction[1] + this.data.prediction[12]
        })) : null == o && 1 == this.data.counCode.goodsLinkRequired && "JP" == this.data.counCode.code ? (this.brateLong(), 
        (0, e.default)({
            type: "danger",
            duration: 1e3,
            message: this.data.prediction[1] + this.data.prediction[26]
        })) : this.packageValue();
    },
    packageValue: function() {
        var t = {
            expressCompany: this.data.expressCompany,
            expressNumber: this.data.number,
            id: this.data.id,
            isSpecialGoods: this.data.isSpecialGoods.length,
            products: this.data.list,
            wareHouseId: this.data.country.id
        };
        a.addParcel(t).then(function(t) {
            wx.requestSubscribeMessage({
                tmplIds: [ "uSS2s4w9ce7vyMfDkM84w0OzEhdK5cRRiOdACllfYjg", "KROj5s7Sk7Zev8p5ZOdbhUJTL4cXTQSCxuqYo68ML_k" ],
                success: function(t) {},
                complete: function(e) {
                    n.globalData.fleshPackage = "0", t ? wx.switchTab({
                        url: "../package/package"
                    }) : wx.showToast({
                        title: t,
                        icon: "none"
                    });
                }
            });
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
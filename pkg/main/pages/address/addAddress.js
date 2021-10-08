var t = require("../../@babel/runtime/helpers/interopRequireDefault"), a = (t(require("../../utils/event")), 
t(require("../../dist/notify/notify"))), e = require("../../utils/api.js"), i = getApp();

Page({
    data: {
        value1: 1,
        showjp: !1,
        showijuwoi: !1,
        adakdkename: "",
        show: !1,
        option1: [],
        oneid: "",
        twoid: "",
        disbale: !1,
        serchvalue: "",
        cheone: "",
        checktwo: "",
        checkthree: "",
        actived: 0,
        par: {
            address: "",
            allname: "",
            addressStandby: "",
            isDefault: 0,
            mobile: "",
            name: "",
            countryId: 0,
            countryName: "",
            identity: "",
            idType: 0,
            provinceId: "",
            areaId: ""
        }
    },
    onLoad: function(t) {
        null == t.id ? (this.getuserid(), this.setData({
            cheone: wx.T.getLanguage().address[27],
            checktwo: wx.T.getLanguage().address[27],
            checkthree: wx.T.getLanguage().address[27],
            adresad: wx.T.getLanguage().adresad
        })) : this.getAddressThe(t.id), wx.setNavigationBarTitle({
            title: t.title
        }), this.setData({
            j2jjr: wx.T.getLanguage().j2jjr,
            address: wx.T.getLanguage().address,
            status: wx.T.getLanguage().status,
            cuowuysi: wx.T.getLanguage().cuowuysi,
            japnaads: wx.T.getLanguage().japnaads
        });
    },
    showimger: function() {
        this.setData({
            showjp: !0
        });
    },
    getuserid: function() {
        var t = this.data.par;
        t.countryName = i.globalData.userinfo.disVo.name, t.countryId = i.globalData.userinfo.disVo.id, 
        this.setData({
            par: t,
            disbale: "JP" != i.globalData.userinfo.disVo.code,
            coutyrcode: i.globalData.userinfo.disVo.code
        }), this.getCountry();
    },
    getvalueList: function() {
        var t = [ {
            text: "",
            value: 0
        }, {
            text: "",
            value: 1
        } ];
        t[0].text = wx.T.getLanguage().address[28], t[1].text = wx.T.getLanguage().address[29];
        var a = t[this.data.par.idType].text;
        this.setData({
            option1: t,
            idt: a
        }), this.getgetonlist();
    },
    onSwitch1Change: function(t) {
        var a = this.data.par;
        a.idType = t.detail, this.setData({
            idt: this.data.option1[t.detail].text,
            par: a
        });
    },
    getAddressThe: function(t) {
        var a = this, i = {
            id: t
        };
        e.addressThe(i).then(function(t) {
            a.setData({
                par: t,
                disbale: !0
            }), t.provinceId ? (a.gettwolist(t.provinceId), a.getthreelist(t.cityId)) : (a.gettwolist(t.cityId), 
            a.getthreelist(t.areaId)), a.getCountry();
        });
    },
    getjkkle: function() {
        this.setData({
            cheone: cheone
        });
    },
    showadechose: function() {
        this.data.disbale && this.setData({
            showijuwoi: !this.data.showijuwoi
        });
    },
    getCountry: function() {
        var t = this;
        e.districtList({
            parentId: 0
        }).then(function(a) {
            var e = {
                code: 111
            }, i = a.find(function(a) {
                return a.name == t.data.par.countryName;
            });
            null != i && (e = i), t.setData({
                coutyrcode: e.code
            }), t.getvalueList();
        }).catch(function(t) {});
    },
    getgetonlist: function() {
        var t = this, a = {
            parentId: this.data.par.countryId,
            name: ""
        };
        e.districtsearch(a).then(function(a) {
            t.setData({
                onlist: a,
                onserchlist: a
            }), t.data.par.cityId && t.geijuijur();
        });
    },
    geijuijur: function() {
        var t = {}, a = {}, e = null, i = this.data.cheone, s = this.data.checktwo, d = this.data.checkthree, r = "", n = this.data.par;
        "TW" != this.data.coutyrcode ? (t = {
            id: this.data.par.provinceId,
            name: this.data.par.provinceName
        }, a = {
            id: this.data.par.cityId,
            name: this.data.par.cityName
        }, i = this.data.par.provinceName, s = this.data.par.cityName, this.data.par.areaId && (e = {
            id: this.data.par.areaId,
            name: this.data.par.areaName
        }, d = this.data.par.areaName, r = this.data.par.areaName)) : (i = this.data.par.cityName, 
        s = this.data.par.areaName, r = "", t = {
            id: this.data.par.cityId,
            name: this.data.par.cityName
        }, a = {
            id: this.data.par.areaId,
            name: this.data.par.areaName
        }), n.allname = i + s + r, this.setData({
            onitem: t,
            twoitem: a,
            threeitem: e,
            cheone: i,
            checktwo: s,
            checkthree: d,
            adakdkename: i ? i + " " + s + " " + r : i + s + r,
            par: n
        });
    },
    gettwolist: function(t) {
        var a = this, i = {
            parentId: t,
            name: ""
        };
        e.districtsearch(i).then(function(t) {
            a.setData({
                twlist: t,
                twoserchlist: t,
                actived: 1
            });
        });
    },
    getthreelist: function(t) {
        var a = this, i = {
            parentId: t,
            name: ""
        };
        e.districtsearch(i).then(function(t) {
            t.length > 0 ? a.setData({
                threlist: t,
                threserchlist: t,
                actived: 2
            }) : a.getadrwjs();
        });
    },
    getname: function(t) {
        var a = this.data.par;
        "NZ" == this.data.coutyrcode ? this.checkitem(t.detail.value, "name", "英文" + this.data.address[5]) : (a.name = t.detail.value, 
        this.setData({
            par: a
        }));
    },
    getmobile: function(t) {
        var a = this.data.par;
        if ("NZ" == this.data.coutyrcode) this.checkitem(t.detail.value, "mobile", this.data.address[7]); else if ("JP" == this.data.coutyrcode) {
            /^\d{11}$/.test(t.detail.value) || /^\d{10}$/.test(t.detail.value) ? (a.mobile = t.detail.value, 
            this.setData({
                par: a
            })) : (wx.showToast({
                title: this.data.cuowuysi,
                icon: "none"
            }), a.mobile = "", this.setData({
                par: a
            }));
        } else a.mobile = t.detail.value, this.setData({
            par: a
        });
    },
    finnomgkl: function(t) {
        var a = [];
        switch (this.data.actived) {
          case 0:
            a = t ? this.data.onserchlist.filter(function(a) {
                return a.name.indexOf(t) > -1;
            }) : this.data.onserchlist, this.setData({
                onlist: a
            });
            break;

          case 1:
            a = t ? this.data.twoserchlist.filter(function(a) {
                return a.name.indexOf(t) > -1;
            }) : this.data.twoserchlist, this.setData({
                twlist: a
            });
            break;

          case 2:
            a = t ? this.data.threserchlist.filter(function(a) {
                return a.name.indexOf(t) > -1;
            }) : this.data.threserchlist, this.setData({
                threlist: a
            });
        }
    },
    getsearvalue: function(t) {
        this.finnomgkl(t.detail.value);
    },
    cheserche: function(t) {
        this.setData({
            actived: parseInt(t.currentTarget.dataset.index),
            serchvalue: ""
        }), this.finnomgkl(null);
    },
    checkvalue: function(t) {
        null == this.data.onitem || this.data.onitem.id != t.currentTarget.dataset.item.id ? (this.setData({
            onitem: t.currentTarget.dataset.item,
            cheone: t.currentTarget.dataset.item.name,
            checktwo: wx.T.getLanguage().address[27],
            twoitem: null,
            serchvalue: "",
            checkthree: wx.T.getLanguage().address[27],
            threeitem: null
        }), this.gettwolist(t.currentTarget.dataset.item.id)) : this.setData({
            actived: 1
        });
    },
    checkvaluetwo: function(t) {
        null == this.data.twoitem || this.data.twoitem.id != t.currentTarget.dataset.item.id ? (this.setData({
            twoitem: t.currentTarget.dataset.item,
            checkthree: wx.T.getLanguage().address[27],
            checktwo: t.currentTarget.dataset.item.name,
            threeitem: null,
            serchvalue: ""
        }), this.getthreelist(t.currentTarget.dataset.item.id)) : this.data.threserchlist.length > 0 ? this.setData({
            actived: 2
        }) : this.getadrwjs();
    },
    getadrwjs: function() {
        var t = this.data.par;
        t.allname = this.data.cheone + this.data.checktwo + (this.data.threeitem ? this.data.checkthree : ""), 
        this.setData({
            adakdkename: this.data.cheone ? this.data.cheone + " " + this.data.checktwo + " " + (this.data.threeitem ? this.data.checkthree : "") : this.data.cheone + this.data.checktwo + (this.data.threeitem ? this.data.checkthree : ""),
            showijuwoi: !1,
            par: t
        });
    },
    checkvaluethree: function(t) {
        this.setData({
            serchvalue: "",
            threeitem: t.currentTarget.dataset.item,
            checkthree: t.currentTarget.dataset.item.name
        }), this.getadrwjs();
    },
    checkitem: function(t, e, i) {
        var s = this.data.par;
        /.*[\u4e00-\u9fa5]+.*$/.test(t) && t ? ((0, a.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.address[26] + i
        }), s[e] = "", this.setData({
            par: s
        })) : (s[e] = t, this.setData({
            par: s
        }));
    },
    bindPickerare: function(t) {
        var a = this.data.par;
        a.areaName = t.detail.value, this.setData({
            par: a
        });
    },
    getcard: function(t) {
        var a = this.data.par;
        "NZ" == this.data.coutyrcode ? this.checkitem(t.detail.value, "identity", this.data.idt) : (a.identity = t.detail.value, 
        this.setData({
            par: a
        }));
    },
    getaddress: function(t) {
        var a = this.data.par;
        "NZ" == this.data.coutyrcode ? this.checkitem(t.detail.value, "address", "英文" + this.data.address[13]) : (a.address = t.detail.value, 
        this.setData({
            par: a
        }));
    },
    getaddressStandby: function(t) {
        var a = this.data.par;
        "NZ" == this.data.coutyrcode ? this.checkitem(t.detail.value, "addressStandby", "英文" + this.data.address[21]) : (a.addressStandby = t.detail.value, 
        this.setData({
            par: a
        }));
    },
    getpostalCode: function(t) {
        var a = this.data.par;
        "NZ" == this.data.coutyrcode ? this.checkitem(t.detail.value, "postalCode", this.data.address[14]) : (a.postalCode = t.detail.value, 
        this.setData({
            par: a
        }), "JP" == this.data.coutyrcode && t.detail.value && this.getpostadres(t.detail.value));
    },
    getpostadres: function(t) {
        var a = this, i = {
            postCode: t
        };
        e.searchByCode(i).then(function(t) {
            if (a.data.cheone, a.data.checktwo, a.data.threeitem && a.data.checkthree, t) {
                var e = {
                    id: t.provinceId,
                    name: t.provinceName
                }, i = {
                    id: t.cityId,
                    name: t.cityName
                }, s = {
                    id: t.areaId ? t.areaId : null,
                    name: t.areaName ? t.areaName : null
                };
                a.setData({
                    cheone: e.name,
                    checktwo: i.name,
                    checkthree: s.id ? s.name : "",
                    onitem: e,
                    twoitem: i,
                    disbale: !1,
                    threeitem: s.id ? s : null
                }), a.getadrwjs();
            } else a.setData({
                actived: 0,
                cheone: "",
                checktwo: "",
                checkthree: "",
                disbale: !0,
                onitem: null,
                twoitem: null,
                threeitem: null
            });
            a.getadrwjs();
        });
    },
    onReady: function() {},
    switch: function(t) {
        var a = this.data.par;
        t.detail.value ? a.isDefault = 1 : a.isDefault = 0, this.setData({
            par: a
        });
    },
    submit: function() {
        var t = this;
        if (this.data.par.name) if (this.data.par.mobile) if (this.data.par.countryName) if (this.data.par.allname) if (this.data.par.address) if (this.data.par.identity || "TW" != this.data.coutyrcode) if (this.data.par.postalCode) {
            var i = this.data.par;
            "TW" != this.data.coutyrcode ? (i.provinceName = this.data.onitem.name, i.provinceId = this.data.onitem.id, 
            i.cityName = this.data.twoitem.name, i.cityId = this.data.twoitem.id, null != this.data.threeitem && (i.areaName = this.data.threeitem.name, 
            i.areaId = this.data.threeitem.id)) : (i.provinceName = null, i.provinceId = "", 
            i.cityName = this.data.onitem.name, i.cityId = this.data.onitem.id, i.areaName = this.data.twoitem.name, 
            i.areaId = this.data.twoitem.id), e.addressUpdate(i).then(function(t) {
                t && wx.navigateBack({
                    data: 1
                });
            }).catch(function(a) {
                if ("TW" == t.data.coutyrcode && "E012" == a.code) {
                    e.getMessageByName({
                        name: "EZway提示"
                    }).then(function(e) {
                        t.setData({
                            articleid: e.id,
                            mesg: a.message,
                            show: !0
                        });
                    });
                }
            });
        } else (0, a.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.address[26] + this.data.address[14]
        }); else (0, a.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.address[26] + this.data.idt
        }); else (0, a.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.address[26] + this.data.address[20]
        }); else (0, a.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.address[26] + this.data.address[18]
        }); else (0, a.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.address[27] + this.data.address[8]
        }); else (0, a.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.address[26] + this.data.address[7]
        }); else (0, a.default)({
            type: "danger",
            brateLong: !0,
            message: this.data.address[26] + this.data.address[5]
        });
    },
    goarticle: function() {
        wx.navigateTo({
            url: "../urlPage/urlPage?id=" + this.data.articleid + "&type=1"
        });
    },
    onClose: function() {
        this.setData({
            show: !1,
            showjp: !1
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
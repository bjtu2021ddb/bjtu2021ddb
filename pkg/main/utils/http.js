var e = "https://hyt.sjlexpress.com", t = getApp(), o = !0, a = "", n = "";

switch (console.log(t.globalData.envVersion), t.globalData.envVersion) {
  case "develop":
    e = "https://hyt.sjlexpress.com/api", a = "https://hyt.sjlexpress.com/config", n = "https://hyt.sjlexpress.com/shop";
    break;

  case "trial":
    e = "https://huyuntong.com/pre", n = "https://huyuntong.com/shop", a = "https://huyuntong.com/config";
    break;

  case "release":
    e = "https://huyuntong.com/api", a = "https://huyuntong.com/config", n = "https://huyuntong.com/shop";
}

function s() {
    wx.navigateTo({
        url: "/pages/login/login"
    });
}

module.exports = {
    _post: function(a) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0;
        return !i && wx.showLoading({
            title: "请稍等...",
            mask: "true"
        }), a = e + a, new Promise(function(e, i) {
            wx.request({
                url: a,
                data: n,
                method: "POST",
                header: {
                    platform: "wx",
                    platformObj: JSON.stringify({
                        platform: "wx"
                    }),
                    "content-type": "application/json",
                    Authorization: wx.getStorageSync("token") ? wx.getStorageSync("token") : null
                },
                success: function(a) {
                    if (console.log(a), wx.hideLoading(), 200 == a.statusCode) if ("E003" == a.data.code || "E004" == a.data.code) {
                        var n = getCurrentPages(), l = null;
                        n.length && (l = n[n.length - 1]), "pages/login/login" !== l.__route__ && o && wx.showModal({
                            title: "登陆信息过期",
                            content: "是否去登陆",
                            success: function(e) {
                                o = !1, wx.removeStorageSync("userinfo"), t.globalData.userinfo = null, e.confirm ? (o = !0, 
                                setTimeout(s, "200")) : e.cancel && (o = !0);
                            }
                        });
                    } else "S000" == a.data.code ? e(a.data.data) : "E000" == a.data.code ? (wx.showToast({
                        title: "系统异常",
                        icon: "none"
                    }), i(a.data)) : "E001" == a.data.code ? (wx.showToast({
                        title: a.data.message,
                        icon: "none"
                    }), i(a.data)) : (console.log(a), wx.showToast({
                        title: a.data.message,
                        icon: "none"
                    }), i(a.data)); else console.log(a), wx.showToast({
                        title: a.data.message ? a.data.message : "系统异常",
                        icon: "none"
                    }), i(a.data);
                },
                fail: function(e) {
                    console.log(e), wx.hideLoading(), i(e), wx.showToast({
                        title: res.data.message ? res.data.message : "系统异常",
                        icon: "none"
                    });
                }
            });
        });
    },
    _get: function(a) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0;
        return !i && wx.showLoading({
            title: "请稍等...",
            mask: !0
        }), a = e + a, new Promise(function(e, i) {
            wx.request({
                url: a,
                data: n,
                method: "GET",
                header: {
                    platform: "wx",
                    platformObj: JSON.stringify({
                        platform: "wx"
                    }),
                    "content-type": "application/json",
                    Authorization: wx.getStorageSync("token") ? wx.getStorageSync("token") : null,
                    refreshToken: wx.getStorageSync("refreshToken") ? wx.getStorageSync("refreshToken") : null
                },
                success: function(a) {
                    if (wx.hideLoading(), 200 == a.statusCode) if ("E003" == a.data.code || "E004" == a.data.code) {
                        var n = getCurrentPages(), l = null;
                        n.length && (l = n[n.length - 1]), "pages/login/login" !== l.__route__ && o && (o = !1, 
                        wx.showModal({
                            title: "登陆信息过期",
                            content: "是否去登陆",
                            success: function(e) {
                                o = !1, wx.removeStorageSync("userinfo"), t.globalData.userinfo = null, e.confirm ? (o = !0, 
                                setTimeout(s, "200")) : e.cancel && (o = !0);
                            }
                        }));
                    } else "S000" == a.data.code ? e(a.data.data) : "E000" == a.data.code ? (wx.showToast({
                        title: "系统异常",
                        icon: "none"
                    }), i(a.data)) : (wx.showToast({
                        title: a.data.message ? a.data.message : "系统异常",
                        icon: "none"
                    }), i(a.data)); else wx.showToast({
                        title: a.data.message ? a.data.message : "系统异常",
                        icon: "none"
                    }), i(a.data);
                },
                fail: function(e) {
                    wx.hideLoading(), i(e), wx.showToast({
                        title: res.data.message ? res.data.message : "系统异常",
                        icon: "none"
                    });
                }
            });
        });
    },
    _uplod: function(t) {
        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0;
        return !a && wx.showLoading({
            title: "请稍等...",
            mask: !0
        }), t = e + t, new Promise(function(e, a) {
            console.log({
                file: o.file.path
            }), wx.uploadFile({
                url: t,
                filePath: o.file.path,
                name: "file",
                formData: {
                    file: o.file.path
                },
                header: {
                    platform: "wx",
                    platformObj: JSON.stringify({
                        platform: "wx"
                    }),
                    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
                    Authorization: wx.getStorageSync("token") ? wx.getStorageSync("token") : null
                },
                success: function(t) {
                    wx.hideLoading(), e(t.data);
                },
                fail: function(e) {
                    console.log(e), wx.hideLoading(), a(e), wx.showToast({
                        title: res.data.message ? res.data.message : "系统异常",
                        icon: "none"
                    });
                }
            });
        });
    },
    _delet: function(a, n) {
        return !n && wx.showLoading({
            title: "请稍等...",
            mask: !0
        }), a = e + a, new Promise(function(e, n) {
            wx.request({
                url: a,
                method: "DELETE",
                header: {
                    platform: "wx",
                    platformObj: JSON.stringify({
                        platform: "wx"
                    }),
                    "content-type": "application/x-www-form-urlencoded",
                    Authorization: wx.getStorageSync("token") ? wx.getStorageSync("token") : null
                },
                success: function(a) {
                    if (wx.hideLoading(), 200 == a.statusCode) if ("E003" == a.data.code || "E004" == a.data.code) {
                        var i = getCurrentPages(), l = null;
                        i.length && (l = i[i.length - 1]), "pages/login/login" !== l.__route__ && o && wx.showModal({
                            title: "登陆信息过期",
                            content: "是否去登陆",
                            success: function(e) {
                                o = !1, wx.removeStorageSync("userinfo"), t.globalData.userinfo = null, e.confirm ? (o = !0, 
                                setTimeout(s, "200")) : e.cancel && (o = !0);
                            }
                        });
                    } else "S000" == a.data.code ? e(a.data.data) : "E000" == a.data.code ? (wx.showToast({
                        title: "系统异常",
                        icon: "none"
                    }), n(a.data)) : (wx.showToast({
                        title: a.data.message ? a.data.message : "系统异常",
                        icon: "none"
                    }), n(a.data)); else wx.showToast({
                        title: a.data.message ? a.data.message : "系统异常",
                        icon: "none"
                    }), n(a.data);
                },
                fail: function(e) {
                    console.log(e), wx.hideLoading(), n(e), wx.showToast({
                        title: res.data.message ? res.data.message : "系统异常",
                        icon: "none"
                    });
                }
            });
        });
    },
    _getconfig: function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0;
        return !i && wx.showLoading({
            title: "请稍等...",
            mask: !0
        }), e = a + e, new Promise(function(a, i) {
            wx.request({
                url: e,
                data: n,
                method: "GET",
                header: {
                    platform: "wx",
                    platformObj: JSON.stringify({
                        platform: "wx"
                    }),
                    "content-type": "application/json",
                    Authorization: wx.getStorageSync("token") ? wx.getStorageSync("token") : null,
                    refreshToken: wx.getStorageSync("refreshToken") ? wx.getStorageSync("refreshToken") : null
                },
                success: function(e) {
                    if (wx.hideLoading(), 200 == e.statusCode) if ("E003" == e.data.code || "E004" == e.data.code) {
                        var n = getCurrentPages(), l = null;
                        n.length && (l = n[n.length - 1]), "pages/login/login" !== l.__route__ && o && (o = !1, 
                        wx.showModal({
                            title: "登陆信息过期",
                            content: "是否去登陆",
                            success: function(e) {
                                o = !1, wx.removeStorageSync("userinfo"), t.globalData.userinfo = null, e.confirm ? (o = !0, 
                                setTimeout(s, "200")) : e.cancel && (o = !0);
                            }
                        }));
                    } else "S000" == e.data.code ? a(e.data.data) : "E000" == e.data.code ? (wx.showToast({
                        title: "系统异常",
                        icon: "none"
                    }), i(e.data)) : (wx.showToast({
                        title: e.data.message ? e.data.message : "系统异常",
                        icon: "none"
                    }), i(e.data)); else wx.showToast({
                        title: e.data.message ? e.data.message : "系统异常",
                        icon: "none"
                    }), i(e.data);
                },
                fail: function(e) {
                    wx.hideLoading(), i(e), wx.showToast({
                        title: res.data.message ? res.data.message : "系统异常",
                        icon: "none"
                    });
                }
            });
        });
    },
    _postconfig: function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0;
        return !i && wx.showLoading({
            title: "请稍等...",
            mask: "true"
        }), e = a + e, new Promise(function(a, i) {
            wx.request({
                url: e,
                data: n,
                method: "POST",
                header: {
                    platform: "wx",
                    platformObj: JSON.stringify({
                        platform: "wx"
                    }),
                    "content-type": "application/json",
                    Authorization: wx.getStorageSync("token") ? wx.getStorageSync("token") : null
                },
                success: function(e) {
                    if (console.log(e), wx.hideLoading(), 200 == e.statusCode) if ("E003" == e.data.code || "E004" == e.data.code) {
                        var n = getCurrentPages(), l = null;
                        n.length && (l = n[n.length - 1]), "pages/login/login" !== l.__route__ && o && wx.showModal({
                            title: "登陆信息过期",
                            content: "是否去登陆",
                            success: function(e) {
                                o = !1, wx.removeStorageSync("userinfo"), t.globalData.userinfo = null, e.confirm ? (o = !0, 
                                setTimeout(s, "200")) : e.cancel && (o = !0);
                            }
                        });
                    } else "S000" == e.data.code ? a(e.data.data) : "E000" == e.data.code ? (wx.showToast({
                        title: "系统异常",
                        icon: "none"
                    }), i(e.data)) : "E001" == e.data.code ? (wx.showToast({
                        title: e.data.message,
                        icon: "none"
                    }), i(e.data)) : (console.log(e), wx.showToast({
                        title: e.data.message,
                        icon: "none"
                    }), i(e.data)); else console.log(e), wx.showToast({
                        title: e.data.message ? e.data.message : "系统异常",
                        icon: "none"
                    }), i(e.data);
                },
                fail: function(e) {
                    console.log(e), wx.hideLoading(), i(e), wx.showToast({
                        title: res.data.message ? res.data.message : "系统异常",
                        icon: "none"
                    });
                }
            });
        });
    },
    _postshop: function(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0;
        return !i && wx.showLoading({
            title: "请稍等...",
            mask: "true"
        }), e = n + e, new Promise(function(n, i) {
            wx.request({
                url: e,
                data: a,
                method: "POST",
                header: {
                    platform: "wx",
                    platformObj: JSON.stringify({
                        platform: "wx"
                    }),
                    "content-type": "application/json",
                    Authorization: wx.getStorageSync("token") ? wx.getStorageSync("token") : null
                },
                success: function(e) {
                    if (console.log(e), wx.hideLoading(), 200 == e.statusCode) if ("E003" == e.data.code || "E004" == e.data.code) {
                        var a = getCurrentPages(), l = null;
                        a.length && (l = a[a.length - 1]), "pages/login/login" !== l.__route__ && o && wx.showModal({
                            title: "登陆信息过期",
                            content: "是否去登陆",
                            success: function(e) {
                                o = !1, wx.removeStorageSync("userinfo"), t.globalData.userinfo = null, e.confirm ? (o = !0, 
                                setTimeout(s, "200")) : e.cancel && (o = !0);
                            }
                        });
                    } else "S000" == e.data.code ? n(e.data.data) : "E000" == e.data.code ? (wx.showToast({
                        title: "系统异常",
                        icon: "none"
                    }), i(e.data)) : "E001" == e.data.code ? (wx.showToast({
                        title: e.data.message,
                        icon: "none"
                    }), i(e.data)) : (console.log(e), wx.showToast({
                        title: e.data.message,
                        icon: "none"
                    }), i(e.data)); else console.log(e), wx.showToast({
                        title: e.data.message ? e.data.message : "系统异常",
                        icon: "none"
                    }), i(e.data);
                },
                fail: function(e) {
                    console.log(e), wx.hideLoading(), i(e), wx.showToast({
                        title: res.data.message ? res.data.message : "系统异常",
                        icon: "none"
                    });
                }
            });
        });
    }
};
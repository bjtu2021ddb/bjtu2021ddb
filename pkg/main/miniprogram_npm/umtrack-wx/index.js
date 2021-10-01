var e, t, n = require("../../@babel/runtime/helpers/typeof"), i = "[UMENG] -- ", r = (t = !1, 
function() {
    return e = null === e ? new o() : e;
});

function o() {
    this.setDebug = function(e) {
        t = e;
    }, this.d = function() {
        if (t) try {
            "string" == typeof arguments[0] && (arguments[0] = i + arguments[0]), console.debug.apply(console, arguments);
        } catch (e) {}
    }, this.i = function() {
        try {
            if (t) try {
                "string" == typeof arguments[0] && (arguments[0] = i + arguments[0]), console.info.apply(console, arguments);
            } catch (e) {}
        } catch (e) {}
    }, this.e = function() {
        if (t) try {
            "string" == typeof arguments[0] && (arguments[0] = i + arguments[0]), console.error.apply(console, arguments);
        } catch (e) {}
    }, this.w = function() {
        if (t) try {
            "string" == typeof arguments[0] && (arguments[0] = i + arguments[0]), console.warn.apply(console, arguments);
        } catch (e) {}
    }, this.v = function() {
        if (t) try {
            "string" == typeof arguments[0] && (arguments[0] = i + arguments[0]), console.log.apply(console, arguments);
        } catch (e) {}
    }, this.t = function() {
        if (t) try {
            console.table.apply(console, arguments);
        } catch (e) {}
    }, this.tip = function() {
        try {
            "string" == typeof arguments[0] && (arguments[0] = i + arguments[0]), console.log.apply(console, arguments);
        } catch (e) {}
    }, this.tip_w = function(e) {
        try {
            console.log("%c " + i + e, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
        } catch (e) {}
    }, this.err = function() {
        try {
            "string" == typeof arguments[0] && (arguments[0] = i + arguments[0]), console.error.apply(console, arguments);
        } catch (e) {}
    }, this.repeat = function(e) {
        for (var t = e; t.length < 86; ) t += e;
        return t;
    };
}

var s, a = (s = e = null, function() {
    return s = s || new u();
});

function u() {
    var e = {};
    this.useOpenid = function() {
        return !!e.useOpenid;
    }, this.useSwanid = function() {
        return !!e.useSwanid;
    }, this.autoGetOpenid = function() {
        return !!e.autoGetOpenid;
    }, this.appKey = function() {
        return e.appKey;
    }, this.uploadUserInfo = function() {
        return e.uploadUserInfo;
    }, this.enableVerify = function() {
        return e.enableVerify;
    }, this.set = function(t) {
        e = t;
    }, this.get = function() {
        return e;
    }, this.setItem = function(t, n) {
        e[t] = n;
    }, this.getItem = function(t) {
        return e[t];
    };
}

function c() {}

c.prototype = {
    on: function(e, t, n) {
        var i = this.e || (this.e = {});
        return (i[e] || (i[e] = [])).push({
            fn: t,
            ctx: n
        }), this;
    },
    once: function(e, t, n) {
        var i = this;
        function r() {
            i.off(e, r), t.apply(n, arguments);
        }
        return r._ = t, this.on(e, r, n);
    },
    emit: function(e) {
        for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, t);
        return this;
    },
    off: function(e, t) {
        var n = this.e || (this.e = {}), i = n[e], r = [];
        if (i && t) for (var o = 0, s = i.length; o < s; o++) i[o].fn !== t && i[o].fn._ !== t && r.push(i[o]);
        return r.length ? n[e] = r : delete n[e], this;
    }
};

var f = new c();

f.messageType = {
    CONFIG_LOADED: 0,
    UMA_LIB_INITED: 1
};

var p = new (function() {
    function e() {}
    return e.prototype.setStorage = function(e, t, n) {
        wx.setStorage({
            key: e,
            data: t,
            success: function() {
                "function" == typeof n && n(!0);
            },
            fail: function() {
                "function" == typeof n && n(!1);
            }
        });
    }, e.prototype.getStorage = function(e, t) {
        wx.getStorage({
            key: e,
            success: function(e) {
                "function" == typeof t && t(e.data);
            },
            fail: function(n) {
                r().w(e + ": " + n.errMsg), "function" == typeof t && t();
            }
        });
    }, e.prototype.removeStorage = function(e, t) {
        wx.removeStorage({
            key: e,
            success: function() {
                "function" == typeof t && t(!0);
            },
            fail: function() {
                "function" == typeof t && t(!1);
            }
        });
    }, e.prototype.getSystemInfo = function(e) {
        wx.getSystemInfo({
            success: function(t) {
                t.safeArea = t.safeArea || {};
                var n = "";
                t.host && "string" == typeof t.host.env && (n = t.host.env);
                var i = {
                    model: t.model,
                    brand: t.brand,
                    pixelRatio: t.pixelRatio,
                    screenWidth: t.screenWidth,
                    screenHeight: t.screenHeight,
                    fontSizeSetting: t.fontSizeSetting,
                    platform: t.platform,
                    platformVersion: t.version,
                    platformSDKVersion: t.SDKVersion,
                    language: t.language,
                    deviceName: t.model,
                    OSVersion: t.system,
                    resolution: "",
                    theme: t.theme,
                    benchmarkLevel: t.benchmarkLevel,
                    safeArea: {
                        width: t.safeArea.width,
                        height: t.safeArea.height,
                        top: t.safeArea.top,
                        left: t.safeArea.left,
                        bottom: t.safeArea.bottom,
                        right: t.safeArea.right
                    },
                    statusBarHeight: t.statusBarHeight,
                    host: n
                };
                n = t.system.split(" ");
                Array.isArray(n) && (i.OS = n[0]), n = Math.round(t.screenWidth * t.pixelRatio), 
                t = Math.round(t.screenHeight * t.pixelRatio), i.resolution = t < n ? n + "*" + t : t + "*" + n, 
                "function" == typeof e && e(i);
            },
            fail: function() {
                "function" == typeof e && e();
            }
        });
    }, e.prototype.getDeviceInfo = function(e) {
        "function" == typeof e && e("");
    }, e.prototype.checkNetworkAvailable = function(e) {
        wx.getNetworkType({
            success: function(t) {
                "function" == typeof e && e(t && "none" !== t.networkType);
            },
            fail: function() {
                "function" == typeof e && e(!1);
            }
        });
    }, e.prototype.getNetworkInfo = function(e) {
        wx.getNetworkType({
            success: function(t) {
                "function" == typeof e && e({
                    networkAvailable: "none" !== t.networkType,
                    networkType: t.networkType
                });
            },
            fail: function() {
                "function" == typeof e && e();
            }
        });
    }, e.prototype.getDeviceId = function(e) {
        e("");
    }, e.prototype.getAdvertisingId = function(e) {
        "function" == typeof e && e("");
    }, e.prototype.onNetworkStatusChange = function(e) {
        wx.onNetworkStatusChange(function(t) {
            "function" == typeof e && e(t.isConnected);
        });
    }, e.prototype.request = function(e) {
        var t = e.success, n = e.fail, i = !1, r = null;
        e.success = function(e) {
            i || (r && clearTimeout(r), "function" == typeof t && t(e));
        }, e.fail = function() {
            i || (r && clearTimeout(r), "function" == typeof n && n(!1));
        }, wx.request(e), r = setTimeout(function() {
            r && clearTimeout(r), i = !0, "function" == typeof n && n(i);
        }, e.timeout || 5e3);
    }, e.prototype.getSdkType = function() {
        return "wxmp";
    }, e.prototype.getPlatform = function() {
        return "wx";
    }, e.prototype.getUserInfo = function(e) {
        var t = {
            fail: function() {
                e && e();
            },
            success: function(t) {
                t && t.userInfo && (t = t.userInfo, e && e({
                    avatar: t.avatarUrl,
                    nickName: t.nickName,
                    gender: t.gender,
                    country: t.country,
                    province: t.province,
                    city: t.city,
                    language: t.language
                }));
            }
        };
        try {
            wx.getSetting({
                success: function(e) {
                    e.authSetting["scope.userInfo"] && wx.getUserInfo(t);
                },
                fail: function() {
                    e();
                }
            });
        } catch (e) {
            r.e("getUserInfo error", e);
        }
    }, e.prototype.getAppInfoSync = function() {
        var e;
        return wx.getAccountInfoSync ? {
            appId: (e = (e = wx.getAccountInfoSync()) && e.miniProgram ? e.miniProgram : {}).appId,
            appEnv: e.envVersion,
            appVersion: e.version
        } : {};
    }, e.prototype.onShareAppMessage = function(e) {
        wx.onShareAppMessage(e);
    }, e.prototype.shareAppMessage = function(e) {
        wx.shareAppMessage(e);
    }, e;
}())(), h = function(e, t) {
    return (h = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    })(e, t);
};

function d(e, t) {
    function n() {
        this.constructor = e;
    }
    h(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
    new n());
}

var l, g, v = {
    SESSION_INTERVAL: 3e4,
    LOG_URL: "https://umini.shujupie.com/wxm_logs",
    GET_OPENID_URL: "https://umini.shujupie.com/uminiprogram_logs/wx/getuut",
    USERINFO_URL: "https://umini.shujupie.com/uminiprogram_logs/comm/uif",
    DEVICE_INFO_KEY: "device_info",
    ADVERTISING_ID: "mobile_ad_id",
    ANDROID_ID: "android_id",
    CURRENT_SESSION: "current_session",
    SESSION_PAUSE_TIME: "session_pause_time",
    EVENT_SEND_DEFAULT_INTERVAL: 15e3,
    EVENT_LAST_SEND_TIME: "last_send_time",
    MAX_EVENTID_LENGTH: 128,
    MAX_PROPERTY_KEY_LENGTH: 256,
    MAX_PROPERTY_KEYS_COUNT: 100,
    REPORT_POLICY: "report_policy",
    REPORT_INTERVAL_TIME: "report_interval_time",
    REPORT_POLICY_START_SEND: "1",
    REPORT_POLICY_INTERVAL: "6",
    IMPRINT: "imprint",
    SEED_VERSION: "1.0.0",
    IMPL_VERSION: "2.6.2",
    ALIPAY_AVAILABLE_VERSION: "10.1.52",
    SHARE_PATH: "um_share_path",
    SHARES: "shares",
    REQUESTS: "requests",
    UUID: "um_uuid",
    UUID_SUFFIX: "ud",
    OPENID: "um_od",
    UNIONID: "um_unid",
    ALIPAYID: "um_alipayid",
    USERID: "um_userid",
    PROVIDER: "um_provider",
    SWANID: "um_swanid",
    ANONYMOUSID: "um_anonymousid",
    LAUNCH_OPTIONS: "LAUNCH_OPTIONS",
    UM_SSRC: "_um_ssrc",
    USER_INFO: "user_info",
    IS_ALIYUN: !1,
    ALIYUN_URL: "serverless.huoban.youmeng.network.forward"
}, _ = function(e) {
    for (var t = "", n = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], i = 0; i < Number(e); i++) t += n[Math.round(Math.random() * (n.length - 1))];
    return t;
}, y = function(e) {
    return JSON.parse(JSON.stringify(e));
}, m = function(e, t) {
    return !(!e || !t || 0 === t.length || t.length > e.length) && e.substr(0, t.length) === t;
}, S = function(e) {
    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
    for (var t = Object(e), n = 1; n < arguments.length; n++) {
        var i = arguments[n];
        if (i) for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
}, I = function e(t, i) {
    if (t === i) return !0;
    if (t && "object" == n(t) && i && "object" == n(i)) {
        if (Object.keys(t).length !== Object.keys(i).length) return !1;
        for (var r in t) {
            if (Object.prototype.hasOwnProperty.call(i, r)) return !1;
            if (!e(t[r], i[r])) return !1;
        }
        return !0;
    }
    return !1;
}, A = function(e, t) {
    return e ? ("string" == typeof t && t.length ? (t = new RegExp("^" + t + "*"), e = e.replace(t, "")) : e = e.replace(/^s*/, ""), 
    e) : "";
}, O = function(e) {
    return "function" == typeof e;
}, E = function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return d(t, e), t.prototype.getOpenIdAsync = function(e, t) {
        var n = this;
        wx.login({
            success: function(i) {
                i.code ? p.request({
                    url: v.GET_OPENID_URL,
                    method: "GET",
                    data: {
                        key: e,
                        code: i.code
                    },
                    success: function(e) {
                        if (e && 200 === e.statusCode && e.data && e.data.data) return e = e.data.data, 
                        n.setOpenid(e.oid), n.setUnionid(e.uid), t && t(!0);
                        t && t();
                    },
                    fail: function(e) {
                        r().v("wx request failed...", e), t && t();
                    }
                }) : t && t();
            },
            fail: function() {
                t && t();
            }
        });
    }, t;
}(function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t._openid = "", t._unionid = "", t._useOpenid = !1, t;
    }
    return d(t, e), t.prototype.initID = function(e) {
        var t = this;
        t._idType = t._useOpenid ? "openid" : "uuid", r().v("id type: ", t._idType), p.getStorage(v.UNIONID, function(e) {
            t._unionid = e;
        }), this._useOpenid ? p.getStorage(v.OPENID, function(n) {
            t._openid = n, e && e();
        }) : e && e();
    }, t.prototype.setUseOpenid = function(e) {
        this._useOpenid = e;
    }, t.prototype.setOpenid = function(e) {
        !this._openid && e && (this._openid = e, p.setStorage(v.OPENID, e));
    }, t.prototype.setUnionid = function(e) {
        !this._unionid && e && (this._unionid = e, p.setStorage(v.UNIONID, e));
    }, t.prototype.getIdTracking = function() {
        var t = e.prototype.getIdTracking.call(this);
        return this._openid && (t.openid = this._openid), this._unionid && (t.unionid = this._unionid), 
        this._userid && (t.userid = this._userid), t;
    }, t.prototype.getId = function() {
        return this._useOpenid ? this._openid : this._uuid;
    }, t;
}(function() {
    function e() {
        this._uuid = "", this._userid = "", this._provider = "", this._idType = "";
    }
    return e.prototype.createUUID = function() {
        return _(10) + Date.now() + _(7) + v.UUID_SUFFIX;
    }, e.prototype.initUUID = function(e) {
        var t = this;
        p.getStorage(v.UUID, function(n) {
            n ? t._uuid = n : (t._uuid = t.createUUID(), p.setStorage(v.UUID, t._uuid)), e && e(n);
        });
    }, e.prototype.initUserid = function() {
        var e = this;
        p.getStorage(v.USERID, function(t) {
            !e._userid && t && (e._userid = t, r().v("userId is ", t));
        }), p.getStorage(v.PROVIDER, function(t) {
            !e._provider && t && (e._provider = t, r().v("provider is ", t));
        });
    }, e.prototype.init = function(e) {
        var t = this;
        t.initUUID(function() {
            t.initUserid(), t.initID(e);
        });
    }, e.prototype.setUserid = function(e, t) {
        !this._userid && e && (this._userid = e, this._provider = t, p.setStorage(v.USERID, e), 
        p.setStorage(v.PROVIDER, t));
    }, e.prototype.getUserId = function() {
        return this._userid;
    }, e.prototype.getProvider = function() {
        return this._provider;
    }, e.prototype.getIdType = function() {
        return this._idType;
    }, e.prototype.getIdTracking = function() {
        var e = {};
        return this._uuid && (e.uuid = this._uuid), this._userid && (e.userid = this._userid), 
        e;
    }, e;
}())), w = function() {
    return l = l || new E();
}, T = function() {
    return g = g || new N();
};

function N() {
    var e = !1, t = null, n = [];
    this.addPageStart = function(n) {
        n && !e && (t = {
            ts: Date.now(),
            path: n,
            page_name: n
        }, e = !0);
    }, this.addPageEnd = function(i) {
        e && i && t && i === t.page_name && (i = Date.now() - t.ts, t.duration = Math.abs(i), 
        n.push(t), t = null, e = !1);
    }, this.get = function() {
        return n;
    }, this.getCurrentPage = function() {
        return t;
    }, this.clear = function() {
        n.length = 0;
    };
}

var k = {};

var b, U, R, D = function() {
    return b = b || new P();
};

function P() {
    return {
        add: function(e, t) {
            r().v("share origin: %o", e);
            var n = {
                title: e && e.title,
                path: e && e.path && e.path.split("?")[0],
                _um_sts: Date.now()
            };
            n.path && 1 < n.path.length && m(n.path, "/") && (n.path = A(n.path, "/"));
            var i = e.path || "", o = w().getId();
            if (o) {
                var s = R.split(","), a = (s = s.filter(function(e) {
                    return 0 < e.length;
                })).indexOf(o);
                (s = 0 <= a ? s.slice(0, a) : s).length < 3 && s.push(o), o = s.join(","), -1 !== i.indexOf("?") ? i += "&_um_ssrc=" + o : i += "?_um_ssrc=" + o, 
                i += "&_um_sts=" + (s = Date.now()), t ? (t = (t = function(e) {
                    var t, n = [];
                    for (t in e) "_um_ssrc" !== t && "_um_sts" !== t && n.push(t + "=" + e[t]);
                    return n.join("&");
                }(k)) ? t + "&_um_ssrc=" + o + "&_um_sts=" + s : "_um_ssrc=" + o + "&_um_sts=" + s, 
                e.query = e.query ? e.query + "&_um_ssrc=" + o + "&_um_sts=" + s : t) : e.path = i, 
                n._um_ssrc = o, n._um_sts = s;
            }
            return U.push(n), r().v("share: %o", e), e;
        },
        setShareSource: function(e) {
            R = e;
        },
        clear: function() {
            U.length = 0;
        },
        get: function() {
            return U;
        }
    };
}

var L, C, M, x, V = function(e) {
    if (e) try {
        return JSON.stringify(e);
    } catch (e) {}
    return "";
}, j = function(e) {
    if (e) try {
        return JSON.parse(e);
    } catch (e) {}
    return null;
}, G = (x = !(U = []), function() {
    return L = L || new F();
});

function F() {
    this.load = function(e) {
        M ? (p.removeStorage(C), e()) : (C = "um_cache_" + a().appKey(), p.getStorage(C, function(t) {
            M = j(t) || {}, x = !0, p.removeStorage(C), e();
        }));
    }, this.save = function() {
        M && p.setStorage(C, V(M));
    }, this.set = function(e, t) {
        M && (M[e] = t);
    }, this.get = function(e) {
        return (M || {})[e];
    }, this.remove = function(e) {
        M && M[e] && delete M[e];
    }, this.getAll = function() {
        return M;
    }, this.clear = function() {
        M = null;
    }, this.has = function(e) {
        return !!this.get(e);
    }, this.isLoaded = function() {
        return x;
    };
}

var q, K, H, Y, J = "ekvs", X = (H = [], Y = [], function() {
    return q = q || {
        addEvent: function(e) {
            K ? (H.unshift(e), 1 < H.length && (!function() {
                if (H.length) {
                    var e = G().get(J);
                    (function(e) {
                        var t, n = 0;
                        for (t in e) Array.isArray(e[t]) && (n += e[t].length);
                        return n;
                    })(e) + H.length <= 1e4 && (e = z(e, H), G().set(J, e));
                }
            }(), H.length = 0)) : (r().w("session id is null: ", K), Y.unshift(e));
        },
        setSessionId: function(e) {
            if (K = e, r().v("setSessionId: ", K), Array.isArray(Y) && Y.length && K) {
                for (var t = 0; t < Y.length; t++) this.addEvent(Y[t]);
                Y.length = 0;
            }
        },
        getEkvs: function() {
            var e = G().get(J);
            return H && H.length ? z(e, H) : e;
        },
        clear: function() {
            G().remove(J), H.length = 0;
        }
    };
});

function z(e, t) {
    var n = (e = e || {})[K];
    return Array.isArray(n) && n.length ? e[K] = n.concat(t) : e[K] = [].concat(t), 
    e;
}

var B, Q = "half_session", W = "close_session", Z = "ekv", $ = [ "access", "access_subtype" ], ee = function() {
    return B = B || function() {
        var e = !1, t = {};
        return {
            init: function() {
                !function(e) {
                    var n = G().get(v.IMPRINT);
                    n && (t.imprint = n), t.device_type = "Phone", t.sdk_version = v.IMPL_VERSION, t.appkey = a().appKey(), 
                    p.getDeviceInfo(function(e) {
                        t.device_info = e || "";
                    }), n = p.getAppInfoSync(), t.appid = n.appId, t.app_env = n.appEnv, t.app_version = n.appVersion, 
                    p.getSystemInfo(function(n) {
                        p.getNetworkInfo(function(i) {
                            i = function(e, t) {
                                var n = {};
                                (e = e || {}).safeArea = e.safeArea || {};
                                var i = (t = t || {}).networkType;
                                "none" === i && (i = "unknown");
                                var r = e.model || "", o = e.platform || "", s = e.brand || "";
                                t = s.toLowerCase();
                                switch (n.sdk_type = p.getSdkType(), n.platform = p.getPlatform(), n.platform_sdk_version = e.platformSDKVersion, 
                                n.platform_version = e.platformVersion, n.resolution = e.resolution, n.pixel_ratio = e.pixelRatio, 
                                n.os = o, n.font_size_setting = e.fontSizeSetting, n.device_model = r, n.device_brand = s, 
                                n.device_manufacturer = t, n.device_manuid = r, n.device_name = r, n.os_version = e.OSVersion, 
                                n.language = e.language, n.theme = e.theme, n.benchmark_level = e.benchmarkLevel, 
                                n.status_bar_height = e.statusBarHeight, n.safe_area_top = e.safeArea.top, n.safe_area_left = e.safeArea.left, 
                                n.safe_area_right = e.safeArea.right, n.safe_area_bottom = e.safeArea.bottom, n.safe_area_height = e.safeArea.height, 
                                n.safe_area_width = e.safeArea.width, n.storage = e.storage, n.screen_width = e.screenWidth, 
                                n.screen_height = e.screenHeight, n.host = e.host, i = i ? i.toLowerCase() : "") {
                                  case "4g":
                                    n.access_subtype = "LTE", n.access = "4G";
                                    break;

                                  case "3g":
                                    n.access_subtype = "CDMA", n.access = "3G";
                                    break;

                                  case "2g":
                                    n.access_subtype = "GRPS", n.access = "2G";
                                    break;

                                  default:
                                    n.access = i, delete n.access_subtype;
                                }
                                return n;
                            }(n, i), S(t, i), e && e();
                        });
                    });
                }(function() {
                    e = !0;
                });
            },
            isLoaded: function() {
                return e;
            },
            get: function() {
                return t;
            },
            getRealtimeFields: function() {
                var e = {};
                return $.forEach(function(n) {
                    e[n] = t[n];
                }), e;
            },
            setIdTracking: function(e) {
                this.setItem("id_tracking", e);
            },
            setIdType: function(e) {
                this.setItem("id_type", e);
            },
            setAppVersion: function(e) {
                this.setItem("app_version", e);
            },
            setSuperProperty: function(e) {
                t.sp || (t.sp = {}), t.sp.isv = e;
            },
            getSuperProperty: function() {
                return t && t.sp ? t.sp.isv : "";
            },
            setItem: function(e, n) {
                t[e] = n;
            },
            getItem: function(e) {
                return t[e];
            }
        };
    }();
};

var te, ne, ie, re = (ie = ne = te = B = M = L = b = g = l = null, function() {
    return te = te || {
        resume: function(e) {
            var t = !1;
            ie = ie || G().get(v.CURRENT_SESSION);
            var n = new Date();
            return ne = n.getTime(), !ie || !ie.end_time || ne - ie.end_time > v.SESSION_INTERVAL ? (t = !0, 
            function(e) {
                try {
                    var t = (ie || {}).options || {}, n = S({}, function(e) {
                        var t, n = {};
                        for (t in e) 0 === t.indexOf("_um_") && (n[t] = e[t]);
                        return r().v("query: ", e), r().v("_um_params: ", n), n;
                    }(e.query));
                    n.path = e.path || t.path, n.scene = e.scene ? p.getPlatform() + "_" + e.scene : t.scene, 
                    (t = e.referrerInfo) && (n.referrerAppId = t.appId), r().v("session options: ", n), 
                    (t = n[v.UM_SSRC]) && D().setShareSource(t), t = Date.now(), ie = {
                        id: _(10) + t,
                        start_time: t,
                        options: n
                    };
                } catch (e) {
                    r().e("生成新session失败: ", e);
                }
            }(e), r().v("开始新的session(%s): ", ie.id, ie)) : r().v("延续上一次session(%s): %s ", ie.id, n.toLocaleTimeString(), ie), 
            t;
        },
        pause: function() {
            !function() {
                if (ie) {
                    var e = new Date();
                    ie.end_time = e.getTime(), "number" != typeof ie.duration && (ie.duration = 0), 
                    ie.duration = ie.end_time - ne, G().set(v.CURRENT_SESSION, ie), r().v("退出会话(%s): %s ", ie.id, e.toLocaleTimeString(), ie);
                }
            }();
        },
        getCurrentSessionId: function() {
            return (ie || {}).id;
        },
        getCurrentSession: function() {
            return ie;
        },
        cloneCurrentSession: function() {
            return y(ie);
        }
    };
});

var oe = {
    sessions: "sn",
    ekvs: "e",
    active_user: "active_user"
}, se = {
    sdk_type: "sdt",
    access: "ac",
    access_subtype: "acs",
    device_model: "dm",
    language: "lang",
    device_type: "dt",
    device_manufacturer: "dmf",
    device_name: "dn",
    platform_version: "pv",
    id_type: "it",
    font_size_setting: "fss",
    os_version: "ov",
    device_manuid: "did",
    platform_sdk_version: "psv",
    device_brand: "db",
    appkey: "ak",
    _id: "id",
    id_tracking: "itr",
    imprint: "imp",
    sdk_version: "sv",
    resolution: "rl",
    testToken: "ttn",
    theme: "t5",
    benchmark_level: "bml",
    screen_width: "sw",
    screen_height: "sh",
    status_bar_height: "sbh",
    safe_area_top: "sat",
    safe_area_left: "sal",
    safe_area_right: "sar",
    safe_area_bottom: "sab",
    safe_area_height: "sah",
    safe_area_width: "saw",
    pixel_ratio: "pr",
    storage: "s7",
    host: "hs"
}, ae = {
    uuid: "ud",
    unionid: "und",
    openid: "od",
    anonymousid: "nd",
    alipay_id: "ad",
    device_id: "dd",
    userid: "puid"
};

function ue(e, t) {
    var n, i = {};
    for (n in e) t[n] ? i[t[n]] = e[n] : i[n] = e[n];
    return i;
}

var ce = C = R = "";

function fe(e) {
    if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? _e(192 | t >>> 6) + _e(128 | 63 & t) : _e(224 | t >>> 12 & 15) + _e(128 | t >>> 6 & 63) + _e(128 | 63 & t);
    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
    return _e(240 | t >>> 18 & 7) + _e(128 | t >>> 12 & 63) + _e(128 | t >>> 6 & 63) + _e(128 | 63 & t);
}

function pe(e) {
    var t = [ 0, 2, 1 ][e.length % 3];
    e = e.charCodeAt(0) << 16 | (1 < e.length ? e.charCodeAt(1) : 0) << 8 | (2 < e.length ? e.charCodeAt(2) : 0);
    return [ ge.charAt(e >>> 18), ge.charAt(e >>> 12 & 63), 2 <= t ? "=" : ge.charAt(e >>> 6 & 63), 1 <= t ? "=" : ge.charAt(63 & e) ].join("");
}

function he(e) {
    return e.replace(ye, fe).replace(/[\s\S]{1,3}/g, pe);
}

function de(e) {
    switch (e.length) {
      case 4:
        var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
        return _e(55296 + (t >>> 10)) + _e(56320 + (1023 & t));

      case 3:
        return _e((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

      default:
        return _e((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
    }
}

function le(e) {
    var t = e.length, n = t % 4;
    e = (0 < t ? ve[e.charAt(0)] << 18 : 0) | (1 < t ? ve[e.charAt(1)] << 12 : 0) | (2 < t ? ve[e.charAt(2)] << 6 : 0) | (3 < t ? ve[e.charAt(3)] : 0);
    return (e = [ _e(e >>> 16), _e(e >>> 8 & 255), _e(255 & e) ]).length -= [ 0, 0, 2, 1 ][n], 
    e.join("");
}

var ge = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ve = function(e) {
    for (var t = {}, n = 0, i = e.length; n < i; n++) t[e.charAt(n)] = n;
    return t;
}(ge), _e = String.fromCharCode, ye = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, me = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), Se = function(e, t) {
    return t ? he(String(e)).replace(/[+\/]/g, function(e) {
        return "+" == e ? "-" : "_";
    }).replace(/=/g, "") : he(String(e));
}, Ie = function(e) {
    return function(e) {
        return e.replace(/[\s\S]{1,4}/g, le).replace(me, de);
    }(String(e).replace(/[-_]/g, function(e) {
        return "-" == e ? "+" : "/";
    }).replace(/[^A-Za-z0-9\+\/]/g, ""));
}, Ae = new function() {
    var e = "", t = this;
    this.set = function(t) {
        e = t;
    }, this.get = function() {
        return e;
    }, this.getImpObj = function() {
        return j(Ie(e));
    }, this.getItem = function(e) {
        var n = t.getImpObj();
        return n && n[e] || "";
    }, this.load = function() {
        e = G().get(v.IMPRINT);
    }, this.save = function() {
        e && G().set(v.IMPRINT, e);
    };
}();

function Oe(e, t, n, i) {
    ee().setIdType(w().getIdType()), ee().setIdTracking(w().getIdTracking()), (o = w().getUserId()) && e.analytics && (e.analytics.active_user = {
        puid: o,
        provider: w().getProvider()
    }), o = y(ee().get()), e.header = S(o, e.header, {
        ts: Date.now(),
        testToken: ce,
        traceId: _(10) + Date.now() + _(9)
    });
    var o = function(e) {
        return {
            h: function(e, t) {
                var n = ue(e, t);
                return e && e.id_tracking && (n[t.id_tracking || "id_tracking"] = ue(e.id_tracking, ae)), 
                n;
            }(e.header, se),
            a: function(e, t) {
                var n = {};
                if (e) for (var i in e) e[i] && (n[t[i]] = e[i]);
                return n;
            }(e.analytics, oe)
        };
    }(e), s = V(o);
    o = {
        url: v.LOG_URL,
        method: "POST",
        data: Se(s),
        success: function(i) {
            var o = i.code || i.status || i.statusCode;
            200 === o || 413 === o ? (r().i("数据发送成功: ", e, s), function(e) {
                e && (ee().setItem(v.IMPRINT, e), Ae.set(e), Ae.save(), r().v("imprint: ", Ae.getImpObj()), 
                Ae.getItem("ttn_invalid") && (ce = ""));
            }((i.data || {}).imprint), "function" == typeof t && t(i)) : (r().w("数据发送失败: ", s), 
            "function" == typeof n && n());
        },
        fail: function(e) {
            r().w("超时: ", s), "function" == typeof n && n();
        },
        complete: function() {
            "function" == typeof i && i();
        }
    };
    p.request(S(o, {
        header: {
            "Content-Type": o = p.getSdkType() + "/json",
            "Msg-Type": o
        }
    }));
}

var Ee, we, Te, Ne, ke = (Ee = null, we = !1, Te = [], Ne = new function(e) {
    var t = e, n = [];
    this.enqueue = function(e) {
        "number" == typeof t && this.size() >= t && this.dequeue(), n.push(e);
    }, this.dequeue = function() {
        return n.shift();
    }, this.front = function() {
        return n[0];
    }, this.isEmpty = function() {
        return 0 === n.length;
    }, this.clear = function() {
        n.length = 0;
    }, this.size = function() {
        return n.length;
    }, this.items = function() {
        return n;
    }, this.print = function() {
        console.log(n.toString());
    };
}(50), function() {
    return Ee = Ee || new Ue();
});

function be(e) {
    w().getId() ? we ? r().i("队列正在发送中") : (we = !0, function e(t) {
        var n = Ne.front();
        n ? Oe(n, function() {
            Ne.dequeue(), e(t);
        }, function() {
            var n = Ne.dequeue();
            n && !n.noCache && Te.push(n), e(t);
        }) : (Te.forEach(function(e) {
            Ne.enqueue(e);
        }), Te.length = 0, t());
    }(function() {
        we = !1, "function" == typeof e && e();
    })) : (r().i("获取id标识失败，暂缓发送"), "function" == typeof e && e());
}

function Ue() {
    this.send = function(e, t, n) {
        e ? this.add(e, t, function() {
            be(n);
        }) : be(n);
    }, this.add = function(e, t, n) {
        !function e(t, n, i) {
            if (ee().isLoaded()) {
                n = n || {};
                var r = function(e) {
                    var t = null;
                    switch (e) {
                      case Q:
                        t = function() {
                            var e = null, t = re().cloneCurrentSession();
                            return t && (e = {
                                header: {
                                    st: "1"
                                },
                                analytics: {
                                    sessions: [ t ]
                                }
                            }), e;
                        }();
                        break;

                      case W:
                        t = function() {
                            var e = null, t = {}, n = re().cloneCurrentSession();
                            if (n) {
                                var i = T().get(), r = D().get();
                                Array.isArray(i) && i.length && (n.pages = y(i)), Array.isArray(r) && r.length && (n.shares = y(r)), 
                                T().clear(), D().clear(), t.sessions = [ n ];
                            }
                            return (n = X().getEkvs()) && (t.ekvs = y(n), X().clear()), (t.sessions || t.ekvs) && (e = {
                                analytics: t
                            }), e;
                        }();
                        break;

                      case Z:
                        t = function() {
                            var e = null, t = X().getEkvs();
                            return t && (e = {
                                analytics: {
                                    ekvs: y(t)
                                }
                            }, X().clear()), e;
                        }();
                    }
                    return t;
                }(t);
                if (r) {
                    var o = ee().getRealtimeFields();
                    r.header = S({}, r.header, o), r.noCache = n.noCache, Ne.enqueue(r);
                }
                "function" == typeof i && i();
            } else setTimeout(function() {
                e(t, n, i);
            }, 100);
        }(e, t, n);
    }, this.load = function() {
        var e = G().get(v.REQUESTS);
        e && e.length && e.forEach(function(e) {
            Ne.enqueue(e);
        }), G().remove(v.REQUESTS);
    }, this.save = function() {
        G().set(v.REQUESTS, y(Ne.items())), Ne.clear();
    };
}

var Re, De = (Re = null, function() {
    return Re = Re || new Pe();
});

function Pe() {
    this.update = function() {
        p.getUserInfo(function(e) {
            if (e) {
                var t = G().get(v.USER_INFO);
                t && I(e, t) || function(e, t) {
                    var n = a().appKey(), i = p.getSdkType(), o = w().getId(), s = w().getIdType();
                    n && i && o && s && (s = {
                        ak: a().appKey(),
                        sdt: p.getSdkType(),
                        uin: e.nickName,
                        uia: e.avatar,
                        uig: e.gender,
                        uit: e.country,
                        uip: e.province,
                        uic: e.city,
                        uil: e.language,
                        id: w().getId(),
                        it: w().getIdType()
                    }, s = JSON.stringify(s), s = Se(s), p.request({
                        url: v.USERINFO_URL,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: "ui=" + s,
                        success: function(n) {
                            r().v("用户信息上传成功: ", e), t && t(n && n.data && 200 === n.data.code);
                        },
                        fail: function() {
                            r().e("用户信息上传失败: ", e), t && t(!1);
                        }
                    }));
                }(e, function(t) {
                    t && G().set(v.USER_INFO, e);
                });
            }
        });
    };
}

function Le(e, t) {
    this.id = e, this.ts = Date.now();
    var i = n(t);
    if ("string" == i && t) this[e] = t; else if ("object" == i) for (var r in t) !{}.hasOwnProperty.call(t, r) || (this[r] = t[r]);
}

function Ce() {
    var e = !1, t = !1, i = 0;
    this.init = function(t) {
        r().v("sdk version: " + v.IMPL_VERSION), e ? r().v("Lib重复实例化") : G().load(function() {
            r().v("cache初始化成功: ", G().getAll()), w().setUseOpenid && w().setUseOpenid(a().useOpenid()), 
            w().init(function() {
                ee().init(), r().v("Header初始化成功");
            }), e = !0, "function" == typeof t && t(), r().tip("SDK集成成功");
        });
    }, this.resume = function(n) {
        var i;
        e && !t && (r().v("showOptions: ", n), t = !0, a().enableVerify() && n && n.query && (i = n.query._ttn, 
        ce = i || ce), this._resume(n));
    }, this._resume = function(e) {
        ke().load();
        var t = re().resume(e);
        e = re().getCurrentSessionId();
        X().setSessionId(e), t && ke().add(Q, {}, function() {
            w().setUseOpenid && w().setUseOpenid(a().useOpenid()), a().useOpenid() && a().autoGetOpenid() && !w().getId() ? (r().v("get id async"), 
            function e(t, n) {
                w().getId() || t <= 0 || w().getOpenIdAsync(a().appKey(), function(i) {
                    i ? (r().v("获取id成功"), ke().send()) : (r().v("获取openid失败,启动重试,剩余可用次数", t - 1), setTimeout(function() {
                        e(t - 1, n);
                    }, n));
                });
            }(10, 3e3)) : (r().v("session auto send"), ke().send());
        });
    }, this.pause = function(n) {
        e && (t = !1, i = 0, re().pause(), a().uploadUserInfo() && De().update(), ke().send(W, {}, function() {
            ke().save(), G().save(), r().v("cache save success"), "function" == typeof n && n();
        }));
    }, this.setOpenid = function(e) {
        r().v("setOpenId: %s", e), w().setOpenid(e), ke().send();
    }, this.setUnionid = function(e) {
        r().v("setUnionid: %s", e), w().setUnionid(e);
    }, this.setUserid = function(e, t) {
        r().v("setUserid: %s", e, t), w().setUserid(e, t);
    }, this.setAnonymousid = function(e) {
        r().v("setAnonymousId: %s", e), w().setAnonymousid(e), ke().send();
    }, this.setAppVersion = function(e) {
        e && "string" != typeof e ? r().w("setAppVersion方法只接受字符串类型参数") : ee().setAppVersion(e);
    }, this.setAlipayUserid = function(e) {
        e && "string" != typeof e ? r().w("setAlipayUserid方法只接受字符串类型参数") : (r().v("setAlipayUserid: %s", e), 
        w().setAlipayUserid(e));
    }, this.setDeviceId = function(e) {
        if ("string" == typeof e) return w().setDeviceId(e), e;
    }, this.setSuperProperty = function(e) {
        if (e && "string" != typeof e) r().w("超级属性只支持字符串类型"); else {
            var t = this;
            ee().getSuperProperty() !== e && (ee().setSuperProperty(e), t.pause(function() {
                t.resume();
            }));
        }
    }, this.trackEvent = function(t, o) {
        if (e && (r().v("event: ", t, o), function(e, t) {
            if (e && "string" == typeof e) {
                var i = [ "id", "ts", "du" ], o = {};
                if (i.forEach(function(e) {
                    o[e] = 1;
                }), o[e]) r().e("eventId不能与以下保留字冲突: " + i.join(",")); else if (e.length > v.MAX_EVENTID_LENGTH) r().e("The maximum length of event id shall not exceed " + v.MAX_EVENTID_LENGTH); else {
                    if (!t || "object" == n(t) && !Array.isArray(t) || "string" == typeof t) {
                        if ("object" == n(t)) {
                            var s, a = 0;
                            for (s in t) if ({}.hasOwnProperty.call(t, s)) {
                                if (s.length > v.MAX_PROPERTY_KEY_LENGTH) return void r().e("The maximum length of property key shall not exceed " + v.MAX_PROPERTY_KEY_LENGTH);
                                if (a >= v.MAX_PROPERTY_KEYS_COUNT) return void r().e("The maximum count of properties shall not exceed " + v.MAX_PROPERTY_KEYS_COUNT);
                                if (o[s]) return void r().e("属性中的key不能与以下保留字冲突: " + i.join(","));
                                a += 1;
                            }
                        }
                        return 1;
                    }
                    r().e("please check trackEvent properties. properties should be string or object(not include Array)");
                }
            } else r().e('please check trackEvent id. id should be "string" and not null');
        }(t, o))) {
            var s = new Le(t, o);
            X().addEvent(s);
            var a = !!ce;
            t = a ? 0 : v.EVENT_SEND_DEFAULT_INTERVAL;
            s = o = Date.now(), t = t, ("number" != typeof i || "number" != typeof t || i <= 0 || t < s - i) && (i = o, 
            ke().send(Z, {
                noCache: a
            }, function() {}));
        }
    }, this.trackShare = function(t) {
        if (e) {
            try {
                -1 < p.getSdkType().indexOf("game") ? (t = D().add(t, !0), r().v("shareQuery: ", t)) : (t = D().add(t, !1), 
                r().v("sharePath: ", t.path));
            } catch (t) {
                r().v("shareAppMessage: ", t);
            }
            return t;
        }
    }, this.trackPageStart = function(t) {
        e && T().addPageStart(t);
    }, this.trackPageEnd = function(t) {
        e && T().addPageEnd(t);
    }, this.onShareAppMessage = function(e) {
        var t = this;
        p.onShareAppMessage(function() {
            return t.trackShare(e());
        });
    }, this.shareAppMessage = function(e) {
        this.trackShare(e), p.shareAppMessage(e);
    };
}

var Me = [];

function xe() {}

xe.prototype = {
    createMethod: function(e, t, n) {
        try {
            e[t] = n && n[t] ? function() {
                return n[t].apply(n, arguments);
            } : function() {
                Me.push([ t, [].slice.call(arguments) ]);
            };
        } catch (e) {
            r().v("create method errror: ", e);
        }
    },
    installApi: function(e, t) {
        try {
            for (var n = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,setSuperProperty".split(","), i = 0, o = n.length; i < o; i++) this.createMethod(e, n[i], t);
            if (t) for (i = 0, o = Me.length; i < o; i++) {
                var s = Me[i];
                try {
                    t[s[0]].apply(t, s[1]);
                } catch (e) {
                    r().v("impl[v[0]].apply error: ", s[0], e);
                }
            }
        } catch (e) {
            r().v("install api errror: ", e);
        }
    }
};

var Ve = [ "https://umini.shujupie.com", "https://ulogs.umeng.com" ], je = 0;

!function(e) {
    setTimeout(function() {
        !function e(t, n) {
            t >= Ve.length || n ? (n && function() {
                var e = "https://umini.shujupie.com";
                v.LOG_URL = v.LOG_URL.replace(e, Ve[je]), v.GET_OPENID_URL = v.GET_OPENID_URL.replace(e, Ve[je]), 
                v.USERINFO_URL = v.USERINFO_URL.replace(e, Ve[je]);
            }(), n && r().v("命中可用服务", Ve[je]), n || r().tip_w("未命中可用服务")) : p.request({
                url: Ve[t] + "/uminiprogram_logs/ckdh",
                success: function(n) {
                    200 === (n.code || n.status || n.statusCode) && n.data && 200 === n.data.code ? e((je = t) + 1, !0) : e(t + 1, !1);
                },
                fail: function() {
                    e(t + 1, !1);
                }
            });
        }(0, !1);
    }, e);
}(3e3);

var Ge = new xe(), Fe = {
    _inited: !1,
    _log: r(),
    use: function(e, t) {
        return e && O(e.install) ? e.install(Fe, t) : O(e) && e(Fe, t), Fe;
    },
    messager: f,
    init: function(e) {
        if (this._inited) r().v("已经实例过，请避免重复初始化"); else if (e) if (e.appKey) {
            "boolean" != typeof e.useOpenid && (e.useOpenid = !0), a().set(e), r().setDebug(e.debug), 
            this._inited = !0;
            var t = this;
            f.emit(f.messageType.CONFIG_LOADED, e);
            try {
                var n = new Ce();
                r().v("成功创建Lib对象"), n.init(function() {
                    r().v("Lib对象初始化成功"), Ge.installApi(t, n), r().v("安装Lib接口成功"), f.emit(f.messageType.UMA_LIB_INITED, e);
                });
            } catch (e) {
                r().w("创建Lib对象异常: " + e);
            }
        } else r().err("请确保传入正确的appkey"); else r().err("请正确设置相关信息！");
    }
};

try {
    Ge.installApi(Fe, null);
} catch (e) {
    r().w("uma赋值异常: ", e);
}

var qe = "https://ucc.umeng.com/v1/mini/fetch", Ke = "https://pslog.umeng.com/mini_ablog", He = "2.6.2", Ye = "none", Je = {}, Xe = Array.isArray;

Je.isArray = Xe || function(e) {
    return "[object Array]" === toString.call(e);
}, Je.isObject = function(e) {
    return e === Object(e) && !Je.isArray(e);
}, Je.isEmptyObject = function(e) {
    if (Je.isObject(e)) {
        for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
        return !0;
    }
    return !1;
}, Je.isUndefined = function(e) {
    return void 0 === e;
}, Je.isString = function(e) {
    return "[object String]" === toString.call(e);
}, Je.isDate = function(e) {
    return "[object Date]" === toString.call(e);
}, Je.isNumber = function(e) {
    return "[object Number]" === toString.call(e);
}, Je.each = function(e, t, n) {
    if (null != e) {
        var i = {}, r = Array.prototype.forEach;
        if (r && e.forEach === r) e.forEach(t, n); else if (e.length === +e.length) {
            for (var o = 0, s = e.length; o < s; o++) if (o in e && t.call(n, e[o], o, e) === i) return;
        } else for (var a in e) if (hasOwnProperty.call(e, a) && t.call(n, e[a], a, e) === i) return;
    }
}, Je.buildQuery = function(e, t) {
    var n, i, r = [];
    return void 0 === t && (t = "&"), Je.each(e, function(e, t) {
        n = encodeURIComponent(e.toString()), i = encodeURIComponent(t), r[r.length] = i + "=" + n;
    }), r.join(t);
}, Je.JSONDecode = function(e) {
    if (e) {
        try {
            return JSON.parse(e);
        } catch (e) {
            console.error("JSONDecode error", e);
        }
        return null;
    }
}, Je.JSONEncode = function(e) {
    try {
        return JSON.stringify(e);
    } catch (e) {
        console.error("JSONEncode error", e);
    }
};

var ze = Object.create(null);

var Be = Object.create(null), Qe = null, We = !1, Ze = {
    minFetchIntervalSeconds: 43200
};

function $e(e) {
    e && Je.each(e, function(e) {
        Be[e.k] = e;
    });
}

function et() {
    var e = this;
    this.STORAGE_NAME = null, f.once(f.messageType.CONFIG_LOADED, function(t) {
        r().v("云配初始化开始..."), e.init(t);
    });
}

et.prototype = {
    setDefaultValues: function(e) {
        We && Je.isObject(e) && Je.each(e, function(e, t) {
            Be[t] && Be[t].v || (Be[t] = {
                v: e
            });
        });
    },
    getValue: function(e) {
        r().v("从配置项中读取 value, 当前配置为: ", Be), r().v("待读取的 key : ", e);
        try {
            if (!We) return;
            var t = Be[e] || {};
            return r().v("读取相应配置ing..., 结果为: ", t), Je.isNumber(t.e) && Je.isNumber(t.g) && (r().v("读取到相应配置, 开始数据上报..."), 
            function(e) {
                var t = {
                    appkey: a().appKey(),
                    sdkType: p.getSdkType(),
                    expId: e && e.e,
                    groupId: e && e.g,
                    clientTs: Date.now(),
                    key: e && e.k,
                    value: e && e.v,
                    umid: w().getId()
                };
                try {
                    p.request({
                        url: Ke,
                        method: "POST",
                        data: [ t ],
                        success: function(e) {
                            e && 200 === e.statusCode ? r().v("上传数据成功", t) : r().w("ablog 请求成功, 返回结果异常 ", e);
                        },
                        fail: function(e) {
                            r().w("ablog 请求数据错误 ", t, e);
                        }
                    });
                } catch (e) {
                    r().w("urequest 调用错误", e);
                }
            }(t)), t.v;
        } catch (t) {
            r().w("getValue error, key: ", e);
        }
    },
    active: function(e) {
        try {
            if (!We) return;
            var t, n;
            e && e.params && (t = e.params), e && e.callback && (n = e.callback), r().v("激活配置项: ", t), 
            t ? (r().v("本地已缓存的配置项: ", Be), $e(t), r().v("合并后的配置项: ", Be), n && n(Be), r().v("active 结束")) : (r().v("配置项为空!! 读取本地配置..."), 
            p.getStorage(this.STORAGE_NAME, function(e) {
                e ? ($e((e = Je.JSONDecode(e) || {}).params), r().v("当前本地配置项为: ", Be), n && n(Be), 
                r().v("active 结束")) : r().v("当前本地配置项为空, 退出激活");
            }));
        } catch (e) {
            r().w("SDK active 错误", e);
        }
    },
    init: function(e) {
        e.appKey && (Qe = e.appKey, this.STORAGE_NAME = "um_remote_config_{{" + Qe + "}}"), 
        Qe ? We ? r().w("SDK 已经初始化, 请避免重复初始化") : (We = !0, this.setOptions(e), this.active()) : r().err("请检查您的小程序 appKey, appKey 不能为空");
    },
    setOptions: function(e) {
        Je.isObject(e) && (e = e.minFetchIntervalSeconds, Je.isNumber(e) && (Ze.minFetchIntervalSeconds = Math.max(e, 5)));
    },
    fetch: function(e) {
        if (We && this.STORAGE_NAME) {
            var t, n;
            e && e.active && (t = e.active), e && e.callback && (n = e.callback);
            var i = this;
            p.getStorage(this.STORAGE_NAME, function(e) {
                r().v("开始读缓存 data is ", e), (e = Je.JSONDecode(e) || {}).params && e.ts && Date.now() - e.ts < 1e3 * Ze.minFetchIntervalSeconds ? (r().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch"), 
                n && n(e.params)) : function(e) {
                    r().v("开始构建 fetch body"), p.getSystemInfo(function(t) {
                        p.getNetworkInfo(function(n) {
                            n = (n = (n = n || {}).networkType) === Ye ? "unknown" : n.toUpperCase(), ze.access = n, 
                            function(e, t) {
                                var n = e.brand || "";
                                ze.deviceType = "Phone", ze.sdkVersion = He, ze.appkey = a().appKey(), ze.sdkType = p.getSdkType(), 
                                ze.umid = w().getId(), e && (ze.language = e.language || "", ze.os = e.OS, ze.osVersion = e.OSVersion, 
                                ze.deviceName = e.deviceName, ze.platformVersion = e.platformVersion, ze.platformSdkVersion = e.platformSDKVersion, 
                                ze.deviceBrand = n, e = e.resolution.split("*"), Je.isArray(e) && (ze.resolutionHeight = Number(e[0]), 
                                ze.resolutionWidth = Number(e[1]))), function(e) {
                                    e && (ze.installTime = e.install_datetime && Date.parse(e.install_datetime), ze.scene = e.install_scene, 
                                    ze.channel = e.install_channel, ze.campaign = e.install_campaign);
                                }(Ae.getImpObj()), t && t(ze);
                            }(t, e);
                        });
                    });
                }(function(e) {
                    r().v("缓存数据不存在, 构建 fetch body :", e);
                    try {
                        p.request({
                            url: qe,
                            method: "POST",
                            data: e,
                            success: function(e) {
                                if (e && 200 === e.statusCode && e.data && e.data.cc) {
                                    r().v("fetch 请求成功, 响应数据: ", e.data);
                                    var o = Object.create(null);
                                    Je.each(e.data.cc, function(e) {
                                        o[e.k] = e;
                                    });
                                    var s = {
                                        ts: Date.now(),
                                        params: o
                                    };
                                    r().v("开始缓存 fetch 请求的云配置结果..."), p.setStorage(i.STORAGE_NAME, Je.JSONEncode(s), function(e) {
                                        r().v("缓存云配置成功, 缓存数据为: ", s), r().v("缓存云配置成功, 成功消息为: ", e), r().v("云配拉取数据是否自动激活: ", t), 
                                        e && t && (r().v("激活云配置..."), i.active({
                                            params: o,
                                            callback: n
                                        }));
                                    });
                                } else r().w("fetch 请求成功,返回结果异常 ", e.data), n && n();
                            },
                            fail: function(t) {
                                r().w("fetch请求数据错误 ", e, t), n && n();
                            }
                        });
                    } catch (e) {
                        r().w("urequest调用错误", e);
                    }
                });
            });
        }
    }
};

Xe = {
    install: function(e, t) {
        return e.rc || (e.rc = new et()), e.messager.once(e.messager.messageType.CONFIG_LOADED, function() {
            e._log.v("plugin rc installed");
        }), e.rc;
    }
};

var tt = "", nt = {};

function it(e) {
    e && (tt = e);
}

function rt(e, t) {
    if (e.onShareAppMessage) {
        var n = e.onShareAppMessage;
        e.onShareAppMessage = function(e) {
            var i = n.call(this, e) || {};
            e = function(e, t) {
                if (!e) return "";
                var n, i = [];
                for (n in t) "_um_ssrc" !== n && "_um_sts" !== n && i.push(n + "=" + t[n]);
                var r = i.join("&");
                return r ? e + "?" + r : e;
            }(tt, nt[tt]);
            return !i.path && e && (i.path = e), t.trackShare.call(this, i);
        };
    }
}

function ot(e, t, n) {
    var i = e[t];
    e[t] = function(e) {
        n.call(this, e), i && i.call(this, e);
    };
}

function st(e) {
    try {
        Fe.resume(e, !0);
    } catch (e) {
        r().v("onAppShow: ", e);
    }
}

function at() {
    try {
        Fe.pause();
    } catch (e) {
        r().v("onAppHide: ", e);
    }
}

function ut() {
    try {
        it(this.route), Fe.trackPageStart(this.route);
    } catch (e) {
        r().v("onPageShow: ", e);
    }
}

function ct(e) {
    try {
        it(this.route), e && (t = this.route, n = e, t && (nt[t] = n)), r().v("Page onLoad: ", this.route, e);
    } catch (e) {
        r().v("onPageLoad: ", e);
    }
    var t, n;
}

function ft() {
    try {
        Fe.trackPageEnd(this.route);
    } catch (e) {
        r().v("onPageHide: ", e);
    }
}

try {
    var pt = App;
    App = function(e) {
        ot(e, "onLaunch", function() {
            !function(e) {
                try {
                    Fe.init(e);
                } catch (e) {
                    r().v("onAppLaunch: ", e);
                }
            }(e.umengConfig);
        }), ot(e, "onShow", st), ot(e, "onHide", at), pt(e);
    };
} catch (e) {
    r().w("App重写异常");
}

try {
    var ht = Page;
    Page = function(e) {
        ot(e, "onShow", ut), ot(e, "onHide", ft), ot(e, "onUnload", ft), ot(e, "onLoad", ct), 
        rt(e, Fe), ht(e);
    };
} catch (e) {
    r().w("Page重写异常");
}

try {
    var dt = Component;
    Component = function(e) {
        try {
            e.methods = e.methods || {};
            var t = e.methods;
            ot(t, "onShow", ut), ot(t, "onHide", ft), ot(t, "onUnload", ft), ot(t, "onLoad", ct), 
            rt(t, Fe), dt(e);
        } catch (t) {
            dt(e);
        }
    };
} catch (e) {
    r().w("Component重写异常");
}

var lt = Fe.init;

Fe.init = function(e) {
    e && e.useOpenid && (r().tip_w(r().repeat("!")), r().tip_w("openid已开启，请确保使用setOpenid设置openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取"), 
    r().tip_w(r().repeat("!"))), lt.call(Fe, e);
}, Fe.use(Xe), wx.uma = Fe, module.exports = Fe;
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isDef = e, exports.isObj = function(e) {
    var n = t(e);
    return null !== e && ("object" === n || "function" === n);
}, exports.isNumber = n, exports.range = function(t, e, n) {
    return Math.min(Math.max(t, e), n);
}, exports.nextTick = function(t) {
    setTimeout(function() {
        t();
    }, 1e3 / 30);
}, exports.getSystemInfoSync = function() {
    null == r && (r = wx.getSystemInfoSync());
    return r;
}, exports.addUnit = function(t) {
    if (!e(t)) return;
    return n(t = String(t)) ? "".concat(t, "px") : t;
};

var t = require("../../@babel/runtime/helpers/typeof");

function e(t) {
    return null != t;
}

function n(t) {
    return /^\d+(\.\d+)?$/.test(t);
}

var r = null;
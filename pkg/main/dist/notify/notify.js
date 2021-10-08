Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = o;

var e = {
    selector: "#van-notify",
    type: "danger",
    message: "",
    background: "",
    duration: 3e3,
    zIndex: 110,
    color: require("../common/color").WHITE,
    onClick: function() {},
    onOpened: function() {},
    onClose: function() {}
};

function t(e) {
    return "string" == typeof e ? {
        message: e
    } : e;
}

function n() {
    var e = getCurrentPages();
    return e[e.length - 1];
}

function o(o) {
    var r = ((o = Object.assign({}, e, t(o))).context || n()).selectComponent(o.selector);
    if (delete o.context, delete o.selector, r) return r.set(o), r.show(), r;
    console.warn("未找到 van-notify 节点，请确认 selector 及 context 是否正确");
}

o.clear = function(o) {
    var r = ((o = Object.assign({}, e, t(o))).context || n()).selectComponent(o.selector);
    r && r.hide();
};
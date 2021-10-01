Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = {
    locale: null,
    locales: {},
    langCode: [ "zh_jian", "zh_TW" ]
};

e.registerLocale = function(a) {
    e.locales = a;
}, e.setLocale = function(a) {
    e.locale = a;
}, e.setLocaleByIndex = function(a) {
    a, e.setLocale(e.langCode[a]), e.setTabBarLang(a);
}, e.getLanguage = function() {
    return e.locales[e.locale];
};

var a = [ [ "首页", "包裹", "订单", "我的" ], [ "首頁", "包裹", "訂單", "我的" ] ];

e.setTabBarLang = function(e) {
    a[e].forEach(function(e, a) {
        wx.setTabBarItem({
            index: a,
            text: e
        });
    });
};

var t = e;

exports.default = t;
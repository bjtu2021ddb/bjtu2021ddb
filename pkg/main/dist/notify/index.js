var t = require("../common/component"), e = require("../common/color");

(0, t.VantComponent)({
    props: {
        message: String,
        background: String,
        type: {
            type: String,
            value: "danger"
        },
        color: {
            type: String,
            value: e.WHITE
        },
        duration: {
            type: Number,
            value: 3e3
        },
        zIndex: {
            type: Number,
            value: 110
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: !1
        }
    },
    created: function() {
        var t = wx.getSystemInfoSync().statusBarHeight;
        this.setData({
            statusBarHeight: t
        });
    },
    methods: {
        show: function() {
            var t = this, e = this.data, a = e.duration, n = e.onOpened, o = e.brateLong;
            clearTimeout(this.timer), this.setData({
                show: !0
            }, n), o && wx.vibrateLong({
                success: function(t) {},
                fail: function(t) {}
            }), a > 0 && a !== 1 / 0 && (this.timer = setTimeout(function() {
                t.hide();
            }, a));
        },
        hide: function() {
            var t = this.data.onClose;
            clearTimeout(this.timer), this.setData({
                show: !1
            }, t);
        },
        onTap: function(t) {
            var e = this.data.onClick;
            e && e(t.detail);
        }
    }
});
var t = require("../common/utils"), e = require("../common/component"), o = require("../mixins/button"), i = require("../mixins/open-type"), n = {
    none: "center",
    fill: "scaleToFill",
    cover: "aspectFill",
    contain: "aspectFit"
};

(0, e.VantComponent)({
    mixins: [ o.button, i.openType ],
    classes: [ "custom-class", "loading-class", "error-class", "image-class" ],
    props: {
        src: String,
        round: Boolean,
        width: {
            type: null,
            observer: "setStyle"
        },
        height: {
            type: null,
            observer: "setStyle"
        },
        radius: null,
        lazyLoad: Boolean,
        useErrorSlot: Boolean,
        useLoadingSlot: Boolean,
        showMenuByLongpress: Boolean,
        fit: {
            type: String,
            value: "fill",
            observer: "setMode"
        },
        showError: {
            type: Boolean,
            value: !0
        },
        showLoading: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        error: !1,
        loading: !0
    },
    watch: {
        src: function() {
            this.setData({
                error: !1,
                loading: !0
            });
        }
    },
    mounted: function() {
        this.setMode(), this.setStyle();
    },
    methods: {
        setMode: function() {
            this.setData({
                mode: n[this.data.fit]
            });
        },
        setStyle: function() {
            var e = this.data, o = e.width, i = e.height, n = e.radius, s = "";
            (0, t.isDef)(o) && (s += "width: ".concat((0, t.addUnit)(o), ";")), (0, t.isDef)(i) && (s += "height: ".concat((0, 
            t.addUnit)(i), ";")), (0, t.isDef)(n) && (s += "overflow: hidden;", s += "border-radius: ".concat((0, 
            t.addUnit)(n), ";")), this.setData({
                style: s
            });
        },
        onLoad: function(t) {
            this.setData({
                loading: !1
            }), this.$emit("load", t.detail);
        },
        onError: function(t) {
            this.setData({
                loading: !1,
                error: !0
            }), this.$emit("error", t.detail);
        },
        onClick: function(t) {
            this.$emit("click", t.detail);
        }
    }
});
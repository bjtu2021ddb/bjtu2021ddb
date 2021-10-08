var t = require("../common/component"), e = require("../common/utils");

(0, t.VantComponent)({
    field: !0,
    classes: [ "icon-class" ],
    props: {
        value: Number,
        readonly: Boolean,
        disabled: Boolean,
        allowHalf: Boolean,
        size: {
            type: null,
            observer: "setSizeWithUnit"
        },
        icon: {
            type: String,
            value: "star"
        },
        voidIcon: {
            type: String,
            value: "star-o"
        },
        color: {
            type: String,
            value: "#ffd21e"
        },
        voidColor: {
            type: String,
            value: "#c7c7c7"
        },
        disabledColor: {
            type: String,
            value: "#bdbdbd"
        },
        count: {
            type: Number,
            value: 5
        },
        gutter: {
            type: null,
            observer: "setGutterWithUnit"
        },
        touchable: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        innerValue: 0,
        gutterWithUnit: void 0,
        sizeWithUnit: null
    },
    watch: {
        value: function(t) {
            t !== this.data.innerValue && this.setData({
                innerValue: t
            });
        }
    },
    methods: {
        setGutterWithUnit: function(t) {
            this.setData({
                gutterWithUnit: (0, e.addUnit)(t)
            });
        },
        setSizeWithUnit: function(t) {
            this.setData({
                sizeWithUnit: (0, e.addUnit)(t)
            });
        },
        onSelect: function(t) {
            var e = this.data, n = t.currentTarget.dataset.score;
            e.disabled || e.readonly || (this.setData({
                innerValue: n + 1
            }), this.$emit("input", n + 1), this.$emit("change", n + 1));
        },
        onTouchMove: function(t) {
            var e = this;
            if (this.data.touchable) {
                var n = t.touches[0].clientX;
                this.getRect(".van-rate__icon", !0).then(function(i) {
                    var a = i.sort(function(t) {
                        return t.right - t.left;
                    }).find(function(t) {
                        return n >= t.left && n <= t.right;
                    });
                    null != a && e.onSelect(Object.assign(Object.assign({}, t), {
                        currentTarget: a
                    }));
                });
            }
        }
    }
});
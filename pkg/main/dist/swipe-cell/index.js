var t = require("../common/component"), i = require("../mixins/touch"), e = require("../common/utils"), s = [];

(0, t.VantComponent)({
    props: {
        disabled: Boolean,
        leftWidth: {
            type: Number,
            value: 0
        },
        rightWidth: {
            type: Number,
            value: 0
        },
        asyncClose: Boolean,
        name: {
            type: [ Number, String ],
            value: ""
        }
    },
    mixins: [ i.touch ],
    data: {
        catchMove: !1
    },
    created: function() {
        this.offset = 0, s.push(this);
    },
    destroyed: function() {
        var t = this;
        s = s.filter(function(i) {
            return i !== t;
        });
    },
    methods: {
        open: function(t) {
            var i = this.data, e = i.leftWidth, s = i.rightWidth, n = "left" === t ? e : -s;
            this.swipeMove(n), this.$emit("open", {
                position: t,
                name: this.data.name
            });
        },
        close: function() {
            this.swipeMove(0);
        },
        swipeMove: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.offset = (0, e.range)(t, -this.data.rightWidth, this.data.leftWidth);
            var i = "translate3d(".concat(this.offset, "px, 0, 0)"), s = this.dragging ? "none" : "transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)";
            this.setData({
                wrapperStyle: "\n        -webkit-transform: ".concat(i, ";\n        -webkit-transition: ").concat(s, ";\n        transform: ").concat(i, ";\n        transition: ").concat(s, ";\n      ")
            });
        },
        swipeLeaveTransition: function() {
            var t = this.data, i = t.leftWidth, e = t.rightWidth, s = this.offset;
            e > 0 && -s > .3 * e ? this.open("right") : i > 0 && s > .3 * i ? this.open("left") : this.swipeMove(0), 
            this.setData({
                catchMove: !1
            });
        },
        startDrag: function(t) {
            this.data.disabled || (this.startOffset = this.offset, this.touchStart(t));
        },
        noop: function() {},
        onDrag: function(t) {
            var i = this;
            this.data.disabled || (this.touchMove(t), "horizontal" === this.direction && (this.dragging = !0, 
            s.filter(function(t) {
                return t !== i;
            }).forEach(function(t) {
                return t.close();
            }), this.setData({
                catchMove: !0
            }), this.swipeMove(this.startOffset + this.deltaX)));
        },
        endDrag: function() {
            this.data.disabled || (this.dragging = !1, this.swipeLeaveTransition());
        },
        onClick: function(t) {
            var i = t.currentTarget.dataset.key, e = void 0 === i ? "outside" : i;
            this.$emit("click", e), this.offset && (this.data.asyncClose ? this.$emit("close", {
                position: e,
                instance: this,
                name: this.data.name
            }) : this.swipeMove(0));
        }
    }
});
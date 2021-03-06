var t = require("../common/component"), e = require("../common/utils");

(0, t.VantComponent)({
    field: !0,
    classes: [ "input-class", "plus-class", "minus-class" ],
    props: {
        value: null,
        integer: Boolean,
        disabled: Boolean,
        inputWidth: null,
        buttonSize: null,
        asyncChange: Boolean,
        disableInput: Boolean,
        decimalLength: {
            type: Number,
            value: null
        },
        min: {
            type: null,
            value: 1
        },
        max: {
            type: null,
            value: Number.MAX_SAFE_INTEGER
        },
        step: {
            type: null,
            value: 1
        },
        showPlus: {
            type: Boolean,
            value: !0
        },
        showMinus: {
            type: Boolean,
            value: !0
        },
        disablePlus: Boolean,
        disableMinus: Boolean
    },
    watch: {
        value: function(t) {
            if ("" !== t) {
                var e = this.range(t);
                "number" == typeof e && +this.data.value !== e && this.setData({
                    value: e
                });
            }
        },
        inputWidth: function() {
            this.set({
                inputStyle: this.computeInputStyle()
            });
        },
        buttonSize: function() {
            this.set({
                inputStyle: this.computeInputStyle(),
                buttonStyle: this.computeButtonStyle()
            });
        }
    },
    data: {
        focus: !1,
        inputStyle: "",
        buttonStyle: ""
    },
    created: function() {
        this.setData({
            value: this.range(this.data.value)
        });
    },
    methods: {
        isDisabled: function(t) {
            return "plus" === t ? this.data.disabled || this.data.disablePlus || this.data.value >= this.data.max : this.data.disabled || this.data.disableMinus || this.data.value <= this.data.min;
        },
        onFocus: function(t) {
            this.$emit("focus", t.detail);
        },
        onBlur: function(t) {
            var e = this.range(this.data.value);
            this.triggerInput(e), this.$emit("blur", t.detail);
        },
        range: function(t) {
            return t = "" === (t = String(t).replace(/[^0-9.-]/g, "")) ? 0 : +t, t = Math.max(Math.min(this.data.max, t), this.data.min), 
            (0, e.isDef)(this.data.decimalLength) && (t = t.toFixed(this.data.decimalLength)), 
            t;
        },
        onInput: function(t) {
            var e = (t.detail || {}).value, a = void 0 === e ? "" : e;
            this.triggerInput(a);
        },
        onChange: function() {
            var t = this.type;
            if (this.isDisabled(t)) this.$emit("overlimit", t); else {
                var e, a, i, n = "minus" === t ? -this.data.step : +this.data.step, s = (e = +this.data.value, 
                a = n, i = Math.pow(10, 10), Math.round((e + a) * i) / i);
                this.triggerInput(this.range(s)), this.$emit(t);
            }
        },
        longPressStep: function() {
            var t = this;
            this.longPressTimer = setTimeout(function() {
                t.onChange(), t.longPressStep();
            }, 200);
        },
        onTap: function(t) {
            var e = t.currentTarget.dataset.type;
            this.type = e, this.onChange();
        },
        onTouchStart: function(t) {
            var e = this;
            clearTimeout(this.longPressTimer);
            var a = t.currentTarget.dataset.type;
            this.type = a, this.isLongPress = !1, this.longPressTimer = setTimeout(function() {
                e.isLongPress = !0, e.onChange(), e.longPressStep();
            }, 600);
        },
        onTouchEnd: function() {
            clearTimeout(this.longPressTimer);
        },
        triggerInput: function(t) {
            this.setData({
                value: this.data.asyncChange ? this.data.value : t
            }), this.$emit("change", t);
        },
        computeInputStyle: function() {
            var t = "";
            return this.data.inputWidth && (t = "width: ".concat((0, e.addUnit)(this.data.inputWidth), ";")), 
            this.data.buttonSize && (t += "height: ".concat((0, e.addUnit)(this.data.buttonSize), ";")), 
            t;
        },
        computeButtonStyle: function() {
            var t = "", a = (0, e.addUnit)(this.data.buttonSize);
            return this.data.buttonSize && (t = "width: ".concat(a, ";height: ").concat(a, ";")), 
            t;
        }
    }
});
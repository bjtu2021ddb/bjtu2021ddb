var e = require("../common/component"), t = require("../common/utils");

function i(e, t) {
    e.$emit("input", t), e.$emit("change", t);
}

(0, e.VantComponent)({
    field: !0,
    relation: {
        name: "checkbox-group",
        type: "ancestor",
        linked: function(e) {
            this.parent = e;
        },
        unlinked: function() {
            this.parent = null;
        }
    },
    classes: [ "icon-class", "label-class" ],
    props: {
        value: Boolean,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: String,
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: "round"
        },
        iconSize: {
            type: null,
            observer: "setSizeWithUnit"
        }
    },
    data: {
        sizeWithUnit: "20px"
    },
    methods: {
        emitChange: function(e) {
            this.parent ? this.setParentValue(this.parent, e) : i(this, e);
        },
        toggle: function() {
            var e = this.data, t = e.disabled, i = e.value;
            t || this.emitChange(!i);
        },
        onClickLabel: function() {
            var e = this.data, t = e.labelDisabled, i = e.disabled, n = e.value;
            i || t || this.emitChange(!n);
        },
        setParentValue: function(e, t) {
            var n = e.data.value.slice(), a = this.data.name, l = e.data.max;
            if (t) {
                if (l && n.length >= l) return;
                -1 === n.indexOf(a) && (n.push(a), i(e, n));
            } else {
                var s = n.indexOf(a);
                -1 !== s && (n.splice(s, 1), i(e, n));
            }
        },
        setSizeWithUnit: function(e) {
            this.set({
                sizeWithUnit: (0, t.addUnit)(e)
            });
        }
    }
});
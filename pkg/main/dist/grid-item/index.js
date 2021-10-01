var t = require("../mixins/link"), n = require("../common/component"), i = require("../common/utils");

(0, n.VantComponent)({
    relation: {
        name: "grid",
        type: "ancestor",
        linked: function(t) {
            this.parent = t;
        }
    },
    mixins: [ t.link ],
    props: {
        icon: String,
        dot: Boolean,
        info: null,
        text: String,
        useSlot: Boolean
    },
    mounted: function() {
        this.updateStyle();
    },
    methods: {
        updateStyle: function() {
            if (this.parent) {
                var t = this.parent, n = t.data, e = t.children, o = n.columnNum, a = n.border, c = n.square, r = n.gutter, u = n.clickable, s = n.center, l = "".concat(100 / o, "%"), d = [];
                if (d.push("width: ".concat(l)), c && d.push("padding-top: ".concat(l)), r) {
                    var h = (0, i.addUnit)(r);
                    d.push("padding-right: ".concat(h)), e.indexOf(this) >= o && d.push("margin-top: ".concat(h));
                }
                var p = "";
                if (c && r) {
                    var m = (0, i.addUnit)(r);
                    p = "\n          right: ".concat(m, ";\n          bottom: ").concat(m, ";\n          height: auto;\n        ");
                }
                this.setData({
                    style: d.join("; "),
                    contentStyle: p,
                    center: s,
                    border: a,
                    square: c,
                    gutter: r,
                    clickable: u
                });
            }
        },
        onClick: function() {
            this.$emit("click"), this.jumpLink();
        }
    }
});
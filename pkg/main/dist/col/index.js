(0, require("../common/component").VantComponent)({
    relation: {
        name: "row",
        type: "ancestor"
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        style: ""
    },
    methods: {
        setGutter: function(t) {
            var e = "".concat(t / 2, "px"), a = t ? "padding-left: ".concat(e, "; padding-right: ").concat(e, ";") : "";
            a !== this.data.style && this.setData({
                style: a
            });
        }
    }
});
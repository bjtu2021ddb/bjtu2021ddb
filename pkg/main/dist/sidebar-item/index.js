(0, require("../common/component").VantComponent)({
    classes: [ "active-class", "disabled-class" ],
    relation: {
        type: "ancestor",
        name: "sidebar",
        linked: function(t) {
            this.parent = t;
        }
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean
    },
    methods: {
        onClick: function() {
            var t = this, e = this.parent;
            if (e && !this.data.disabled) {
                var i = e.children.indexOf(this);
                e.setActive(i).then(function() {
                    t.$emit("click", i), e.$emit("change", i);
                });
            }
        },
        setActive: function(t) {
            return this.setData({
                selected: t
            });
        }
    }
});
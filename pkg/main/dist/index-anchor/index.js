(0, require("../common/component").VantComponent)({
    relation: {
        name: "index-bar",
        type: "ancestor",
        linked: function(n) {
            this.parent = n;
        },
        unlinked: function() {
            this.parent = null;
        }
    },
    props: {
        useSlot: Boolean,
        index: null
    },
    data: {
        active: !1,
        wrapperStyle: "",
        anchorStyle: ""
    }
});
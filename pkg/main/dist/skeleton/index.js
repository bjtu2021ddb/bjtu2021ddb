(0, require("../common/component").VantComponent)({
    props: {
        row: {
            type: Number,
            value: 0
        },
        title: Boolean,
        avatar: Boolean,
        loading: {
            type: Boolean,
            value: !0
        },
        animate: {
            type: Boolean,
            value: !0
        },
        avatarSize: {
            type: String,
            value: "32px"
        },
        avatarShape: {
            type: String,
            value: "round"
        },
        titleWidth: {
            type: String,
            value: "40%"
        },
        rowWidth: {
            type: null,
            value: "100%",
            observer: function(a) {
                this.setData({
                    isArray: a instanceof Array
                });
            }
        }
    },
    data: {
        isArray: !1
    }
});
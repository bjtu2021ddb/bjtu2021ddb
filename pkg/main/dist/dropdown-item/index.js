(0, require("../common/component").VantComponent)({
    field: !0,
    relation: {
        name: "dropdown-menu",
        type: "ancestor",
        linked: function(t) {
            this.parent = t, this.updateDataFromParent();
        },
        unlinked: function() {
            this.parent = null;
        }
    },
    props: {
        value: {
            type: null,
            observer: "rerender"
        },
        title: {
            type: String,
            observer: "rerender"
        },
        disabled: Boolean,
        titleClass: {
            type: String,
            observer: "rerender"
        },
        options: {
            type: Array,
            value: [],
            observer: "rerender"
        }
    },
    data: {
        transition: !0,
        showPopup: !1,
        showWrapper: !1,
        displayTitle: ""
    },
    methods: {
        rerender: function() {
            var t = this;
            wx.nextTick(function() {
                t.parent && t.parent.updateItemListData();
            });
        },
        updateDataFromParent: function() {
            if (this.parent) {
                var t = this.parent.data, e = t.overlay, r = t.duration, a = t.activeColor, i = t.closeOnClickOverlay, n = t.direction;
                this.setData({
                    overlay: e,
                    duration: r,
                    activeColor: a,
                    closeOnClickOverlay: i,
                    direction: n
                });
            }
        },
        onClickOverlay: function() {
            this.toggle(), this.$emit("close");
        },
        onOptionTap: function(t) {
            var e = this, r = t.currentTarget.dataset.option.value, a = this.data.value !== r;
            this.setData({
                showPopup: !1,
                value: r
            }), setTimeout(function() {
                e.setData({
                    showWrapper: !1
                });
            }, this.data.duration || 0), this.rerender(), a && this.$emit("change", r);
        },
        toggle: function(t) {
            var e = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = this.data, i = a.showPopup, n = a.duration;
            if (null == t && (t = !i), t !== i) {
                if (!t) {
                    var o = r.immediate ? 0 : n;
                    return this.setData({
                        transition: !r.immediate,
                        showPopup: t
                    }), setTimeout(function() {
                        e.setData({
                            showWrapper: !1
                        });
                    }, o), void this.rerender();
                }
                this.parent.getChildWrapperStyle().then(function() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    e.setData({
                        transition: !r.immediate,
                        showPopup: t,
                        wrapperStyle: a,
                        showWrapper: !0
                    }), e.rerender();
                });
            }
        }
    }
});
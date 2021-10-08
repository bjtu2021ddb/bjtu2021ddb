var t = require("../common/component"), n = function() {
    return new Promise(function(t) {
        return setTimeout(t, 20);
    });
};

(0, t.VantComponent)({
    classes: [ "title-class", "content-class" ],
    relation: {
        name: "collapse",
        type: "ancestor",
        linked: function(t) {
            this.parent = t;
        }
    },
    props: {
        name: null,
        title: null,
        value: null,
        icon: String,
        label: String,
        disabled: Boolean,
        clickable: Boolean,
        border: {
            type: Boolean,
            value: !0
        },
        isLink: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        contentHeight: 0,
        expanded: !1,
        transition: !1
    },
    mounted: function() {
        var t = this;
        this.updateExpanded().then(n).then(function() {
            var n = {
                transition: !0
            };
            t.data.expanded && (n.contentHeight = "auto"), t.setData(n);
        });
    },
    methods: {
        updateExpanded: function() {
            if (!this.parent) return Promise.resolve();
            var t = this.parent.data, n = t.value, e = t.accordion, a = this.parent.children, i = void 0 === a ? [] : a, o = this.data.name, s = i.indexOf(this), r = null == o ? s : o, c = e ? n === r : (n || []).some(function(t) {
                return t === r;
            }), d = [];
            return c !== this.data.expanded && d.push(this.updateStyle(c)), d.push(this.set({
                index: s,
                expanded: c
            })), Promise.all(d);
        },
        updateStyle: function(t) {
            var e = this;
            return this.getRect(".van-collapse-item__content").then(function(t) {
                return t.height;
            }).then(function(a) {
                return t ? e.set({
                    contentHeight: a ? "".concat(a, "px") : "auto"
                }) : e.set({
                    contentHeight: "".concat(a, "px")
                }).then(n).then(function() {
                    return e.set({
                        contentHeight: 0
                    });
                });
            });
        },
        onClick: function() {
            if (!this.data.disabled) {
                var t = this.data, n = t.name, e = t.expanded, a = this.parent.children.indexOf(this), i = null == n ? a : n;
                this.parent.switch(i, !e);
            }
        },
        onTransitionEnd: function() {
            this.data.expanded && this.setData({
                contentHeight: "auto"
            });
        }
    }
});
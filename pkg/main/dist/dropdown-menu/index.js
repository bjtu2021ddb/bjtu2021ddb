var t = require("../common/component"), e = require("../common/utils"), n = [];

(0, t.VantComponent)({
    field: !0,
    relation: {
        name: "dropdown-item",
        type: "descendant",
        linked: function(t) {
            this.children.push(t), this.updateItemListData();
        },
        unlinked: function(t) {
            this.children = this.children.filter(function(e) {
                return e !== t;
            }), this.updateItemListData();
        }
    },
    props: {
        activeColor: {
            type: String,
            observer: "updateChildrenData"
        },
        overlay: {
            type: Boolean,
            value: !0,
            observer: "updateChildrenData"
        },
        zIndex: {
            type: Number,
            value: 10
        },
        duration: {
            type: Number,
            value: 200,
            observer: "updateChildrenData"
        },
        direction: {
            type: String,
            value: "down",
            observer: "updateChildrenData"
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: !0,
            observer: "updateChildrenData"
        },
        closeOnClickOutside: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        itemListData: []
    },
    beforeCreate: function() {
        var t = wx.getSystemInfoSync().windowHeight;
        this.windowHeight = t, this.children = [], n.push(this);
    },
    destroyed: function() {
        var t = this;
        n = n.filter(function(e) {
            return e !== t;
        });
    },
    methods: {
        updateItemListData: function() {
            this.setData({
                itemListData: this.children.map(function(t) {
                    return t.data;
                })
            });
        },
        updateChildrenData: function() {
            this.children.forEach(function(t) {
                t.updateDataFromParent();
            });
        },
        toggleItem: function(t) {
            this.children.forEach(function(e, n) {
                var i = e.data.showPopup;
                n === t ? e.toggle() : i && e.toggle(!1, {
                    immediate: !0
                });
            });
        },
        close: function() {
            this.children.forEach(function(t) {
                t.toggle(!1, {
                    immediate: !0
                });
            });
        },
        getChildWrapperStyle: function() {
            var t = this, n = this.data, i = n.zIndex, a = n.direction;
            return this.getRect(".van-dropdown-menu").then(function(n) {
                var o = n.top, r = void 0 === o ? 0 : o, d = n.bottom, c = "down" === a ? void 0 === d ? 0 : d : t.windowHeight - r, u = "z-index: ".concat(i, ";");
                return u += "down" === a ? "top: ".concat((0, e.addUnit)(c), ";") : "bottom: ".concat((0, 
                e.addUnit)(c), ";");
            });
        },
        onTitleTap: function(t) {
            var e = this, i = t.currentTarget.dataset.index;
            this.children[i].data.disabled || (n.forEach(function(t) {
                t && t.data.closeOnClickOutside && t !== e && t.close();
            }), this.toggleItem(i));
        }
    }
});
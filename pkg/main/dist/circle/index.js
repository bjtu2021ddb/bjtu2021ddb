var e = require("../common/component"), t = require("../common/utils"), r = require("../common/color");

var a = 2 * Math.PI, i = -Math.PI / 2;

(0, e.VantComponent)({
    props: {
        text: String,
        lineCap: {
            type: String,
            value: "round"
        },
        value: {
            type: Number,
            value: 0,
            observer: "reRender"
        },
        speed: {
            type: Number,
            value: 50
        },
        size: {
            type: Number,
            value: 100,
            observer: "setStyle"
        },
        fill: String,
        layerColor: {
            type: String,
            value: r.WHITE
        },
        color: {
            type: [ String, Object ],
            value: r.BLUE,
            observer: "setHoverColor"
        },
        strokeWidth: {
            type: Number,
            value: 4
        },
        clockwise: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        style: "width: 100px; height: 100px;",
        hoverColor: r.BLUE
    },
    methods: {
        getContext: function() {
            return this.ctx || (this.ctx = wx.createCanvasContext("van-circle", this)), this.ctx;
        },
        setHoverColor: function() {
            var e = this.getContext(), r = this.data, a = r.color, i = r.size, n = a;
            if ((0, t.isObj)(a)) {
                var l = e.createLinearGradient(i, 0, 0, 0);
                Object.keys(a).sort(function(e, t) {
                    return parseFloat(e) - parseFloat(t);
                }).map(function(e) {
                    return l.addColorStop(parseFloat(e) / 100, a[e]);
                }), n = l;
            }
            this.setData({
                hoverColor: n
            });
        },
        setStyle: function() {
            var e = this.data.size, t = "width: ".concat(e, "px; height: ").concat(e, "px;");
            this.setData({
                style: t
            });
        },
        presetCanvas: function(e, t, r, a, i) {
            var n = this.data, l = n.strokeWidth, o = n.lineCap, s = n.clockwise, c = n.size / 2, u = c - l / 2;
            e.setStrokeStyle(t), e.setLineWidth(l), e.setLineCap(o), e.beginPath(), e.arc(c, c, u, r, a, !s), 
            e.stroke(), i && (e.setFillStyle(i), e.fill());
        },
        renderLayerCircle: function(e) {
            var t = this.data, r = t.layerColor, i = t.fill;
            this.presetCanvas(e, r, 0, a, i);
        },
        renderHoverCircle: function(e, t) {
            var r = this.data, n = r.clockwise, l = r.hoverColor, o = a * (t / 100), s = n ? i + o : 3 * Math.PI - (i + o);
            this.presetCanvas(e, l, i, s);
        },
        drawCircle: function(e) {
            var t = this.getContext(), r = this.data.size;
            t.clearRect(0, 0, r, r), this.renderLayerCircle(t);
            var a, i = (a = e, Math.min(Math.max(a, 0), 100));
            0 !== i && this.renderHoverCircle(t, i), t.draw();
        },
        reRender: function() {
            var e = this, t = this.data, r = t.value, a = t.speed;
            a <= 0 || a > 1e3 ? this.drawCircle(r) : (this.clearInterval(), this.currentValue = this.currentValue || 0, 
            this.interval = setInterval(function() {
                e.currentValue !== r ? (e.currentValue < r ? e.currentValue += 1 : e.currentValue -= 1, 
                e.drawCircle(e.currentValue)) : e.clearInterval();
            }, 1e3 / a));
        },
        clearInterval: function(e) {
            function t() {
                return e.apply(this, arguments);
            }
            return t.toString = function() {
                return e.toString();
            }, t;
        }(function() {
            this.interval && (clearInterval(this.interval), this.interval = null);
        })
    },
    created: function() {
        var e = this.data.value;
        this.currentValue = e, this.drawCircle(e);
    },
    destroyed: function() {
        this.ctx = null, this.clearInterval();
    }
});
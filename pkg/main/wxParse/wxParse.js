var e = require("../@babel/runtime/helpers/interopRequireDefault"), t = require("../@babel/runtime/helpers/defineProperty"), a = require("../@babel/runtime/helpers/createForOfIteratorHelper"), i = e(require("./showdown.js")), r = e(require("./html2json.js")), n = 0, o = 0;

function d(e) {
    var t = e.target.dataset.src, a = e.target.dataset.from;
    void 0 !== a && a.length > 0 && wx.previewImage({
        current: t,
        urls: this.data[a].imageUrls
    });
}

function s(e) {
    var i = e.target.dataset.from, r = e.target.dataset.idx;
    void 0 !== i && i.length > 0 && function(e, i, r, d) {
        var s, l = r.data[d];
        if (!l || 0 == l.images.length) return;
        var g, h = l.images, m = function(e, t, a, i) {
            var r, d = 0, s = 0, l = {}, g = a.data[i].view.imagePadding;
            o, e > (r = n - 2 * g) ? (s = (d = r) * t / e, l.imageWidth = d, l.imageheight = s) : (l.imageWidth = e, 
            l.imageheight = t);
            return l;
        }(e.detail.width, e.detail.height, r, d), v = h[i].index, u = "".concat(d), f = a(v.split("."));
        try {
            for (f.s(); !(g = f.n()).done; ) {
                var c = g.value;
                u += ".nodes[".concat(c, "]");
            }
        } catch (e) {
            f.e(e);
        } finally {
            f.f();
        }
        var w = u + ".width", p = u + ".height";
        r.setData((t(s = {}, w, m.imageWidth), t(s, p, m.imageheight), s));
    }(e, r, this, i);
}

wx.getSystemInfo({
    success: function(e) {
        n = e.windowWidth, o = e.windowHeight;
    }
}), module.exports = {
    wxParse: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', n = arguments.length > 3 ? arguments[3] : void 0, o = arguments.length > 4 ? arguments[4] : void 0, l = n, g = {};
        if ("html" == t) g = r.default.html2json(a, e), console.log(JSON.stringify(g, " ", " ")); else if ("md" == t || "markdown" == t) {
            var h = new i.default.Converter(), m = h.makeHtml(a);
            g = r.default.html2json(m, e), console.log(JSON.stringify(g, " ", " "));
        }
        g.view = {}, g.view.imagePadding = 0, void 0 !== o && (g.view.imagePadding = o);
        var v = {};
        v[e] = g, l.setData(v), l.wxParseImgLoad = s, l.wxParseImgTap = d;
    },
    wxParseTemArray: function(e, t, a, i) {
        for (var r = [], n = i.data, o = null, d = 0; d < a; d++) {
            var s = n[t + d].nodes;
            r.push(s);
        }
        e = e || "wxParseTemArray", (o = JSON.parse('{"' + e + '":""}'))[e] = r, i.setData(o);
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", a = arguments.length > 2 ? arguments[2] : void 0;
        r.default.emojisInit(e, t, a);
    }
};
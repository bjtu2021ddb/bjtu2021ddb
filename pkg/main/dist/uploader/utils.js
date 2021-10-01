Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isImageUrl = r, exports.isImageFile = function(e) {
    if (e.type) return 0 === e.type.indexOf("image");
    if (e.path) return r(e.path);
    if (e.url) return r(e.url);
    return !1;
};

var e = [ "jpeg", "jpg", "gif", "png", "svg" ];

function r(r) {
    return e.some(function(e) {
        return -1 !== r.indexOf(".".concat(e));
    });
}
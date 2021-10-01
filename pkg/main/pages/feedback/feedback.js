var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/objectSpread2"), a = (e(require("../../utils/event")), 
e(require("../../dist/notify/notify"))), i = require("../../utils/api.js");

Page({
    data: {
        code: null,
        fileList: [],
        imgres: [],
        show: !1,
        inputvalue: "",
        number: null
    },
    onLoad: function(e) {
        wx.setNavigationBarTitle({
            title: e.title
        }), console.log(wx.T.getLanguage().feedback), this.setData({
            feedback: wx.T.getLanguage().feedback
        });
    },
    afterRead: function(e) {
        var a = this, n = e.detail.file, o = this.data.fileList, s = void 0 === o ? [] : o;
        s.push(t(t({}, n), {}, {
            url: n.path
        })), console.log(n), this.setData({
            fileList: s
        });
        var d = {
            file: n
        };
        i.uplodImage(d).then(function(e) {
            var t = a.data.imgres;
            console.log(JSON.parse(e).data[0]), t.push(JSON.parse(e).data[0]), console.log(t), 
            a.setData({
                imgres: t
            });
        });
    },
    showPopup: function() {
        console.log(this.data.code), null == this.data.code ? (0, a.default)({
            type: "danger",
            duration: 1e3,
            brateLong: !0,
            message: this.data.feedback.opeartion[5] + this.data.feedback.title
        }) : this.data.inputvalue ? this.data.number ? this.feedBack() : (0, a.default)({
            type: "danger",
            duration: 1e3,
            brateLong: !0,
            message: this.data.feedback.opeartion[1] + this.data.feedback.opeartion[0]
        }) : (0, a.default)({
            type: "danger",
            duration: 1e3,
            brateLong: !0,
            message: this.data.feedback.opeartion[1] + this.data.feedback.menu[2]
        });
    },
    feedBack: function() {
        var e = this, t = this.data.imgres, a = [];
        t.length > 0 && (a = t.map(function(e) {
            return {
                url: e
            };
        })), console.log(t);
        var n = {
            content: this.data.inputvalue,
            phone: this.data.number,
            type: this.data.code + 1,
            imgs: a
        };
        i.feedBack(n).then(function(t) {
            e.setData({
                show: !0
            });
        });
    },
    navgeback: function() {
        wx.navigateBack({
            data: 1
        });
    },
    getvalue: function(e) {
        this.setData({
            inputvalue: e.detail.value
        });
    },
    getnumber: function(e) {
        this.setData({
            number: e.detail.value
        });
    },
    delet: function(e) {
        console.log(e.detail.index);
        var t = this.data.fileList;
        console.log(t);
        var a = this.data.imgres;
        t.splice(e.detail.index, 1), a.splice(e.detail.index, 1), console.log(t), this.setData({
            fileList: t,
            imgres: a
        });
    },
    onReady: function() {},
    checkout: function(e) {
        this.setData({
            code: e.currentTarget.dataset.index
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
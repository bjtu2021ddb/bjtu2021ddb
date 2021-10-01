require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/event"));

Page({
    data: {},
    onLoad: function(t) {
        console.log(t.par), wx.setNavigationBarTitle({
            title: t.title
        }), this.setData({
            par: null != t.par ? t.par : "",
            place: t.place,
            name: t.name,
            index: t.index,
            prediction: wx.T.getLanguage().prediction,
            opeartion: wx.T.getLanguage().opeartion
        }), console.log(wx.T.getLanguage().prediction);
    },
    bindTextAreaBlur: function(t) {
        this.setData({
            name: t.detail.value
        });
    },
    shure: function() {
        this.data.name ? this.isgo() : wx.showToast({
            title: this.data.prediction[1] + this.data.prediction[26],
            icon: "none"
        });
    },
    isgo: function() {
        var t = getCurrentPages(), a = t[t.length - 2];
        if (this.data.par) {
            var e = a.data.par;
            e.list[this.data.index].url = this.data.name, a.setData({
                par: e
            }), wx.navigateBack({
                delta: 1
            });
        } else {
            var n = a.data.list;
            n[this.data.index].url = this.data.name, a.setData({
                list: n
            }), wx.navigateBack({
                delta: 1
            });
        }
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
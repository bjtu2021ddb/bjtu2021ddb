var e = require("./http.js");

module.exports = {
    login: function(t) {
        return (0, e._post)("/user/wxLogin", t);
    },
    getNewcoup: function() {
        return (0, e._post)("/coupons/couponInfo", null, !0);
    },
    userIfo: function() {
        return (0, e._get)("/user/getUserInfo", null, !0);
    },
    message: function(t) {
        return (0, e._get)("/message/getMessageList", t, !0);
    },
    getCountryNotice: function(t) {
        return (0, e._get)("/notice/getCountryNotice", t, !0);
    },
    getHomeNotice: function(t) {
        return (0, e._get)("/notice/getHomeNotice", t, !0);
    },
    buildAppQR: function(t) {
        return (0, e._get)("/user/buildMiniQR/v2", t);
    },
    banner: function(t) {
        return (0, e._get)("/banner/list", t, !0);
    },
    orderindexList: function(t) {
        return (0, e._get)("/order/indexList", t, !0);
    },
    parcelindexList: function(t) {
        return (0, e._get)("/parcel/indexList", t, !0);
    },
    newcomer: function() {
        return (0, e._post)("/coupons/newcomer");
    },
    config: function(t) {
        return (0, e._get)("/normalQuestion/getList", t);
    },
    whouse: function() {
        return (0, e._get)("/wareHouse/getWareHouse", null, !0);
    },
    whouseDetaie: function(t) {
        return (0, e._get)("/wareHouse/buildAddress", t);
    },
    userUpdata: function(t) {
        return (0, e._post)("/user/update", t);
    },
    countPrice: function(t) {
        return (0, e._get)("/servicePrice/countPrice", t);
    },
    updataCountry: function(t) {
        return (0, e._post)("/user/updateUserCountry", t, null);
    },
    servicePriceList: function(t, n, r, u) {
        return (0, e._get)("/servicePrice/list?fromCountry=" + t + "&id=" + n + "&toCountry=" + r + "&parcelIds=" + u);
    },
    listByCountry: function(t) {
        return (0, e._get)("/servicePrice/listByCountry", t);
    },
    addressList: function() {
        return (0, e._get)("/address/list");
    },
    addressDeleted: function(t) {
        return (0, e._delet)("/address/deleted?id=" + t);
    },
    addressThe: function(t) {
        return (0, e._get)("/address/the", t);
    },
    addressUpdate: function(t) {
        return (0, e._post)("/address/update", t);
    },
    defauktAddress: function(t) {
        return (0, e._post)("/address/setDefault", t);
    },
    districtList: function(t) {
        return (0, e._get)("/district/list", t, !0);
    },
    parcel: function(t) {
        return (0, e._get)("/parcel/list", t, !0);
    },
    packageSearch: function(t) {
        return (0, e._get)("/parcel/search", t);
    },
    simpleStatusPackage: function() {
        return (0, e._get)("/parcel/simpleStatus", null, !0);
    },
    addParcel: function(t) {
        return (0, e._post)("/parcel/add", t);
    },
    parcelDetail: function(t) {
        return (0, e._get)("/parcel/the", t);
    },
    isReinforce: function(t) {
        return (0, e._get)("/order/isReinforce", t);
    },
    complete: function(t) {
        return (0, e._post)("/parcel/complete", t);
    },
    orderReady: function(t) {
        return (0, e._get)("/order/ready" + t);
    },
    appShare: function(t) {
        return (0, e._get)("/system/appShare", t);
    },
    submitOrder: function(t) {
        return (0, e._post)("/order/submit", t);
    },
    getCountry: function(t) {
        return (0, e._get)("/wareHouse/getCountry", t, !0);
    },
    parcelReadNum: function() {
        return (0, e._get)("/parcel/parcelReadNum", null, !0);
    },
    couponReadNum: function() {
        return (0, e._get)("/coupons/couponReadNum", null, !0);
    },
    orderList: function(t) {
        return (0, e._get)("/order/list", t, !0);
    },
    cancel: function(t) {
        return (0, e._get)("/order/cancel", t);
    },
    orderSearch: function(t) {
        return (0, e._get)("/order/search", t);
    },
    coupons: function(t) {
        return (0, e._get)("/coupons/list", t);
    },
    simpleStatus: function() {
        return (0, e._get)("/order/simpleStatus", null, !0);
    },
    orderDetail: function(t) {
        return (0, e._get)("/order/detail", t);
    },
    queryLogisticsNameInfo: function(t) {
        return (0, e._get)("/parcel/queryLogisticsNameInfo", t);
    },
    payList: function(t) {
        return (0, e._get)("/order/payList", t);
    },
    wxpay: function(t) {
        return (0, e._get)("/pay/wxPay", t);
    },
    feedBack: function(t) {
        return (0, e._post)("/feedBack/add", t);
    },
    coupExchange: function(t) {
        return (0, e._post)("/coupons/exchange", t);
    },
    invitfriendList: function() {
        return (0, e._post)("/user/inviteList");
    },
    realPrice: function(t) {
        return (0, e._get)("/servicePrice/realPrice", t);
    },
    uplodImage: function(t) {
        return (0, e._uplod)("/oss/upload", t);
    },
    getLogisticsInfo: function(t) {
        return (0, e._get)("/order/getLogisticsInfo", t);
    },
    logisticsInfo: function(t) {
        return (0, e._get)("/parcel/logisticsInfo", t);
    },
    districtsearch: function(t) {
        return (0, e._get)("/district/search", t);
    },
    deletParcel: function(t) {
        return (0, e._delet)("/parcel/deleteProduct?productId=" + t);
    },
    deletPackage: function(t) {
        return (0, e._delet)("/parcel/delete?id=" + t);
    },
    getUnreadList: function() {
        return (0, e._get)("/message/getMessageCount", null, !0);
    },
    updateProductPrices: function(t) {
        return (0, e._post)("/parcel/updateProductPrices", t);
    },
    delOrder: function(t) {
        return (0, e._delet)("/order/delOrder?id=" + t);
    },
    getUnread: function() {
        return (0, e._get)("/message/getUnreadList", null, !0);
    },
    detail: function(t) {
        return (0, e._get)("/message/detail", t);
    },
    normalQuestionDetail: function(t) {
        return (0, e._get)("/normalQuestion/detail", t);
    },
    searchByCode: function(t) {
        return (0, e._get)("/district/searchByCode", t);
    },
    uplodUserimg: function(t) {
        return (0, e._uplod)("/user/uploadImage", t);
    },
    appReback: function(t) {
        return (0, e._post)("/system/appReback", t);
    },
    parcelBack: function(t) {
        return (0, e._post)("/order/parcelBack", t);
    },
    getMessageByName: function(t) {
        return (0, e._get)("/article/getMessageByName", t);
    },
    getActive: function() {
        return (0, e._get)("/active/getActive", null, !0);
    },
    getMessageById: function(t) {
        return (0, e._get)("/article/getMessageById", t);
    },
    getRecommendService: function(t) {
        return (0, e._get)("/servicePrice/getRecommendService", t, !0);
    },
    appContext: function() {
        return (0, e._post)("/system/appContext", null, !0);
    },
    getemailcode: function(t) {
        return (0, e._post)("/user/sendEmailCode", t);
    },
    bindEmail: function(t) {
        return (0, e._post)("/user/bindEmail/v2", t);
    },
    checkSubmit: function(t) {
        return (0, e._post)("/order/checkSubmit", t);
    },
    paysubmit: function(t) {
        return (0, e._post)("/pay/submit", t);
    },
    promotion: function(t) {
        return (0, e._get)("/promotion/pv", t, !0);
    },
    parcelRejection: function(t) {
        return (0, e._get)("/parcel/parcelRejection", t);
    },
    parcelCancelRejection: function(t) {
        return (0, e._get)("/parcel/parcelCancelRejection", t);
    },
    hasMallInfo: function(t) {
        return (0, e._post)("/mall/hasMallInfo", t);
    },
    miniContext: function() {
        return (0, e._post)("/system/miniContext", null);
    },
    updateWxInfo: function(t) {
        return (0, e._post)("/user/updateWxInfo", t);
    },
    isShowCustomerService: function() {
        return (0, e._postconfig)("/country/isShowCustomerService", null);
    },
    getMinParcelGoodsPrice: function() {
        return (0, e._postconfig)("/country/getMinParcelGoodsPrice", null, !0);
    },
    getMaxParcelNUm: function() {
        return (0, e._postconfig)("/country/getMaxParcelNumByCountry", null, !0);
    },
    getContrabandTextInfoByCountry: function(t) {
        return (0, e._postconfig)("/country/getContrabandTextInfoByCountry", t, !0);
    },
    bannerpv: function(t) {
        return (0, e._get)("/banner/pv", t, !0);
    },
    getUserCredit: function(t) {
        return (0, e._get)("/user/getUserCredit", t, !0);
    },
    localPay: function(t) {
        return (0, e._get)("/pay/v2/localPay", t);
    },
    payway: function(t) {
        return (0, e._postshop)("/pay/way", t, !0);
    },
    shopDeposit: function() {
        return (0, e._postconfig)("/shopDeposit/list", {});
    },
    submittpay: function(t) {
        return (0, e._postshop)("/pay/submit", t);
    },
    getUserAccountalr: function(t) {
        return (0, e._postshop)("/account/getUserAccount", t, !0);
    },
    couponsallCount: function(t) {
        return (0, e._get)("/coupons/allCount", t, !0);
    },
    cancelvorder: function(t) {
        return (0, e._get)("/order/cancel/v2", t);
    },
    paywaytwo: function() {
        return (0, e._post)("/pay/v2/way");
    },
    submitpaytwo: function(t) {
        return (0, e._post)("/pay/v2/submit", t);
    },
    parcelBackv2: function(t) {
        return (0, e._post)("/order/parcelBack/v2", t);
    },
    accountrecord: function(t) {
        return (0, e._postshop)("/account/record", t);
    },
    getPayWarnInfo: function(t) {
        return (0, e._postconfig)("/country/getPayWarnInfo", null, !0);
    }
};
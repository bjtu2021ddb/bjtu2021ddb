Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var i, e = require("../@babel/runtime/helpers/defineProperty"), t = {
    zh_jian: {
        syt: "收银台",
        qrzf: "确认支付",
        sqqx: "申请取消",
        cmmr: "确定要取消这个订单吗",
        cancel: "如您的货物仓库还未开始操作，订单会立即取消。如取消失败，请联系客服截停仓库操作，取消与否以客服信息为准。",
        ddje: "订单金额",
        qbye: "钱包余额",
        ye: "余额",
        yh: "优惠",
        gnth: "国内退货",
        jysxf: "交易手续费",
        yfze: "应付总额",
        zhye: "余额明细",
        zhmx: "账户明细",
        licz: "立即充值",
        qb: "全部",
        sr: "收入",
        zc: "支出",
        ddzf: "订单支付",
        zhcz: "账户充值",
        zhtk: "账户退款",
        keynbr: "可用于支付运费及增值服务",
        czje: "充值金额",
        wxzf: "微信支付",
        zffs: "支付方式",
        qrcz: "确认充值",
        hdhhrj: "已超过最大合并包裹数量",
        tieoppor: "商品价值不能低于",
        j2jjr: "应日本海关要求，收件人必须填写完整的姓氏和名字",
        kkekr: "请重新输入",
        rjjt: "点击查看",
        homebotom: [ "国际包裹", "国内包裹", "转运中", "已签收", "待入库", "已入库", "编辑", "删除" ],
        goonamtips: "请您保留好货物的商品发票，当货物发生查验或者需要提供发票时，将会邮件联系您提供商品发票，请悉知.",
        gootips: "请如实描述物品名称和材质，如“棉质衬衫”、“帆布鞋”、“塑料玩具”等，限10个中文字符",
        alltip: "增值服务和税收产生的费用不在优惠范围内",
        ordertips: [ "确认要取消这个订单吗？", "订单取消后，您可以在已入库包裹中重新合单" ],
        serlist: [ "入库的每个包裹秤重时都会拍照，打消您的顾虑", "包裹入库后在规定时间内享受免费仓储期，您可以悠闲地选购", "将您的多个包裹合并成一个发货，节约您的运费", "对于贵重物品，您可以选择特殊加固，长途运输更安全", "未合包前，如您的东西不想要了可选择退件服务", "如怕丢件或破损，你可选择保价服务，丢件坏件可赔付" ],
        status: [ "您还未登录，是否去登陆", "配送单号", "实名认证提示", "查看教程", "我知道了", "送你10元抵用券，邀请您一起来biubiulink开始集运之旅", "已检测到快递单号", "点击进入补全商品信息及价值" ],
        tips: [ "提示", "消息", "公告", "港澳台暂不支持退货!", "请选择收货国家/地区" ],
        opeartion: [ "取消", "确定", "上一步", "下一步", "重看", "退出", "是否去支付？", "是否取消订单？" ],
        homePage: {
            coust: "专属客服",
            tsbhhr: "我是您的专属物流管家，提供一对一服务；",
            kewke: "您可以随时联系我哦！",
            hjdejh: "截图保存，扫一扫加微信",
            jewj: "直接联系在线客服",
            title: "biubiulink",
            step: [ "首次使用，可先查看新手教程", "可在运费试算中对运费进行预估", "查看专属仓库，购买商品后寄往该处", "商品寄出后，可在这里预报包裹信息，以便我们更精准的匹配您的包裹", "待包裹到库后，完善商品信息，然后多选合并，下单付款", "在家坐等收货，并可在订单页中查看物流轨迹", "重看", "跳过" ],
            menu: {
                menuList: [ {
                    imgUrl: "https://app.huyuntong.com/app/static/images/mini/1.png",
                    title: "仓库地址",
                    des: "Transhipment"
                }, {
                    imgUrl: "https://app.huyuntong.com/app/static/images/mini/2.png",
                    title: "添加包裹",
                    des: "Common Problem"
                }, {
                    imgUrl: "/images/menu_chong.png",
                    title: "充值中心",
                    des: "Freight Trial"
                }, {
                    imgUrl: "https://app.huyuntong.com/app/static/images/mini/4.png",
                    title: "联系客服",
                    des: "Service & Price"
                }, {
                    imgUrl: "https://app.huyuntong.com/app/static/images/mini/licon1.png",
                    title: "新手指南",
                    des: "Beginner's Guide"
                }, {
                    imgUrl: "https://app.huyuntong.com/app/static/images/mini/licon2.png",
                    title: "运前须知",
                    des: "Beginner's Guide"
                }, {
                    imgUrl: "https://app.huyuntong.com/app/static/images/mini/licon3.png",
                    title: "运费试算",
                    des: "Beginner's Guide"
                }, {
                    imgUrl: "https://app.huyuntong.com/app/static/images/mini/licon4.png",
                    title: "服务&价格",
                    des: "Customer Service"
                } ]
            },
            message: {
                news: "最新消息",
                tip: "推荐线路",
                more: "查看更多"
            },
            process: {
                transferProcess: "集运流程",
                step: "简单3步，完成集运之旅",
                views: "查看教程",
                stpList: [ {
                    imgUrl: "https://app.huyuntong.com/app/static/images/mini/icon_init_01.png",
                    title: "转运准备",
                    detaile: "复制仓库地址到电商平台",
                    btn: "复制地址"
                }, {
                    imgUrl: "https://app.huyuntong.com/app/static/images/mini/icon_init_03.png",
                    title: "添加包裹",
                    detaile: "添加快递单号和报关信息",
                    btn: "添加"
                }, {
                    imgUrl: "https://app.huyuntong.com/app/static/images/mini/icon_init_04.png",
                    title: " 发往海外",
                    detaile: "选择多个包裹提交寄送,节省运费",
                    btn: "发货"
                } ]
            },
            newperson: [ "新人优惠券", "欣然收下", "可在下单付款时抵扣", "元", "张" ]
        },
        package: {
            ms: "描述",
            zanwuns: "暂无数据",
            chskjd: "查看全部包裹",
            expre: "快递信息",
            tips: "不同仓库的包裹不能合包",
            title: "包裹",
            name: "包裹预报",
            tjz: "体积重",
            tipss: "*计费重量为实重/体积重取大者",
            sz: "实重",
            menu: [ "待入库", "已入库", "异常", "历史", "天", "超时", "合并发货", "全选", "合计", "取消", "提交", " 请选择合并发货的包裹", "退货", "补全信息", "查看信息", "收回" ],
            status: [ "待入库", "待补资料", "待合包", "超期", "涉嫌侵权", "尺寸超标", "已合包", "已销毁", "包含液体", "包裹单号", "到货仓库", "包裹超重", "违禁物品", "特", "退货中", "退货完成", "待拒收", "已拒收", "普货", "特货" ],
            placeholder: "快递单号",
            listTitle: [ "快递单号", "包裹总值", "预报时间", "计费重", "免费仓储", "入库时间", "合包时间", "距销毁", "拒收时间", "拒收", "待审核", "审核状态", "主动拒收" ],
            opearation: [ "编辑", "查看物流", "派送中", "退货", "删除", "您确定要", "拒收拦截", "通知仓库拦截并拒收该包裹，是否确认操作？", "撤销拒收", "撤销后包裹可正常入库，确定撤销此次拒收吗？" ],
            details: [ "包裹详情", "包裹信息", "快递公司", "收货仓库", "状态", "元", "请输入正确的商品价格", "货物类型", "特货", "特殊品名", "普货" ],
            goods: [ "商品明细", "商品名称", "件数", "计费重", "商品总值", "请输入", "元", "合计", "保存", "尺寸" ]
        },
        order: {
            title: "订单",
            chskjd: "查看全部订单",
            addns: "添加包裹",
            busj: [ "订单支付", "订单退款", "帐户充值", "帐户退款" ],
            menu: [ "全部", "待付款", "待收货", "已完成", "已取消" ],
            status: [ "已付款", "待付款", "待收货", "已完成", "已取消", "派送异常", "已退款", "退款中" ],
            listTitle: [ "线路", "订单号", "重量", "付款时间" ],
            placeholder: "快递单号",
            patTYpe: [ "微信支付", "支付宝支付", "绿界支付", "paypal" ],
            opearation: [ "取消", "去付款", "查看物流", "确认收货", "运输中", "订单详情", "删除", "删除后订单将被隐藏，确认删除吗？" ]
        },
        my: {
            jifen: "积分",
            title: "我的",
            ye: "余额",
            qcz: "去充值",
            yhq: "优惠券",
            renwuzhonxin: "任务中心",
            language: "切换语言",
            user: "会员号",
            userinfo: {
                menylist: "邀请1人得10元",
                leavl: [ "普通用户", "会员用户" ],
                right: "点击查看特权",
                menu: [ {
                    img: "/images/icon_balance.png",
                    name: "账户余额"
                }, {
                    img: "https://app.huyuntong.com/app/static/images/mini/icon_trade.png",
                    name: "交易记录"
                }, {
                    img: "https://app.huyuntong.com/app/static/images/mini/icon_coupon.png",
                    name: "优惠券"
                }, {
                    img: "https://app.huyuntong.com/app/static/images/mini/icon_address.png",
                    name: "海外地址管理"
                }, {
                    img: "https://app.huyuntong.com/app/static/images/mini/icon_record.png",
                    name: "邀请好友"
                }, {
                    img: "https://app.huyuntong.com/app/static/images/mini/icon_feed_back.png",
                    name: "用户反馈"
                } ],
                descript: [ "请选择语言", "取消" ],
                actions: [ {
                    name: "中文简体",
                    index: 0
                }, {
                    name: "中文繁體",
                    index: 1
                } ]
            }
        },
        login: {
            title: "登录",
            sing: "微信账号登录",
            tip: "登录即表明您同意我们的",
            hts: "《biubiulink服务协议》",
            rule: "《隐私政策》",
            chose: "请选择您要集运的目的地"
        },
        problem: {
            title: "运前须知"
        },
        trial: {
            opeartion: [ "目的地", "偏好", "货物重量", "请选择", "请输入", "试算", "试算结果", "计费段：", "首重：", "说明：", "预计价格：", "如体积较大则按体积重计费", "此价格为RMB价格，不包含增值服务与保价等费用，详询客服", "请根据您货物目的地寄送到指定的仓库", "元", "起", "历史品名", "常用品名" ]
        },
        server: [ "到", "最低价格：", "预计时间：", "线路价格", "最低", "起", "预计时效", "线路须知", "(工作日)", "基本服务", "秤重拍照", "仓储服务", "合包发货", "增值服务", "特殊加固", "仓库退件", "元", "天", "包裹保价", "每KG低至" ],
        warehouse: [ "切换集运目的地", "复制", "收件人", "联系电话", "收件地址", "邮编", "如电商平台可以智能识别地址，您可以复制以下信息", "拼接地址", "请使用该仓库地址进行购物，包裹到仓库后才能提供后续完整的集运服务。", "复制成功", "请到电商平台添加我们的仓库地址进行购物，注意保留收货地址中的会员号数字，以免造成包裹归属问题" ],
        prediction: [ "快递单号", "请输入", "快递公司", "根据快递单号自动识别", "物品信息", "不合包，来货即走（可加快您此件包裹的处理速度）", "确定", "元", "填写规则", "增加货品", "物品名称", "物品数量", "物品单价", "说明：不同物品需要分组填写，每组填写该货品对应的数量及总价，以便货品可以顺利申报", "以一个包裹里三本书，五支笔为例，见图示", "删除", "收货国家", "请选择收货国家", "*指单一品名总价值", "申报总值", "重量", "包裹照片", "包裹明细", "包裹单号", "计费重量", "物品价值", "商品链接", "添加", "在此粘贴商品链接", "在哪能找到商品链接?", "温馨提示：如物品中包含针织、皮革类物品请勾选。根据当地法规该类物品可能会被征收额外关税，如被查验需补齐相关税款。", "查看全部商品" ],
        createOrder: {
            title: "创建订单",
            server: [ "代收货款", "代收金额", "新台币", "代收金额不能小于", "预计", "到达", "重量不在价格区间内" ],
            name: [ "退货订单", "退货费用", "快递费" ],
            goods: [ "商品明细", "商品名称", "件数", "计费重", "商品总值", "总重量", "费用计算", "线路", "超费期", "关税", "合计", "元", "提交", "默认", "增值服务", "包裹加固", "商品保价", "优惠券", "你选择的地址没有特货线路，请重新选择", "暂无可使用的优惠券", "保价按实际货值赔付，赔付上限为", "确认", "有可使用优惠券", "添加收货地址", "运费", "申报价值", "类型", "订单内全部商品" ]
        },
        adresad: [ "城市/城填", "市郊", "Name", "Contact number", "Town/City", "Suburb", "Address1", "Address2", "Postcode" ],
        japnaads: [ "英文地址(完整)", "完整的英文收件地址", "查看填写范例", "都道府県", "城市/区县", "快捷搜索" ],
        address: [ "海外地址管理", "默认", "新增地址", "修改地址", "姓名", "收货人姓名", "联系电话", "收货人电话", "国家/区域", "请选择", "地区", "地区 地域 区", "详细地址", "街道门牌，楼层房间等信息", "邮政编码", "设为默认收货地址", "保存", "修改", "城市/区域", "城市", "地址1", "地址2", "备用地址", "删除", "删除成功", "删除失败", "请输入", "请选择", "身份证", "护照", "该证件号用于当地实名认证，我们会严格保密该信息", "地址", "详细地址", "退货地址仅限中国大陆地区" ],
        orderDetails: [ "订单详情", "订单号", "状态", "发货仓", "线路", "下单时间", "支付方式", "支付时间", "商品名称", "件数", "总重量", "商品总值", "总重量", "基础运费", "超期费", "关税", "增值服务", "保价", "优惠", "实付款" ],
        coupon: [ "请输入兑换码", "兑换", "可使用优惠券", "已失效优惠券", "满", "可用", "无门槛使用", "有效期", "已过期", "暂不使用", "已优惠", "已使用", "折" ],
        inviafriend: [ "邀请好友并下单，可获得10元运费券奖励，邀请越多奖励越多！", "去邀请", "我的邀请记录", "分享给好友", "保存图片" ],
        record: [ "邀请记录", "邀请人数", "已获奖励", "已注册", "已下单" ],
        cuowuysi: "电话号码不符合规范,请输入10-11位号码",
        feedback: {
            title: "问题反馈类型",
            menu: [ "功能异常", "体验问题", "建议意见", "其他" ],
            placeholde: "有使用不便、体验不好或想给我们提意见？请尽管告知我们，非常感谢！",
            opeartion: [ "电话", "请输入", "提交", "感谢您的反馈，我们会持续为您提供更优质的服务", "返回", "请选择" ]
        }
    },
    zh_TW: (i = {
        sqqx: "申请取消",
        qrzf: "確認支付",
        cmmr: "確定要取消這個訂單嗎",
        cancel: "如您的貨物倉庫還未開始操作，訂單會立即取消。如取消失敗，請聯系客服截停倉庫操作，取消與否以客服資訊為准。",
        syt: "收銀台",
        ddje: "訂單金額",
        ye: "餘額",
        gnth: "國內退貨",
        qbye: "錢包餘額",
        jysxf: "交易手續費",
        yh: "優惠",
        yfze: "應付總額",
        zhye: "餘額明細",
        zhmx: "帳戶明細",
        licz: "立即充值",
        qb: "全部",
        sr: "收入",
        zc: "支出",
        ddzf: "訂單支付",
        zhcz: "帳戶充值",
        zhtk: "帳戶退款",
        keynbr: "可用於支付運費及增值服務"
    }, e(i, "zhcz", "帳戶充值"), e(i, "czje", "充值金額"), e(i, "wxzf", "微信支付"), e(i, "zffs", "支付方式"), 
    e(i, "qrcz", "確認充值"), e(i, "hdhhrj", "已超過最大合併包裹數量"), e(i, "tieoppor", "商品價值不能低於"), 
    e(i, "j2jjr", "應日本海關要求，收件人必須填寫完整的姓氏和名字"), e(i, "kkekr", "請重新輸入"), e(i, "rjjt", "點擊查看"), 
    e(i, "homebotom", [ "国际包裹", "国内包裹", "转运中", "已签收", "待入库", "已入库", "编辑", "删除" ]), e(i, "goonamtips", "請您保留好貨物的商品發票，當貨物發生查驗或者需要提供發票時，將會郵件聯繫您提供商品發票，請悉知."), 
    e(i, "gootips", "請如實描述物品名稱和材質，如“棉質襯衫”、“帆布鞋”、“塑膠玩具”等，限10個中文字元"), e(i, "alltip", "增值服務和稅收產生的費用不在優惠範圍內"), 
    e(i, "ordertips", [ "確認要取消這個訂單嗎？", "訂單取消後，您可以在已入庫包裹中重新合單" ]), e(i, "serlist", [ "入庫的每個包裹秤重時都會拍照，打消您的顧慮", "包裹入庫後在規定時間內享受免費倉儲期，您可以悠閒地選購", "將您的多個包裹合併成一個發貨，節約您的運費", "對於貴重物品，您可以選擇特殊加固，長途運輸更安全", "未合包前，如您的東西不想要了可選擇退件服務", "如怕丟件或破損，你可選擇保價服務，丟件壞件可賠付" ]), 
    e(i, "status", [ "您還未登錄，是否去登入", "配送單號", "實名認證提示", "查看教程", "我知道了", "送你10元抵用券，邀請您一起來biubiulink開始集運之旅", "已檢測到快遞單號", "點擊進入補全商品資訊及價值" ]), 
    e(i, "tips", [ "提示", "消息", "公告", "港澳臺暫不支持退貨!", "請選擇收貨國家/地區" ]), e(i, "opeartion", [ "取消", "確定", "上一步", "下一步", "重看", "退出", "是否去支付？", "是否取消訂單？" ]), 
    e(i, "homePage", {
        coust: "專屬客服",
        jewj: "直接聯系線上客服",
        tsbhhr: "我是您的專屬物流管家，提供一對一服務；",
        kewke: "您可以隨時聯系我哦！",
        hjdejh: "截圖保存，掃一掃加微信",
        title: "biubiulink",
        step: [ "首次使用，可先查看新手教程", "可在運費試算中對運費進行預估", "查看專屬倉庫，購買商品後寄往該處", "商品寄出後，可在這裡預報包裹資訊，以便我們更精准的匹配您的包裹", "待包裹到庫後，完善商品資訊，然後多選合併，下單付款", "在家坐等收貨，並可在訂單頁中查看物流軌跡", "重看", "跳過" ],
        menu: {
            menuList: [ {
                imgUrl: "https://app.huyuntong.com/app/static/images/mini/1.png",
                title: "倉庫地址",
                des: "Transhipment"
            }, {
                imgUrl: "https://app.huyuntong.com/app/static/images/mini/2.png",
                title: "添加包裹",
                des: "Common Problem"
            }, {
                imgUrl: "/images/menu_chong.png",
                title: "充值中心",
                des: "Freight Trial"
            }, {
                imgUrl: "https://app.huyuntong.com/app/static/images/mini/4.png",
                title: "聯系客服",
                des: "Service & Price"
            }, {
                imgUrl: "https://app.huyuntong.com/app/static/images/mini/licon1.png",
                title: "新手指南",
                des: "Beginner's Guide"
            }, {
                imgUrl: "https://app.huyuntong.com/app/static/images/mini/licon2.png",
                title: "運前須知",
                des: "Beginner's Guide"
            }, {
                imgUrl: "https://app.huyuntong.com/app/static/images/mini/licon3.png",
                title: "運費試算",
                des: "Beginner's Guide"
            }, {
                imgUrl: "https://app.huyuntong.com/app/static/images/mini/licon4.png",
                title: "服務&價格",
                des: "Customer Service"
            } ]
        },
        message: {
            news: "最新消息",
            tip: "推薦線路",
            more: "查看更多"
        },
        process: {
            transferProcess: "集運流程",
            step: "簡單3步，完成集運之旅",
            views: "查看教程",
            stpList: [ {
                imgUrl: "https://app.huyuntong.com/app/static/images/mini/icon_init_01.png",
                title: "轉運準備",
                detaile: "複製倉庫地址到電商平臺",
                btn: "複製地址"
            }, {
                imgUrl: "https://app.huyuntong.com/app/static/images/mini/icon_init_03.png",
                title: "添加包裹",
                detaile: "添加快遞單號和報關資訊",
                btn: "添加"
            }, {
                imgUrl: "https://app.huyuntong.com/app/static/images/mini/icon_init_04.png",
                title: "發往海外",
                detaile: "選擇多個包裹提交寄送,節省運費",
                btn: "發貨"
            } ]
        },
        newperson: [ "新人優惠券", "欣然收下", "可在下單付款時抵扣", "元", "張" ]
    }), e(i, "package", {
        ms: "描述",
        chskjd: "査看全部包裹",
        zanwuns: "暫無數據",
        expre: "快遞資訊",
        title: "包裹",
        tips: "不同倉庫的包裹不能合包",
        sz: "實重",
        tjz: "體積重",
        name: "包裹預報",
        tipss: "*計費重量為實重/體積重取大者",
        menu: [ "待入庫", "已入庫", "异常", "歷史", "天", "超時", "合併發貨", "全選", "合計", "取消", "提交", " 請選擇合併發貨的包裹", "退貨", "補全資訊", "查看資訊", "收回" ],
        placeholder: "快遞單號",
        status: [ "待入庫", "待補資料", "待合包", "超期", "涉嫌侵權", "尺寸超標", "已合包", "已銷毀", "包含液體", "包裹單號", "到貨倉庫", "包裹超重", "違禁物品", "特", "退貨中", "退貨完成", "待拒收", "已拒收", "普貨", "特貨" ],
        listTitle: [ "快遞單號", "包裹總值", "預報時間", "計費重", "免費倉儲", "入庫時間", "合包時間", "距銷毀", "拒收時間", "拒收", "待審核", "審核狀態", "主動拒收" ],
        opearation: [ "編輯", "查看物流", "派送中", "退貨", "删除", "您確定要", "拒收攔截", "通知倉庫攔截並拒收該包裹，是否確認操作？", "撤銷拒收", "撤銷後包裹可正常入庫，確定撤銷此次拒收嗎？" ],
        details: [ "包裹詳情", "包裹資訊", "快遞公司", "收貨倉庫", "狀態", "元", "請輸入正確的商品價格", "貨物類型", "特貨", "特殊品名", "普貨" ],
        goods: [ "商品明細", "商品名稱", "件數", "計費重", "商品總值", "請輸入", "元", "合計", "保存", "尺寸" ]
    }), e(i, "order", {
        title: "訂單",
        addns: "添加包裹",
        chskjd: "查看全部订单",
        busj: [ "訂單支付", "訂單退款", "帳戶充值", "帳戶退款" ],
        menu: [ "全部", "待付款", "待收貨", "已完成", "已取消" ],
        status: [ "已付款", "待付款", "待收貨", "已完成", "已取消", "派送异常", "已退款", "退款中" ],
        listTitle: [ "線路", "訂單號", "重量", "付款時間" ],
        patTYpe: [ "微信支付", "支付寶支付", "綠界支付", "paypal" ],
        placeholder: "訂單號、 國內快遞單號",
        opearation: [ "取消", "去付款", "查看物流", "確認收貨", "運輸中", "訂單詳情", "删除", "删除後訂單將被隱藏，確認删除嗎？" ]
    }), e(i, "my", {
        title: "我的",
        ye: "餘額",
        yhq: "優惠券",
        qcz: "去充值",
        renwuzhonxin: "任務中心",
        jifen: "積分",
        language: "切換語言",
        user: "會員號",
        userinfo: {
            menylist: "邀請1人得10元",
            leavl: [ "普通用戶", "會員用戶" ],
            right: "點擊查看特權",
            menu: [ {
                img: "/images/icon_balance.png",
                name: "帳戶餘額"
            }, {
                img: "https://app.huyuntong.com/app/static/images/mini/icon_trade.png",
                name: "交易記錄"
            }, {
                img: "https://app.huyuntong.com/app/static/images/mini/icon_coupon.png",
                name: "優惠券"
            }, {
                img: "https://app.huyuntong.com/app/static/images/mini/icon_address.png",
                name: "海外地址管理"
            }, {
                img: "https://app.huyuntong.com/app/static/images/mini/icon_record.png",
                name: "邀請好友"
            }, {
                img: "https://app.huyuntong.com/app/static/images/mini/icon_feed_back.png",
                name: "用戶回饋"
            } ],
            descript: [ "請選擇語言", "取消" ],
            actions: [ {
                name: "中文简体",
                index: 0
            }, {
                name: "中文繁體",
                index: 1
            } ]
        }
    }), e(i, "login", {
        title: "登入",
        sing: "微信帳號登入",
        tip: "登入即表明您同意我們的",
        hts: "《biubiulink服務協定》",
        rule: "《隱私政策》",
        chose: "請選擇您要集運的目的地"
    }), e(i, "problem", {
        title: "運前須知"
    }), e(i, "trial", {
        opeartion: [ "目的地", "偏好", "貨物重量", "請選擇", "請輸入", "試算", "試算結果", "計費段：", "首重：", "說明：", "預計價格：", "如體積較大則按體積重計費", "此價格為RMB價格，不包含增值服務與保價等費用，詳詢客服", "請根據您貨物目的地寄送到指定的倉庫", "元", "起", "歷史品名", "常用品名" ]
    }), e(i, "server", [ "到", "最低價格：", "預計時間：", "線路價格", "最低", "起", "預計時效", "線路須知", "(工作日)", "基本服務", "秤重拍照", "倉儲服務", "合包發貨", "增值服務", "特殊加固", "倉庫退件", "元", "天", "包裹保价", "每KG低至" ]), 
    e(i, "warehouse", [ "切換集運目的地", "複製", "收件人", "聯繫電話", "收件地址", "郵編", "如電商平臺可以智慧識別地址，您可以複製以下資訊", "拼接地址", "請使用該倉庫地址進行購物，包裹到倉庫後才能提供後續完整的集運服務。", "包裹保價", "請到電商平臺添加我們的倉庫地址進行購物，注意保留收貨地址中的會員號數位，以免造成包裹歸屬問題" ]), 
    e(i, "prediction", [ "快遞單號", "請輸入", "快遞公司", "根據快遞單號自動識別", "物品資訊", "不合包，來貨即走（可加快您此件包裹的處理速度）", "確定", "元", "填寫規則", "新增貨品", "物品名稱", "物品數量", "物品價值", "說明：不同物品需要分組填寫，每組填寫該貨品對應的數量及總價，以便貨品可以順利申報", "以一個包裹裏三本書，五支筆為例，見圖示", "删除", "收貨國家", "請選擇收貨國家", "*指單一品名總價值", "申報總值", "重量", "包裹照片", "包裹明細", "包裹單號", "計費重量", "物品價值", "商品链接", "添加", "在此粘貼商品鏈接", "在哪能找到商品鏈接？", "溫馨提示：如物品中包含針織、皮革類物品請勾選。根據當地法規該類物品可能會被徵收額外關稅，如被查驗需補齊相關稅款。", "查看全部商品" ]), 
    e(i, "createOrder", {
        title: "創建訂單",
        name: [ "退貨訂單", "退貨費用", "快遞費" ],
        server: [ "代收貨款", "代收金額", "新臺幣", "代收金額不能小於", "預計", "到達", "重量不在價格區間內" ],
        goods: [ "商品明細", "商品名稱", "件數", "計費重", "商品總值", "總重量", "費用計算", "線路", "超費期", "關稅", "合計", "元", "提交", "默認", "增值服務", "包裹加固", "商品保價", "優惠券", "你選擇的地址沒有特貨線路，請重新選擇", "暫無可使用的優惠券", "保價按實際貨值賠付，賠付上限為", "確認", "有可使用優惠券", "添加收貨地址", "運費", "申報價值", "類型", "訂單內全部商品" ]
    }), e(i, "adresad", [ "都市/城填", "市郊", "Name", "Contact number", "Town/City", "Suburb", "Address1", "Address2", "Postcode" ]), 
    e(i, "address", [ "海外地址管理", "默認", "新增地址", "修改地址", "姓名", "收貨人姓名", "聯繫電話", "收貨人電話", "國家/區域", "請選擇", "地區", "地區 地域 區", "詳細地址", "街道門牌，樓層房間等資訊", "郵遞區號", "設為默認收貨地址", "保存", "修改", "都市/區縣", "都市", "地址1", "地址2", "備用地址", "删除", "删除成功", "删除失敗", "請輸入", "請選擇", "身份證", "護照", "該證件號用於當地實名認證，我們會嚴格保密該資訊", "地址", "詳細地址", "退貨地址僅限中國大陸地區" ]), 
    e(i, "japnaads", [ "英文地址(完整)", "完整的英文收件地址", "查看填寫範例", "都道府県", "都市/區縣", "快捷蒐索" ]), 
    e(i, "orderDetails", [ "訂單詳情", "訂單號", "狀態", "發貨倉", "線路", "下單時間", "支付方式", "支付时间", "商品名稱", "件數", "總重量", "商品總值", "總重量", "基礎運費", "超期費", "關稅", "增值服務", "保價", "優惠", "實付款" ]), 
    e(i, "coupon", [ "請輸入兌換碼", "兌換", "可使用優惠券", "已失效優惠券", "滿", "可用", "無門檻使用", "有效期", "已過期", "暫不使用", "已優惠", "已使用", "折" ]), 
    e(i, "inviafriend", [ "邀請好友並下單，可獲得10元運費券獎勵，邀請越多獎勵越多！", "去邀請", "我的邀請記錄", "分享給好友", "保存圖片" ]), 
    e(i, "record", [ "邀請記錄", "邀請人數", "已獲獎勵", "已注册", "已下單" ]), e(i, "cuowuysi", "電話號碼不符合規範，請輸入10-11比特號碼"), 
    e(i, "feedback", {
        title: "問題迴響類型",
        menu: [ "功能异常", "體驗問題", "建議意見", "其他" ],
        placeholde: "有使用不便、體驗不好或想給我們提意見？請儘管告知我們，非常感謝！",
        opeartion: [ "電話", "請輸入", "提交", "感謝您的迴響，我們會持續為您提供更優質的服務", "返回", "請選擇" ]
    }), i)
};

exports.default = t;
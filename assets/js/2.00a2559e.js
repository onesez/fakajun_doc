(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),a("p",[t._v("API调用除了必须包含公共参数外，如果API本身需要业务参数也必须传入，每个API的业务参数请考API文档说明。\n对所有API参数（包括公共参数和业务参数，但不包括sign和sign_type参数，注意：app_key不是公共参数和业务参数，所以也不将app_key参数放在里面加密），根据参数名称的ASCII码表的顺序排序对参数进行排序。例如：foo=1, bar=2, foo_bar=3, foobar=4，排序后的顺序是：bar=2, foo=1, foo_bar=3, foobar=4。\n并使用&对各个参数进行连接，例如：bar=2&foo=1&foo_bar=3&foobar=4\n并将密钥信息（app_key）参数放在所有参数的后面，并使用指定的加密方式进行加密（一般为MD5）\n将摘要得到的字节结果使用大写表示。")]),t._m(3),a("table",[t._m(4),a("tbody",[t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),a("tr",[a("td",[t._v("sign")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("256")]),a("td",[t._v("商户请求参数的签名串，详见"),a("router-link",{attrs:{to:"/start.html#签名算法"}},[t._v("签名算法")])],1),a("td",[t._v("详见示例")])]),t._m(10),t._m(11),t._m(12)])]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"请求地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求地址","aria-hidden":"true"}},[this._v("#")]),this._v(" 请求地址")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("环境")]),s("th",[this._v("HTTPS请求地址")])])]),s("tbody",[s("tr",[s("td",[this._v("正式环境")]),s("td",[this._v("https://api.fakajun.com/gateway.do")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"签名算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名算法","aria-hidden":"true"}},[this._v("#")]),this._v(" 签名算法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"公共请求参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共请求参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 公共请求参数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("参数")]),s("th",[this._v("类型")]),s("th",[this._v("是否必填")]),s("th",[this._v("最大长度")]),s("th",[this._v("描述")]),s("th",[this._v("示例值")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("app_id")]),s("td",[this._v("String")]),s("td",[this._v("是")]),s("td",[this._v("32")]),s("td",[this._v("发卡君分配给开发者的应用ID")]),s("td",[this._v("2014072300007148")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("method")]),s("td",[this._v("String")]),s("td",[this._v("是")]),s("td",[this._v("128")]),s("td",[this._v("接口名称")]),s("td",[this._v("user.info")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("format")]),s("td",[this._v("String")]),s("td",[this._v("是")]),s("td",[this._v("40")]),s("td",[this._v("目前仅支持JSON")]),s("td",[this._v("json")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("charset")]),s("td",[this._v("String")]),s("td",[this._v("是")]),s("td",[this._v("10")]),s("td",[this._v("请求使用的编码格式，如utf-8,gbk,gb2312等")]),s("td",[this._v("utf-8")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("sign_type")]),s("td",[this._v("String")]),s("td",[this._v("是")]),s("td",[this._v("10")]),s("td",[this._v("商户生成签名字符串所使用的签名算法类型，目前支持md5")]),s("td",[this._v("md5")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("timestamp")]),s("td",[this._v("String")]),s("td",[this._v("是")]),s("td",[this._v("19")]),s("td",[this._v('发送请求的时间，格式"yyyy-MM-dd HH:mm:ss"')]),s("td",[this._v("2014-07-24 03:07:50")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("version")]),s("td",[this._v("String")]),s("td",[this._v("否")]),s("td",[this._v("3")]),s("td",[this._v("调用的接口版本，固定为：1.0")]),s("td",[this._v("1.0")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("biz_content")]),s("td",[this._v("String")]),s("td",[this._v("否")]),s("td"),s("td",[this._v("请求参数的集合，最大长度不限，除公共参数外所有请求参数都必须放在这个参数中传递，具体参照各产品快速接入文档")]),s("td")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"公共响应参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共响应参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 公共响应参数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("类型")]),a("th",[t._v("是否必填")]),a("th",[t._v("最大长度")]),a("th",[t._v("描述")]),a("th",[t._v("示例值")])])]),a("tbody",[a("tr",[a("td",[t._v("code")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("-")]),a("td",[t._v("网关返回码,详见文档")]),a("td",[t._v("10000")])]),a("tr",[a("td",[t._v("msg")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("-")]),a("td",[t._v("网关返回码描述,详见文档")]),a("td",[t._v("请求成功")])]),a("tr",[a("td",[t._v("data")]),a("td",[t._v("String")]),a("td",[t._v("否")]),a("td",[t._v("-")]),a("td",[t._v("接口结果返回数据")]),a("td",[t._v("xxxxxx")])]),a("tr",[a("td",[t._v("sign")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("-")]),a("td",[t._v("签名,详见文档")]),a("td",[t._v("-")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"异步通知相响应参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步通知相响应参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 异步通知相响应参数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("参数名称")]),a("th",[t._v("类型")]),a("th",[t._v("是否必填")]),a("th",[t._v("描述")]),a("th",[t._v("示例值")])])]),a("tbody",[a("tr",[a("td",[t._v("notify_time")]),a("td",[t._v("消息时间")]),a("td",[t._v("Date")]),a("td",[t._v("是")]),a("td",[t._v("消息时间，格式yyyy-mm-dd hh:ii:ss")]),a("td",[t._v("2015-14-27 15:45:58")])]),a("tr",[a("td",[t._v("notify_type")]),a("td",[t._v("消息类型")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("通知的类型")]),a("td",[t._v("trade_status_sync")])]),a("tr",[a("td",[t._v("notify_id")]),a("td",[t._v("通知校验ID")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("通知校验ID")]),a("td",[t._v("ac05099524730693a8b330c5ecf72da9786")])]),a("tr",[a("td",[t._v("app_id")]),a("td",[t._v("开发者的app_id")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("分配给开发者的应用ID")]),a("td",[t._v("2014072300007148")])]),a("tr",[a("td",[t._v("out_trade_no")]),a("td",[t._v("商户账单编号")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("商户订单编号")]),a("td",[t._v("Number")])]),a("tr",[a("td",[t._v("total_amount")]),a("td",[t._v("订单金额")]),a("td",[t._v("Number")]),a("td",[t._v("是")]),a("td",[t._v("账单金额")]),a("td",[t._v("10000.00")])]),a("tr",[a("td",[t._v("trade_status")]),a("td",[t._v("交易状态")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("账单交易状态")]),a("td",[t._v("TRADE_SUCCESS")])]),a("tr",[a("td",[t._v("trade_no")]),a("td",[t._v("流水ID")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("交易流水ID")]),a("td")]),a("tr",[a("td",[t._v("sign_type")]),a("td",[t._v("加密方式")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("签名类型")]),a("td",[t._v("Md5")])]),a("tr",[a("td",[t._v("Sign")]),a("td",[t._v("签名")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("签名字符串")]),a("td",[t._v("601510b7970e52cc63db0f44997cf70e")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"通知触发条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通知触发条件","aria-hidden":"true"}},[this._v("#")]),this._v(" 通知触发条件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("触发条件名")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("触发条件描述")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("触发条件默认值")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TRADE_FINISHED")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("交易完成")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false（不触发通知）")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TRADE_SUCCESS")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("交易成功")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("true（触发通知）")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("WAIT_BUYER_PAY")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("交易创建")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false（不触发通知）")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TRADE_CLOSED")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("交易关闭")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("false（不触发通知）")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"接口方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 接口方法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("接口")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("user.info")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("用户信息")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("user.money")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("用户余额")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("user.withdraw")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("用户提现")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("seller.info")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("商家信息")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("login.list")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("登陆记录")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("order.list")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("订单列表")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("invoice.list")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("帐单列表")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("kami.add")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("添加卡密")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("kami.list")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("卡密列表")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("kami.del")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("卡密删除")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("kami.class.add")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("添加卡密分类")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("kami.class.list")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("查看卡密分类")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("kami.class.del")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("删除卡密分类")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("kami.out")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("已卖出卡密")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("kami.stay")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("未卖出卡密")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("trade.query")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("交易查询")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("alipay.trade.precreate")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("创建支付宝当面付")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("alipay.trade.wap.pay")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("创建支付宝手机WAP支付")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("alipay.trade.page.pay")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("创建支付宝电脑网页支付")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("wxpay.pay.unifiedorder")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("创建微信扫码支付")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("wxpay.pay.h5")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("创建微信手机H5支付")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("qq.pay.native")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("创建手机QQ钱包扫码支付")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("data.statistics")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("数据统计（今日收入、今日成交）")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"创建支付所需业务参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建支付所需业务参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建支付所需业务参数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("参数名称")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否必填")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("示例值")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("out_trade_no")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("账单编号")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("35434354")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("subject")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("账单标题")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("测试标题")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("total_amount")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("账单金额")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("1.00")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("body")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("账单描述")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("这不是演习")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("notify_url")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("异步通知")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("http://xx.com/xx")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("return_url")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("回调地址")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("http://xx.com/xx")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("spbill_create_ip")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("支付者IP")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("8.8.8.8（只有创建微信H5支付才会需要）")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"php实例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php实例代码","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP实例代码")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 请求参数")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("   "),a("span",{attrs:{class:"token keyword"}},[t._v("array")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'app_id'")]),t._v("        "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'App ID'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'app_key'")]),t._v("       "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'App Key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'timestamp'")]),t._v("     "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Y-m-d H:i:s'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'method'")]),t._v("        "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'qq.pay.native'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'biz_content'")]),t._v("   "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("json_encode")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("array")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'out_trade_no'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'apple'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 交易编号")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'total_amount'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'1.00'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 交易金额（元）")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'subject'")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'标题'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'body'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'描述'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'notify_url'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'https://www.fakajun.com/notify_url'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 通知地址")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'return_url'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'https://www.fakajun.com/return_url'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 返回地址")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 获得签名")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'sign'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("sign")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 安全起见：app_key不作为请求参数")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("unset")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'app_key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 发送请求获得结果")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$res")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("http")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("var_dump")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$res")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/**\n * Http请求\n * @param  array $params 请求参数\n * @return json         返回数据\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("http")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("array")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token variable"}},[t._v("$ch")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("curl_init")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("curl_setopt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$ch")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("CURLOPT_URL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'https://api.fakajun.com/gateway.do'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("curl_setopt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$ch")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("CURLOPT_HEADER")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("curl_setopt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$ch")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("CURLOPT_POST")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("curl_setopt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$ch")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("CURLOPT_SSL_VERIFYPEER")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("curl_setopt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$ch")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("CURLOPT_SSL_VERIFYHOST")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("curl_setopt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$ch")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("CURLOPT_RETURNTRANSFER")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("curl_setopt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$ch")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("CURLOPT_POSTFIELDS")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("http_build_query")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("curl_exec")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$ch")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/**\n * 签名算法\n * @param  array $params     请求参数\n * @param  string $app_key AppKey\n * @return string             签名字符串\n */")]),t._v("\n "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("sign")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token variable"}},[t._v("$app_key")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'app_key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("unset")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'app_key'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'sign'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'sign_type'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("ksort")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("strtoupper")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("md5")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("urldecode")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("http_build_query")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$params")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token variable"}},[t._v("$app_key")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);
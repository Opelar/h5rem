var baseUrl =
  "http://www.jumax-sh.dev.sudaotech.com/api/app/homepage/treeCategory/1";

var info = {
  name: "app-商城端接口",
  _postman_id: "cc46746c-5502-a904-043d-1363af4481b7",
  description: "",
  schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
};

var o = {
  name: "首页",
  description: null,
  item: [
    // 全部分类
    {
      name: "全部分类",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/treeCategory/1",
          host: ["{{base_url}}"],
          path: ["homepage", "treeCategory", "1"]
        },
        description:
          "请求参数:\n  id: 项目Id\n返回参数:\n  categoryId: 分类Id\n  name: 分配名\n  children: 子分类集合"
      },
      response: []
    },

    // 推荐
    {
      name: "推荐",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/recommend/1",
          host: ["{{base_url}}"],
          path: ["homepage", "recommend", "1"]
        },
        description:
          '请求参数:\n  id: 项目id\n返回参数:\n  \n{\n<!--推荐位ID-->\n    "featuredPlaceId": 7,\n    <!--关联店铺-->\n    "featuredPlaceItemResps": [\n        {\n        <!--店铺ID-->\n            "itemId": 1,\n            <!--推荐图片-->\n            "itemImage": "http://jumax-store-01.oss-cn-beijing.aliyuncs.com/files/images/20180103/55c49226d3bf4ae6a58109c7bfb1285a.png",\n            <!--店铺名称-->\n            "itemName": "犀牛PAT专卖店"\n        },\n        {\n            "itemId": 2,\n            "itemImage": "http://jumax-store-01.oss-cn-beijing.aliyuncs.com/files/images/20180103/3b9c120c8d0a432a922589a16d0c6c95.png",\n            "itemName": "SWISSWIN专卖店"\n        },\n        {\n            "itemId": 3,\n            "itemImage": "http://www.jumax.dev.sudaotech.com/api/static/a.jpg",\n            "itemName": "I.TOUTLET专卖店"\n        }\n    ],\n    <!--推荐位名称-->\n    "featuredPlaceName": "首页-店铺推荐"\n}'
      },
      response: []
    },

    // 品牌馆
    {
      name: "品牌馆",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/brand/314",
          host: ["{{base_url}}"],
          path: ["homepage", "brand", "314"]
        },
        description:
          "请求参数:\n  id: 项目id\n返回参数:\n  storeId:店铺主键\n    storeName:店铺名称\n    storeImg:商城图片\n    storeLogo:商城LOGO\n    pcBanner:PC Banner\n    brandDisplayImage:品牌馆展示图片"
      },
      response: []
    },

    // 品牌墙
    {
      name: "品牌墙",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/brandWall/314",
          host: ["{{base_url}}"],
          path: ["homepage", "brandWall", "314"]
        },
        description:
          "请求参数:\n  id: 项目id\n返回参数:\n  storeId:店铺主键\n    storeName:店铺名称\n    storeImg:商城图片\n    storeLogo:商城LOGO\n    pcBanner:PC Banner\n    brandDisplayImage:品牌馆展示图片"
      },
      response: []
    },

    // 第三方入住
    {
      name: "第三方入住",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/enter/314",
          host: ["{{base_url}}"],
          path: ["homepage", "enter", "314"]
        },
        description:
          "请求参数:\n  id: 项目id\n返回参数:\n  storeId:店铺主键\n    storeName:店铺名称\n    storeImg:商城图片\n    storeLogo:商城LOGO\n    pcBanner:PC Banner\n    brandDisplayImage:品牌馆展示图片"
      },
      response: []
    },

    // 钜SALE惠购
    {
      name: "钜SALE惠购",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/reduction/314",
          host: ["{{base_url}}"],
          path: ["homepage", "reduction", "314"]
        },
        description:
          "请求参数:\n  id: 项目id\n返回参数:\nfeaturedPlaceImage:推荐图片(左边大图)\ngoodsList:\n  itemName:项目名称\n    goodsList:\n      goodsId:商品id\n      goodsName:商品名称\n      description:商品描述\n      url:商品URL\n      settlementPrice:结算价\n      sellPrice:销售价\n      tagPrice:吊牌价"
      },
      response: []
    },

    // 钜NEW新品
    {
      name: "钜NEW新品",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/juNew/314",
          host: ["{{base_url}}"],
          path: ["homepage", "juNew", "314"]
        },
        description:
          "请求参数:\n  id: 项目id\n返回参数:\nfeaturedPlaceImage:推荐图片(左边大图)\ngoodsList:\n  itemName:项目名称\n    goodsList:\n      goodsId:商品id\n      goodsName:商品名称\n      description:商品描述\n      url:商品URL\n      settlementPrice:结算价\n      sellPrice:销售价\n      tagPrice:吊牌价"
      },
      response: []
    },

    // 商品
    {
      name: "商品",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/goodsFloor/314",
          host: ["{{base_url}}"],
          path: ["homepage", "goodsFloor", "314"]
        },
        description:
          "请求参数:\n  id: 项目id\n返回参数：\n  floor:\n    itemImage:分类图标\n    itemDisplayName:分类显示名称\n  categoryList:\n    categoryId: 分类id\n    name: 分类名称\n  storeList:\n    storeId:店铺主键\n      storeName:店铺名称\n      storeImg:商城图片\n      storeLogo:商城LOGO\n      pcBanner:PC Banner\n      brandDisplayImage:品牌馆展示图片\n    goodsList:\n    goodsId:商品id\n      goodsName:商品名称\n      description:商品描述\n      url:商品URL\n      settlementPrice:结算价\n      sellPrice:销售价\n      tagPrice:吊牌价  \n  "
      },
      response: []
    },

    // 项目
    {
      name: "项目",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/partion",
          host: ["{{base_url}}"],
          path: ["partion"]
        },
        description: "返回参数：\n  partionId: 项目Id\n  partionName: 项目名称"
      },
      response: []
    },

    // 项目详情
    {
      name: "项目详情",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/partion/1",
          host: ["{{base_url}}"],
          path: ["partion", "1"]
        },
        description:
          "请求参数：\n  partionId: 项目Id\n返回参数：\n  项目主键:partionId,\n  项目名称:partionName,\n  项目简介:remark,\n  客服电话:serviceTel,\n  客服工作时间1:serviceStartTime,\n  客服工作时间2:serviceEndTime"
      },
      response: []
    },

    // 钜max好货
    {
      name: "钜MAX好货",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/juGoods/1",
          host: ["{{base_url}}"],
          path: ["homepage", "juGoods", "1"]
        },
        description:
          "请求参数:\n  id: 项目id\n返回参数:\nfeaturedPlaceImage:推荐图片(左边大图)\ngoodsList:\n  itemName:项目名称\n    goodsList:\n      goodsId:商品id\n      goodsName:商品名称\n      description:商品描述\n      url:商品URL\n      settlementPrice:结算价\n      sellPrice:销售价\n      tagPrice:吊牌价"
      },
      response: []
    },

    // 首页新品列表
    {
      name: "首页新品列表",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/new?newType=NEW_WEEK",
          host: ["{{base_url}}"],
          path: ["homepage", "new"],
          query: [{ key: "newType", value: "NEW_WEEK", equals: true }]
        },
        description:
          "<!--newType ：NEW_TODAY 今日上新列表\n        NEW_YESTERDAY-  昨日上新列表\n        NEW_WEEK  这周上新列表->\n{{base_url}}/homepage/new?partionId=1&newType=NEW_TODAY"
      },
      response: []
    },

    // 今日热卖
    {
      name: "热销商品",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "{}" },
        url: {
          raw:
            "{{base_url}}/homepage/goods/top?newType=NEW_MONTH&partionId=314",
          host: ["{{base_url}}"],
          path: ["homepage", "goods", "top"],
          query: [
            { key: "newType", value: "NEW_MONTH", equals: true },
            { key: "partionId", value: "314", equals: true }
          ]
        },
        description:
          "{{base_url}}/homepage/goods/top?newType=NEW_MONTH&partionId=1\n<!--newType NEW_MONTH 本月的热销商品\n      NEW_WEEK 本周的热销商品-->\n<!--partionId 项目id-->"
      },
      response: []
    },

    // 首页默认项目id
    {
      name: "首页默认项目id",
      request: {
        method: "GET",
        header: [
          { key: "user_token", value: "e6a2d8f10257be119cf1fcc10b6a02e6" }
        ],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/last/partion",
          host: ["{{base_url}}"],
          path: ["homepage", "last", "partion"]
        }
      },
      response: []
    },

    // 特惠商品列表
    {
      name: "特惠商品列表",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/goods/discount?partionId=314",
          host: ["{{base_url}}"],
          path: ["homepage", "goods", "discount"],
          query: [{ key: "partionId", value: "314", equals: true }]
        }
      },
      response: []
    },

    // 钜热卖
    {
      name: "钜热卖",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/juHot/1",
          host: ["{{base_url}}"],
          path: ["homepage", "juHot", "1"]
        }
      },
      response: []
    },

    // 名店直达
    {
      name: "名店直达页面",
      request: {
        method: "GET",
        header: [],
        body: { mode: "raw", raw: "" },
        url: {
          raw: "{{base_url}}/homepage/store",
          host: ["{{base_url}}"],
          path: ["homepage", "store"]
        }
      },
      response: []
    },

    // 智能推荐商品 ==? 猜你喜欢
    {
      name: "智能推荐商品",
      request: {
        method: "GET",
        header: [{ key: "", value: "", disabled: true }],
        body: {},
        url: {
          raw: "{{base_url}}/homepage/suggest?partionId=314",
          host: ["{{base_url}}"],
          path: ["homepage", "suggest"],
          query: [{ key: "partionId", value: "314", equals: true }]
        }
      },
      response: []
    }
  ]
};

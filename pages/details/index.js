var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
    },

    onLoad: function(options) {

        var that = this
        that.setData({
            indicatorDots: true,
            vertical: false,
            autoplay: "false",
            goodsPicsInfo: [
                    {"picurl":"http://localhost:8888/蒜香软法.jpg"},
                    {"picurl":"http://localhost:8888/蒜香软法1.jpg"},
                    {"picurl":"http://localhost:8888/蒜香软法3.jpg"}
            ],
            shopppingDetails: {
                "title":"蒜香软法",
                "reason":"酸味浓香，欲罢不能"
            }
        })
        // 商品详情
        // wx.request({
        //     url: 'http://huanqiuxiaozhen.com/wemall/goods/inqgoods?id=' + options.id,
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function(res) {
        //         //console.log(res.data.data);
        //         that.data.shopppingDetails = res.data.data;

        //         var goodsPicsInfo = [];
        //         var goodsPicsObj = {};
        //         var goodspic = res.data.data.goodspics;
        //         var goodspics = goodspic.substring(0, goodspic.length - 1);
        //         var goodspicsArr = goodspics.split("#");
        //         for (var i = 0; i < goodspicsArr.length; i++) {
        //             goodsPicsInfo.push({
        //                 "picurl": goodspicsArr[i]
        //             });
        //         }
        //         that.setData({
        //             goodsPicsInfo: goodsPicsInfo
        //         })
        //     }
        // })

    }
})

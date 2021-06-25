var app = getApp()
Page({
    data: {
        
    },
    onLoad: function(options) {

        var that = this
        console.log(options)
        that.setData({
            brandList:{ 
            "brand": [
                {
                    "pic":"http://localhost:8888/ldf.jpg",
                    "chinesename":"洛代夫",
                    "brief":"这是一款含水量超过百分之80的法式面包，外皮坚韧有嚼劲，内部柔软充满香气",
                    "minprice": "16"
                },
                {
                    "pic":"http://localhost:8888/蒜香软法.jpg",
                    "chinesename":"蒜香软法",
                    "brief":"浓郁的蒜香包裹着的面包，柔软丰富的口感，在口中炸裂的芝士，满分面包",
                    "minprice": "18"
                },
                {
                    "pic":"http://localhost:8888/咸蛋黄卷.jpg",
                    "chinesename":"咸蛋黄卷",
                    "brief":"浓郁的蒜香包裹着的面包，柔软丰富的口感，在口中炸裂的芝士，满分面包",
                    "minprice": "26"
                },
            ] 
        }
        }) 
        // wx.request({
        //     url: 'http://www.huanqiuxiaozhen.com/wemall/venues/getBrandAndType?id=' + options.id,
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function(res) {
        //         that.setData({
        //             brandList: res.data.data
        //         });
        //     }
        // })
    }

})
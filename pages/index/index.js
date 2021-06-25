//获取应用实例
var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: false,  // loading
        venuesItems: [],
        choiceItems: [],
        sliderList: []

    },

    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
    },

    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo,
                venuesItems: [
                    {'id':'1','smallpic':'http://localhost:8888/蒜香软法.jpg',"typeid":"1"},
                    {'id':'2','smallpic':'http://localhost:8888/obao.jpg',"typeid":"1"}
                ],
                choiceItems: [
                    {'id':'1','goodspics':'http://localhost:8888/蒜香软法1.jpg',"typeid":"1"},
                    {'id':'2','goodspics':'http://localhost:8888/咸蛋黄卷.jpg',"typeid":"1"}
                ],
                sliderList: [],
                images: [
                    {"picurl":"http://localhost:8888/咸蛋黄卷.jpg"},
                    {"picurl":"http://localhost:8888/咸蛋黄卷2.jpg"},
                    {"picurl":"http://localhost:8888/蒜香软法.jpg"}
                ],
                loadingHidden: true
            })
        })

        // //sliderList
        // wx.request({
        //     url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function(res) {
        //         that.setData({
        //             images: res.data
        //         })
        //     }
        // })

        // //venuesList
        // wx.request({
        //     url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function(res) {
        //         that.setData({
        //             venuesItems: res.data.data
        //         })
        //         setTimeout(function () {
        //             that.setData({
        //                 loadingHidden: true
        //             })
        //         }, 1500)
        //     }
        // })

        // //choiceList
        // wx.request({
        //     url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function(res) {
        //         that.setData({
        //             choiceItems: res.data.data.dataList
        //         })
        //         setTimeout(function () {
        //             that.setData({
        //                 loadingHidden: true
        //             })
        //         }, 1500)
        //     }
        // })

    }
})

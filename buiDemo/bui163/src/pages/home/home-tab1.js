/**
 * [头条模块]
 */
loader.define(function(require,exports,module) {
    var pageview = {};

    // 头条的焦点图
    pageview.focus = function () {
        var uiSlideNews = bui.slide({
            id:"#uiSlideNews",
            height:360,
        })

        // 在最后一个焦点图继续滑动的时候,加载父层的tab导航触发下一个
        uiSlideNews.on("last",function () {
            require("pages/main/home",function (home) {
                home.tab.next();
            })
        })
    }

    // pageview.list = function (){
    //     var uiList = common.getNewsByChannel();
    // }

    pageview.init = function () {
        // 获取频道的id
        bui.getPageParams().done(function(result){
            console.log(result)
            // 初始化列表
            common.getNewsByChannel(result.id)
        })

        // 初始化焦点图
        // this.focus();

        // this.list();

    }

    // 初始化
    pageview.init();
})

/**
 * [视频列表模块]
 */
loader.define(function(require,exports,module) {
    var pageview = {};

    pageview.init = function () {
        // 获取频道的id
        bui.getPageParams().done(function(result){
            console.log(result)
            // 初始化列表
            common.getVideosByChannel(result.id)
            
            $(".video-content").on("click",function(e){
                debugger
                console.log("0-0-0-0-0-",e.currentTarget)
            });
        })

    }

    // 初始化
    pageview.init();
})

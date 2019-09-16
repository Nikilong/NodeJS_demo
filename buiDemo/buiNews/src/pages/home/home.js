/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};

    // 模块初始化定义
    pageview.init = function() {
        // 先初始化
      var uiTab = bui.tab({
        id:"#uiTab",
        // 1: 声明是动态加载的tab
        autoload: true,
        template: function (data) {
            var html ="";
            // 渲染菜单结构
            html +=`<div class="bui-tab-head"><ul id="nav" class="bui-nav">`;
            channelConfig.forEach(function (item,i) {
                html +=`<li class="bui-btn" href="pages/home-tab/home-tab${i+1}.html?id=${item.id}">${item.name}</li>`;
            })
            
            html +=`</ul></div>`;
            // 渲染内容结构
            html +=`<div class="bui-tab-main"><ul class="bui-nav">`;
            channelConfig.forEach(function (item,i) {
                html +=`<li class="bui-btn"></li>`;
            })
            html +=`</ul></div>`;
            return html;
        }
        });

        // 2: 监听加载后的事件
        uiTab.on("to", function(index) {
            console.log(index, "parent")
            loader.require(["pages/home-tab/home-tab"+(index+1)])
            currendChannelIndex = index;
        }).to(0);

    }

    

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})

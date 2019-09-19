/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};

    // 模块初始化定义
    pageview.init = function() {
        // // 初始化新闻页的main的高度,需要减去最外层的公用footer;
        // var newspageMainHeight = bui.init({
        //     id:"#newsPage",
        //     footer:"#tabDynamicNav"
        // });

        // 绑定顶部的tab的名称的href
        $("#nav").find("li").forEach((ele,index) => {
            $(ele).text(G_channelConfig[index]["name"]);
            $(ele).attr("href",`pages/home-tab/home-tab${index+1}.html?id=${G_channelConfig[index]["id"]}`);
        });

        // 先初始化
        var uiTab = bui.tab({
            id:"#uiTabNavbar",
            menu:"#nav",
            // 1: 声明是动态加载的tab
            autoload:true,
            // scroll:false,
        });

        // 2: 监听加载后的事件
        uiTab.on("to", function(index) {
            console.log(index, "parent")
            // 有滚动条时在居中显示
            var itemwidth = $("#nav li").eq(index).prev().width();
            var left = $("#nav li")[index].offsetLeft - itemwidth*4;   // 最多显示8个,因此为减去4个块的宽度
            document.getElementById("uiNavbar").scrollLeft = left;

            loader.require(["pages/home-tab/home-tab"+(index+1)])
            G_currendChannelIndex = index;
        }).to(0);

    }

    

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})

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

        // 1.顶部滑动tabbar初始化
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

        // 监听加载后的事件
        uiTab.on("to", function(index) {
            console.log(index, "channel----")
            // 有滚动条时在居中显示
            var itemwidth = $("#nav li").eq(index).prev().width();
            var left = $("#nav li")[index].offsetLeft - $(window).width() * 0.5 + itemwidth * 0.5;   // 居中显示,需要减去屏幕宽度以及0.5个块的宽度
            document.getElementById("uiNavbar").scrollLeft = left;

            loader.require(["pages/home-tab/home-tab"+(index+1)])
            G_currendChannelIndex = index;
        }).to(0);

        // 2.弹出的频道列表初始化
        // 添加栏目
        let html = "";
        G_channelConfig.forEach((ele,index) => {
            html += `
                <li class="span3">
                    <div class="bui-check">
                        <input id="uid${index}" name="channel" type="radio" data-index=${index}><label for="uid${index}">${ele.name}</label>
                    </div>
                </li>
            `;
        });
        $("#channelDialog").html(html);

        // 栏目弹出菜单, 因为要遮住底部的导航, 所以弹出层需要跟底部导航在一块初始化
        var uiDialogNav = bui.dialog({
            id: "#uiDialog",
            position:"right",
            fullscreen: true,
            effect: "fadeInRight",
            mask: false
        });

        // 显示当前城市名称
        $(".location_city").text(G_localcity).show();

        // 弹出地铁图
        $("#metro-btn").on("click",function(){
            bui.load({url:"pages/metro-detail/metro-detail.html",param:{"cityName":G_localcity} });
        });
        // 弹出按钮的事件绑定
        $("#moreChannelBtn").on("click",function(){
            uiDialogNav.open();
            $("#channelDialog").find("input").eq(G_currendChannelIndex).attr("checked",true);
        });

        // (弹出界面)选择了频道的事件绑定
        $("#channelDialog").on("click",function(e){
            e.stopPropagation();
            let ele = $(e.target);
            if(ele[0].tagName.toLowerCase() === "input"){  
                // 收起弹框
                uiDialogNav.close();
                // 切换tab
                uiTab.to(ele.attr("data-index"));
            }
        });
        
        // 回滚到顶部
        $("#scrollTotopBtn").on("click",function(e){
            let targetEle = $("#uiScroll"+(G_currendChannelIndex + 1))[0];
            common.scrollAnimation(targetEle,targetEle.scrollTop,0);
        })

    }


    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})

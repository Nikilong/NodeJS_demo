/**
 * [精选]
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

    pageview.list = function (){
        var slideHeight = $(window).height() - $(".bui-bar-side").height() - $("#uiNewsTabNav").height();

        // 计算列表的高度
        var listHeight = slideHeight - $("#uiSlideNavbar").height() ;

        var uiList = bui.list({
            id: "#uiScroll",
            url: "http://localhost:4001/servers",
            data: {
                HEADER: {},
				PARAMS: {},
				SERVICE: "NewsService.getNewsByChannel"
            },//接口请求的参数
            // 可选参数
            method: "post",
            template: function template (data) {
                console.log("-----",data)
                var html = '';
                $.each(data,function(index, el) {
                    console.log(el);
                    html += `
                        <li id="${el.id}" class="bui-btn bui-box-align-top">    
                            <div class="thumbnail">
                                <img src="${el.thumbnails[0].url}" alt="">
                            </div>    
                            <div class="span1">        
                                <h3 class="item-title">${el.title}</h3>        
                                <div class="item-text bui-box">            
                                    <div class="span1"><span class="cate">${el.source_name}</span></div>
                                    <span class="stick">${el.article_like_cnt}点赞</span>  
                                    <span class="stick">${el.cmt_cnt}评论</span>  
                                </div>
                            </div>
                        </li>
                    `;
                });
    
                return html;
            },
            height: listHeight,
            commandRefresh: "prepend",
            page:1,
            pageSize:10,
            field: {
                page: "page",        // 分页字段
                size: "pageSize",    // 页数字段
                data: "RESULT"         // 数据
            },
            onRefresh: function (scroll,data) {
                var firstObj = data[0];
                // 刷新的时候,通过第一条id去获取最新10条数据
                uiList.option(data,{"lastid":firstObj.Id})
            },
            onLoad: function (scroll,data) {
                // 自定义渲染
            },
            callback : function () {
                // 点击页面跳转
                var id = $(this).attr("id");
                bui.load({url:"pages/detail/detail.html?id="+id});
            }
        });
    }

    pageview.init = function () {

        // 初始化焦点图
        this.focus();

        // 初始化列表
        this.list();

        // common.getNewsByChannel();
        // common.getNewsByChannel("",function(data){
        //     console.log(data)
        // },function(err){
        //     console.log(err)
        // });
    }

    // 初始化
    pageview.init();
})

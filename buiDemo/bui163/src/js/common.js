// 后台服务器地址
// var baseUrl =  "http://120.78.165.47:4001/servers";
var baseUrl = "http://localhost:4001/servers";
var currendChannelId = "323644874";
var channelConfig = [
    {"name":"推1荐","id":"100"},
    {"name":"热1点","id":"51830095"},
    {"name":"体1育","id":"923258246"},
    {"name":"","id":""},
    {"name":"","id":""},
    {"name":"","id":""},
];

var common = {
    // getNewsByChannel__old:function(channel,success,falied){
    //     console.log("hi----",channel)
    //     bui.ajax({
    //         url: "http://localhost:4001/servers",
    //         data: {
    //             HEADER: {},
	// 			PARAMS: {},
	// 			SERVICE: "NewsService.getNewsByChannel"
    //         },//接口请求的参数
    //         dataType:'json',
    //         // 可选参数
    //         method: "post"
    //     }).then(function(result){
    //         // 成功
    //         let webData = JSON.parse(result.RESULT);
    //         console.log(webData)
    //         let newsList = [];
    //         for (let key in webData.data.articles){
    //             let item = webData.data.articles[key];
    //             if(item.id.length < 10) continue;  // 过滤广告
    //             item.weburl = `http://m.uczzd.cn/webview/news?app=uc-iflow&aid=${item.id}&cid=100&zzd_from=uc-iflow&uc_param_str=dndsfrvesvntnwpfgicp&recoid=3902548323263252739&rd_type=reco&sp_gz=1`;
    //             newsList.push(item);

    //         };
    //         console.log(newsList);
    //         success && success(newsList);
    //     },function(result,status){
    //         // 失败 
    //         console.log(status);
    //         falied && falied(result);
    //     });
    // },
    getNewsByChannel:function (channelId) {
        console.log(currendChannelId,"++++",channelId)
        var slideHeight = $(window).height() - $(".bui-bar-side").height() - $("#uiNewsTabNav").height();

        // 计算列表的高度
        var listHeight = slideHeight - $("#uiSlideNavbar").height() ;

        return bui.list({
            id: "#uiScroll",
            url: baseUrl,
            data: {
                HEADER: {},
				PARAMS: {id:currendChannelId},
				SERVICE: "NewsService.getNewsByChannel"
            },//接口请求的参数
            // 可选参数
            method: "post",
            template: function template (data) {
                console.log("-----",data)
                var html = '';
                $.each(data,function(index, el) {
                    let filter = true;  // 过滤标志
                    if(el.id.length < 10){  // 广告
                        filter = false;
                    }else if(el.op_mark === "置顶"){  // 置顶
                        filter = false;
                    }
                    if(filter){
                        // console.log(el);
                        if(el.thumbnails.length > 2){
                            html += `
                                <li class="bui-btn bui-box-align-top" href="pages/detail/detail.html?id=${el.id}">    
                                    <div class="span1">
                                        <div class="bui-box-space container-full">
                                            <div class="span1">
                                                <div class="bui-pic"><img src="${el.thumbnails[0].url}" alt=""></div>
                                            </div>
                                            <div class="span1">
                                                <div class="bui-pic"><img src="${el.thumbnails[1].url}" alt=""></div>
                                            </div>
                                            <div class="span1">
                                                <div class="bui-pic"><img src="${el.thumbnails[2].url}" alt=""></div>
                                            </div>
                                        </div>
                                        <h3 class="item-title">${el.title}</h3>        
                                        <div class="item-text bui-box">            
                                            <div class="span1"><span class="cate">${el.source_name}</span></div>
                                            <span class="stick">${el.article_like_cnt}点赞&nbsp;&nbsp;</span>  
                                            <span class="stick">${el.cmt_cnt}评论</span>  
                                        </div>
                                    </div>
                                </li>
                            `;
                        }else if(el.thumbnails.length > 0){
                            html += `
                                <li class="bui-btn bui-box-align-top" href="pages/detail/detail.html?id=${el.id}">    
                                    <div class="thumbnail">
                                        <img src="${el.thumbnails[0].url}" alt="">
                                    </div> 
                                    <div class="span1">        
                                        <h3 class="item-title">${el.title}</h3>        
                                        <div class="item-text bui-box">            
                                            <div class="span1"><span class="cate">${el.source_name}</span></div>
                                            <span class="stick">${el.article_like_cnt}点赞&nbsp;&nbsp;</span>  
                                            <span class="stick">${el.cmt_cnt}评论</span>  
                                        </div>
                                    </div>
                                </li>
                            `;
                        }else{
                            html += `
                                <li class="bui-btn bui-box-align-top" href="pages/detail/detail.html?id=${el.id}">    
                                    <div class="span1">        
                                        <h3 class="item-title">${el.title}</h3>        
                                        <div class="item-text bui-box">            
                                            <div class="span1"><span class="cate">${el.source_name}</span></div>
                                            <span class="stick">${el.article_like_cnt}点赞&nbsp;&nbsp;</span>  
                                            <span class="stick">${el.cmt_cnt}评论</span>  
                                        </div>
                                    </div>
                                </li>
                            `;
                            
                        }
                    }
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
            // callback : function (e) {
            //     // 点击页面跳转
            //     let id = $(e.currentTarget).attr("id");
            //     console.log(id)
            //     // let weburl = `http://m.uczzd.cn/webview/news?app=uc-iflow&aid=${id}&cid=100&zzd_from=uc-iflow&uc_param_str=dndsfrvesvntnwpfgicp&recoid=3902548323263252739&rd_type=reco&sp_gz=1`;
            //     // location.href = weburl;
            //     bui.load({url:"pages/detail/detail.html?id="+id});
            // }
        });
        
    }
}
// 后台服务器地址
// var baseUrl =  "http://120.78.165.47:4001/servers";
var baseUrl = "http://localhost:4001/servers";
var currendChannelIndex = 0;
var channelConfig = [
    {"name":"推荐","id":"100"},
    {"name":"热点","id":"51830095"},
    {"name":"视频","id":"10016"},
    {"name":"体育","id":"923258246"},
    {"name":"汽车","id":"323644874"},
    // {"name":"娱乐","id":"179223212"},
    // {"name":"科技","id":"1525483516"},
    // {"name":"财经","id":"26325229"},
    {"name":"军事","id":"1105405272"},
    {"name":"历史","id":"701104723"},
    {"name":"时尚","id":"1213442674"},
    {"name":"段子","id":"10013"},
    {"name":"街拍","id":"10453"},
    {"name":"数码","id":"835729"},
    {"name":"广州","id":"200"},
    {"name":"美食","id":"10000"},
    {"name":"综艺","id":"10465"},
    {"name":"电影","id":"1404457531635"},
    {"name":"动漫","id":"10012"},
    // {"name":"足球","id":"794794774"},
    // {"name":"英超","id":"10469"},
    // {"name":"NBA","id":"10306"},
    // {"name":"图片","id":"1964289243"},
    // {"name":"情感","id":"1099189934"},
    // {"name":"股票","id":"90001"},
    // {"name":"健康","id":"472933935"},
    // {"name":"星座","id":"10008"},
    // {"name":"房产","id":"586710362"},
    // {"name":"商业","id":"696724"},
    // {"name":"旅游","id":"1972619079"},
    // {"name":"家居","id":"586710362"},
    // {"name":"音乐","id":"10022"},
    // {"name":"故事","id":"10430"},
];

var common = {
    getNewsByChannel:function (channelId) {
        console.log(currendChannelIndex,"++++",channelId)
        var slideHeight = $(window).height() - $(".bui-bar-side").height() - $("#uiNewsTabNav").height();

        // 计算列表的高度
        var listHeight = slideHeight - $("#uiSlideNavbar").height() ;

        return bui.list({
            id: "#uiScroll",
            url: baseUrl,
            data: {
                HEADER: {},
				PARAMS: {id:channelConfig[currendChannelIndex]["id"]},
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
        
    },
    getVideosByChannel:function () {
        console.log("videos---")
        var slideHeight = $(window).height() - $(".bui-bar-side").height() - $("#uiNewsTabNav").height();

        // 计算列表的高度
        var listHeight = slideHeight - $("#uiSlideNavbar").height() ;

        return bui.list({
            id: "#uiScroll",
            url: baseUrl,
            data: {
                HEADER: {},
				PARAMS: {id:channelConfig[currendChannelIndex]["id"]},
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
                        // <video width="320" height="240" controls>
                        //     <source src="${el.videos[0].long_video_h5_url}" type="video/mp4">
                        //     您的浏览器不支持 HTML5 video 标签。
                        // </video>
                        // <div class="bui-box-space container-full">
                        //                     <video class="" data-video="${el.videos[0].url}" 
                        //                         data-url_sign="47a4ad0ee44477b594a71127665955fa" id="" 
                        //                         poster="${el.videos[0].poster.url}" preload="none" width="100%" height="100%" 
                        //                         webkit-playsinline="true" controls="" x-webkit-airplay="true" 
                        //                         src="http://smarticle.video.ums.uc.cn/w/1563181093/video/wemedia/0b1a7790ea0542f98488a995662a0b5c/d6d9206091c9d67d6b182f211132b04e-1682706298-6-0-2.mp4?auth_key=1568704175-8fd036f530ea4abb91fa6b49dfc1e1a9-0-6b6959b8b395ecc1c6f8a08b739e4cce" 
                        //                         data-title="${el.videos[0].long}">
                        //                     </video>
                                        // </div>
                                        // <source src="http://v2v.cc/~j/theora_testsuite/320x240.ogg" type="video/mp4">
                    if(filter){
                        html += `
                            <li class="bui-btn bui-box-align-top" href="pages/detail/detail.html?id=${el.id}">    
                                <div class="span1">      
                                    <div class="bui-box-space container-full">
                                        <div class="span1 video-content">
                                            <div class="bui-pic"><img src="${el.videos[0].poster.url}" alt=""></div>
                                            <iframe data-url="${el.id}"></iframe>
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
                $(".video-content").on("click",function(e){
                    // debugger
                    console.log("0-0-0-0-0-",e.currentTarget)
                    e.preventDefault();
                    e.stopPropagation();

                    let iframeEle = $(e.currentTarget).find("iframe")

                    let id = iframeEle.attr("data-url");
                    let weburl = `http://m.uczzd.cn/webview/news?app=uc-iflow&aid=${id}&cid=100&zzd_from=uc-iflow&uc_param_str=dndsfrvesvntnwpfgicp&recoid=3902548323263252739&rd_type=reco&sp_gz=1`;
                    
                    // weburl = "http://smarticle.video.ums.uc.cn/video/wemedia/634bc214b5c04950b0227bd11706fcb8/6712d4ea5ea8155ca0f4edf9a61a1122-1735223539-2-0-2.mp4?auth_key=1568709042-ae6db58edc6b491ab1b6f25b9d842550-0-7ecb0f06ee52ebf6f6d3e2c295c1374a"
                    // iframeEle.attr("src",weburl)
                    $.get(weburl,function(res){
                        console.log(res);
                        });
                });
            },
        });
        
    },
    getNewsDetail:function (id) {
        console.log("getNewsDetail---")
        let params = {
            HEADER: {},
            PARAMS: {id:id},
            SERVICE: "NewsService.getNewsDetail"
        };
        $.post(baseUrl,params,function(result){
            console.log(result)
        });
        
    },
}
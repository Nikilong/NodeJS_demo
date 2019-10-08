// 后台服务器地址
var G_baseUrl =  "http://120.78.165.47:4001/servers";
// var G_baseUrl = "http://localhost:4001/servers";
var G_newsData = [];
var G_currendChannelIndex = 0;
var G_channelConfig = [
    {"name":"推荐","id":"100"},
    {"name":"热点","id":"51830095"},
    {"name":"视频","id":"10016","isVideo":true},
    {"name":"体育","id":"923258246"},
    {"name":"娱乐","id":"179223212"},
    {"name":"汽车","id":"323644874"},
    {"name":"时尚","id":"1213442674"},
    {"name":"段子","id":"10013"},
    {"name":"街拍","id":"10453"},
    {"name":"科技","id":"1525483516"},
    {"name":"财经","id":"26325229"},
    {"name":"军事","id":"1105405272"},
    {"name":"历史","id":"701104723"},
    {"name":"数码","id":"835729"},
    {"name":"广州","id":"200"},
    {"name":"美食","id":"10000"},
    {"name":"综艺","id":"10465"},
    {"name":"电影","id":"1404457531635"},
    {"name":"动漫","id":"10012"},
    {"name":"足球","id":"794794774"},
    {"name":"英超","id":"10469"},
    {"name":"NBA","id":"10306"},
    {"name":"图片","id":"1964289243"},
    {"name":"情感","id":"1099189934"},
    {"name":"股票","id":"90001"},
    {"name":"健康","id":"472933935"},
    {"name":"星座","id":"10008"},
    {"name":"房产","id":"586710362"},
    {"name":"商业","id":"696724"},
    {"name":"旅游","id":"1972619079"},
    {"name":"家居","id":"586710362"},
    {"name":"音乐","id":"10022"},
    {"name":"故事","id":"10430"},
];

G_channelConfig.forEach(()=>{
    G_newsData.push([]);
})

var common = {
    getNewsByChannel:function (channelId) {
        console.log(G_currendChannelIndex,"++++",G_channelConfig[G_currendChannelIndex]["id"])
        var slideHeight = $(window).height() - $(".bui-bar-side").height() - $("#uiNewsTabNav").height();

        // 计算列表的高度
        var listHeight = slideHeight - $("#uiSlideNavbar").height() ;

        let params = {id:G_channelConfig[G_currendChannelIndex]["id"]};
        // 添加城市定位
        if(G_channelConfig[G_currendChannelIndex]["id"] === "200"){
            params.cityName = encodeURI(G_channelConfig[G_currendChannelIndex]["name"]);
        }

        return bui.list({
            id: "#uiScroll"+(G_currendChannelIndex+1),
            url: G_baseUrl,
            data: {
                HEADER: {},
				PARAMS: params,
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
                        G_newsData[G_currendChannelIndex].push(el);
                        let finalIndex = G_newsData[G_currendChannelIndex].length - 1;  // 记录数据索引
                        // console.log(el);
                        if(G_channelConfig[G_currendChannelIndex]["isVideo"]){  //视频
                            // <iframe data-url="${el.id}"></iframe>
                            let imgURL = "",timeL= "";
                            try{
                                // 封面
                                imgURL = el.videos[0].poster.url ? el.videos[0].poster.url : el.thumbnails[0].url;

                                // 时长
                                if(el.content_length >= 60000){
                                    let mimiC = parseInt(el.content_length / 60000 );
                                    timeL = mimiC + "\"" + parseInt((el.content_length - 60000 * mimiC) / 1000);
                                }else{
                                    timeL = "0\"" + parseInt(el.content_length  / 1000);
                                }

                            }catch(e){
                                imgURL = "";
                                console.log(e);
                            }

                            html += `
                                <li class="bui-btn bui-box-align-top" href="pages/detail/detail.html?id=${el.id}">    
                                    <div class="span1">      
                                        <div class="bui-box-space container-full">
                                            <div class="span1 video-content">
                                                <div class="bui-pic v-mask">
                                                    <img src="${imgURL}" alt="">
                                                    <div class="v-content v-mask">
                                                        <div class="item-text bui-box">            
                                                            <div class="span1">
                                                                <div class="v-play"></div>            
                                                            </div>
                                                        </div>
                                                        <div class="item-text bui-box">            
                                                            <div class="span1">
                                                                <div class="v-title">${el.title}</div>        
                                                            </div>
                                                        </div>
                                                        <div class="item-text bui-box">            
                                                            <div class="span1">
                                                                <span class="v-detail">${el.source_name}</span>
                                                            </div>
                                                            <div class="span1  v-right">
                                                                <span class="v-time">${timeL}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </li>
                            `;

                        }else if(el.thumbnails.length > 2){
                            html += `
                                <li class="bui-btn bui-box-align-top" href="pages/detail/detail.html?id=${el.id}">    
                                    <div class="span1">
                                        <div class="bui-box-space container-full">
                                            <div class="span1">
                                                <div class="bui-pic" onclick="showImages(${finalIndex})"><img src="${el.thumbnails[0].url}" alt=""></div>
                                            </div>
                                            <div class="span1">
                                                <div class="bui-pic" onclick="showImages(${finalIndex})"><img src="${el.thumbnails[1].url}" alt=""></div>
                                            </div>
                                            <div class="span1">
                                                <div class="bui-pic" onclick="showImages(${finalIndex})"><img src="${el.thumbnails[2].url}" alt=""></div>
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
            onRefresh: function (scroll,data) {  // 顶部下拉刷新时触发
                // var firstObj = data[0];
                // // 刷新的时候,通过第一条id去获取最新10条数据
                // uiList.option(data,{"lastid":firstObj.Id})
            },
            onLoad: function (scroll,data) {  // 首次加载和底部上拉刷新时触发
                // 自定义渲染
                // $(".video-content").on("click",function(e){
                //     // debugger
                //     console.log("0-0-0-0-0-",e.currentTarget)
                //     e.preventDefault();
                //     e.stopPropagation();

                //     let iframeEle = $(e.currentTarget).find("iframe")

                //     let id = iframeEle.attr("data-url");
                //     let weburl = `http://m.uczzd.cn/webview/news?app=uc-iflow&aid=${id}&cid=100&zzd_from=uc-iflow&uc_param_str=dndsfrvesvntnwpfgicp&recoid=3902548323263252739&rd_type=reco&sp_gz=1`;
                    
                //     // weburl = "http://smarticle.video.ums.uc.cn/video/wemedia/634bc214b5c04950b0227bd11706fcb8/6712d4ea5ea8155ca0f4edf9a61a1122-1735223539-2-0-2.mp4?auth_key=1568709042-ae6db58edc6b491ab1b6f25b9d842550-0-7ecb0f06ee52ebf6f6d3e2c295c1374a"
                //     // iframeEle.attr("src",weburl)
                //     $.get(weburl,function(res){
                //         console.log(res);
                //         });
                // });
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
    getNewsDetail:function (id,callback) {
        console.log("getNewsDetail---")
        let params = {
            HEADER: {},
            PARAMS: {id:id},
            SERVICE: "NewsService.getNewsDetail"
        };
        $.post(G_baseUrl,params,function(result){
            callback && callback(result)
        });
        
    },

    // 通过url获取base64编码,一般用于图片base64获取
    getBase64ImageString:function (url,callback) {
        console.log("getBase64ImageString---")
        let params = {
            HEADER: {},
            PARAMS: {url:url},
            SERVICE: "NewsService.getBase64ImageString"
        };
        $.post(G_baseUrl,params,function(result){
            callback && callback(result)
        });
        
    },
    // 滚动动画,targetEle: 需要滚动的元素  currentY:当前的scroll的值  target:最终滚动的位置
    scrollAnimation:function(targetEle,currentY, targetY) {
        // 计算需要移动的距离
        let needScrollTop = targetY - currentY
        let _currentY = currentY
        setTimeout(() => {
            // 一次调用滑动帧数，每次调用会不一样
            const dist = Math.ceil(needScrollTop / 10)
            _currentY += dist
            targetEle.scrollTo(_currentY, currentY)
                // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
            if (needScrollTop > 10 || needScrollTop < -10) {
                this.scrollAnimation(targetEle,_currentY, targetY)
            } else {
                targetEle.scrollTo(_currentY, targetY)
            }
        }, 1)
    }
}


var G_currentImgs = [];   // 当前的图片组
// 打开图片浏览器
function showImages(index){
    // 停止冒泡,防止打开链接
    var event = window.event || arguments.callee.caller.arguments[0]
    event.preventDefault();
    event.stopPropagation();

    // 提取照片组
    G_currentImgs = [];
    G_currentImgs = G_newsData[G_currendChannelIndex][index]["images"] || G_newsData[G_currendChannelIndex][index]["thumbnails"];
    if (G_currentImgs.length > 0){

        let imgData = [];
        let maxH = 0;
        let windowW = $(window).width();
        let tempH = 0;
        G_currentImgs.forEach((item)=>{
            tempH = item.height / item.width  * windowW;
            maxH = tempH > maxH ? tempH : maxH;
            imgData.push({"image":item.url,"width":windowW,"height":tempH});
        })
    
        // 自定义居中弹出框
        var uiDialog = bui.dialog({
            id: "#dialogCenter",
            fullscreen:true,
            onMask: function() {
            },
            onBeforeClose: function(){
                $("#scrollTotopBtn").show();
                $("#downloadPicBtn").off("click");
            }
        });
    
        // 图片浏览器
        var uiSlide = bui.slide({
            id: "#slide",
            autoheight:true,
            autopage: true,
            data: imgData,
            onBeforeTo:function(e){},
            onInited:function(e){
                try{
                    // 相片垂直居中显示(根据图片与最大图片的高度相比而调整margin)
                    let targetEle= $("#slide li");
                    targetEle.forEach((item,index)=>{
                        let data = imgData[index];
                        let margin = ( maxH - data.height) * 0.5;
                        $(item).find("img")[0].style.margin = margin + "px 0";
                    })
                }catch(e){console.log(e)}
            }
        })
        // 因为slide叠在mask上面,所以需要另外绑定事件
        $("#sliderMain").on("click",function(){
            uiDialog.close();
        })

        // 下载图片
        $("#downloadPicBtn").on("click",function(e){
            console.log(bui.platform)
            if(bui.platform.isAndroid() || bui.platform.isIos()){
                bui.hint({ 
                    "content": "长按图片可以保存", 
                    "position": "top", 
                    "effect": "fadeInDown",
                    "skin": "warning"
                });
            }else{

                let item = G_currentImgs[uiSlide.index()];
                console.log(item)
    
                common.getBase64ImageString(item.url,function(result){
                    let imgType = "";
                    switch (item.type) {
                        case "gif":
                            imgType = "data:image/gif;base64,"
                            break;
                        case "png":
                            imgType = "data:image/png;base64,"
                            break;
                        case "icon":
                            imgType = "data:image/x-icon;base64,"
                            break;
                        default:
                            imgType = "data:image/jpeg;base64,"
                            break;
                    }
                    let tempImg = document.createElement("img");
                    tempImg.src = imgType + JSON.parse(result).RESULT;
                    tempImg.id = "baseImgTemp"
    
                    // tempImg.style.position = "fixed";
                    // tempImg.style.top = "0";
                    // tempImg.style.left = "0";
                    // tempImg.style.zIndex = "99999";
                    // tempImg.style.width = "100px";
                    // tempImg.style.height = "100px";
                    document.body.appendChild(tempImg);
       
                    html2canvas(document.getElementById("baseImgTemp")).then(canvas => {
                        canvas.toBlob(function(blob) {
                            saveAs(blob, Date.now() +"." +item.type);
                            let imgEle = document.getElementById("baseImgTemp")
                            imgEle.parentNode.removeChild(imgEle);
                        });
                    })
    
                })
            }

        })

        $("#scrollTotopBtn").hide();
    
        uiDialog.open();
    }

}
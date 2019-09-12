var common = {
    getNewsByChannel__old:function(channel,success,falied){
        console.log("hi----",channel)
        bui.ajax({
            url: "http://localhost:4001/servers",
            data: {
                HEADER: {},
				PARAMS: {},
				SERVICE: "NewsService.getNewsByChannel"
            },//接口请求的参数
            dataType:'json',
            // 可选参数
            method: "post"
        }).then(function(result){
            // 成功
            let webData = JSON.parse(result.RESULT);
            console.log(webData)
            let newsList = [];
            for (let key in webData.data.articles){
                let item = webData.data.articles[key];
                if(item.id.length < 10) continue;  // 过滤广告
                item.weburl = `http://m.uczzd.cn/webview/news?app=uc-iflow&aid=${item.id}&cid=100&zzd_from=uc-iflow&uc_param_str=dndsfrvesvntnwpfgicp&recoid=3902548323263252739&rd_type=reco&sp_gz=1`;
                newsList.push(item);

            };
            console.log(newsList);
            success && success(newsList);
        },function(result,status){
            // 失败 
            console.log(status);
            falied && falied(result);
        });
    },
    getNewsByChannel:function () {
        
    }
}
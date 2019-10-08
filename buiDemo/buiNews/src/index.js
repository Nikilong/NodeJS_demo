window.router = bui.router();
window.BMap = BMap;

// 移动端打开vconsole调试
// new VConsole();

function buiReadyFunc(){

    bui.ready(function() {
        // 初始化路由
        router.init({
            id: "#bui-router",
            progress: true,
            hash: true,
        })
    
        // 绑定事件
        bind();
    
        // 事件类定义
        function bind() {
            // 绑定页面的所有按钮有href跳转
            bui.btn({ id: "#bui-router", handle: ".bui-btn" }).load();
    
            // 统一绑定页面所有的后退按钮
            $("#bui-router").on("click", ".btn-back", function(e) {
                // 支持后退多层,支持回调
                bui.back();
            })
        }
    })
}

// 获取当前定位(使用百度地图API)
let geolocation = new BMap.Geolocation()
geolocation.enableSDKLocation(); //允许SDK辅助
geolocation.getCurrentPosition(function (r) {

    // 定位当前城市
    if(this.getStatus() == 0){
        console.log(r)
        let cityName = r.address.city.substring(0,r.address.city.length - 1)
        for (const key in G_channelConfig) {
            if (G_channelConfig.hasOwnProperty(key)) {
                const element = G_channelConfig[key];
                if(element["id"] === "200"){
                    G_channelConfig[key]["name"] = cityName;
                }
            }
        }
    }


    // 初始化bui
    buiReadyFunc();
})
loader.define(function(require,exports,module) {
    var pageview = {
    }


    pageview.bind = function () {
      let _this = pageview;
      $("#metro-back").on("click", function(e) {
        bui.back({name:"main"});
        e.preventDefault();
        e.stopPropagation();
      })
    }

    pageview.init = function () {
      let _this = pageview;

      _this.uiLoading = bui.loading();
      //开启进度条
      _this.uiLoading.show();

      var getParams = bui.getPageParams();
      getParams.done(function(result){
        // 先加载地铁图
        _this.loadDetail(result.cityName);

        // 获取城市列表
        var cityList = BMapSub.SubwayCitiesList;
        let dropData = [];
        for(let i in cityList){
          let item = cityList[i];
          dropData.push({name:item.name,value:item.keyword});
        }
        //下拉菜单 在顶部中间
        var barMain = bui.dropdown({
            id: "#barMain",
            showArrow: true,
            relative: false,
            value: result.cityName,
            data:dropData,
            template: function (data) {
                var html = '';
                html += '<ul class="bui-list">'
                data && data.forEach(function(el, index) {
                    html += '<li class="bui-btn" value="' + el.value + '">' + el.name + '</li>';
                })
                html += '</ul>'
              return html;
            },
            onChange: function(e) {
                console.log(this.text(), "change")
                _this.loadDetail(this.text());
            },
        })

        //关闭进度条
        _this.uiLoading.hide();
    })
  }

  // 加载地铁图
  pageview.loadDetail = function(cityName){
    $("#metro-frame").attr("src","about:blank");
    if(!cityName) cityName = G_localcity;
    let url = "./metro.html?cityName="+ encodeURI(cityName)
    $("#metro-frame").attr("src",url);
  }

  // 页面初始化
  pageview.init();
  pageview.bind();
})
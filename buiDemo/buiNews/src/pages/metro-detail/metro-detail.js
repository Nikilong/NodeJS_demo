loader.define(function(require,exports,module) {
    var pageview = {
      currentCityIndex:0,
    }


    pageview.bind = function () {
      let _this = pageview;
      // 返回事件
      $("#metro-back").on("click", function(e) {
        bui.back({name:"main"});
        e.preventDefault();
        e.stopPropagation();
      })

      // 改变城市
      $("#change-city").on("click", function(e) {
        pageview.uiSwipe.open({
          "target":"swipeleft",
          "transition": "none"
        });
      })
      // $("#download-map").on("click", function(e) {
        // pageview.uiSidebar.open();
      //     html2canvas(document.getElementById("metro-frame")).then(canvas => {
      //         canvas.toBlob(function(blob) {
      //             saveAs(blob, Date.now() +".jpg");
      //             // let imgEle = document.getElementById("baseImgTemp")
      //             // imgEle.parentNode.removeChild(imgEle);
      //         });
      //     })

      // })
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
        let citysList = BMapSub.SubwayCitiesList;
        // 添加按钮
        let html = "";
        citysList.forEach((ele,index) => {
          let isCheck = "";
          if(ele.name === G_localcity){
            // 选中点前城市
            isCheck = "bui-btn-select";
            _this.currentCityIndex = index;
          }
          html += `
              <div class="span1">
                  <div class="bui-btn ${isCheck}" data-index="${index}">${ele.name}</div>
              </div>
          `;
        });
        $("#citysContainer").html(html);

        // (弹出界面)选择了频道的事件绑定
        $("#citysContainer").on("click",".bui-btn",function(e){
          // 收起弹框
          _this.uiSwipe.close();

          // 选中和反选
          let ele = $(e.target);
          let selectIndex = ele.attr("data-index");
          if(selectIndex != _this.currentCityIndex){
            $("#citysContainer").find(".bui-btn").eq(_this.currentCityIndex).removeClass("bui-btn-select");
            ele.addClass("bui-btn-select");
            _this.currentCityIndex = selectIndex;
            _this.loadDetail(ele.text());
          }
        });

        // 蒙版
        var uiMask = bui.mask({
            appendTo: ".bui-page",
            callback: function(argument) {
              _this.uiSwipe.close();
              uiMask.hide();
            }
        });

        // 右边抽屉
        _this.uiSwipe = bui.swipe({
            id: "#uiSwipe",
            handle: ".bui-page",
            zoom: true,
            direction: "x",
        });
    
        _this.uiSwipe.on("open", function(e, touch) {
            uiMask.show();
        })
        _this.uiSwipe.on("close", function(e) {
            uiMask.hide();
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
    $("#barMain").find("span").text(cityName);
    $("#metro-frame").attr("src",url);
  }

  // 页面初始化
  pageview.init();
  pageview.bind();
})
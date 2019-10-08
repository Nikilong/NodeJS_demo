loader.define(function(require,exports,module) {
    var pageview = {},
        pageParams;


    pageview.bind = function () {

    }

    pageview.init = function () {
      
      // var subwayCityName = '北京';
      // var list = BMapSub.SubwayCitiesList;
      // console.log(list)
      // var subwaycity = null;
      // for (var i = 0; i < list.length; i++) {
      //     if (list[i].name === subwayCityName) {
      //         subwaycity = list[i];
      //         break;
      //     }
      // }

      // // var containerEle = document.createElement("div");
      // // containerEle.id = "";
      
      // $("#metro_main").append("<div id='metro_container'></div>");
      // // 获取北京地铁数据-初始化地铁图
      // var subway = new BMapSub.Subway('metro_container', subwaycity.citycode);
      // subway.setZoom(0.5);

      $("#metro_container").load("../../test.html")

    }

  // 页面初始化
   pageview.init();
})
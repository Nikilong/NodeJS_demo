loader.define(function(require,exports,module) {
    var pageview = {},
        pageParams;


    pageview.bind = function () {
       //自定义弹出菜单初始化
      var dialog = bui.dialog({
        id: "#actionsheet",
        position:"bottom",
        effect:"fadeInUp",
        onMask: function (argument) {
            dialog.close();
        },
      }); 
       
      // 绑定评论按钮跳转
      $(".all-comments").on("click",function (argument) {
        bui.load({url:"pages/comment/comment.html",param:{ id: pageParams.id } });
      });

      $("#commentText").on("focus",function () {
          showSend();
      })
      $(".send").on("click",function () {
          hideSend();
      })

      // 返回按钮
      $(".btn-back").on("click",function(){
        // window.history.back("-1");
        bui.back();
      });
    
      // 分享按钮
      $('.share').on("click",function (argument) {
        dialog.open();
      })
    }

    pageview.init = function () {
      // 获取新闻的参数
      bui.getPageParams().done(function(result){
        pageParams = result;
        // let weburl = `http://m.uczzd.cn/webview/news?app=uc-iflow&aid=${pageParams.id}&cid=100&zzd_from=uc-iflow&uc_param_str=dndsfrvesvntnwpfgicp&recoid=3902548323263252739&rd_type=reco&sp_gz=1`;
        // $("#mainContent").attr({
        //   "height":$(window).height() - $("footer").height(),
        //   "width":$(window).width(),
        //   "src":weburl,
        // });
        common.getNewsDetail(result.id)
      })
       
       this.bind();

    }

    // 显示发送
    function showSend() {
       $(".all-comments").css("display","none");
       $(".share").css("display","none");
       $(".send").css("display","block");
    }

    // 隐藏发送
    function hideSend() {
       $(".all-comments").css("display","block");
       $(".share").css("display","block");
       $(".send").css("display","none");
    }


  // 页面初始化
   pageview.init();
})
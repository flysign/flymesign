app.pages[4] = (function() {
    var page = {
        init: init,
        onLoad: onLoad,
        onLeave: onLeave,
        dependingTask: 'p4',
        isFlipReady: false, //标志页面是否可以翻页, 当页面所有动画运行完之后设置为true,离开页面后再重置为false
        hasBranch: false, //标志页面内是否有分支,默认为false,
    };
    var p4LoadingTimer, p4Loading = 0;
    function init() {
        initEvents();
    }

    function initEvents() {
        $('.p4-new').click(function() {
            app.p3Music[app.playMusicNum].pause();
            app.bgm.play();
            clearInterval(app.p3ClockTimer);
            clearTimeout(app.musicTimer);
            clearTimeout(app.signTimer);
            $('.p3-time-icon').hide();
            $('.p3-canvas')[0].getContext("2d").clearRect(0, 0, $(window).width(), $(window).height());
            app.playMusic = [];
            app.musicEnd = false;
            app.drawing = false;
            app.hasTimeOut = false;

            $('.p3-musicEnd').hide();
            $('.p3-con').attr('src', 'img/opacity.png');
            $('.p3-con').removeClass('p3-answera1 p3-answera2 p3-answera3 p3-answera4 p3-answera5 p3-answerb1 p3-answerb2 p3-answerb3 p3-answerb4 p3-answerb5 p3-answerc1 p3-answerc2 p3-answerc3 p3-answerc4 p3-answerc5');
            $('.p4-icon').removeClass('p4-icon1a1 p4-icon2a2 p4-icon3a3 p4-icon4a4 p4-icon5a5 p4-icon1b1 p4-icon2b2 p4-icon3b3 p4-icon4b4 p4-icon5b5 p4-icon1c1 p4-icon2c2 p4-icon3c3 p4-icon4c4 p4-icon5c5');
            app.showPage(3);
        });

        // 点击第四页的播放按钮
        $('.p4-player').click(function() {
            app.p3Music[app.playMusicNum].play();
            $(this).hide();
            $('.p4-pause').show();
            $('.p4-cd').addClass('p3-rotate');
        });
        $('.p4-pause').click(function() {
            app.p3Music[app.playMusicNum].pause();
            $(this).hide();
            $('.p4-player').show();
            $('.p4-cd').removeClass('p3-rotate');
        });

        // 点击分享按钮
        $('.p4-release').click(function(){
            app.showDialog('share');
        });
    }

    // function musicPlay(index) {
    //     // app.p3Music[index].play();
    //     app.p3Music[index].loop = true;
    //     // app.p3Music[index].currentTime = 0;
    //     app.p3Music[index].play();
    // }

    // 向后台请求接口
    function ajaxSendMusic(sendData) {
     $.ajax({
       url: 'http://115.28.234.80:3013/api/music/add',
       type: 'POST',
       dataType: 'json',
       //timeout: 10000,
       // contentType: "application/json",
       data: sendData,
       // 发送请求前
       beforeSend: function(xhr, settings) {
         // $('.d-loading-title').show();//显示菊花
         // console.log('beforeSend', xhr, settings);
       },
       // 请求成功
       success: function(res, status, xhr) {
       	
         if (res.code === 0) {
         	alert('上传成功')
           app.p4receive = res.data.id;
           $('#qrcode').html('');
           var qrcode = new QRCode(document.getElementById("qrcode"), {
              text: 'http://dev.benbun.com/web/proj/shoufa/index.html?id=' + app.p4receive +'&musicType='+app.musicType+'&musicNum=' + app.playMusicNum,
              correctLevel : QRCode.CorrectLevel.M
            });
           html2canvas(document.querySelector("#p4-canvas-save")).then(canvas => {
                //执行拍照
                //document.body.appendChild(canvas);
                // 图片导出为 png 格式
                var type = 'image/png';
                var imgData = canvas.toDataURL(type);
                // var url = canvas.toDataURL("image/jpeg"); //图片地址
                $('.p4-share-img').attr('src', imgData);
            });
           clearInterval(p4LoadingTimer);//关闭loading
             $('.d-loading-title').hide();
             app.p3Music[app.playMusicNum].muted = false;
             app.p3Music[app.playMusicNum].loop = true;
//           换成我们的音频
             app.p3Music[app.playMusicNum].play();
         } else {
           layer.msg('请求失败');
         }
       },
       error: function(xhr, errorType, error) {
        console.log('error',error);
         // 请求失败
         setTimeout(function(){
            var sendData = {
                "img": app.sendImg,
                "music_type": app.musicType,
                "music_num": app.playMusicNum
            };
            // console.log('sendData',sendData);
            ajaxSendMusic(sendData);
         },2000);
       },
       complete: function(xhr, status) {
         // 请求成功或失败都执行
         // console.log('complete');
       }
     });
   }

   

    function onLoad() {
        app.bgm.pause();
        $('.p4-cd').addClass('p3-rotate');
        window.wxshare.config({
          timelineText: app.playerName +'的同名专辑做好了，了解一下？',
          title: app.playerName + '的首发同名专辑',
          desc: '你的名字和哪段音乐旋律更配？',
          link: app.link,
          imgUrl: 'http://w.benbun.com/proj/shoufa/img/share.jpg'
        });
        $('.p3-canvas').removeClass('p3-canvas-hide');
        $('.d-loading-title').show();//显示菊花
        p4LoadingTimer = setInterval(function(){
        	
            p4Loading++;
            if (p4Loading > 11) {
                p4Loading = 0;
            
            }
            $('.album-loading img').hide();
            $('.album-loading img').eq(p4Loading).show();
        },100);
        setTimeout(function() {
            page.isFlipReady = true;
            html2canvas(document.querySelector("#p4-canvas-send"),{
                backgroundColor: null}).then(canvas => {
                // 图片导出为 png 格式
                var type = 'image/png';
                var imgData = canvas.toDataURL(type);
                // var url = canvas.toDataURL("image/jpeg"); //图片地址
                app.sendImg = imgData;
                var sendData = {
                    "img": app.sendImg,
                    "music_type": app.musicType,
                    "music_num": app.playMusicNum
                };
                // console.log(app.sendImg);
//              ajaxSendMusic(sendData);
				clearInterval(p4LoadingTimer);//关闭loading
             $('.d-loading-title').hide();
             app.p3Music[app.playMusicNum].muted = false;
             app.p3Music[app.playMusicNum].loop = true;
//            换成我们的音频
             app.p3Music[app.playMusicNum].play();
            });
        }, 1500);
    }

    function onLeave() {
        clearInterval(p4LoadingTimer);//关闭loading
        $('.p4-cd').removeClass('p3-rotate');
        page.isFlipReady = false;
    }

    return page;
})();
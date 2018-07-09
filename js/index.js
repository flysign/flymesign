// 功能1：定义全局事件
// 功能2：定义加载函数，框架已经定义好，只需需要手动在 app.loader.init 中添加 加载任务序列;
// 功能3：初始化app


$(function() {
    function initCommenEvent() {
        // document.addEventListener("WeixinJSBridgeReady", function() { /*IOS音乐不会自动播放，需调微信接口*/
        //     var elecMusicSrc = ['media/rock/rock11.mp3', 'media/rock/rock12.mp3', 'media/rock/rock13.mp3', 'media/rock/rock14.mp3', 'media/rock/rock15.mp3', 'media/rock/rock16.mp3', 'media/rock/rock17.mp3', 'media/rock/rock18.mp3', 'media/rock/rock19.mp3', 'media/rock/rock21.mp3', 'media/rock/rock22.mp3', 'media/rock/rock23.mp3', 'media/rock/rock24.mp3', 'media/rock/rock25.mp3', 'media/rock/rock26.mp3', 'media/rock/rock27.mp3', 'media/rock/rock28.mp3', 'media/rock/rock29.mp3', 'media/rock/rock31.mp3', 'media/rock/rock32.mp3', 'media/rock/rock33.mp3', 'media/rock/rock34.mp3', 'media/rock/rock35.mp3', 'media/rock/rock36.mp3', 'media/rock/rock37.mp3', 'media/rock/rock38.mp3', 'media/rock/rock39.mp3', 'media/rock/rock41.mp3', 'media/rock/rock42.mp3', 'media/rock/rock43.mp3', 'media/rock/rock44.mp3', 'media/rock/rock45.mp3', 'media/rock/rock46.mp3', 'media/rock/rock47.mp3', 'media/rock/rock48.mp3', 'media/rock/rock49.mp3', 'media/rock/rock51.mp3', 'media/rock/rock52.mp3', 'media/rock/rock53.mp3', 'media/rock/rock54.mp3', 'media/rock/rock55.mp3', 'media/rock/rock56.mp3', 'media/rock/rock57.mp3', 'media/rock/rock58.mp3', 'media/rock/rock59.mp3', 'media/rock/rockhead3.mp3', 'media/rock/rockhead2.mp3', 'media/rock/rockhead1.mp3', 'media/Jazz/Jazz11.mp3', 'media/Jazz/Jazz12.mp3', 'media/Jazz/Jazz13.mp3', 'media/Jazz/Jazz14.mp3', 'media/Jazz/Jazz15.mp3', 'media/Jazz/Jazz16.mp3', 'media/Jazz/Jazz17.mp3', 'media/Jazz/Jazz18.mp3', 'media/Jazz/Jazz19.mp3', 'media/Jazz/Jazz21.mp3', 'media/Jazz/Jazz22.mp3', 'media/Jazz/Jazz23.mp3', 'media/Jazz/Jazz24.mp3', 'media/Jazz/Jazz25.mp3', 'media/Jazz/Jazz26.mp3', 'media/Jazz/Jazz27.mp3', 'media/Jazz/Jazz28.mp3', 'media/Jazz/Jazz29.mp3', 'media/Jazz/Jazz31.mp3', 'media/Jazz/Jazz32.mp3', 'media/Jazz/Jazz33.mp3', 'media/Jazz/Jazz34.mp3', 'media/Jazz/Jazz35.mp3', 'media/Jazz/Jazz36.mp3', 'media/Jazz/Jazz37.mp3', 'media/Jazz/Jazz38.mp3', 'media/Jazz/Jazz39.mp3', 'media/Jazz/Jazz41.mp3', 'media/Jazz/Jazz42.mp3', 'media/Jazz/Jazz43.mp3', 'media/Jazz/Jazz44.mp3', 'media/Jazz/Jazz45.mp3', 'media/Jazz/Jazz46.mp3', 'media/Jazz/Jazz47.mp3', 'media/Jazz/Jazz48.mp3', 'media/Jazz/Jazz49.mp3', 'media/Jazz/Jazz51.mp3', 'media/Jazz/Jazz52.mp3', 'media/Jazz/Jazz53.mp3', 'media/Jazz/Jazz54.mp3', 'media/Jazz/Jazz55.mp3', 'media/Jazz/Jazz56.mp3', 'media/Jazz/Jazz57.mp3', 'media/Jazz/Jazz58.mp3', 'media/Jazz/Jazz59.mp3', 'media/Jazz/Jazzhead3.mp3', 'media/Jazz/Jazzhead2.mp3', 'media/Jazz/Jazzhead1.mp3', 'media/elec/elec11.mp3', 'media/elec/elec12.mp3', 'media/elec/elec13.mp3', 'media/elec/elec14.mp3', 'media/elec/elec15.mp3', 'media/elec/elec16.mp3', 'media/elec/elec17.mp3', 'media/elec/elec18.mp3', 'media/elec/elec19.mp3', 'media/elec/elec21.mp3', 'media/elec/elec22.mp3', 'media/elec/elec23.mp3', 'media/elec/elec24.mp3', 'media/elec/elec25.mp3', 'media/elec/elec26.mp3', 'media/elec/elec27.mp3', 'media/elec/elec28.mp3', 'media/elec/elec29.mp3', 'media/elec/elec31.mp3', 'media/elec/elec32.mp3', 'media/elec/elec33.mp3', 'media/elec/elec34.mp3', 'media/elec/elec35.mp3', 'media/elec/elec36.mp3', 'media/elec/elec37.mp3', 'media/elec/elec38.mp3', 'media/elec/elec39.mp3', 'media/elec/elec41.mp3', 'media/elec/elec42.mp3', 'media/elec/elec43.mp3', 'media/elec/elec44.mp3', 'media/elec/elec45.mp3', 'media/elec/elec46.mp3', 'media/elec/elec47.mp3', 'media/elec/elec48.mp3', 'media/elec/elec49.mp3', 'media/elec/elec51.mp3', 'media/elec/elec52.mp3', 'media/elec/elec53.mp3', 'media/elec/elec54.mp3', 'media/elec/elec55.mp3', 'media/elec/elec56.mp3', 'media/elec/elec57.mp3', 'media/elec/elec58.mp3', 'media/elec/elec59.mp3', 'media/elec/elechead3.mp3', 'media/elec/elechead2.mp3', 'media/elec/elechead1.mp3'];

        //     elecMusicSrc[1].play();
        //     elecMusicSrc[0].play();
        //     elecMusicSrc[2].play();
        //     elecMusicSrc[3].play();
        //     elecMusicSrc[4].play();
        //     elecMusicSrc[5].play();
        //     // for (var e = 0; e < elecMusicSrc.length; e++) {
        //     //   // var elecMusicItem = new Audio(elecMusicSrc[i]);
        //     //   elecMusicSrc[e].play();
        //     //   // elecMusicItem.pause();
        //     // }
        // }, false);

    }

    /***********************************/
    function loading(showPageId, branch) {
        var timeout;
        var interval = 0;
        var flagFakeOver = 0;
        var processNum = 0;
        var randomStep = function() {
            var time = 50.0 + 0 | Math.random() * 500;
            timeout = setTimeout(function() {
                processNum += 1.0 + 0 | Math.random() * 5;
                if (processNum >= 79) {
                    processNum = 79;
                    flagFakeOver = 1;
                }
                setProcess(processNum);
                if (!flagFakeOver) {
                    randomStep();
                } else {
                    clearTimeout(timeout);
                }
            }, time);
        };
        var setProcess = function(n) {
          app.userId = getQueryString('id');
          if (app.userId) {
            if (n >= 100) {
              n = 99;
            }
          }
            $('.p0-process').text(n + '%');
        };
        var fakePreload = function() {
            randomStep();
        };

        fakePreload();

        $('.cssloader').hide();
        $('.p0').show();
        var p3Preload = [];
        for( var i = 0 ; i < 5; i++) {
            p3Preload.push('img/p3-q' + (i + 1) + 'a.png?' + app.version);
            p3Preload.push('img/p3-q' + (i + 1) + 'b.png?' + app.version);
            p3Preload.push('img/p3-q' + (i + 1) + 'c.png?' + app.version);
        }
        app.loader.init({

            // 在manifest中定义加载序列
            manifest: [{
                id: 'p1',
                selector: '.p1 img,.p2 img, .p3 img, .p4 img ',
                imgs: ['']
            }, {
                id: 'p2',
                selector: '.p2 img,.p5 img',
                imgs: ['img/arrow-left.png', 'img/arrow-right.png']
            }, {
                id: 'p3',
                selector: '.p3 img',
                imgs: p3Preload,
            }, {
                id: 'p4',
                selector: '.p4 img',
                imgs: ['img/p4-bg.jpg']
            }, {
                id: 'p5',
                selector: '.p5 img',
                imgs: ['']
            }],


            onAllFrontImgLoaded: function(e) {
                // console.log('onAllFrontImgLoaded');
                clearInterval(interval);
                processNum = 80;
                flagFakeOver = 1;
                clearTimeout(timeout);

                interval = setInterval(function() {
                    processNum += 3;
                    if (processNum >= 100) {
                        processNum = 100;
                        clearInterval(interval);
                        app.showPage(showPageId, branch);
                    }
                    setProcess(processNum);
                }, 20);
            },
        });
        app.loader.showPageNo = showPageId;
        app.loader.start('p' + showPageId);

    }

    function getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = decodeURI(window.location.search).substr(1).match(reg);
      if (r !== null) return unescape(r[2]);
      return null;
    }
    app.userId = getQueryString('id');
    if (app.userId) {
      app.playMusicNum = getQueryString('musicNum');
      app.musicType = getQueryString('musicType');
    }
    
    // 向后台接受信息
    function ajaxReceiveMusic(userId) {
     $.ajax({
       url: 'http://115.28.234.80:3013/api/music/query?id='+userId,
       type: 'get',
       dataType: 'json',
       //timeout: 10000,
       // data: userId,
       // 发送请求前
       beforeSend: function(xhr, settings) {
        app.bgm.pause();
        // console.log('testsenddata');
         // $('.d-loading').show();//显示菊花
         // console.log('beforeSend', xhr, settings);
       },
       // 请求成功
       success: function(res, status, xhr) {
         console.log('success', res);
         if (res.code === 0) {
          var urlNow = decodeURIComponent(res.data.img);
          $('.p5-receive').attr('src',urlNow);
          // app.playMusicNum = res.data.music_num; 
          $('.p0-process').html('100%');
          app.showPage(5);
         } else {
           layer.msg('请求失败');
         }
       },
       error: function(xhr, errorType, error) {
         // 请求失败
         layer.msg('请求失败');
         console.log('error',error);
         setTimeout(function(){
          ajaxReceiveMusic(app.userId);
        },2000);
       },
       complete: function(xhr, status) {
         // 请求成功或失败都执行
         $('.d-loading').hide();//关闭菊花
         // console.log('complete');
       }
     });
   }

    /************************************/

    function initApp() {
        app.initPages();  
        app.initSounds && app.initSounds();
        initCommenEvent();
        app.bgm && app.bgm.init();
        if (app.userId != null) {
          loading(0);
          app.bgm.pause();
          ajaxReceiveMusic(app.userId);
          
          if (app.musicType == 'elecMusic') {
            app.p3Music = app.elecMusic;
          } else if (app.musicType == 'jazzMusic') {
            app.p3Music = app.jazzMusic;
          } else {
            app.p3Music = app.rockMusic;
          }
          document.addEventListener("WeixinJSBridgeReady", function () {  /*IOS音乐不会自动播放，需调微信接口*/
            app.p3Music[app.playMusicNum].muted = false;
            app.p3Music[app.playMusicNum].loop = true;
            app.p3Music[app.playMusicNum].play();
            app.p3Music[app.playMusicNum].pause();
            // app.p3Music[app.playMusicNum].pause();
          }, false);
        } else {
          loading(1);
        }

    }

    initApp();
});
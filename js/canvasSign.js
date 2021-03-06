//画笔
var paint;
//画布
var canvas;
//画笔颜色
var color;
//画布粗心
var width;

$(function() {
  //进行一些基本的设置
  setAttr();
  //绘图监听
  // drawMonitor();
})

var signMusicEnd = 0, signMusicStart = 0,signMusicPlay = 0;

function setAttr() {
  canvas = document.getElementsByClassName("p3-canvas")[0];
  canvas.width = $(window).width();
  canvas.height = $(window).height();
  paint = canvas.getContext("2d");
  color = "#fff";
  width = 5;
}

var startX = 0;
var startY = 0;


function drawMonitor() {
  //给画笔添加上个事件一个点击开始 ， 点击后移动 ，点击事件结束
  $('.p3').on("touchstart touchmove touchend", function(event) {
    var endX;
    var endY;
    // $('.p3-fingur').hide();
    if (!app.hasSignTimeOut) {
      app.p3PlayMusic = false;
      $('.p3-sign-title').hide();
      $('.p3-time-icon').eq(app.p3ClockNum).show();
      app.p3ClockTimer = setInterval(function(){
        app.p3ClockNum++;
        $('.p3-time-icon').hide();        
        if (app.p3ClockNum > 5) {
          app.p3ClockNum = 0;
        }
        $('.p3-time-icon').eq(app.p3ClockNum).show();
      },1000);
      $('.p3-musicEnd').show(); 
      app.signTimer = setTimeout(function(){
        app.drawing = false;
        $('.p3-con').removeClass('p3-cur');
        app.p3Music[app.playMusicNum].pause();
        app.p3Music[app.playMusicNum].muted = false;
        app.p3ClockNum = 0;
        clearInterval(app.p3ClockTimer);
        $('.p3-time-icon').hide();
        $('.p3-time-icon').eq(5).show();
        $('.p3-player-btn').removeClass('p3-player-btn-jump');
        app.p3PlayMusic = true;
        app.p3BtnTimer = setInterval(function(){
          app.p3BtnNum++;
          if (app.p3BtnNum > 1) {
            app.p3BtnNum = 0;
          }
          $('.p3-player-btn-item').hide();
          $('.p3-player-btn-item').eq(app.p3BtnNum).show();
        },300);
      },5000);
      app.hasSignTimeOut = true;
    }

    switch (event.type) {
      case "touchstart":
        if (app.drawing) {
          if (app.common.browser.isIos) {
            // signMusicStart = new Date().getTime();
            app.p3Music[app.playMusicNum].muted = false;
            // if (app.signIsFirst) {
              app.p3Music[app.playMusicNum].play();
            //   app.signIsFirst = false;
            // }
            // app.p3Music[app.playMusicNum].currentTime = 1;
          } else {
            app.p3Music[app.playMusicNum].play();
          }
          
        }
        //记录触屏的第一个点
        canvasX = $('.p3-canvas').offset().left;
        canvasY = $('.p3-canvas').offset().top;

        startX = event.originalEvent.targetTouches[0].clientX-canvasX;
        startY = event.originalEvent.targetTouches[0].clientY-canvasY;
        if (app.drawing) {
          paint.beginPath();
          paint.moveTo(startX, startY);
          paint.lineTo(startX+1, startY+1);
          paint.strokeStyle = color;
          paint.lineWidth = width;
          paint.stroke();
        }
        break;
      case "touchmove":
        if (app.drawing) { //绘图
          if (app.common.browser.isIos) {
            app.p3Music[app.playMusicNum].muted = false;
          }
          endX = event.originalEvent.targetTouches[0].clientX-canvasX;
          endY = event.originalEvent.targetTouches[0].clientY-canvasY;
          //画下线段
          // paint.beginPath();
          paint.moveTo(startX, startY);
          paint.lineTo(endX, endY);
          paint.closePath();
          //动态的设置颜色
          paint.strokeStyle = color;
          paint.lineWidth = width;
          paint.stroke();
        } 
        startX = endX;
        startY = endY;
        break;

        //手离开触屏是橡皮檫隐藏
      case "touchend":
        $('.p3-con').removeClass('p3-cur');
        if (app.drawing) {
          if (app.common.browser.isIos) {
            app.p3Music[app.playMusicNum].muted = true;
            // signMusicEnd = new Date().getTime();
            // signMusicPlay = signMusicEnd - signMusicStart + signMusicPlay;
            // console.log('signMusicPlay',signMusicPlay);
            // app.p3Music[app.playMusicNum].onended = function(){
            //   signMusicEnd = new Date().getTime();
            // }
          }else {
            app.p3Music[app.playMusicNum].pause();
          }
        }
        // $(".eraser").hide();
        break;
    }
  });
}
app.pages[1]=function(){var e,n,t={init:function(){$(".p1-btn").click(function(){$(this).attr("src","img/p1-btn-click.png"),app.showPage(2)})},onLoad:function(){812==screen.height&&375==screen.width&&($(".p1-desc-box").css("top","36.44%"),$(".p2-redman").css("bottom","4%"),$(".p3-redman").css("bottom","-4%"));setTimeout(function(){t.isFlipReady=!0,n=setInterval(function(){7<++c&&(c=5,$(".p1-door-item").eq(6).hide()),$(".p1-door-item").eq(c).show()},150),setTimeout(function(){$(".p1-desc-box .p1-desc-item").eq(i).fadeIn(),e=setInterval(function(){5<=++i&&(i=5,$(".p1-desc-box .p1-desc-item").eq(i).fadeIn(),clearInterval(e)),$(".p1-desc-box .p1-desc-item").eq(i).fadeIn()},300)},600)},1e3)},onLeave:function(){t.isFlipReady=!1,clearInterval(n)},dependingTask:"p1",isFlipReady:!1,hasBranch:!1},i=0,c=0;return t}();
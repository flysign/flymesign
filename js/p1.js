app.pages[1] = (function() {
    var page = {
        init: init,
        onLoad: onLoad,
        onLeave: onLeave,
        dependingTask: 'p1',
        isFlipReady: false, //标志页面是否可以翻页, 当页面所有动画运行完之后设置为true,离开页面后再重置为false
        hasBranch: false, //标志页面内是否有分支,默认为false,
    };
    var p1titleTimer, p1titleNum = 0,
        doorTimer, doorNum = 0;

    function init() {
        initEvents();
    }

    function initEvents() {
        $('.p1-btn').click(function() {
          $(this).attr('src','img/p1-btn-click.png');
            app.showPage(2);
        });
    }

    function opendoor() {
        doorTimer = setInterval(function() {
            doorNum++;
            if (doorNum > 7) {
                doorNum = 5;
                $('.p1-door-item').eq(6).hide();
                // $('.p1-door-item').eq(doorNum).show();
            }
            // $('.p1-door-item').hide();
            $('.p1-door-item').eq(doorNum).show();
        }, 150);
        setTimeout(function() {
            $('.p1-desc-box .p1-desc-item').eq(p1titleNum).fadeIn();
            p1titleTimer = setInterval(function() {
                p1titleNum++;
                if (p1titleNum >= 5) {
                    p1titleNum = 5;
                    $('.p1-desc-box .p1-desc-item').eq(p1titleNum).fadeIn();
                    clearInterval(p1titleTimer);
                }
                $('.p1-desc-box .p1-desc-item').eq(p1titleNum).fadeIn();
            }, 300);
        }, 600);
    }

    function onLoad() {
      if(screen.height == 812 && screen.width == 375){
        $('.p1-desc-box').css('top','36.44%');
        $('.p2-redman').css('bottom','4%');
        $('.p3-redman').css('bottom','-4%');
      }
        setTimeout(function() {
            page.isFlipReady = true;
            opendoor();
        }, 1000);
    }

    function onLeave() {
        page.isFlipReady = false;
        clearInterval(doorTimer);
    }

    return page;
})();
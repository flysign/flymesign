app.pages[2] = (function() {

    var page = {
        init: init,
        onLoad: onLoad,
        onLeave: onLeave,
        dependingTask: 'p2',
        isFlipReady: false,
        hasBranch: true,
    };
    var arr = [{ //  1
        'width': '42.3%',
        'margin-left': '0',
        'z-index': 4,
        'margin-top': '2%'
    }, { //  2
        'width': '26%',
        'margin-left': '-40%',
        'z-index': 3,
        'margin-top': '10%'
    }, { //  3
        'width': '17.3%',
        'margin-left': '-50%',
        'z-index': 2,
        'margin-top': '15%'
    }, { //  4
        'width': '17.3%',
        'margin-left': '-40%',
        'z-index': 1,
        'margin-top': '15%'
    }, { //  5
        'width': '17.3%',
        'margin-left': '0',
        'z-index': 0,
        'margin-top': '15%'
    }, { //  6
        'width': '17.3%',
        'margin-left': '40%',
        'z-index': 1,
        'margin-top': '15%'
    }, { //  7
        'width': '17.3%',
        'margin-left': '50%',
        'z-index': 2,
        'margin-top': '15%'
    }, { //  8
        'width': '26%',
        'margin-left': '40%',
        'z-index': 3,
        'margin-top': '10%'
    }];

    // 0. 获取元素
    var slide = document.getElementById("p2-slide");
    var liArr = slide.getElementsByTagName("li");
    var arrow = document.getElementById('p2-arrow');
    var arrowChildren = arrow.children;
    var startX, startY, moveEndX, moveEndY;
    var p3PlayerName;

    // 设置一个开闭变量，点击以后修改这个值
    var flag = true;

    function init() {
        initEvents();
    }

    function initEvents() {
        // 3. 为两侧控制按钮绑定事件（调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转）
        $('.p2-next').click(function() {
            if (flag) {
                flag = false;
                move(true);
            }
        });
        $('.p2-prev').click(function() {
            if (flag) {
                flag = false;
                move(false);
            }
        })

        $('.p2-btn').click(function() {
            p3PlayerName = $('.p2-input').val().replace(/\s+/g, "");
            if (p3PlayerName) {
//          	改了
//              var inputLink = 'http://openapi2.benbang.com/api/blackword/verify?text=' + p3PlayerName;
//              ajaxGetCouplet(inputLink);
            } else {
                layer.msg('名字不能为空');
            }
        });
        document.getElementById('p2-slide').addEventListener('touchstart', function(e) {
            // e.preventDefault();
            startX = e.touches[0].pageX;
            startY = e.touches[0].pageY;
        }, false);
        $('#p2-slide').on('touchend', function(e) {
            // e.preventDefault();
            moveEndX = e.originalEvent.changedTouches[0].pageX;
            moveEndY = e.originalEvent.changedTouches[0].pageY;
            X = moveEndX - startX;
            Y = moveEndY - startY;
            if (Math.abs(X) > Math.abs(Y) && X > 0) {
                if (flag) {
                    flag = false;
                    move(true);
                }
            } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
                if (flag) {
                    flag = false;
                    move(false);
                }
            }
        });
    }
    // 敏感词接口
    function ajaxGetCouplet(url) {
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            //timeout: 10000,
            // 发送请求前
            beforeSend: function(xhr, settings) {
                $('.d-loading').show(); //显示菊花
            },
            // 请求成功
            success: function(res, status, xhr) {
                // console.log('success', res);
                if (res.code == 0) {

                    if (!res.data.is_black) {
                        app.playerName = p3PlayerName;
                        app.showPage(3);
                        $('.p4-choose-name').html(app.playerName);
                        $('.p4-inputname').html(app.playerName);
                        $('.p4-erweima-name').html(app.playerName);
                    } else {
                        layer.msg('输入含敏感词汇');
                    }
                }
            },
            error: function(xhr, errorType, error) {
                console.log('失败', error);
                // 请求失败
                $('.d-loading').hide();
                layer.msg('网络延迟较严重,请刷新页面重新输入');
            },
            complete: function(xhr, status) {
                console.log('完成');
                // 请求成功或失败都执行
                $('.d-loading').hide(); //关闭菊花
            }
        });
    }

    // 书写slider移动函数
    function move(bool) {
        $('.p2-choose-head').eq(app.headNum).find('img.p2-choose-head-cur').hide();
        $('.p2-choose-head').eq(app.headNum).find('img.p2-choose-head-normal').show();
        // 判断，如果等于undefined，那么不执行这两个if语句
        if (bool === true || bool === false) {
            if (bool) {
                // 将最后一个添加到第一个位置
                arr.unshift(arr.pop());
                app.headNum++;
                if (app.headNum > 7) {
                    app.headNum = 0;
                }

                // console.log('app.headNum',app.headNum);
            } else {
                // 将第一个添加到最后一个位置
                arr.push(arr.shift());
                app.headNum--;
                if (app.headNum < 0) {
                    app.headNum = 7;
                }
                // console.log('app.headNum',app.headNum);
            }
        }
        // 再次为页面的所有li赋值属性，利用缓动框架
        for (var i = 0; i < liArr.length; i++) {
          $('.p2-choose-head').eq(i).find('img.p2-choose-head-cur').show();
          $('.p2-choose-head').eq(i).find('img.p2-choose-head-normal').hide();
          $('.p2-choose-head').eq(app.headNum).find('img.p2-choose-head-cur').hide();
          $('.p2-choose-head').eq(app.headNum).find('img.p2-choose-head-normal').show();

            $(liArr[i]).animate(arr[i],'normal','linear', function() {
                flag = true;        
            });
        }

        if (app.headNum == 5) {
            $('.p2-choose-wenyi img').css('width','120%!important');
        }
    }

    function onLoad() {
        setTimeout(function() {
            page.isFlipReady = true;
        }, 1000);
        move();
    }

    function onLeave() {
        page.isFlipReady = false;

    }

    return page;
})();
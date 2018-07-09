app.pages[3] = (function() {

    var page = {
        init: init,
        onLoad: onLoad,
        onLeave: onLeave,
        dependingTask: 'p3',
        isFlipReady: false,
        hasBranch: true,
    };
    var descq1a = ['你是向光而生的植物', '你充满热情，有时也慵懒', '你是快乐最大的信仰者'],
        descq1b = ['你的心里有不安分的蛊', '你是失去草原的野马', '你是个人英雄主义的忠实信徒'],
        descq1c = ['世界越是喧嚣，你越是安静', '你从不孤单，却一直孤独', '你是人群的观察者，世界的局外人'],
        descq2a = ['怀疑世界，也自我怀疑', '总是想得太多，做得不够', '内心矛盾，选择困难'],
        descq2b = ['勇气是你的骄傲', '无论输赢，都要活得漂亮', '挑战是你与生俱来的基因'],
        descq2c = ['先天忧郁，多愁易感', '海是你的精神原乡', '自由和伤感是你的底色'],
        descq3a = ['特立独行是你的可爱', '坦诚是你的美德', '奇特让人对你印象深刻'],
        descq3b = ['优雅的身体，古典的心', '灵魂深刻而优美', '你有不轻易示人的一面'],
        descq3c = ['有趣对你比浪漫更可贵', '一身少年气，做事凭感觉', '好玩是你的Flag'],
        descq4a = ['独立思考让你与众不同', '对你来说美比正确更重要', '你总能比别人看到更多'],
        descq4b = ['眼里有远方，危险又迷人', '属于远方的你总会出发', '心中有波澜，无风一样浪'],
        descq4c = ['解构一切，却又相信理想', '你是坚定的怀疑论者', '表面嬉皮笑脸，心里比谁都认真'],
        descq5a = ['起风了，那是来自你灵魂深处的古风', '清澈如你，像一首简单却动人的民谣', '听，你的微笑就是最动人的吟唱'],
        descq5b = ['相信自己，你的明天比电音更精彩', '相信自己，你的明天比电音更精彩', '歌唱吧，开启你华丽的英伦摇滚新乐章'],
        descq5c = ['逐风的少年，灵魂永远朋克', '永远年轻，永远摇滚', '如果人生如歌，你是一曲自由爵士'];
	var descqData=[
	{
		name:'锡剧《三三》',
		address:"北京",
		time:'2017年5月23日—24日',
		descq:'青山绿水之间，有一家杨家碾房，静静的碾坊里，有一个少女三三。三三终日自由自在，与鱼虾作伴、与猫狗戏玩，仿佛未经涂染的白纸，不知什么是思念......'},
	{
		name:'闽剧《双碟扇》',
		address:'北京',
		time:"2017年5月5日",
		descq:'该剧讲述了少女林梦卿和书生陈子霖自幼两情相倾，孰料二人婚期临近时，陈子霖因为身涉命案，而被官府羁押刑狱。突如其来的变故，使林梦卿的父母不得不对......'
	},
	{
		name:'民族舞剧《家》',
		address:"四川成都",
		time:'2017年5月11日-12日',
		descq:'本剧以高家大少爷觉新的视角，讲述了发生在成都封建家庭的故事。这个家不光有为了家族责任委曲求全一生的觉新，还有受新思想影响的进步青年觉慧，除了俊......'},
	{
		name:'歌剧《星星之火》',
		address:"北京、沈阳",
		time:'2017年5月19日、9月19日',
		descq:'李小凤的父亲因被汉奸孙晶石出卖而被捕，16岁的她连夜上山寻找游击队。在交通员老李头的感召和引领下，她找到并参加了游击队。几年以后，李小凤成长为......'},
	
	{
		name:'歌剧《星星之火》',
		address:"北京、沈阳",
		time:'2017年5月19日、9月19日',
		descq:'李小凤的父亲因被汉奸孙晶石出卖而被捕，16岁的她连夜上山寻找游击队。在交通员老李头的感召和引领下，她找到并参加了游击队。几年以后，李小凤成长为......'}
	]
    var p3IsAll = true;
    var p3AnswerNum = 0;
    var pannitimer;
    var playNum = 0;
    var loadMusic = true;
    var con1flag1 = true,
        con1flag2 = true,
        con1flag3 = true,
        con1flag = true;
    var con2flag1 = true,
        con2flag2 = true,
        con2flag3 = true,
        con2flag = true;
    var con3flag1 = true,
        con3flag2 = true,
        con3flag3 = true,
        con3flag = true;
    var con4flag1 = true,
        con4flag2 = true,
        con4flag3 = true,
        con4flag = true;
    var con5flag1 = true,
        con5flag2 = true,
        con5flag3 = true,
        con5flag = true;
    var con6flag1 = true,
        con6flag2 = true,
        con6flag3 = true,
        con6flag = true;
    var con1MinX, con1MinY, con1MaxX, con1MaxY, con1height1, con1height2;
    var con2MinX, con2MinY, con2MaxX, con2MaxY, con2height1, con2height2;
    var con3MinX, con3MinY, con3MaxX, con3MaxY, con3height1, con3height2;
    var con4MinX, con4MinY, con4MaxX, con4MaxY, con4height1, con4height2;
    var con5MinX, con5MinY, con5MaxX, con5MaxY, con5height1, con5height2;
    var con6MinX, con6MinY, con6MaxX, con6MaxY, con6height1, con6height2;
    var p3HeadTimer, p3HeadTimerNum = 0,
        p3HeadChooseNum = 0, p3HeadChooseName;

    function init() {
        initEvents();
    }

    // 获取div的最大值和最小值
    function conLocation(dom, conNum) {
        var addWidth = dom.width(),
            addHeight = dom.height();
        conMinX = dom.offset().left;
        conMinY = dom.offset().top;
        conheight1 = conMinY + addHeight / 3;
        conheight2 = conMinY + addHeight / 3 * 2;
        conMaxX = conMinX + addWidth;
        conMaxY = conMinY + addHeight;
        if (conNum == 1) {
            con1MinX = conMinX;
            con1MinY = conMinY;
            con1MaxX = conMaxX;
            con1MaxY = conMaxY;
            con1height1 = conheight1;
            con1height2 = conheight2;
        } else if (conNum == 2) {
            con2MinX = conMinX;
            con2MinY = conMinY;
            con2MaxX = conMaxX;
            con2MaxY = conMaxY;
            con2height1 = conheight1;
            con2height2 = conheight2;
        } else if (conNum == 3) {
            con3MinX = conMinX;
            con3MinY = conMinY;
            con3MaxX = conMaxX;
            con3MaxY = conMaxY;
            con3height1 = conheight1;
            con3height2 = conheight2;
        } else if (conNum == 4) {
            con4MinX = conMinX;
            con4MinY = conMinY;
            con4MaxX = conMaxX;
            con4MaxY = conMaxY;
            con4height1 = conheight1;
            con4height2 = conheight2;
        } else if (conNum == 5) {
            con5MinX = conMinX;
            con5MinY = conMinY;
            con5MaxX = conMaxX;
            con5MaxY = conMaxY;
            con5height1 = conheight1;
            con5height2 = conheight2;
        } else if (conNum == 6) {
            con6MinX = conMinX;
            con6MinY = conMinY;
            con6MaxX = conMaxX;
            con6MaxY = conMaxY;
            con6height1 = conheight1;
            con6height2 = conheight2;
        }
    }
    var randomNum = Math.floor(Math.random() * 3);
    // var musicNum = 0;
    var musicNum = Math.floor(Math.random() * 20);
    app.playMusicNum = musicNum;
    //判断在哪个div里
    function conjudge(pointerx, pointery) {
        // 第一个
        if (pointerx > con1MinX && pointery > con1MinY && pointerx < con1MaxX && pointery < con1MaxY) {
            $('.p3-con1').addClass('p3-cur');
        } else {
            $('.p3-con1').removeClass('p3-cur');
        }
        // 第2个
        if (pointerx > con2MinX && pointery > con2MinY && pointerx < con2MaxX && pointery < con2MaxY) {
            con2flag = false;
            $('.p3-con2').addClass('p3-cur');
        } else {
            $('.p3-con2').removeClass('p3-cur');
        }
        // 第3个
        if (pointerx > con3MinX && pointery > con3MinY && pointerx < con3MaxX && pointery < con3MaxY) {
            $('.p3-con3').addClass('p3-cur');
        } else {
            $('.p3-con3').removeClass('p3-cur');
        }
        // 第4个
        if (pointerx > con4MinX && pointery > con4MinY && pointerx < con4MaxX && pointery < con4MaxY) {
            $('.p3-con4').addClass('p3-cur');
        } else {
        }
        // 第5个
        if (pointerx > con5MinX && pointery > con5MinY && pointerx < con5MaxX && pointery < con5MaxY) {
            $('.p3-con5').addClass('p3-cur');
        } else {
            $('.p3-con5').removeClass('p3-cur');
        }
        // 第6个
        if (pointerx > con6MinX && pointery > con6MinY && pointerx < con6MaxX && pointery < con6MaxY) {
            con6flag = false;
            $('.p3-con6').addClass('p3-cur');
        } else {
            $('.p3-con6').removeClass('p3-cur');
        }
    }


    function initEvents() {
        $('.p3-del-btn').click(function() {            
            $('.p3-canvas').removeClass('p3-canvas-hide');
            clearInterval(app.p3ClockTimer);
            $('.p3-time-icon').hide();
            clearTimeout(app.musicTimer);
            clearTimeout(app.signTimer);            
            $('.p3-time-icon').eq(0).show();
            app.p3ClockNum = 0;
            app.p3Music[app.playMusicNum].pause();
            app.p3Music[app.playMusicNum].currentTime = 0;
            $('.p3-canvas')[0].getContext("2d").clearRect(0, 0, $(window).width(), $(window).height());
            app.playMusicNum = musicNum = Math.floor(Math.random() * 20);
            app.playMusic = [];
            app.musicEnd = false;
            app.drawing = true;
            app.hasTimeOut = false;
            app.hasMusicTimeOut = false;
            app.hasSignTimeOut = false;
            app.signIsFirst = true;
            // playNum = 0;
        });

        $('.p3-player-btn').click(function() {
          if (app.p3PlayMusic) {
            app.musicEnd = true;
            app.hasMusicTimeOut = false;
            clearTimeout(app.musicTimer);
            app.playMusicNum = musicNum;
            app.p3Music[app.playMusicNum].play();
            // playNum = 0;
            musicPlay(app.playMusicNum);
            $('.p3-canvas').addClass('p3-canvas-hide');
          }
        });

        $('.p3-confirm-btn').click(function() {
          app.p3Music[app.playMusicNum].pause();
          app.showPage(4);
        });

        $('.p3-musicEnd-btn').click(function(e) {
            e.stopPropagation();
//			alert(2)
        });

        // 点击选项
        $('.p3-answer-item').click(function() {
            $('.p3-question-item').eq(p3AnswerNum).addClass('p3-question-item-show');
            p3AnswerNum++;
            if (p3AnswerNum > 4) {
                $('.p3-player-btn-item').eq(0).show();
                $('.p3-fingur-item').eq(0).show();
                
                // $('.p3-fingur').show();
                setTimeout(function(){
                    $('.p3-fingur-box').show();
                    app.p3FingurTimer = setInterval(function(){
                        app.p3FingurNum++;
                        $('.p3-fingur-item').hide();
                        if (app.p3FingurNum > 9) {
                            app.p3FingurNum = 0;
                            $('.p3-fingur-box').hide();
                            clearInterval(app.p3FingurTimer);
                        }
                        $('.p3-fingur-item').eq(app.p3FingurNum).show();
                    },200);
                    app.drawing = true;
                    app.hasSignTimeOut = false;
                    //绘图监听
                    drawMonitor();
                    $('.p3').on('touchmove', function(e) {
                        if (app.drawing) {
                            conjudge(e.originalEvent.targetTouches[0].clientX, e.originalEvent.targetTouches[0].clientY);
                        }
                    });
                },1000);                
                var p4Img = $('.p3-'+p3HeadChooseName).find('img').eq(p3HeadTimerNum).attr('data-src');
                // p4加载的图片
                $('.p4-icon6').attr('src', p4Img);
                clearInterval(p3HeadTimer);



                app.bgm.pause();
                $('.p3-question-item').removeClass('p3-question-item-show').hide();
                $('.p3-sign-title').show();
                if (loadMusic) {
                    // for(var x = 0; x < app.p3Music.length; x++){
                    app.p3Music[musicNum].play();
                    app.p3Music[musicNum].pause();
                    // }
                    loadMusic = false;
                }


            } else {
                $('.p3-question-item').removeClass('p3-question-item-show');
                $('.p3-question-item').eq(p3AnswerNum).addClass('p3-question-item-show');
            }
        });
        // 点击按钮的音效和显示的图片
        // a
        $('.p3-q1-answera').click(function() {
        	
        	$('.imgall').attr('src','./img/p4-20_02.png')
//      	$.cookie('the_cookie', 'the_value');
//          $('.p3-con1').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q1a.png?' + app.version).addClass('p3-answera1');
$('.p3-con1').attr('src', './img/gl-bg1.png?' + app.version).addClass('p3-answera1');
            $('.p4-icon1').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q1a.png?' + app.version).addClass('p4-icon1a1');
//             app.p3MusicBtn[0].play();
            conLocation($('.p3-con1'), 1);
            var _index=$(this).index()
            $('.p4-word-name').text(descqData[_index].name)
            $('.p4-word').html(`
        <p class="p4-choose-w">地点：${descqData[_index].address}<span class="p4-choose-time"></span></p>
        <p class="p4-choose-w"><span class="p4-choose-address">时间：${descqData[_index].time}</span></p>
        <p class="p4-choose-w">剧情介绍：${descqData[_index].descq}<span class="p4-choose-synopsis"></span></p>`)
          
            $('.p4-choose1').html(descq1a[randomNum]);
        });
        $('.p3-q2-answera').click(function() {
            $('.p3-con2').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q2a.png?' + app.version).addClass('p3-answera2');
            $('.p4-icon2').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q2a.png?' + app.version).addClass('p4-icon2a2');
            // app.p3MusicBtn[1].play();
            conLocation($('.p3-con2'), 2);
            $('.p4-choose2').html(descq2a[randomNum]);
        });
        $('.p3-q3-answera').click(function() {
//          $('.p3-con3').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q3a.png?' + app.version).addClass('p3-answera3');
$('.p3-con3').attr('src', './img/gl-bg3.png?' + app.version).addClass('p3-answera3');
            $('.p4-icon3').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q3a.png?' + app.version).addClass('p4-icon3a3');
            // app.p3MusicBtn[2].play();
            conLocation($('.p3-con3'), 3);
            $('.p4-choose3').html(descq3a[randomNum]);
        });
        $('.p3-q4-answera').click(function() {
            $('.p3-con4').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q4a.png?' + app.version).addClass('p3-answera4');
            $('.p4-icon4').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q4a.png?' + app.version).addClass('p4-icon4a4');
            // app.p3MusicBtn[3].play();
            conLocation($('.p3-con4'), 4);
            $('.p4-choose4').html(descq4a[randomNum]);
        });
        $('.p3-q5-answera').click(function() {
            $('.p3-con5').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q5a.png?' + app.version).addClass('p3-answera5');
            $('.p4-icon5').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q5a.png?' + app.version).addClass('p4-icon5a5');
            // app.p3MusicBtn[4].play();
            conLocation($('.p3-con5'), 5);
            $('.p4-choose5').html(descq5a[randomNum]);
        });
        // b
        $('.p3-q1-answerb').click(function() {
        	$('.imgall').attr('src','./img/p4-30_02.png')
//          $('.p3-con1').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q1b.png?' + app.version).addClass('p3-answerb1');
            $('.p3-con1').attr('src', './img/gl-bg1.png?' + app.version).addClass('p3-answera1');
            $('.p4-icon1').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q1b.png?' + app.version).addClass('p4-icon1b1');
            // app.p3MusicBtn[5].play();
            conLocation($('.p3-con1'), 1);
            var _index=$(this).index()
            $('.p4-word-name').text(descqData[_index].name)
            $('.p4-word').html(`
        <p class="p4-choose-w">地点：${descqData[_index].address}<span class="p4-choose-time"></span></p>
        <p class="p4-choose-w"><span class="p4-choose-address">时间：${descqData[_index].time}</span></p>
        <p class="p4-choose-w">剧情介绍：${descqData[_index].descq}<span class="p4-choose-synopsis"></span></p>`)
            $('.p4-choose1').html(descq1b[randomNum]);
        });
        $('.p3-q2-answerb').click(function() {
            $('.p3-con2').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q2b.png?' + app.version).addClass('p3-answerb2');
            $('.p4-icon2').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q2b.png?' + app.version).addClass('p4-icon2b2');
            // app.p3MusicBtn[6].play();
            conLocation($('.p3-con2'), 2);
            $('.p4-choose2').html(descq2b[randomNum]);
        });
        $('.p3-q3-answerb').click(function() {
            $('.p3-con3').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q3b.png?' + app.version).addClass('p3-answerb3');
            $('.p4-icon3').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q3b.png?' + app.version).addClass('p4-icon3b3');
            // app.p3MusicBtn[7].play();
            conLocation($('.p3-con3'), 3);
            $('.p4-choose3').html(descq3b[randomNum]);
        });
        $('.p3-q4-answerb').click(function() {
            $('.p3-con4').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q4b.png?' + app.version).addClass('p3-answerb4');
            $('.p4-icon4').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q4b.png?' + app.version).addClass('p4-icon4b4');
            // app.p3MusicBtn[8].play();
            conLocation($('.p3-con4'), 4);
            $('.p4-choose4').html(descq4b[randomNum]);
        });
        $('.p3-q5-answerb').click(function() {
//          $('.p3-con5').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q5b.png?' + app.version).addClass('p3-answerb5');
 $('.p3-con5').attr('src', './img/gl-bg5.png?' + app.version).addClass('p3-answerb5');
            $('.p4-icon5').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q5b.png?' + app.version).addClass('p4-icon5b5');
            // app.p3MusicBtn[9].play();
            conLocation($('.p3-con5'), 5);
            $('.p4-choose5').html(descq5b[randomNum]);
        });
        // c
        $('.p3-q1-answerc').click(function() {
        	$('.imgall').attr('src','./img/p4-40_02.png')
            $('.p3-con1').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q1c.png?' + app.version).addClass('p3-answerc1');
            $('.p4-icon1').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q1c.png?' + app.version).addClass('p4-icon1c1');
            // app.p3MusicBtn[10].play();
            conLocation($('.p3-con1'), 1);
            var _index=$(this).index()
            $('.p4-word-name').text(descqData[_index].name)
            $('.p4-word').html(`
        <p class="p4-choose-w">地点：${descqData[_index].address}<span class="p4-choose-time"></span></p>
        <p class="p4-choose-w"><span class="p4-choose-address">时间：${descqData[_index].time}</span></p>
        <p class="p4-choose-w">剧情介绍：${descqData[_index].descq}<span class="p4-choose-synopsis"></span></p>`)
            $('.p4-choose1').html(descq1c[randomNum]);
        });
        $('.p3-q2-answerc').click(function() {
//          $('.p3-con2').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q2c.png?' + app.version).addClass('p3-answerc2');
$('.p3-con2').attr('src', './img/gl-bg2.png?' + app.version).addClass('p3-answerc2');
            $('.p4-icon2').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q2c.png?' + app.version).addClass('p4-icon2c2');
            // app.p3MusicBtn[11].play();
            conLocation($('.p3-con2'), 2);
            $('.p4-choose2').html(descq2c[randomNum]);
        });
        $('.p3-q3-answerc').click(function() {
            $('.p3-con3').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q3c.png?' + app.version).addClass('p3-answerc3');
            $('.p4-icon3').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q3c.png?' + app.version).addClass('p4-icon3c3');
            // app.p3MusicBtn[12].play();
            conLocation($('.p3-con3'), 3);
            $('.p4-choose3').html(descq3c[randomNum]);
        });
        $('.p3-q4-answerc').click(function() {
            $('.p3-con4').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q4c.png?' + app.version).addClass('p3-answerc4');
            $('.p4-icon4').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q4c.png?' + app.version).addClass('p4-icon4c4');
            // app.p3MusicBtn[13].play();
            conLocation($('.p3-con4'), 4);
            $('.p4-choose4').html(descq4c[randomNum]);
        });
        $('.p3-q5-answerc').click(function() {
            $('.p3-con5').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q5c.png?' + app.version).addClass('p3-answerc5');
            $('.p4-icon5').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q5c.png?' + app.version).addClass('p4-icon5c5');
            // app.p3MusicBtn[14].play();
            conLocation($('.p3-con5'), 5);
            $('.p4-choose5').html(descq5c[randomNum]);
        });
        //d
        $('.p3-q1-answerd').click(function() {
        	$('.imgall').attr('src','./img/p4-50_02.png')
            $('.p3-con1').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q1c.png?' + app.version).addClass('p3-answerc1');
            $('.p4-icon1').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q1c.png?' + app.version).addClass('p4-icon1c1');
            // app.p3MusicBtn[10].play();
            conLocation($('.p3-con1'), 1);
            var _index=$(this).index()
            $('.p4-word-name').text(descqData[_index].name)
            $('.p4-word').html(`
        <p class="p4-choose-w">地点：${descqData[_index].address}<span class="p4-choose-time"></span></p>
        <p class="p4-choose-w"><span class="p4-choose-address">时间：${descqData[_index].time}</span></p>
        <p class="p4-choose-w">剧情介绍：${descqData[_index].descq}<span class="p4-choose-synopsis"></span></p>`)
            $('.p4-choose1').html(descq1c[randomNum]);
        });
        $('.p3-q2-answerd').click(function() {
            $('.p3-con2').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q2c.png?' + app.version).addClass('p3-answerc2');
            $('.p4-icon2').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q2c.png?' + app.version).addClass('p4-icon2c2');
            // app.p3MusicBtn[11].play();
            conLocation($('.p3-con2'), 2);
            $('.p4-choose2').html(descq2c[randomNum]);
        });
        $('.p3-q3-answerd').click(function() {
            $('.p3-con3').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q3c.png?' + app.version).addClass('p3-answerc3');
            $('.p4-icon3').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q3c.png?' + app.version).addClass('p4-icon3c3');
            // app.p3MusicBtn[12].play();
            conLocation($('.p3-con3'), 3);
            $('.p4-choose3').html(descq3c[randomNum]);
        });
        $('.p3-q4-answerd').click(function() {
//          $('.p3-con4').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q4c.png?' + app.version).addClass('p3-answerc4');
$('.p3-con4').attr('src', './img/gl-bg4.png?' + app.version).addClass('p3-answerc4');
            $('.p4-icon4').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q4c.png?' + app.version).addClass('p4-icon4c4');
            // app.p3MusicBtn[13].play();
            conLocation($('.p3-con4'), 4);
            $('.p4-choose4').html(descq4c[randomNum]);
        });
        $('.p3-q5-answerd').click(function() {
            $('.p3-con5').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q5c.png?' + app.version).addClass('p3-answerc5');
            $('.p4-icon5').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q5c.png?' + app.version).addClass('p4-icon5c5');
            // app.p3MusicBtn[14].play();
            conLocation($('.p3-con5'), 5);
            $('.p4-choose5').html(descq5c[randomNum]);
        });
        
        //e
        $('.p3-q1-answere').click(function() {
        	$('.imgall').attr('src','./img/p4-50_02.png')
            $('.p3-con1').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q1c.png?' + app.version).addClass('p3-answerc1');
            $('.p4-icon1').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q1c.png?' + app.version).addClass('p4-icon1c1');
            // app.p3MusicBtn[10].play();
            conLocation($('.p3-con1'), 1);
            var _index=$(this).index()
            $('.p4-word-name').text(descqData[_index].name)
            $('.p4-word').html(`
        <p class="p4-choose-w">地点：${descqData[_index].address}<span class="p4-choose-time"></span></p>
        <p class="p4-choose-w"><span class="p4-choose-address">时间：${descqData[_index].time}</span></p>
        <p class="p4-choose-w">剧情介绍：${descqData[_index].descq}<span class="p4-choose-synopsis"></span></p>`)
            $('.p4-choose1').html(descq1c[randomNum]);
        });
        $('.p3-q2-answere').click(function() {
            $('.p3-con2').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q2c.png?' + app.version).addClass('p3-answerc2');
            $('.p4-icon2').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q2c.png?' + app.version).addClass('p4-icon2c2');
            // app.p3MusicBtn[11].play();
            conLocation($('.p3-con2'), 2);
            $('.p4-choose2').html(descq2c[randomNum]);
        });
        $('.p3-q3-answere').click(function() {
            $('.p3-con3').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q3c.png?' + app.version).addClass('p3-answerc3');
            $('.p4-icon3').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q3c.png?' + app.version).addClass('p4-icon3c3');
            // app.p3MusicBtn[12].play();
            conLocation($('.p3-con3'), 3);
            $('.p4-choose3').html(descq3c[randomNum]);
        });
        $('.p3-q4-answere').click(function() {
            $('.p3-con4').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q4c.png?' + app.version).addClass('p3-answerc4');
            $('.p4-icon4').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q4c.png?' + app.version).addClass('p4-icon4c4');
            // app.p3MusicBtn[13].play();
            conLocation($('.p3-con4'), 4);
            $('.p4-choose4').html(descq4c[randomNum]);
        });
        $('.p3-q5-answere').click(function() {
            $('.p3-con5').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q5c.png?' + app.version).addClass('p3-answerc5');
            $('.p4-icon5').attr('src', 'http://w.benbun.com/proj/shoufa/img/p3-q5c.png?' + app.version).addClass('p4-icon5c5');
            // app.p3MusicBtn[14].play();
            conLocation($('.p3-con5'), 5);
            $('.p4-choose5').html(descq5c[randomNum]);
        });
    }
				
    function musicPlay(index) {
      
      app.p3Music[index].loop = true;
      app.p3Music[index].currentTime = 0;
      app.p3Music[index].play(); 
        // app.p3Music[index].currentTime = 0;
        // app.p3Music[index].play();
        // app.p3Music[index].loop = true;
        // if (!app.hasMusicTimeOut) {
        //     app.musicTimer = setTimeout(function() {
        //         app.musicEnd = false;
        //     }, 5000);
        //     app.hasMusicTimeOut = true;
        // }
    }
    // 背景图片和音乐h
    console.log(111,$('.p4-showimg').height())
    function judgeStyle(headNum) {
        if (app.headNum == 6 || app.headNum == 7) {
            // 背景1
            if(screen.height == 812 && screen.width == 375){
                $('.p3-stylebg').attr('src', 'img/style1bgX.jpg');
            } else {
                $('.p3-stylebg').attr('src', 'img/style1bg.jpg');
                $('.p3-stylebg').css('height','100%');
            }
            
            $('.p4-stylebg').attr('src', 'http://w.benbun.com/proj/shoufa/img/p4-style1bg.jpg');
            $('.p3-circle').attr('src', 'http://w.benbun.com/proj/shoufa/img/circlebg1.png?' + app.version);
            $('.p4-circle').attr('src', 'http://w.benbun.com/proj/shoufa/img/circlebg1.png?' + app.version);
            if (app.headNum == 6) {
                p3HeadChooseNum = 'panni';
            } else {
                p3HeadChooseNum = 'gaoleng';
            }
            p3HeadShow(p3HeadChooseNum);
        } else if (app.headNum == 2 || app.headNum == 3) {
            // 背景2
            if(screen.height == 812 && screen.width == 375){
                $('.p3-stylebg').attr('src', 'http://w.benbun.com/proj/shoufa/img/style2bgX.jpg');
            } else {
                $('.p3-stylebg').attr('src', 'http://w.benbun.com/proj/shoufa/img/style2bg.jpg');
                $('.p3-stylebg').css('height','100%');
            }
            
            $('.p4-stylebg').attr('src', 'http://w.benbun.com/proj/shoufa/img/p4-style2bg.jpg');
            $('.p3-circle').attr('src', 'http://w.benbun.com/proj/shoufa/img/circlebg1.png?' + app.version);
            $('.p4-circle').attr('src', 'http://w.benbun.com/proj/shoufa/img/circlebg1.png?' + app.version);
            if (app.headNum == 2) {
                p3HeadChooseNum = 'huamei';
            } else {
                p3HeadChooseNum = 'huoli';
            }
            p3HeadShow(p3HeadChooseNum);
        } else if (app.headNum == 4 || app.headNum == 5) {
            // 背景3
            if(screen.height == 812 && screen.width == 375){
                $('.p3-stylebg').attr('src', 'http://w.benbun.com/proj/shoufa/img/style3bgX.jpg');
            } else {
                $('.p3-stylebg').attr('src', 'http://w.benbun.com/proj/shoufa/img/style3bg.jpg');
                $('.p3-stylebg').css('height','100%');
            }
            $('.p4-stylebg').attr('src', 'http://w.benbun.com/proj/shoufa/img/p4-style3bg.jpg');
            $('.p3-circle').attr('src', 'http://w.benbun.com/proj/shoufa/img/circlebg3.png?' + app.version);
            $('.p4-circle').attr('src', 'http://w.benbun.com/proj/shoufa/img/circlebg3.png?' + app.version);
            if (app.headNum == 4) {
                p3HeadChooseNum = 'wenyiman';
            } else {
                p3HeadChooseNum = 'wenyiwoman';
            }
            p3HeadShow(p3HeadChooseNum);
        } else {
            // 背景4
            if(screen.height == 812 && screen.width == 375){
                $('.p3-stylebg').attr('src', 'http://w.benbun.com/proj/shoufa/img/style4bgX.jpg');
            } else {
                $('.p3-stylebg').attr('src', './img/style4bg.png');
                $('.p3-stylebg').css('height','100%');
            }            
            $('.p4-stylebg').attr('src', './../img/style4bg.png');
            $('.p3-circle').attr('src', 'http://w.benbun.com/proj/shoufa/img/circlebg2.png?' + app.version);
            $('.p4-circle').attr('src', 'http://w.benbun.com/proj/shoufa/img/circlebg2.png?' + app.version);
            if (app.headNum == 0) {
                p3HeadChooseNum = 'hiphopman';
            } else {
                p3HeadChooseNum = 'hiphopwoman';
            }
            p3HeadShow(p3HeadChooseNum);
        }
        if (app.headNum == 0 || app.headNum == 1 || app.headNum == 2) {
            // elec
            app.p3Music = app.elecMusic;
            app.musicType = 'elecMusic';
            app.p3Music.loop = true;
        } else if (app.headNum == 4 || app.headNum == 5 || app.headNum == 3) {
            // jazz
            app.p3Music = app.jazzMusic;
            app.musicType = 'jazzMusic';
            app.p3Music.loop = true;
        } else {
            // rock
            app.p3Music = app.rockMusic;
            app.musicType = 'rockMusic';
            app.p3Music.loop = true;
        }
    }

    // 头像序列帧
    function p3HeadShow(p3Name) {
        p3HeadChooseName = p3Name;
        $('.p3-' + p3Name).css('display', 'block');
        for (var i = 0; i++; i < 18) {
          $('.p3-' + p3Name).find('img').attr('src',$(this).attr('data-src'));
        }
        p3HeadTimer = setInterval(function() {
            $('.p3-' + p3Name).find('img').eq(p3HeadTimerNum).css('display', 'block').siblings().hide();
            p3HeadTimerNum++;
            if (p3HeadTimerNum > 18) {
                p3HeadTimerNum = 0;
            }
        }, 100);
    }

    function onLoad() {
        
        window.wxshare.config({
          timelineText: app.playerName + '的同名专辑制作中，想给你也做一张。',
          title: app.playerName + '的首发同名专辑',
          desc: '你的名字和哪段音乐旋律更配？',
          link: app.link,
          imgUrl: 'http://w.benbun.com/proj/shoufa/img/share.jpg'
        });
        setTimeout(function() {
            page.isFlipReady = true;
            $('.p3-question-item').eq(0).addClass('p3-question-item-show');
            conLocation($('.p3-con6'), 6);
        }, 1000);
        judgeStyle(app.headNum);
        p3IsAll = true;
        p3AnswerNum = 0;
        pannitimer;
        playNum = 0;
        app.hasMusicTimeOut = false;
        app.musicEnd = false;
    }

    function onLeave() {
        page.isFlipReady = false;
        clearInterval(app.p3BtnTimer);        
    }

    return page;
})();
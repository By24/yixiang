$(document).ready(function () {
    var objArr = [$(".duanluo"), $(".main-nav3"), $(".main-top3-t-c>p"), $(".main-top4-t-c>p"), $(".teXiao4>p"), $(".weixin-t .weixin-con2"),
            $(".weixin-t .weixin-con"), $(".weixin-nav>li")
        ],
        positionArr = [
            [600, 1560],
            [600, 1560],
            [1560, 2521],
            [2521, 3482],
            [3482, 4443],
            [4443, 5404],
            [4443, 5404],
            [5404, 6365]
        ],
        leftArr = [0, 0, 0, 0, 0, 100, 90, 0],
        topArr = [0, 1063, 1963, 2963, 3963, 4863, 5763, 6763, 7509];
        scrollTop=$(window).scrollTop(),
        index=0,
        arr = [0];
    for(var i=0,j=topArr.length;i<j;i++){
        if(scrollTop>=topArr[i] && scrollTop<=topArr[i+1]) index=i+1;
        $('#header li').eq(index-1).children('a').addClass('active').parent().siblings().children('a').removeClass('active');
    }
    console.log(index);
    $('.link').each(function (i) {
        arr.push($('.link').eq(i).offset().top + $('.link').eq(i).height() / 2);
    });
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        for (var i = 0, j = arr.length; i < j; i++) {
            if (scroll >= arr[i] && scroll <= arr[i + 1]) {
                $('#header a').eq(i).addClass('active').parent().siblings().children('a').removeClass('active');
            }
        }
        for (var i = 0, j = objArr.length; i < j; i++) {
            if ($(this).scrollTop() > positionArr[i][0] && $(this).scrollTop() < positionArr[i][1]) {
                donghua(objArr[i], leftArr[i]);
            }
        }
        function donghua(obj, leftVal) {
            obj.stop().animate({
                left: leftVal
            }, 500);
        }
    });
    $(window).on('mousewheel', function (event) {
        event = event || window.event;
        var wheeldelta = event.originalEvent.wheelDelta;
        index = $('#header a.active').parent('li').index();
        if (wheeldelta > 0) {
            index -= 1;
            if (index < 0) index = 0;
            $('html,body').stop().animate({
                scrollTop: topArr[index]
            }, 500);
        } else if (wheeldelta < 0) {
            index += 1;
            if (index > 8) index = 8;
            $('html,body').stop().animate({
                scrollTop: topArr[index]
            }, 500);
        }
    });
    $(".henggang>li").click(function () {
        $(".henggang>li").removeClass("henggang-active");
        $(this).addClass("henggang-active");
        $(".news>.news-list").hide();
        $(".news>.news-list").eq($(this).index()).show();
    });

});
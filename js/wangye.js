$(document).ready(function () {
    $('#nav_list').on('click', 'li', function () {
        var index = $(this).index();
        $(this).children('a').addClass('active');
        $(this).siblings().children('a').removeClass('active');
        donghua(index);
    });function donghua(i) {
        $('html,body').stop().animate({
            scrollTop: $('.part').eq(i).offset().top - 120
        }, 500);
    }
    //动画函数
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 0 && top <= 650) {
            $('#nav_list li a').removeClass('active');
            $('#nav_list li').eq(0).children('a').addClass('active');
        }
    });
});
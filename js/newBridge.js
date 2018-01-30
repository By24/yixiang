//控制商桥元素位置
var timer = setInterval(function () {
    var obj = $('#nb_icon_wrap');
    if (obj.length > 0) {
        obj.css({
            "position":"absolute",
            "height":"180px",
            "width":"200px",
            "background-image":"url('http://www.yxsrv.com/img/contUs.png')",
            "right":"20px",
            "top":"450px"
        });
        clearInterval(timer);
        var top1 = obj.offset().top;
        $(window).scroll(function () {
            var scTop = $(this).scrollTop();
            setTimeout(function () {
                obj.stop().animate({
                    "top": top1 + scTop+78
                }, 300);
            }, 200);
        });
    }
}, 1);
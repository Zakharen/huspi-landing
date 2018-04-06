function believe() {
    if($(window).width() > 991) {
        $('.more-believe').on('click', function() {
            if(!$(this).parent().parent().parent().siblings().hasClass('col-lg-4')){
                $(this).parent().parent().parent().removeClass().addClass('col-lg-6');
                $(this).addClass('hide');
                $(this).siblings('.close-believe').removeClass('hide');
                $(this).siblings('.landing-believe_text').css('height','auto');
                $(this).parent().parent().parent().siblings().removeClass().addClass('col-lg-3');
                $(this).parent().parent().parent().siblings().find('.more-believe').removeClass('hide');
                $(this).parent().parent().parent().siblings().find('.close-believe').addClass('hide');
                $(this).parent().parent().parent().siblings().find('.landing-believe_text').removeAttr('style');
            } else {
                $(this).addClass('hide');
                $(this).siblings('.close-believe').removeClass('hide');
                $(this).prev('.landing-believe_text').css('height','auto');
                $(this).parent().parent().parent().removeClass().addClass('col-lg-6');
                $(this).parent().parent().parent().siblings('.col-lg-4').removeClass().addClass('col-lg-3');
            }
        });

        $('.close-believe').on('click', function() {
            $(this).addClass('hide');
            $(this).siblings('.more-believe').removeClass('hide');
            $(this).siblings('.landing-believe_text').removeAttr('style');
            $(this).parent().parent().parent().removeClass().addClass('col-lg-4');
            $(this).parent().parent().parent().siblings('.col-lg-3').removeClass().addClass('col-lg-4');
        })
    }

    if($(window).width() <= 991) {
        $('.more-believe').on('click', function() {
            $(this).addClass('hide');
            $(this).siblings('.close-believe').removeClass('hide');
            $(this).prev('.landing-believe_text').css('height','auto');
        });
        $('.close-believe').on('click', function() {
            $(this).addClass('hide');
            $(this).siblings('.more-believe').removeClass('hide');
            $(this).siblings('.landing-believe_text').removeAttr('style');
        })
    }
}


function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav > li > a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 81 <= scrollPos && refElement.position().top - 81 + refElement.height() > scrollPos) {
            $('.navbar-nav > li').removeClass("active");
            currLink.parent().addClass("active");
        }
        else {
            currLink.parent().removeClass("active");
        }
    });
}


$(document).ready(function(){
    believe();

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.navbar-nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.navbar-nav a').each(function () {
            $(this).parent().removeClass('active');
        });
        $(this).parent().addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 99
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    $('.more-open').on('click', function(){
        if ($(this).hasClass('hide')){
            $(this).removeClass('hide');
            $(this).siblings('.hidden-block').addClass('hide');
        } else {
            $(this).addClass('hide');
            $(this).siblings('.hidden-block').removeClass('hide');
        }
    });

    $('.more-close').on('click', function(){
        if ($(this).hasClass('hide')){
            $(this).parent().removeClass('hide');
            $(this).parent().siblings('.more-open').addClass('hide');
        } else {
            $(this).parent().addClass('hide');
            $(this).parent().siblings('.more-open').removeClass('hide');
        }
    });

    $('.more-popup').on('click', function() {
        $(this).parent().next('.landing-categories_one-big').removeClass('hide');
    });

    $('.landing-categories_one-big .close-small').on('click', function() {
        $(this).parent('.landing-categories_one-big').addClass('hide');
    });

    $('.more-service').on('click', function() {
        $(this).parent().parent().next('.landing-service_popup').removeClass('hide');
        $('.bg-opacity').removeClass('hide');
    });

    $('.landing-service_popup .close-service').on('click', function() {
        $(this).parent().parent('.landing-service_popup').addClass('hide');
        $('.bg-opacity').addClass('hide');
    });


    $(window).resize(function() {
        believe();
    })
});
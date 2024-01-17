$(document).ready(function () {
    $headerHeight = $('.header').outerHeight();
    $menusection = $('.mv-sec');
    function setHeight() {
        $menusection.css("margin-top", $headerHeight);
    } setHeight();
    $(window).resize(function () {
        setHeight();
    });

    $(window).scroll(function () {
        var showAfter = 100;
        if ($(this).scrollTop() > showAfter) {
            $('#page-top').fadeIn();
        } else {
            $('#page-top').fadeOut();
        }
    });

    $('#page-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    new Swiper('.event-sec .swiper-container', {
        loop: true,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        grabCursor: true,
        centeredSlides: true,
        pagination: {
            el: ".pagination",
            clickable: true
        },
        breakpoints: {
            1281: {
                slidesPerView: 3,
                spaceBetween: 20
            },

            320: {
                slidesPerView: 1,
                spaceBetween: 24
            }
        }

    });

    new Swiper('.gallery-sec .swiper-container', {
        loop: true,
        spaceBetween: 20,
        centeredSlides: true,
        slidesPerView: 'auto',
        slidesPerView: 3,
        initialSlide: 3,
        slideToClickedSlide: true,
        pagination: {
            el: ".pagination",
            clickable: true
        },
        breakpoints: {
            1281: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        }
    });

    $('.nav-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.nav-bar').toggleClass('is-show');
    });

    $('.demo').flashy({
        showClass: 'fx-fadeIn',
        hideClass: 'fx-fadeOut'
    });

    $('.gallery').flashy({
        prevShowClass: 'fx-bounceInLeft',
        nextShowClass: 'fx-bounceInRight',
        prevHideClass: 'fx-bounceOutRight',
        nextHideClass: 'fx-bounceOutLeft'
    });

    $('.gallery-slide').flashy({
        prevShowClass: 'fx-bounceInLeft',
        nextShowClass: 'fx-bounceInRight',
        prevHideClass: 'fx-bounceOutRight',
        nextHideClass: 'fx-bounceOutLeft'
    });

    new PureCounter({
        selector: '.purecounter',
        delay: 10,
        once: true,
        repeat: false,
        decimals: 0,
        legacy: true,
        filesizing: false,
        currency: false,
        separator: false,
    });

    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop()
        var pageBottom = pageTop + $(window).height()
        var tags = $(".fadein-up")
        var zoom = $(".fade-zoom")

        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i]

            if ($(tag).offset().top < pageBottom) {
                $(tag).addClass("visible")
            } else {
                $(tag).removeClass("visible")
            }
        }

        for (var i = 0; i < zoom.length; i++) {
            var tag = zoom[i]

            if ($(tag).offset().top < pageBottom) {
                $(tag).addClass("visible")
            } else {
                $(tag).removeClass("visible")
            }
        }
    });

    if (window.matchMedia("(min-width: 1200px)").matches) {
        $(".text").heightLine({
            fontSizeCheck: true
        });
        $(".title").heightLine({
            fontSizeCheck: true
        });
    } else {
        $(".text").heightLine("destroy");
        $(".title").heightLine("destroy");
    };

    if (window.matchMedia("(min-width: 768px)").matches) {
        $(".height").heightLine({
            fontSizeCheck: true
        });
        $(".chef-txt").heightLine({
            fontSizeCheck: true
        });
    } else {
        $(".height").heightLine("destroy");
        $(".chef-txt").heightLine("destroy");
    }
})  
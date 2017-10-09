$(window).on('load', function () {

    stickyHeader();

    /*Preloader*/
    setTimeout(function () {
        $('#preloader').fadeOut('slow', function () {
        });
        $('body').removeClass('overflow');
    }, 200);
});


jQuery(document).ready(function ($) {

    $(window).on('scroll', function () {
        stickyHeader();
    });

    /*animate elements*/
    if ($(window).outerWidth() >= 1220) {

        /*animate*/
        $('.anFadeIn').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 80
        });

        $('.anLeft').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInLeftBig',
            offset: 100
        });
        $('.anLeft-2').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-2 fadeInLeftBig',
            offset: 100
        });
        $('.anLeft-3').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-3 fadeInLeftBig',
            offset: 100
        });
        $('.anLeft-4').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-4 fadeInLeftBig',
            offset: 100
        });
        $('.anRight').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInRightBig',
            offset: 100
        });
        $('.anRight-2').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInRightBig sec-2',
            offset: 100
        });
        $('.anRight-3').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInRightBig sec-3',
            offset: 100
        });
        $('.anRight-4').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInRightBig sec-4',
            offset: 100
        });
        $('.anUp').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 100
        });
        $('.anUp1').viewportChecker({
            classToAdd: 'visible animated sec-1 fadeInUp',
            offset: 100
        });
        $('.anUp2').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-2 fadeInUp',
            offset: 100
        });
        $('.anUp3').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-3 fadeInUp',
            offset: 100
        });
        $('.anUp4').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-4 fadeInUp',
            offset: 100
        });
        $('.anUp5').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-5 fadeInUp',
            offset: 100
        });
        $('.anRight2').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInRightBig',
            offset: 500
        });
        $('.anLeftImg').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-2 bounceInMobileLeft',
            offset: 100
        });
        $('.anRightImg').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-2 bounceInMobileRight',
            offset: 100
        });
        $('.BallAnimate').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated BallAnimate',
            offset: 100
        });
        $('.Img1').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-1 fadeInLeftBig',
            offset: 100
        });
        $('.Img2').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-2 fadeInLeftBig',
            offset: 100
        });
        $('.Img3').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-3 fadeInLeftBig',
            offset: 100
        });
        $('.Img4').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-4 fadeInLeftBig',
            offset: 100
        });
        $('.ImgRight1').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-1 fadeInRightBig',
            offset: 300
        });
        $('.ImgRight2').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-2 fadeInRightBig',
            offset: 300
        });
        $('.ImgRight3').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-3 fadeInRightBig',
            offset: 300
        });
        $('.ImgRight4').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-4 fadeInRightBig',
            offset: 300
        });
        $('.ImgRight5').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-5 fadeInRightBig',
            offset: 300
        });
        $('.ImgRight6').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-6 fadeInRightBig',
            offset: 300
        });
        $('.ImgRight7').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated sec-7 fadeInRightBig',
            offset: 300
        });

        /**/

        /*animate*/
    }
    /*animate elements END*/

    /*menu-mobile-btn*/

    var mobile_btn = $('.c-hamburger'),
        header = $('header'),
        mobMenu = $('.mobile-menu');

    mobile_btn.on('click', function () {
        mobile_btn.toggleClass('is-active');
        header.toggleClass('open');
        mobMenu.slideToggle();
        $('body').toggleClass('overflow overlay');
        mobMenu.css("max-height", $(window).outerHeight() - $(".main-header").outerHeight());
    });


    /*header submenu*/

    $("#mobile-menu").on("click", 'a', function (e) {
        e.preventDefault();
        var submenuParent = $(this).closest("li");

        if (!submenuParent.hasClass('selected')) {
            $('#mobile-menu > ul > li').removeClass('selected');
            submenuParent.addClass('selected');
            $('#mobile-menu').find('.dropdown-menu').slideUp();
            submenuParent.find('.dropdown-menu').slideDown();
        } else {
            submenuParent.toggleClass('selected');
            $('#mobile-menu').find('.dropdown-menu').slideUp();
        }

        $(".banners .banner-block").each(function () {
            if ($(this).data("category") === submenuParent.data("category")) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    /*tabs*/
    selectBoxInit();

    $('.tabsWrapper .tabContainer').each(function () {
        var thisTab = $(this);
        $('.tabs').on('click', '.tab-item', function () {
                var self = $(this);
                if (self.data('tab') === thisTab.data('tab')) {
                    $('.tabs .tab-item').removeClass('selected');
                    $('.tabsWrapper').find('.tabContainer').removeClass('selected');
                    thisTab.addClass('selected');
                    self.addClass('selected');

                    $('.tabs-mobile-dropdown option').each(function () {
                            if ($(this).data('tab') === self.data('tab')) {
                                $(".tabs-mobile option").removeAttr("selected").removeClass('selected');
                                $(this).attr("selected", "true").addClass('selected');
                                selectBoxInit();
                            }
                        }
                    );
                }
            }
        );
    });

    $('.tabs-mobile').on('change', function () {
        var selected = $('.tabs-mobile-dropdown').find(':selected').data('tab');
        $('.tabs-menu li').each(function () {
            if ($(this).data('tab') === selected) {
                ($(".tabs-menu li").removeClass("selected"));
                $(this).addClass("selected");
            }
        });
        $(".tabsWrapper .tabContainer").each(function () {
            if ($(this).data("tab") === selected) {
                ($(".tabsWrapper .tabContainer").removeClass("selected"));
                $(this).addClass("selected");
            }
        });
    });




    /*Slider*/

    $('#testimonialSlider').slick({
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('#mainBlockSlider').slick({
        speed: 900,
        infinite: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true
    });

})
;

/*Functions*/

function stickyHeader() {
    var e = $(".page-header");
    if ($(window).scrollTop() > 1) {
        e.addClass("sticky");
    } else {
        e.removeClass("sticky");
    }
}

function loginButtonsMobile() {
    $(window).outerWidth() > 767 ? $(".sign-up-button").show() : $(".page-header").hasClass("menu-open") && $(window).outerWidth() < 767 ? $(".sign-up-button").show() : $(".sign-up-button").hide()
}

function sliderItemHeight() {
    var e = $(".main-slider .item");
    e.length && $(window).outerWidth() > 1199 && $(window).outerHeight() > 750 ? e.css("height", $(window).outerHeight()) : (e.css("height", ""), e.addClass("height-auto"))
}

function selectBoxInit() {
    var select = $('select');
    if (select.length) {
        select.select2({
            minimumResultsForSearch: Infinity
        });
    }
}
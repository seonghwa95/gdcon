// ======================================================================== //
// �ㅻ뜑 �ㅽ겕濡� �� 怨좎젙 �ㅽ겕由쏀듃
$(document).ready(function(){
    var timer = null;
    var windowWidth = $(window).innerWidth();

    console.log(windowWidth);
    $(window).on('scroll',function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            h_top_css();
            mo_top_css()
        },10);
    });
    h_top_css()
    mo_top_css()

    var moMenu = $('.hamburger_menu');
    var moNav = $('.m_h_nav');
    var moClose = $('.close_box');
    var $moTitle = $('.siteMap_box .right_box ul.sm_dep1 > li > a');
    var $moDep2 = $('.siteMap_box .right_box ul.sm_dep2');


    $(moMenu).click(function(){
        $(this).siblings(moNav).addClass('show');
        $('body').addClass('body_bg');
    });

    $(moClose).click(function(){
        $(this).closest(moNav).removeClass('show');
        $('body').removeClass('body_bg');
    });

    $moTitle.click(function(){
        $(this).siblings($moDep2).slideToggle();
    });

});

// pc �ㅻ뜑 怨좎젙
function h_top_css() {
    var scroll = $(window).scrollTop();
    // var topHeaderH = $('.h-info').outerHeight();
    // var bottomHeaderH = $('.header_box').height();

    // if(scroll> 0){
    // 	// $('.header_box').css({'margin-top':'0'});
    // 	$('.header_box').addClass('h_bg');
    // 	// $('#container').css({'margin-top': bottomHeaderH})
    // } else{
    // 	// $('.header_box').css({'margin-top':'0'});
    // 	$('.header_box').removeClass('h_bg');
    // 	// $('#container').css({'margin-top': '0'})
    // }
}

// mobile �ㅻ뜑 怨좎젙
function mo_top_css() {
    var scroll = $(window).scrollTop();
    // var topHeaderH = $('.mo-h-info').outerHeight();
    var mo_bottomHeaderH = $('.m_header_box').height();

    if(scroll> 0){
        // $('.m_header_box').css({'margin-top':'0'});
        $('.m_header_box').addClass('h_bg');
        // $('#m-header').css({'margin-top': mo_bottomHeaderH})
    } else{
        // $('.m_header_box').css({'margin-top':'0'});
        $('.m_header_box').removeClass('h_bg');
        // $('#m-header').css({'margin-top': '0'})
    }
}


$(function(){
    // function sc_header(now_scroll){
    // 	if(now_scroll > 0){
    // 		$('#header').addClass('on');
    // 	}else{
    // 		$('#header').removeClass('on');
    // 	}
    // }

    // sc_header($(window).scrollTop());

    // $(window).scroll(function(){
    // 	sc_header($(window).scrollTop());
    // });

    $('#header .header_box').hover(function(){
        $(this).closest('#header').find('.dep2').stop().slideDown(100,'linear');
    }, function(){
        $(this).closest('#header').find('.dep2').stop().slideUp(100,'linear');
    });

    $('#header .header_box .dep2_li').click(function(){
        $(this).find('.dep3').slideToggle();
    });

    $(".hamburger").click(function(){
        $(this).toggleClass("is_active");
        $('.siteMap_box').toggleClass("active");
        $('body').toggleClass('body_bg');
        $('.m_h_nav').toggleClass('show');
        $('.header_box').toggleClass('h_bg');
        if($('.h_logoBox').hasClass('on')){
            $('.h_logoBox').removeClass('on');
            $('.h_logoBox a img').attr('src','/images/common/h_logo.png')
        }else{
            $('.h_logoBox').addClass('on');
            $('.h_logoBox a img').attr('src','/images/common/h_logo_on.png')
        }
    });


    $(".m-dep1-a").click(function(){
        $(this).siblings('.m-dep2').slideToggle(200);
        $(this).find('.arrow-img').toggleClass('rotate');
    });


    $('.siteMap_box .sm_dep2_li').click(function(e){
        $(this).find('.sm_dep3').slideToggle();
        $(this).find('img').toggleClass('rotate');
    });


    // $('.lang-btn > li').click(function(){
    // 	$(this).find('ul').stop().slideToggle(200, 'linear');
    // 	$(this).find('.swich-btn > span').toggleClass('rotate');
    // });
    // $('.lang-btn > li').mouseout(function(){
    // 	$(this).find('ul').stop().slideUp(300, 'linear');
    // 	$(this).find('.swich-btn > span').css({
    // 		'transform' : 'rotate(0) scale(0.5)',
    // 	});
    // });


});
// ======================================================================== //

// ======================================================================== //

// �щ씪�대뱶 �좉� 踰꾪듉 �ㅽ겕由쏀듃
var dep1 = '';
var dep2 = '';

function init() {
    dep1 = $(".s-dep1-a");
    dep2 = $(".s-dep2-a[s-dep2-idx]");
}

// dep1 slideToggle
function slideToggle1() {
    $(dep1).click(function () {
        $this = $(this);

        var s_dep1_idx = $this.attr("s-dep1-idx");
        $.each(dep1, function (i, v) {
            var v_idx = $(v).attr("s-dep1-idx");

            if (v_idx != s_dep1_idx) {
                $(v).siblings(".s-dep2-box").slideUp();
                $(v).find("img").attr('src', function (index, attr) {
                    if (attr.match('_off')) {
                        return attr.replace("_off.png", "_on.png");
                    }
                });
            }
        })
        $(this).siblings(".s-dep2-box").slideToggle();
    });
    imgAttr();
}
// dep2 slideToggle
function slideToggle2() {
    $(dep2).click(function () {
        $this = $(this);

        var s_dep2_idx = $this.attr("s-dep2-idx");
        $.each(dep2, function (i, v) {
            var v_idx = $(v).attr("s-dep2-idx");

            if (v_idx != s_dep2_idx) {
                $(v).siblings(".s-dep3-box").slideUp();
                $(v).find('i').removeClass('rotate');
            }
        })


        $this.siblings(".s-dep3-box").slideToggle();
        $this.find('i').toggleClass('rotate');

    });
}

// �щ씪�대뱶 �좉� �� +,-�대�吏� 援먯껜 �ㅽ겕由쏀듃
// dep1 imgAttr()
function imgAttr() {
    $(dep1).click(function () {
        $(this).find("img").attr('src', function (index, attr) {
            if (attr.match('_on')) {
                return attr.replace("_on.png", "_off.png");
            } else {
                return attr.replace("_off.png", "_on.png");
            }
        });
    });
}

// �몄텧 �ㅽ겕由쏀듃 (�ㅽ겕由쏀듃 �ъ슜 �섏씠吏� �섎떒�� �몄텧 �섎㈃ ��.)
$(document).ready(function(){
    init();
    slideToggle1();
});



$(window).resize(function(){
    var windowWidth = $(window).innerWidth();
    setPlatform();
});

// ======================================================================== //

// ======================================================================== //

// resize �⑥닔 �ㅼ젙
var platform = '';

function setPlatform() {
    winWidth = $(window).width();
    if (winWidth < 1023) { // 1023�댁긽�쇰븣 platform='tablet'�쇰줈 �ｌ뼱二쇨퀬, �섎떒�� �ㅽ뻾 �쒗궗 援щЦ�� �ｌ뼱以���.
        platform = 'tablet';

    } else if(winWidth >= 1023) {
        platform = '';

    }
}

var $picBox = ''; // id 諛� class 吏���
var $infoBox = '';

// resize event �숈옉 援ы쁽
// $picBox.click(function(){
//     if(platform == 'tablet'){
//         $(this).siblings('.info-box').children('.career-box').slideToggle(200);
//     }
//     console.log(platform);
// });

// ======================================================================== //

// ======================================================================== //

// �� �대깽��
function tabMenu(selector, idxContents) {
    var $tabMenu = null;
    var $menuItems = null;
    var $selectedMenuItem = null;
    var $tabCont = null;

    // �� 踰꾪듉 �대옒�� �좎뼵
    function init(selector) {
        $tabMenu = $(selector);
        $menuItems = $tabMenu.find('li');
    }
    // 而⑦뀗痢� 蹂��� �좎뼵
    function initContents(idxContents) {
        $tabCont = $(idxContents);
    }
    // �� 踰꾪듉 / 而⑦뀗痢� �대깽��
    function initEvent() {
        $menuItems.click(function(){
            setSelecItem($(this));
            showContents(idxContents);
        });
    }
    // ��쾭�� �쒖꽦�� �⑥닔
    function setSelecItem($item) {
        if($selectedMenuItem != null) {
            $selectedMenuItem.removeClass("active")
        }
        $selectedMenuItem = $item;
        $selectedMenuItem.addClass("active")
    }
    // �� 而⑦뀗痢� �섏꽦�� �⑥닔
    function showContents() {
        $idx = $selectedMenuItem.index();
        $tabCont.hide();
        $tabCont.eq($idx).fadeIn();
    }

    init(selector);
    initContents(idxContents);
    initEvent();
    $menuItems.eq(0).trigger("click");
}

// �몄텧 �ㅽ겕由쏀듃 (�ㅽ겕由쏀듃 �ъ슜 �섏씠吏� �섎떒�� �몄텧 �섎㈃ ��.)
$(document).ready(function(){
    tabMenu(".tabBtn-dep1", ".tab-contBox"); // tabMenu('�� 踰꾪듉�� 諛붾줈 �� 遺�紐� �쒓렇 ex) li媛� �� 踰꾪듉�대㈃ ul�쒓렇瑜� �낅젰 or init()�� $menuItems 媛믪쓣 蹂�寃�','蹂댁뿬二쇨퀬 �④만 �� 而⑦뀗痢� �쒓렇');
});

// ======================================================================== //

// ======================================================================== //

// swiper slide 紐⑥쓬
function slide1(swiper1) { // pagination , next/prev 踰꾪듉 �щ씪�대뱶(湲곕낯��)
    var slide01 = new Swiper(swiper1, {
        effect : 'fade',
        direction: 'horizontal',
        loop: true,
        autoplay : {
            delay:5000,
        },
        fadeEffect: {
            crossFade: true,
        },
        speed : 800,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable:true,
        // },
        // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    });
}

function slide2(swiper2) {  // pagination留� �덈뒗 �щ씪�대뱶(湲곕낯��)
    var slide02 = new Swiper(swiper2, {
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            speed: 3000
        },
        pagination: {
            el: ".serv-pagi",
            clickable: true,
        },
    });
}

function slide3(swiper3) { // pagination , stop/play �좉� �щ씪�대뱶
    var mySwiper = new Swiper(swiper3, {
        // effect : 'fade',
        direction: 'horizontal',
        loop: true,
        autoplay : {
            delay:2000,
        },
        speed : 1000,

        pagination: {
            el: '.main_page',
            // type: 'progressbar',
            clickable:true,
        },
    });
    $(".stop_btn01").click(function(){
        mySwiper.autoplay.stop();
        $(this).hide();
        $(this).siblings().show();
    });
    $(".start_btn01").click(function(){
        mySwiper.autoplay.start();
        $(this).hide();
        $(this).siblings().show();
    });
}

function slide4(swiper4) { // fraction, stop/play, progressbar �щ씪�대뱶
    var mySwiper = new Swiper(swiper4, {
        effect : 'fade',
        direction: 'horizontal',
        loop: true,
        autoplay : {
            delay:6000,
        },
        speed : 3000,

        pagination: {
            el: ".swiper-pagination",
            type: "fraction"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        on: {
            init: function () {
                $(".swiper-progress-bar").removeClass("animate");
                $(".swiper-progress-bar").removeClass("active");
                $(".swiper-progress-bar").eq(0).addClass("animate");
                $(".swiper-progress-bar").eq(0).addClass("active");
            },
            slideChangeTransitionStart: function () {
                $(".swiper-progress-bar").removeClass("animate");
                $(".swiper-progress-bar").removeClass("active");
                $(".swiper-progress-bar").eq(0).addClass("active");
            },
            slideChangeTransitionEnd: function () {
                $(".swiper-progress-bar").eq(0).addClass("animate");
            }
        }
    });
    $(".stop_btn02").click(function(){
        mySwiper.autoplay.stop();
        $(this).hide();
        $(this).siblings().show();
        $('.swiper-progress-bar').removeClass('animate');
    });
    $(".start_btn02").click(function(){
        mySwiper.autoplay.start();
        $(this).hide();
        $(this).siblings().show();
        $('.swiper-progress-bar').addClass('animate');
    });
}

function slide5(swiper5, next, prev) {
    var mySwiper = new Swiper(swiper5, { // 遺꾪븷 �щ씪�대뱶 (諛섏쓳�� �곹빀)
        direction: 'horizontal',
        loop: true,
        autoplay : {
            delay:3000,
        },
        navigation: {
            nextEl: next,
            prevEl: prev
        },
        speed : 3000,
        slidesPerView: 5,
        spaceBetween: 50,

        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });
}


// ======================================================================== //

// ======================================================================== //

// �レ옄 移댁슫�� �ㅽ듃由쏀듃
$(window).scroll(function(){   // �몄텧 �⑥닔
    var winSCT = $(this).scrollTop();
    var sec01 =$('#serv-section1 .serv-sec1'); // offset.top 媛믪쓽 湲곗��� �섎뒗 �뱀뀡
    var sec01_box = '';
    var num01 = '';
    var num02 = '';
    var num03 = '';
    var num04 = '';

    // if(sec01.offset().top - 350 < winSCT){
    //     // console.log(sec01.offset().top);

    //     $(function(){
    //         countElementInit('.num01','.num02', '#serv-section1 .serv-sec1');
    //         countEvent();
    //     });
    // }
});

function countElementInit(num1, num2, parentSec) {
    sec01_box = $(parentSec); // �붿냼�ㅼ쓣 �ы븿�섍퀬 �덈뒗 �뱀뀡
    num01 = sec01_box.find(num1);
    num02 = sec01_box.find(num2);
}

function countEvent() {
    if(!sec01_box.hasClass('active')){

        WholeNumb(77);
        commasNumb(2.3);
        numberWithCommas(x);

        sec01_box.addClass('active');
    }
}

function WholeNumb(numb) { // �뺤닔 count up �⑥닔
    $({ val : 0 }).animate({ val : numb }, {
        duration: 1500,
        step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            num01.text(num);
        },
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            num01.text(num);
        }
    });
}

function commasNumb(comm) { // �뚯닔�� count up �⑥닔
    $({ val : 0 }).animate({ val : comm }, {
        duration: 1000,
        step: function() {
            var num = numberWithCommas(this.val.toFixed(1));
            num02.text(num);
        },
        complete: function() {
            var num = numberWithCommas(this.val.toFixed(1));
            num02.text(num);
        }
    });
}

function numberWithCommas(x) { // �レ옄 肄ㅻ쭏 �⑥닔
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// ======================================================================== //

// ======================================================================== //

// skrollr.js �몄텧 �ㅽ겕由쏀듃
function skrollrJs() {
    skrollr.init({
        mobileCheck: function(){
            if((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
                // mobile device
            }
        }
    });
}


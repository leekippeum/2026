/*------------------------------------
date: 2024.01.31
developed by: smartport
developer url: smartport.kr
------------------------------------*/




$(function () {

    //* tabMenu *//
    $('.tabBtn > .btn').click(function(){
        var $this = $(this);
        var idx = $this.index();
        if ( $this.hasClass('active') ){
            return false;
        } else {
            $this.addClass('active').siblings('.btn').removeClass('active');
            $this.parents('.tabMenu').children('.tabCont').children('.cont').eq(idx).fadeIn(100).addClass('active').siblings('.cont').fadeOut(100).removeClass('active');
        }
    });

    //* header *//
    function navPcClose(){
        $('.pc .hdBg').stop().slideUp(200);
        $('.pc .subMenu').stop().slideUp(200);
    }
    $('.pc .gnbWrap >ul >li').mouseover(function () {
        var $this = $('.pc .subMenu');
        var $hdBg = $('.pc .hdBg');
        $this.stop().slideDown(200);
        $hdBg.stop().slideDown(200);
    });
    $('.pc .gnbWrap').mouseleave(function(){ //close
        navPcClose();
    });
    // 스크롤 시 헤더 이벤트
    var lastScrollTop = 0;
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop >= 400){
            if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
                $("header.pc").css("top","-100px");
            } else {
                $("header.pc").css("top","0px");
            }
            lastScrollTop = scrollTop;
            $(".main header").removeClass('top');
        } else if(scrollTop >= 100 && scrollTop < 400) {
            if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
                $("header.pc").css("top","-100px");
            } else {
                $("header.pc").css("top","0px");
            }
            lastScrollTop = scrollTop;
            $(".main header").addClass('top');
        } else {
            $(".main header").addClass('top');
        }
    });
    $('.mob .btnMenu').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).parents('.hdWrap').css('height','64px');
            $(this).parents('.hdWrap').children('.gnbWrap').stop().slideUp(0);
        } else {
            $(this).addClass('on');
            $(this).parents('.hdWrap').css('height','100vh');
            $(this).parents('.hdWrap').children('.gnbWrap').stop().slideDown(200);
        }
    });
    $(window).resize(function(){
        navPcClose();
        if (window.innerWidth > 1199) {
            $("header.pc").css("display","flex");
            $("header.mob").css("display","none");
        }else {
            $("header.mob").css("display","flex");
            $("header.pc").css("display","none");
        }
    }).resize();

    //* top button *//
    $(window).scroll(function(){
        if( $(this).scrollTop() > 100 ){
            $(".quickBtnWrap").addClass("active");
        } else{
            $(".quickBtnWrap").removeClass("active");
        }
        
        // if(($(this).height() + $(this).scrollTop()) >= ($('footer').position().top)){
        //     $(".quickBtnWrap").addClass("bottom");
        // } else {
        //     $(".quickBtnWrap").removeClass("bottom");
        // }
    });
    $(".topBtn").click(function(){
        window.scrollTo({top : 0, behavior: 'smooth'}); 
    });

    //main swiper
    var mySwiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },                 
        pagination : {
            el : '.pagination',
            clickable : false,
            renderBullet : function(index, className) { 
                return '<li class="' + className + '"></li>';
            }
        },
        navigation : { 
            prevEl : '.button-prev',
            nextEl : '.button-next',
        },
        loop: true,
        loopAdditionalSlides: 1,
        centeredSlides: true,
        slidesPerView : 1.25,
        slideToClickedSlide : true,
        allowTouchMove : false,
    });

    var sw = 0;
    $('.button-pause').click(function(){
        if(sw==0){
            $('.button-pause').addClass('on');
            mySwiper.autoplay.stop();
            sw = 1;
        }else{
            $('.button-pause').removeClass('on');
            mySwiper.autoplay.start();
            sw = 0;
        }
    });

});
/*------------------------------------
date: 2022.09
developed by: smartport
developer url: smartport
------------------------------------*/

$(function () {

    //* tabMenu *//
    $('.tabBtn > .btn').click(function(){
        var $this = $(this);
        var idx = $this.index();
        if ( $this.hasClass('on') ){
            return false;
        } else {
            $this.addClass('on').siblings('.btn').removeClass('on');
            $this.parents('.tabMenu').children('.tabCont').children('.cont').eq(idx).fadeIn(0).addClass('on').siblings('.cont').fadeOut(0).removeClass('on');
        }
    });

    //* rightMenu *//
    $('.gnb.mb .rightMenu .btn').click(function(){
		var $this = $(this);
		if( $this.hasClass('open') ){
			$this.parent('.rightMenu').addClass('fix').find('.menuWrap').addClass('on');
			log('open');
		}else{
			$this.parents('.rightMenu').removeClass('fix').find('.menuWrap').removeClass('on');
			log('close');			
		}
	});
    
    //* .seatImgView *//
    $('.btnSeatView').click(function(){
		if( $(this).hasClass('on') ){
			$('.btnSeatView').removeClass('on');
			$('.btnSeatView').text('좌석 전체 보기');
			$('.seatAddCon').removeClass('full');	
		}else{			
			$('.btnSeatView').addClass('on');
			$('.btnSeatView').text('좌석 전체 닫기');
			$('.seatAddCon').addClass('full');
		}
	});

    $('.btnHeaderMb .mbLangList .iconLang').click(function(){
        var $this = $(this).closest('.mbLangList');
        // close
        if ( $this.hasClass('on') ){
            $this.removeClass('on tag').children('.subMb').fadeOut(100);
        //open
        } else {
            $('.mbLangList.on').not($this).removeClass('on').children('.subMb').fadeOut(100);
            $this.addClass('on tag').children('.subMb').fadeIn(100);
        }
    });

    //main_랜덤이미지
    var image1 = 'url(../images/main/mainBg_01.jpg) no-repeat';
    var image2 = 'url(../images/main/mainBg_02.jpg) no-repeat';
    var image3 = 'url(../images/main/mainBg_03.jpg) no-repeat';
    var image4 = 'url(../images/main/mainBg_04.jpg) no-repeat';
    var image5 = 'url(../images/main/mainBg_05.jpg) no-repeat'; 
    var imgNum = getRandomIntInclusive(0,4);
    
    var imgArray = new Array();
    imgArray.push(image1);
    imgArray.push(image2);
    imgArray.push(image3);
    imgArray.push(image4);
    imgArray.push(image5);
    
    //랜덤 숫자
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
    }

    $(".mainBanWrap .imgWrap").css({
        "background" : imgArray[imgNum],
        "background-size" : "cover",
    });

    //지도 팝업
    $('.map').click(function(){
        $('.popBg').addClass('on');
    });
    $('.b-close').click(function(){
        $('.popBg').removeClass('on');
    });
});

/*------------------------------------
date: 2024.01.31
developed by: smartport
developer url: smartport.kr
------------------------------------*/




$(function () {

    //* header *//
    function navPcClose(){
        $('.hdBg').stop().slideUp(300);
        $('.subMenu').stop().slideUp(300);
    }
    $('header .gnbCon > li').mouseover(function () {
        var $this = $('.subMenu');
        var $hdBg = $('.hdBg');
        $this.stop().slideDown(300);
        $hdBg.stop().slideDown(300);
    });
    $('header .gnbCon').mouseleave(function(){ //close
        navPcClose();
    });

    // tabMenu
    $('.tabBtnWrap > .tabBtn').click(function(){
        var $this = $(this);
        var idx = $this.index();
        if ( $this.hasClass('on') ){
            return false;
        } else {
            $this.addClass('on').siblings('.tabBtn').removeClass('on');
            $this.parents('.tabMenu').children('.tabCont').children('.cont').eq(idx).fadeIn(0).addClass('on').siblings('.cont').fadeOut(0).removeClass('on');
        }
    });

     // topBtn
    $(".topBtn").click(function() {
		$('html, body').animate({scrollTop:0}, '300');
	});



    //* check/radio *//

    /////////일반 라디오 올체크
    $(".allCheck").click(function(){
        //만약 전체 선택 체크박스가 체크된상태일경우
        if($(".allCheck").prop("checked")) {
            //해당화면에 전체 checkbox들을 체크해준다
            $("input[type=checkbox]").prop("checked",true);
        // 전체선택 체크박스가 해제된 경우
        } else {
            //해당화면에 모든 checkbox들의 체크를해제시킨다.
            $("input[type=checkbox]").prop("checked",false);
        }
    });

    /*date 달력*/
    $('input[name="daterange"]').daterangepicker({
        opens: 'left',
        locale: {
            format: 'YYYY-MM-DD'
        }
    }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
    /*달력 - 싱글*/
    $('input[name="datesingle"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'),10),
        locale: {
            format: 'YYYY-MM-DD'
        }
    });
    /*달력-시간까지*/
    $('input[name="datetime"]').daterangepicker({
        timePicker: true,
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(32, 'hour'),
        locale: {
        format: 'YYYY-MM-DD hh:mm A'
        }
    });

	/*달력-싱글에 시간까지*/
	$('input[name="datesingleTime"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        locale: {
        format: 'YYYY-MM-DD hh:mm A'
        }
    });

    /*리드온리일때 달력 안보이게*/
    $('input[readonly].datepick').click(function(){
        $('.show-calendar').css("display","none");
    })


});

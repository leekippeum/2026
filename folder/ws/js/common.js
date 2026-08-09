/*------------------------------------
date: 2024.01.31
developed by: smartport
developer url: smartport.kr
------------------------------------*/




$(function () {

    //* check/radio *//
    $('.chkBox > .ipt').click(function(){
        var $this = $(this).parent('.chkBox');
        // remove check
        if ( $this.hasClass('on') ){
            $this.removeClass('on');
            $this.find('.ipt').val('체크안됨');
            $this.find('.ipt').attr('checked', false);
            // All
            if( $this.hasClass('all') ){
                var $chk = $this.parents('.chkWrap').find('.chkBox');
                $chk.removeClass('on');
                $chk.find('.ipt').val('체크안됨');
                $chk.find('.ipt').attr('checked', false);
            }
        // add check
        } else {
            $this.addClass('on');
            $this.find('.ipt').val('체크됨');
            $this.find('.ipt').attr('checked', true);
            // All
            if( $this.hasClass('all') ){
                var $chk = $this.parents('.chkWrap').find('.chkBox');
                $chk.addClass('on');
                $chk.find('.ipt').val('체크됨');
                $chk.find('.ipt').attr('checked', true);
            }
        }
        // All check
        var chklen = $this.parents('.chkWrap').children('.chkBox').length - 1;
        var chkOnlen = $this.parents('.chkWrap').children('.chkBox.on').not('.chkBox.all').length;
        var chkAll = $this.parents('.chkWrap').children('.chkBox.all');
        if ( chklen == chkOnlen ){
            chkAll.addClass('on');
            chkAll.find('.ipt').val('체크됨');
            chkAll.find('.ipt').attr('checked', true);
        } else {
            chkAll.removeClass('on');
            chkAll.find('.ipt').val('체크안됨');
            chkAll.find('.ipt').attr('checked', false);
        }
    });
    $('.rdoBox > .ipt').click(function(){
        var $this = $(this).parent('.rdoBox');
        $this.addClass('on');
        $this.find('.ipt').val('체크됨');
        $this.find('.ipt').attr('checked', true);
        $this.siblings('.rdoBox').removeClass('on');
        $this.siblings('.rdoBox').find('.ipt').val('체크안됨');
        $this.siblings('.rdoBox').find('.ipt').attr('checked', false);
    });

    //* .popDf *//
    $('.popDf .popBtn').click(function(){
        if( $(this).hasClass('close') ) {
            $(this).parents('.popDf').find('.popCont').fadeOut(200).removeClass('on fixCont tag');
            $('.fixBG').fadeOut(200);
        } else {
            $(this).parents('.popDf').find('.popCont').fadeIn(200).addClass('on fixCont tag');
            $('.fixBG').fadeIn(200);
        }
    });

});

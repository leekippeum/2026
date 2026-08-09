/*------------------------------------
date: 2024.01.31
developed by: smartport
developer url: smartport.kr
------------------------------------*/




$(function () {

  // 메인화면 슬라이드
  var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

});
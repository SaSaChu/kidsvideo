$(function() {

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  $('.m_header_r').click(function() {
    $('.m_menu').addClass('menu_open');
  });

  $('.menuClose').click(function() {
    $('.m_menu').removeClass('menu_open');
  });

  // $('.menu').click(function() {
  //   $('.m01-h, .m02-h, .m03-h, .m04-h, .m05-h, .m06-h, .m07-h, .m09-h, .m10-h, .m11-h,').removeClass('dott');
  // });

  $('.menu').click(function() {
    $(this).prev('.col').each (function () {
      var $that = $(this);
      $(this).removeClass ('dott');
    });
  });




//   if(window.Swiper) {
//     var swiper = new Swiper(".mySwiper", {
//       slidesPerView: 4,
//       spaceBetween: 30,
//       slidesPerGroup: 4,
//       loop: true,
//       loopFillGroupWithBlank: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
//   }
});

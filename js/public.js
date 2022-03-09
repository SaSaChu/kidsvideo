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

  

  $('.menuboxs .menu').each(function() {
    let isActive = $(this).is("[class*='-h']")
    $(this).mouseenter(function() {
      $(this).removeClass ('dott').prev().removeClass ('dott');
    })
    $(this).mouseleave(function() {
      if (!isActive) {
        $(this).addClass ('dott').prev().addClass ('dott');
      }
      if ($(this).prev().is("[class*='-h']")) {
        $(this).prev().removeClass ('dott')
      }
      if ($(this).next().is("[class*='-h']")) {
        $(this).removeClass ('dott')
      }
    })

    if (isActive) {
      $(this).removeClass ('dott').prev().removeClass ('dott');
    }
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

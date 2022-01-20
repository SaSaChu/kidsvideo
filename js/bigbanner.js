$(function() {
	var swiper = new Swiper(".bannerboxs", {
		slidesPerView: 3,
		spaceBetween: 0,
		slidesPerGroup: 3,
		loop: true,
		loopFillGroupWithBlank: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		},
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
	});

  });
  
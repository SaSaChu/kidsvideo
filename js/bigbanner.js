$(function() {
	var swiper = new Swiper(".bannerboxs", {
		slidesPerView: 5,
		spaceBetween: 0,
		slidesPerGroup: 1,
		loop: true,
		// allowTouchMove: false,
		centeredSlides: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		// pagination: {
		//   el: ".swiper-pagination",
		//   clickable: true,
		// },
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 1,
			  spaceBetween: 0,
			  slidesPerGroup: 1,
			},

			769: {
				slidesPerView: 5,
				spaceBetween: 0,
				slidesPerGroup: 1,
			}
		},

	});

	$('.swiper-slide-prev').change(function(){
		alert(1)
	})
  });
  
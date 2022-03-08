$(function() {
	var swiper = new Swiper(".bannerboxs", {
		slidesPerView: 5,
		spaceBetween: 0,
		slidesPerGroup: 5,
		loop: true,
		allowTouchMove: false,
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
		  }
	});

	$('.swiper-button-prev').click(function() {
		let n = $('.swiper-slide-next').attr('data-swiper-slide-index');
		n = parseInt(n) + 1 ;
		if(n == $('.swiper-slide').length - 10) {
			n = 0;
		}
		$('.swiper-slide').css({'height':'280px','margin-top':'40px'});
		$(`.swiper-slide[data-swiper-slide-index=${n}]`).css({'height':'320px','margin-top':'0'});
		$(`.swiper-slide[data-swiper-slide-index=${n}]:not(.swiper-slide-duplicate)`).find('.big-t-g').css({'cssText': 'top: 15px !important'});
	})

	$('.swiper-button-next').click(function() {
		let n = $('.swiper-slide-next').attr('data-swiper-slide-index');
		n = parseInt(n) + 1;
		if(n == $('.swiper-slide').length - 10) {
			n = 0;
		}
		$('.swiper-slide').css({'height':'280px','margin-top':'40px'});
		$(`.swiper-slide[data-swiper-slide-index=${n}]`).css({'height':'320px','margin-top':'0'});
		$(`.swiper-slide[data-swiper-slide-index=${n}]:not(.swiper-slide-duplicate)`).find('.big-t-g').css({'cssText': 'top: 15px !important'});
		
		
	})
  });
  
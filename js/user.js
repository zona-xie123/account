$(document).ready(function () {
	// scrollreveal
	window.sr = ScrollReveal({
		reset: true
	});
	sr.reveal('.kv .kv-gif .mobile', {
		delay: 400,
		scale: 1,
		easing: 'ease-in-out'
	});
	sr.reveal('.kv .kv-gif .banknote-1', {
		delay: 500,
		scale: 0.7,
		easing: 'ease-in-out'
	});
	sr.reveal('.kv .kv-gif .banknote-2', {
		delay: 600,
		scale: 0.7,
		easing: 'ease-in-out'
	});
	sr.reveal('.kv .kv-gif .bank', {
		delay: 100,
		scale: 0.6,
		easing: 'ease-in-out'
	});
	// sr.reveal('.ribbons-1', {
	// 	delay: 100,
	// 	scale: 0.6,
	// 	easing: 'ease-in-out'
	// });
	// sr.reveal('.ribbons-2', {
	// 	delay: 150,
	// 	scale: 0.5,
	// 	easing: 'ease-in-out'
	// });
	// sr.reveal('.ribbons-3', {
	// 	delay: 100,
	// 	scale: 0.9,
	// 	easing: 'ease-in-out'
	// });
	// sr.reveal('.ribbons-4', {
	// 	delay: 200,
	// 	scale: 0.4,
	// 	easing: 'ease-in-out'
	// });
	// sr.reveal('.ribbons-5', {
	// 	delay: 100,
	// 	scale: 0.4,
	// 	easing: 'ease-in-out'
	// });

	// nav
	$('.main-nav ul li a').click(function () {
		$('.target-burger,.main-nav,header .container').removeClass('toggled')
		// $('.navbar-toggle').removeClass('active-toggle')
	})
	AOS.init();
	//faq_down
	$('.faq .qa-section').each(function (i) {

		var _number = i;
		$(this).click(function () {
			$(this).toggleClass('active-qa')
			$('.answer').eq(_number).slideToggle(200);
		});
	});

	// Variables
	var clickedTab = $(".tabs > .active");
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight();

	// Show tab on page load
	activeTab.show();

	// Set height of wrapper on page load
	tabWrapper.height(activeTabHeight);

	$(".tabs > li").on("click", function () {

		// Remove class from active tab
		$(".tabs > li").removeClass("active");

		// Add class active to clicked tab
		$(this).addClass("active");

		// Update clickedTab variable
		clickedTab = $(".tabs .active");

		// fade out active tab
		activeTab.fadeOut(250, function () {

			// Remove active class all tabs
			$(".tab__content > li").removeClass("active");

			// Get index of clicked tab
			var clickedTabIndex = clickedTab.index();

			// Add class active to corresponding tab
			$(".tab__content > li").eq(clickedTabIndex).addClass("active");

			// update new active tab
			activeTab = $(".tab__content > .active");

			// Update variable
			activeTabHeight = activeTab.outerHeight();

			// Animate height of wrapper to new tab height
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight
			}, 500, function () {

				// Fade in active tab
				activeTab.delay(50).fadeIn(250);

			});
		});
	});

	// Variables
	var colorButton = $(".colors li");

	colorButton.on("click", function () {

		// Remove class from currently active button
		$(".colors > li").removeClass("active-color");

		// Add class active to clicked button
		$(this).addClass("active-color");

		// Get background color of clicked
		var newColor = $(this).attr("data-color");

		// Change background of everything with class .bg-color
		$(".bg-color").css("background-color", newColor);

		// Change color of everything with class .text-color
		$(".text-color").css("color", newColor);
	});
	// 第一重輪播畫面
	var swiper = new Swiper('.swiper-container', {
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			bulletClass: 'slideshow-pagination-item',
			bulletActiveClass: 'active',
			clickableClass: 'slideshow-pagination-clickable',
			modifierClass: 'slideshow-pagination-',

		}
	});
	// Wrap every letter in a span

	$('a.target-burger').click(function (e) {
		$('.main-nav .container, nav.main-nav, a.target-burger').toggleClass('toggled');
		e.preventDefault();
	});
})
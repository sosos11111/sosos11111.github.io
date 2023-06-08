$(function () {

	// 하위메뉴
	// var $submenu = $('.submenu');
	// var $nav = $('#menu-list');

	// var $container = $('<div id = "submenuContainer"></div>').height($submenu.outerHeight()).appendTo($nav);

	// $nav.find('ul > li > a').on('click', function(e){
	// 	e.preventDefault();
	// 	$submenu.slideDown();
	// 	$container.slideUp(on);
	// });
	
	// $nav.on('mouseleave', function(){
	// 	$submenu.slideUp();
	// 	$container.slideDown(on);
	// });

	// 배너 자동 슬라이드
	var interval = 4000,
		$imageList = $('#img-list'),
		timerId = window.setInterval(slideImage, interval);

	$imageList.parent().on({
		mouseenter: function () {
			window.clearInterval(timerId);
		},

		mouseleave: function () {
			timerId = window.setInterval(slideImage, interval);
		}
	});

	function slideImage() {
		$imageList.animate({ marginLeft: '-100%' }, 500, function () {
			$imageList.removeAttr('style').children(':first').appendTo($imageList);
		});
	}

	// 배너 클릭 시 슬라이드
	var slides = document.querySelector('#img-list > li'),
		slide = document.querySelector('#img-list'),
		photoCount = slides.length,
		duration = 400,
		photoIndex = 0;

	// 슬라이드 버튼 클릭 이벤트
	document.querySelector("#next").addEventListener("click", nextSlideImage);
	document.querySelector("#prev").addEventListener("click", prevSlideImage);

	// 다음 사진으로 슬라이드
	function nextSlideImage() {
		photoIndex++;
		photoIndex %= photoCount;
		slide.style.left = "-100%";
		slide.style.transition = duration + "ms";
		window.setTimeout(() => {
			slide.appendChild(slide.firstElementChild);
			slide.removeAttribute("style");
		}, duration);
	}
	// 이전 사진으로 슬라이드
	function prevSlideImage() {
		photoIndex--;
		photoIndex %= photoCount;
		slide.insertBefore(slide.lastElementChild, slide.firstChild);
		slide.style.left = "-100%";
		slide.style.transition = "0ms";
		window.setTimeout(() => {
			slide.style.left = 0;
			slide.style.transition = duration + "ms";
		});
	}

	// 새로운 소식 tab
	$('#tabnav li').click(function () {
		var onTab = $(this).attr('data-tab');
		$('#tabnav li').removeClass('on');
		$('.tab-contents11').removeClass('on');
		$(this).addClass('on');
		$('#' + onTab).addClass('on');
	});

	// 관련사이트 바로가기
	$('#family_title1').click(function () {
		$('#family-list1').stop().slideToggle()
	});

	$('#family_title2').click(function () {
		$('#family-list2').stop().slideToggle()
	});

	$('#family_title3').click(function () {
		$('#family-list3').stop().slideToggle()
	});

	$('#family_title4').click(function () {
		$('#family-list4').stop().slideToggle()
	});


	// page2
	// 왼쪽 메뉴 드롭다운
	$('#content1 ul.height-sub-menu').hide();
	$('#height1').click(function () {
		$('ul', this).slideToggle(300);
		$('#title1').toggleClass('ad');
	});
	$('#height2').click(function () {
		$('ul', this).slideToggle(300);
		$('#title2').toggleClass('ad');
	});
	$('#height3').click(function () {
		$('ul', this).slideToggle(300);
		$('#title3').toggleClass('ad');
	});
	$('#height4').click(function () {
		$('ul', this).slideToggle(300);
		$('#title4').toggleClass('ad');
	});
});
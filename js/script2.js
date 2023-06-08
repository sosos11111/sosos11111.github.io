$(function () {

	// 하위메뉴
	var $submenu = $('.submenu');
	var $nav = $('#menu-list');

	// var $container = $('<div id = "submenuContainer"></div>').height($submenu.outerHeight()).appendTo($nav);

	$nav.find('ul > li > a').on('click', function (e) {
		e.preventDefault();
		$submenu.slideDown();
		// $container.slideUp(on);
	});

	$nav.on('mouseleave', function () {
		$submenu.slideUp();
		// $container.slideDown(on);
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
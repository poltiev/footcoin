//клик по бургеру
$('.burger').on('click', function(){
//бургер
	$(this).next().slideToggle(500);
	$(this).next().toggleClass('active');
	$(this).toggleClass('active');
});
// клик по иконке
$('.login-in').on('click', function(){
	$(this).next().slideToggle(500);
	$(this).toggleClass('active');
});
// tabs
$('ul.tabs-caption').on('click', 'li:not(.active)', function() {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
});
//scroll top
$(window).scroll(function() {
	var height = $(window).scrollTop();
	/*скролл на 100px*/
	if(height > 100){
		$('.top-menu').addClass('active');
	} else{
		$('.top-menu').removeClass('active');
	}
});

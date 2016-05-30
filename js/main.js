$(function(){

    $('.sizes > div').on('click', function (e) {

    	 e.preventDefault();

    	 $('.sizes > div').removeClass('active');

    	 $(this).addClass('active');
    })

    $('.tabs a').on('click', function  (e) {

    	e.preventDefault();
    	
    	$('.tabs a').removeClass('active');

    	$(this).addClass('active');

    })

});

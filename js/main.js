$(function(){

    $('.sizes > div').on('click', function (e) {

    	 e.preventDefault();

    	 $('.sizes > div').removeClass('active');

    	 $(this).addClass('active');
    });

    $('.tabs a').on('click', function  (e) {

    	e.preventDefault();
    	
    	$('.tabs a').removeClass('active');

    	$(this).addClass('active');

    });

    $('.tab-nav a').on('click', function  (e) {

        e.preventDefault();
         
        $('.tab-nav a').removeClass('active');

        $(this).addClass('active');

        var id = $(this).data('id');

        $('.boxes > div').hide();

        $('.boxes').find('.' + id).show();
         
    });

    $('.switcher a').on('click', function  (e) {

        e.preventDefault();

        $('.switcher a').removeClass('active');

        $(this).addClass('active');
        
    });

    $('.colors a').on('click', function  (e) {

        e.preventDefault();
        
        $('.colors a').removeClass('active');

        $(this).addClass('active');

    })

});

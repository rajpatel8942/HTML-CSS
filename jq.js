$("#foot").click(function(){
    $("#ball").toggle();
})

 //slider
 $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    nav: false,
    responsive: {
    0: {
    items: 2
    },
    600: {
    items: 1
    },
    900: {
    items: 2
    },
    1000: {
    items: 3
    }
    }
    })

    //counter

    
	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


        $('#number1').jQuerySimpleCounter({end: 178,duration: 3000});
        $('#number2').jQuerySimpleCounter({end: 16,duration: 3000});
        $('#number3').jQuerySimpleCounter({end: 178,duration: 2000});
        $('#number4').jQuerySimpleCounter({end: 2600,duration: 2500});



  	/* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });

      
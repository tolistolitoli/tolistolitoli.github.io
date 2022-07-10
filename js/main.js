



$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 3) {
       	
         $('.navbar-air').fadeIn();


    } else {
    	
        $('.navbar-air').fadeOut();
    }
});





$(document).ready(function() {
	


$('.next').click(function(event) {
		var input = $('#input').val();
		var email = $('#email').val();
		if (input =='' || email == '' || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
	 	console.log('something wrong');
	 	  
			$.magnificPopup.open({
			                    items: {
			                        src: '#validation',
			                    },
			                    type: 'inline',
			                    preloader: false,
			                    modal: true,
			                    
			                });
		
		
	 } else {



			$('.shipping-info').fadeOut('slow', function() {
												
	                $('.process').fadeIn('slow', function() {

	                   

	                    progress_mac1(function() {
						
						$('#mac-progress-text').text('Verifying your shipping info');
                        
                        		
	                      		progress_mac2(function() {
	                      			$('#mac-progress-text').text('Your shipping info is valid');
	                      			
	                       
	                        		$('.process').fadeOut('slow', function() {
											
               							 $('.verify').fadeIn('slow', function() {



					                    console.log('verify');
					                   
					                });
          					 });
	                        		
	                    });


                    });
	                   
	                });
	           });
                                	


		
		
	 }
	});



});




function progress_mac1(callback) {
        var $progress_percent = 0;
        var $blue_progress = $('.g-progressbar');
        $blue_progress.css('width', '0%');
        var interval_timer = setInterval(function() {
            if ($progress_percent == 0) {
                $progress_percent = 20;
                $blue_progress.css('width', $progress_percent + '%')
            } else if ($progress_percent == 20) {
                $progress_percent = 35;
                $blue_progress.css('width', $progress_percent + '%');
            } else if ($progress_percent == 35) {
                $progress_percent = 65;
                $blue_progress.css('width', $progress_percent + '%');
            } else if ($progress_percent == 65) {
                $progress_percent = 75;
                $blue_progress.css('width', $progress_percent + '%');
            } else if ($progress_percent == 75) {
                $progress_percent = 85;
                $blue_progress.css('width', $progress_percent + '%');
            } else if ($progress_percent == 85) {
                $progress_percent = 89;
                $blue_progress.css('width', $progress_percent + '%');
            } else if ($progress_percent == 89) {
                $progress_percent = 100;
                $blue_progress.css('width', $progress_percent + '%')
            } else if ($progress_percent == 100) {
                callback();
                clearInterval(interval_timer);
            }
        }, Math.floor((Math.random() * 100) + 600));
    }



    function progress_mac2(callback) {
        var $progress_percent = 0;
        var $blue_progress = $('.g-progressbar');
        $blue_progress.css('width', '0%');
        var interval_timer = setInterval(function() {
            if ($progress_percent == 0) {
                $progress_percent = 20;
                $blue_progress.css('width', $progress_percent + '%')
            } else if ($progress_percent == 20) {
                $progress_percent = 35;
                $blue_progress.css('width', $progress_percent + '%');
            } else if ($progress_percent == 35) {
                $progress_percent = 65;
                $blue_progress.css('width', $progress_percent + '%');
            } else if ($progress_percent == 65) {
                $progress_percent = 75;
                $blue_progress.css('width', $progress_percent + '%');
            } else if ($progress_percent == 75) {
                $progress_percent = 85;
                $blue_progress.css('width', $progress_percent + '%');
            } else if ($progress_percent == 85) {
                $progress_percent = 89;
                $blue_progress.css('width', $progress_percent + '%');
            } else if ($progress_percent == 89) {
                $progress_percent = 100;
                $blue_progress.css('width', $progress_percent + '%')
            } else if ($progress_percent == 100) {
                callback();
                clearInterval(interval_timer);
            }
        }, Math.floor((Math.random() * 110) + 600));
    }
$(document).ready(function() {



	var h = $(window).height();
	    $(window).scroll(function(){
	
	        if ( ($(this).scrollTop()+h) >= $("#ex1").offset().top) {
	            $("#ex1 .post").css({visibility:"visible"});
	            $("#ex1 .post").addClass('animated bounceInLeft');
	        }
	        if ( ($(this).scrollTop()+h) >= $("#ex2").offset().top) {
	            $("#ex2 .post").css({visibility:"visible"});
	            $("#ex2 .post").addClass('animated bounceInLeft');
	        }
	        if ( ($(this).scrollTop()+h) >= $("#ex3").offset().top) {
	            $("#ex3 .post").css({visibility:"visible"});
	            $("#ex3 .post").addClass('animated bounceInLeft');
	        }
	        if ( ($(this).scrollTop()+h) >= $("#ex4").offset().top) {
	            $("#ex4 .post").css({visibility:"visible"});
	            $("#ex4 .post").addClass('animated bounceInLeft');
	        }
	        if ( ($(this).scrollTop()+h) >= $("#ex5").offset().top) {
	            $("#ex5 .post").css({visibility:"visible"});
	            $("#ex5 .post").addClass('animated bounce');
	        }
	        if ( ($(this).scrollTop()+h) >= $("#ex6").offset().top) {
	            $("#ex6 .post").css({visibility:"visible"});
	            $("#ex6 .post").addClass('animated bounceInUp');
	        }
	        if ( ($(this).scrollTop()+h) >= $("#ex7").offset().top) {
	            $("#ex7 .post").css({visibility:"visible"});
	            $("#ex7 .post").addClass('animated bounceInUp');
	        }
	        if ( ($(this).scrollTop()+h) >= $("#ex8").offset().top) {
	            $("#ex8 .post").css({visibility:"visible"});
	            $("#ex8 .post").addClass('animated rubberBand');
	        }
	        if ( ($(this).scrollTop()+h) >= $("#ex9").offset().top) {
	            $("#ex9 .post").css({visibility:"visible"});
	            $("#ex9 .post").addClass('animated fadeInDown');
	        }
   
	    });


		$(".input-2").mask("+7 (999) 999-9999");


	 $("a.listing").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });

	$(".popup1").magnificPopup();

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	function shake(div){
        var interval = 100;
        var distance = 10;
        var times = 4;

        $(div).css('position','relative');

        for(var iter=0;iter<(times+1);iter++){
            $(div).animate({
                left:((iter%2==0 ? distance : distance*-1))
            },interval);
        }//for

        $(div).animate({ left: 0},interval);

    }

    (function ($) {
        $('#form1,#form2').submit(function (e) {
            e.preventDefault();
            if ($(this).children('.input-1').val() == ''){
                shake($(this).children('.input-1'));
                return false;
            }

            if ($(this).children('.input-2').val() == ''){
                shake($(this).children('.input-2'));
                return false;
            }
            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: $(this).serialize()
            }).done(function () {
                $('.mfp-close').trigger('click');
                alertify.alert('Спасибо за заявку!');
                setTimeout(function () {
                    $('#form1,#form2').trigger('reset');
                }, 1000);
            });
            return false;
        });


        var menuHeight = $('.window-1 nav').height(),tops = $('.window-1 nav').offset(),topss = tops.top

        function fixerStop() {
            var top = $(document).scrollTop();
            if (top > topss) {
                $('.window-1 nav').css({
                    'position': 'fixed',
                    'top': 0,
                    'z-index': 9999999999,
                    'background-color': 'rgba(25, 169, 225, 1)'
                });
                return false;
            } else {
                $('.window-1 nav').css({
                    'position': 'relative',
                    'background-color': 'rgba(25, 169, 225, 0.5)'
                });
                return false;
            }
        }

        $(document).scroll(function () {
            fixerStop();
        });
        fixerStop();


    }) (jQuery);

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	$('.nav_item-link').on('click', function(e) {
		e.preventDefault();

		showSection($(this).attr('href'), true);
	});

	showSection(window.location.hash, false);

	
});




$(window).scroll(function(){
	checkSection();
});

function showSection(section, isAnimate) {
		var 
			direction = section.replace(/#/,''),
			reqSection = $('.section').filter('[data-section="' + direction + '"]'),
			reqSectionPos = reqSection.offset().top;

		if (isAnimate) {
			$('body, html').animate({scrollTop: reqSectionPos}, 500);
		}	else {
			$('body, html').scrollTop(reqSectionPos);
		}
}

function checkSection() {
	$('.section').each(function(){
		var
			$this = $(this),
			topEdge = $this.offset().top - 200,
			bottomEdge = topEdge + $this.height(),
			wScroll = $(window).scrollTop();

			if (topEdge < wScroll && bottomEdge > wScroll) {
				var 
					currentId = $this.data('section'),
					reqLink = $('.nav_item-link').filter('[href="#' + currentId + '"]');

					reqLink.closest('.nav_item').addClass('active')
						.siblings().removeClass('active');
			}
	});
}



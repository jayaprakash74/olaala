// $(document).ready(function () {
//     $('.navbar-light .dmenu').hover(function () {
//         $(this).find('.sm-menu').first().stop(true, true).slideDown(0);
//     }, function () {
//         $(this).find('.sm-menu').first().stop(true, true).slideUp(0)
//     });
// }); 
     
// $(document).ready(function() {
//     $(".megamenu").on("click", function(e) {
//         e.stopPropagation();
//     });
// });

// $(document).ready(function() {
//     $('.navbar-toggler').on('click', function(){
//         $('.navbar-collapse').collapse('hide');
//     });
// });

    
   /**
    * megamenu script
    */ 



    $(document).ready(function () {
        $('.navbar-light .dmenu').hover(function () {
                $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
            }, function () {
                $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
            });
        }); 
         
            $(document).ready(function() {
            $(".megamenu").on("click", function(e) {
                e.stopPropagation();
            });
        });
        
        

//// filter accordion
function accordion(section, heading, list) {
	$(section).each(function() {
		var that = this,
				listHeight = $(this).find(list).height();

		$(this).find(heading).click(function() {
			$(this).toggleClass('plus minus');
			$(that).find(list).slideToggle(250);
		});
	});
};

accordion('.filter-item', '.filter-item-inner-heading', '.filter-attribute-list');

// image using color
jQuery(document).ready(function() {
    jQuery('.color-choose label').on('mouseenter mouseleave', function() {
        var productid = jQuery(this).attr('data-pid');
        // var prev = $(this).closest('.product-images').children('img').find('.active');
        jQuery(this).closest('.color-choose').prop('checked', false);
        jQuery(this).closest('.product-images').children('img').removeClass('active');
        jQuery('.product-images img[data-pid = ' + productid + ']').addClass('active');
        jQuery("input").prop('checked', true);
    },function(){    
        var productid = jQuery(this).attr('for');
        jQuery(this).closest('.product-images').children('img').removeClass('active');  
        // alert(productid);
        jQuery('.product-images img[data-pid = ' + productid + ']').addClass('active');  
    });
});

$('.carousel-indicators  button').on('mouseover',function(){
    $(this).trigger('click');
});

// jQuery(document).ready(function($) {
//     var $owl=$('.owl-carousel');
//     $owl.children().each( function( index) {
//         jQuery(this).attr( 'data-position', index);
//     });
//     $owl.owlCarousel( {
//         autoplay: true, 
//         center: true, 
//         nav:true, 
//         loop: true, 
//         margin:10, 
//         // navText: ["<i class='fas fa-chevron-left prev' aria-hidden='true'></i>", "<i class='fas fa-chevron-right next' aria-hidden='true'></i>"], 
//         responsive: {
//             0: {
//                 items: 1
//             }
//             , 600: {
//                 items: 3
//             }
//             , 1000: {
//                 items: 6
//             }
//         }
//     });
//     $(document).on('click', '.item', function() {
//         $owl.trigger('to.owl.carousel', $(this).data( 'position'));
//     });

//     $(document).on('click', '.next', function() {
//         $owl.trigger('owl.next');
//     });

//     $(document).on('click', '.prev', function() {
//         $owl.trigger('owl.prev');
//     });
// });


jQuery(".owl-carousel").owlCarousel({
    autoplay: true,
    rewind: false /* use rewind if you don't want loop */,
    margin: 10,
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 3
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 3
      }
    }
});



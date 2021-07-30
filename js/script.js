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
        

/* filter accordion */
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

/* image carousel using color */
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


/** owl Carousel */
jQuery(".owl-carousel").owlCarousel({
    autoplay: true,
    rewind: false,
    margin: 10,
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
      480 : {
        items: 2
      },
      768: {
        items: 3
      },
  
      1024: {
        items: 6
      }
    }
});



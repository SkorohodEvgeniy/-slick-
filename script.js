  $('#js-testimonials-slider').on('setPosition', function () {	
  console.log("ddd");
    $(this).find('.testimonials__item').height('auto');		      
    var slickTrack = $(this).find('.slick-track');		      
    var slickTrackHeight = $(slickTrack).height();		      
    $(this).find('.testimonials__item').css('height', slickTrackHeight + 'px');		      
  });	

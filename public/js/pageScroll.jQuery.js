/*
*
* Plugin Name : PageScroll jQuery Plugin
* Author : Ankit Pokhrel
* Website : http://ankitpokhrel.com.np
* Version : 1.0
* Date: October 26, 2012
*
*/

(function( $ ) {
  $.pageScroll = function() {
  		   
	   var numPages = $(".page");
	   numPages.each(function(i){
			$(this).addClass("page" + i);
	   });
	   
	   var total = numPages.length; // total number of pages to animate	   
	   var windowHeight = $(window).height(); // height of the browser window
	   var pageHeight = $(document).height(); // total height of page
	   var avgPageHeight = pageHeight / total; // calculate average page height
	   
	   if(avgPageHeight < windowHeight) // if average page height is less than browser height
		$('.page').css({
			'height': windowHeight + 100 // create some gap for scrolling			
		});		
	   
	   $('body').children().wrapAll("<div id='apPageWrapper'>"); // outer wrapper
	    			   
	   $("div.page:first").addClass('current'); // currently display first element
	   $("div.page:not(:first)").hide(); // hide all other but first
	
	   var tempScrolled = 0, scrolled = 0; // used to determine if user is scrolling down or up
	   var currentIndex = 0, nextIndex = 1; // current selected page and next page to select
	   
	   $(window).scroll(function(){
		scrolled = $(window).scrollTop(); // calculate the scrolled part
		
		if(tempScrolled < scrolled){ // scrolling down
			
			var now = $(".current");						
			nextIndex = (currentIndex < (total - 1)) ? (currentIndex + 1) : 0;
						
			if($(window).scrollTop() + $(window).height() >= $(document).height()){ //if user scrolls to bottom
				
				now.toggleClass('current'); // current page changed
				now.slideUp(1000, function(){ // slideUp old page
					//load new page
					numPages.eq(nextIndex).stop(true, false).fadeIn(500).toggleClass('current');					
					$(window).scrollTop(0);				
					currentIndex = nextIndex;					
				});							
			}
		} 
		
		tempScrolled = scrolled;
		
	   });	   	 
	   
	   $(window).resize(function(){
		// update variables
		windowHeight = $(window).height(); // height of the browser window
	    pageHeight = $(document).height(); // total height of page
	    avgPageHeight = pageHeight / total; // calculate average page height
	   
	    if(avgPageHeight < windowHeight) // if average page height is less than browser height
			$('.page').css({
				'height': windowHeight + 100 // create some gap for scrolling				
			});			
	   });
	
	};
})( jQuery );    
(function($) {
    var element = $('div.timeline');
    var originalY = element.offset().top;
    // Space between element and top of screen (when scrolling)
    var topMargin = 20;
    // Should probably be set in CSS; but here just for emphasis
    element.css('position', 'relative');

    $(window).on('scroll', function(event) {
	for(var i=1;i<=6;i++){
	    $('ul.timeline li:nth-child('+i+') .leftlabel').css('background-color','#FFFFFF');
	}

	for(var i=1;i<=6;i++){
	    if(i == 6 || $('#'+(i+1)).offset()['top'] > $(window).scrollTop()){
		$('ul.timeline li:nth-child('+i+') .leftlabel').css('background-color','#ffe301');
		break;
	    }
	}

        var scrollTop = $(window).scrollTop();
        element.stop(false, false).animate({
            top: scrollTop < originalY
                    ? 0
                    : scrollTop - originalY + topMargin
        }, 500);
    });
})(jQuery);

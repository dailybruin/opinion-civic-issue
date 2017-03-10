var years = ['1781','1850','1881_1','1881_2','1896','1910',/*'1911',
             '1913',*/'1915','1919','1924','1928','1929','1932','1940',
            '1944','1946'/*,'1955'*/,'1957'/*,'1958','1960','1962'*/,'1965','1973',
            /*'1975',*/'1984_1','1984_2','1990_1','1990_2','1992','1994',
            '2005'/*,'2006'*/,'2013'/*,'2017'*/];
(function() {
    var element = $('div.timeline');
    var originalY = element.offset().top;
    // Space between element and top of screen (when scrolling)
    var topMargin = 20;
    // Should probably be set in CSS; but here just for emphasis
    element.css('position', 'relative');

    var scrollHandler = function(event) {
	if($(this).scrollTop() > $('.container').offset()['top']){
	    $('#mapid').css('visibility','hidden');
	}
	else{
	    $('#mapid').css('visibility','visible');
	}
	for(var i=1;i<=years.length+1;i++){
	    $('ul.timeline li:nth-child('+i+') .leftlabel').css('background-color','#FFFFFF');
	}
	var eventOffset = 0;
	for(var i=1;i<=years.length;i++){
	    if(i == years.length || $('#'+years[i]).offset()['top']-3 >= $(window).scrollTop()){
		      $('ul.timeline li:nth-child('+(i+1)+') .leftlabel').css('background-color','#ffe301');
            if(i>years.length){
              eventOffset=$('ul.timeline li:nth-child('+(i+1)+')').position()['top']-$(window).height()/1.5;
            }
		        else if(i > 3)
		          eventOffset = $('ul.timeline li:nth-child('+(i+1)+')').position()['top']-$(window).height()/2;
		      break;
	    }
	}

        var scrollTop = $(window).scrollTop();
        element.stop(false, false).animate({
            top: scrollTop < originalY
                    ? 0
                    : scrollTop - originalY - eventOffset + topMargin
        }, 500);
    };

    $(window).resize(function(){
	originalY = element.offset().top-parseInt(element.css('top'),10);
	scrollHandler();
    });

    $(window).on('scroll', scrollHandler);
})();

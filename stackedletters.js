/**
 * Stacked Letters
 * A simple jQuery plugin that stacks letters on top of each other
 * 
 * @author Charanjit Chana
 * @link http://stackedletters.charanj.it
 * @version 0.2
 */
(function($) {
	$.fn.stackedLetters = function(options) {
		var settings = $.extend( {
		  'direction': 'right-to-left'
		}, options);
		return this.each(function() {
			var $this = $(this);
			var content = $this.text(),
				newString = '';
			for(var i = 0; i < content.length; i++) {
				if(content[i] != ' ') {
			        newString += '<span>' + content[i] + '</span>';
				} else {
					newString += ' ';
				}
			}
			$this.html(newString);
			var allSpans = $('span', $this),
			    allSpansSize = allSpans.size();
			if(settings.direction != 'right-to-left') {
			    allSpans.css('position', 'relative');
			    if(settings.direction != 'staggered') {
                    allSpans.each(function(i) {
    			        $(this).css('z-index', allSpansSize - i);
    			    });
    			} else {
    			    allSpans.each(function(i) {
                        $(this).css('z-index', i%2);
                    });
    			}
			}
			
		});
	};
})(jQuery);
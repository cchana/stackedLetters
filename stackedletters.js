/**
 * Stacked Letters
 * A simple jQuery plugin that stacks letters on top of each other
 * 
 * @author Charanjit Chana
 * @link http://stackedletters.charanj.it
 * @version 0.1
 */
(function( $ ) {
	$.fn.stackedLetters = function(options) {
		var settings = $.extend( {
		  'letter-spacing': '-0.1em',
		  'text-shadow' : '0 0 3px black'
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
			$this.html(newString).css(settings);
		});
	};
})( jQuery );
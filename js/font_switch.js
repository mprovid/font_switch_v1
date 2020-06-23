$(function() {
	
	
		// ***** dyslexia font selector v1
		// dyslexia read cookie, set id
	if ( $.cookie('standardfont') === 'dyslexia_woff')  {
		$('body').attr('id', 'dyslexiafont');
		$('#dyslexiafontbtn').text('use default font');
	}
	else if ( $.cookie('standardfont') === 'default')  {
		$('body').attr('id', 'default');
		$('#dyslexiafontbtn').text('use dyslexia friendly font');
	}
	else  {
		$('body').attr('id', 'default');
		$('#dyslexiafontbtn').text('use dyslexia friendly font');
	}
		// dyslexia button, set cookie
	$("#dyslexiafontbtn").on('click', function() {
		if ( $('body').attr('id') == 'default') {
				$('body').attr('id', 'dyslexiafont');
				$('#dyslexiafontbtn').text('use default font');
				$.cookie('standardfont', 'dyslexia_woff', { expires: 1, path: '/' });
		}
		else if ( $('body').attr('id') == 'dyslexiafont')  {
				$('body').attr('id', 'default');
				$('#dyslexiafontbtn').text('use dyslexia friendly font');
				$.cookie('standardfont', 'default', { expires: 1, path: '/' });
		}
	});
	
	
});


"use strict";

$(document).ready(function() {

	// hides a ninja
	$('img').click(function() {
		$(this).fadeOut(500);
	});

	// shows all the ninjas
	$('.button').click(function() {
		$('img').show();
	});
});
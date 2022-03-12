$(document).ready(function() {

	// Adding a "JavaScript is Enabled" Body Class

	$("body").addClass("js");

	// Podcast Player Controls

	$("#question-and-ans ul article .show-more-button a").click(function(event) {
		$(this).parent().parent().addClass("expanded");
		event.preventDefault();
	});

})
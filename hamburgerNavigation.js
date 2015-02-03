$(document).ready(function(){
	$(".hidingNav").hide();

	$("#myLink").click(function(){
		$(".hidingNav").slideToggle('slow');
	});

});
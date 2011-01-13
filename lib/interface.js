$(document).ready(function(){
	
	$('#list li').click(function(){
		window.location = "http://domai.nr/api/register?domain="+$(this).text();
	});
	
});
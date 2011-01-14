$(document).ready(function(){
	
	$('#list li').click(function(){
		var dmn = $(this).text();
		window.location = "http://domai.nr/api/register?domain="+dmn;
	});
	
});
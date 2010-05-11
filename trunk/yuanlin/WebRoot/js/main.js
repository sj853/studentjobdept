$(document).ready(function(){
	


$('#nav a')
	.css( {backgroundPosition: "0 0"} )
	.mouseover(function(){
		$(this).stop().animate(
			{backgroundPosition:"(-150px 0)"}, 
			{duration:300})
		})
	.mouseout(function(){
		$(this).stop().animate(
			{backgroundPosition:"(0 0)"}, 
			{duration:300})
		});
$("#nav a").each(function(index){
	$(this).click(function(){
	$("div.showContent").hide();
	
	$("#mainContent div").eq(index).animate({
		opacity:'show'
	},3000).addClass("showContent");
	
	});
});
		
$("#container").corner("20px");
});

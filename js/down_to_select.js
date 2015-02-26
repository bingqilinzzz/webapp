$(document).ready(function(){
	var set_width = $(".selector-down").width();
	$("#deadline .selector-down").find(".btn-bg").width(set_width);
	$("#deadline .selector-down-text").width(set_width - $(".selector-down").find("#triangle_down").outerWidth() - 30)
})
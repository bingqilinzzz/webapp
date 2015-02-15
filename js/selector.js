/* select from left and right */
$(document).ready(function(){
	$(".selector").each(function() {
		var total_width = $(this).width();
		$(this).find(".s-mid").width(total_width - $(this).find(".s-left").outerWidth()*2 - 0.5);
	});
})

/* add number and reduce number*/
$(document).ready(function(){
	$(".selector").each(function(){
		var num = $(this).find(".s-mid").html();
		$(this).find(".s-right").click(function(){
			$(this).prev().html(++num);
		});
		$(this).find(".s-left").click(function(){
			$(this).next().html(--num);
		});
	});
	/*$(".s-right").click(function() {
		var num = $(this).prev().html();
		num++;
		$(this).prev().html(num);
	});*/
})





/* down to select */
/*
$(document).ready(function(){
	var set_width = $("#trades .selector").width();
	$("#deadline_and_price .selector-down").find(".btn-bg").width(set_width);
	$("#deadline_and_price .selector-down-text").width(set_width - $("#trades .selector").find(".s-left").outerWidth() - 1)
})
*/




/* buy and sell  */
$(document).ready(function(){
	$(".trades-right div").on("click",function(){
		$(".trades-right div").each(function(){
			$(this).removeClass("btn-bg");
			$(this).removeClass("btn-trade-bg");
		});
		$(this).addClass("btn-trade-bg");
		$(this).prev().addClass("btn-bg");
		$(this).next().addClass("btn-bg");
	})
})

$(document).ready(function(){
	$(".price-right div").on("click",function(){
		$(".price-right div").each(function(){
			$(this).removeClass("btn-bg");
			$(this).removeClass("btn-trade-bg");
		});
		$(this).addClass("btn-trade-bg");
		$(this).prev().addClass("btn-bg");
		$(this).next().addClass("btn-bg");
	})
})


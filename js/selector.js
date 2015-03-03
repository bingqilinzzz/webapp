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


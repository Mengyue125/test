// JavaScript Document
$(function(){
	var index = 0;
	function auto(){
		if(index == -1){
			index = $("video").length - 1;
		}else if(index == $("video").length){
			index = 0;
		}
		var left = $("video").outerWidth(true) * index;
		$("#videoList").animate({
			left:-left
		})
		
		$("#videoList video").each(function(){
			this.pause();
		})
		
		$("#videoList video").eq(index)[0].play();
		change()
	}
	
	$("#videoList video").each(function(){
		$(this).on('ended',function(){
			index++
			auto();
		})
	})
	
	$(".left_right span").click(function(){
		if($(".left_right span").index(this) == 0){
			index--
		}else{
			index++
		}
		auto();
	})
	
	function change(){
		$(".squar span").eq(index).css("background","white").siblings().css("background","none")
	}
	
	$(".squar span").click(function(){
		index = $(".squar span").index(this)
		auto();
	})
	$("#Sources_box div").hover(function(){
		$(this).toggleClass("source")
		$(this).children("img").eq(1).toggleClass("current")	
	})
	
	$(document).scroll(function(){
		if($(document).scrollTop()>= 500){
			$(".returnTop img").addClass("current")
		}else{
			$(".returnTop img").removeClass("current")
		}
	})
	
	$(".top").click(function(){
		$("body,html").animate({
			scrollTop:0
		},"slow")
	})
})
//плавное перемещение к блоку с заданным id
function toBlock(block, handler){
	$('html, body').animate({scrollTop: $("#"+block).offset().top-40}, 400, handler);
}
$(document).ready(function(){
	if(document.getElementById('slider-m2')){
		var slider_m=$('#slider-m2 .slides').lightSlider({
				item:1,
				mode:'fade',
				auto:false,
				loop:true,
				pause:4000,
				speed:800,
				slideMargin:0,
				controls:false,
				pager:false
			});
		$('#slider-m2 .prev').click(function(e){
			slider_m.goToPrevSlide();
		});
		$('#slider-m2 .next').click(function(e){
			slider_m.goToNextSlide();
		});
	}
	if(document.getElementById('slider-c')){
		var slider_c=$('#slider-c .slides').lightSlider({
			item:2,
			auto:false,
			loop:false,
			slideMargin:55,
			controls:false,
			pager:false
		});
		$('#slider-c .prev').click(function(e){
			slider_c.goToPrevSlide();
		});
		$('#slider-c .next').click(function(e){
			slider_c.goToNextSlide();
		});
	}
	if(document.getElementById('slider-s')){
		var slider_s=$('#slider-s .slides').lightSlider({
			item:3,
			auto:false,
			loop:false,
			slideMargin:12,
			controls:false,
			pager:false
		});
		$('#slider-s .prev').click(function(e){
			slider_s.goToPrevSlide();
		});
		$('#slider-s .next').click(function(e){
			slider_s.goToNextSlide();
		});
	}
	if(document.getElementById('slider-ac')){
		var slider_ac=$('#slider-ac .slides').lightSlider({
			item:4,
			auto:false,
			loop:false,
			slideMargin:57,
			controls:false,
			pager:false
		});
		$('#slider-ac .prev').click(function(e){
			slider_ac.goToPrevSlide();
		});
		$('#slider-ac .next').click(function(e){
			slider_ac.goToNextSlide();
		});
	}

	if(document.getElementById('slider-r')){
		var slider_r=$('#slider-r .slides').lightSlider({
				item:1,
				mode:'fade',
				auto:true,
				loop:true,
				pause:4000,
				speed:2000,
				slideMargin:0,
				controls:false,
				pager:false
			});
		$('#slider-r .prev').click(function(e){
			slider_r.goToPrevSlide();
		});
		$('#slider-r .next').click(function(e){
			slider_r.goToNextSlide();
		});
	}
	if(document.getElementById('slider-t')){
		var slider_t=$('#slider-t .slides').lightSlider({
				item:1,
				mode:'fade',
				auto:false,
				loop:true,
				speed:2000,
				slideMargin:0,
				controls:false,
				gallery:true,
				thumbItem:3,
				thumbMargin:30,
				enableDrag:true,
				galleryMargin:27
			});
		$('#slider-t .prev').click(function(e){
			slider_t.goToPrevSlide();
		});
		$('#slider-t .next').click(function(e){
			slider_t.goToNextSlide();
		});
	}
	if(document.getElementById('slider-g')){
		slider_g = $('#slider-g').flipster({
			style:'carousel',
			enableNavButtons:true,
			loop:true
		});
		$('#slider-g .prev').click(function(e){
			$('#slider-g .flipto-prev').click();
		});
		$('#slider-g .next').click(function(e){
			$('#slider-g .flipto-next').click();
		});		
		
	}
	/*инициализация yandex карты*/
	if(document.getElementById('map'))
	ymaps.ready(function() {
		var center = [37.681827,55.901093];
		var shift = [center[0]-0.0035, center[1]+0.0015];
		var map = new ymaps.Map('map', {'center':center , 'zoom': 15, 'type': 'yandex#map'});
		map.controls.add('zoomControl');
		var myPlacemark = new ymaps.Placemark(center,{
				hintContent:'новыетеплицы.рф'
		},{
				iconImageHref: 'design/map_marker.png',
				iconImageSize: [34, 47],
				iconImageOffset: [-17, -47],
			});
		// Добавляем метку на карту
		map.geoObjects.add(myPlacemark);
	});		
});
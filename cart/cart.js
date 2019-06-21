function up_down(btn, val, name, parent_c, min, max, postfix){
	var c;
	var field;
	var fields;
	var parent;
	var i;
	if(!name){	
		name = 'count';
	}
	
	parent = btn.parentNode;
	if(parent_c){
		i = 0;
		while(!parent.classList.contains(parent_c)&&i<100){
			i++;
			parent = parent.parentNode;
		}
	}
	fields = parent.getElementsByTagName('input');
	i = 0;
	while(i<fields.length&&fields[i].name != name){
		i++;
		console.log(fields[i].name);
	}
	if(i == fields.length){
		return false;
	}
	if(!postfix)
		postfix = "";
	field = fields[i];
	c = parseInt(field.value);
	c += val;
	if(min!=undefined&&min!=null && c < min){
		c = min;
	}else if(max && c > max){
		c = max;
	}
	field.value = c+postfix;
}

function inputcalc(id, oper, item_price){
	var itog = 1;
	var obj = parseInt($("#tovar_count_"+id).val());

	if(isNaN(obj) || obj == '' || obj == 0) obj = 1;

	if(oper == 'increment'){
		var fl = 1;
	}else if(oper == 'decrement'){
		var fl = -1; 
	}else if(oper == 'inputchange' || oper == 'delete'){
		var fl = 0;
	}
	var tt = fl + parseInt(obj);
	if(tt<1){
		itog = 1;
	}else{
		itog = tt;
	}
	$("#tovar_count_"+id).val(itog);

	//if(oper == 'inputchange'){
		var dop = "&item_count="+itog;
	/*}else{
		var dop = "";
	}*/


	$("#summ_span_"+id).text(itog*parseInt(item_price));

	if(oper == 'delete'){
		if(!confirm('Вы уверены что хотите удалить товар из корзины?')){
			return;
		}
		$("#tr_"+id).remove();
		var ccc = $(".toCount").length;
		
		if(ccc<=0){
			$("#mini_korzina").html('<span id="korzina_cnt"></span>');
		}else{
			$("#mini_korzina").html('<span id="korzina_cnt">'+ccc+'</span>');
		}
	}

	var itogo=0;
	$(".toSumm").each(function( index ) {
		itogo += parseInt($(this).text());
	});

	$("#itogocart").text(itogo);


	var coo = $.cookie("personal_cart_new");
	$.ajax({
		type: "GET",
		url: "/cart/cart.php",
		data: "item_id="+id+"&item_price="+item_price+"&operation="+oper+dop+"&coo="+coo,
		success: function(msg){
			//alert('Выполенo ' + msg);
			//console.log('oloo:'+msg);
			$.cookie("personal_cart_new", "", { expires : 365,  path : '/' });
			$.cookie("personal_cart_new", msg, { expires : 365,  path : '/' });
		}
	});

	
}

function declOfNum(number, titles){
	cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function addToCart(id, price, parameter){
	var count = parseInt($("#count_item"+id).val());
	var cur_cnt = parseInt($("#korzina_cnt").text());
	var countitem = parseInt(document.getElementById(parameter).value);
	if(!countitem) countitem = parseInt(document.getElementById(parameter).innerHTML);
	//alert('Ложим: '+countitem);
	var cart_co = parseInt(document.getElementById('korzina_cnt').innerHTML);
	if(!cart_co) cart_co = 0;
	//alert('В корзине: '+cart_co);
	cart_co = parseInt(cart_co) + parseInt(countitem);

	var txt = declOfNum(parseInt(cart_co), [' товар', ' товара', ' товаров']);
	var coo = $.cookie("personal_cart_new");
	$.ajax({
		type: "GET",
		url: "/cart/cart.php",
		data: "item_id="+id+"&item_price="+price+"&countitem="+countitem+"&item_count="+countitem+"&operation=simpleAdd"+"&coo="+coo,
		success: function(msg){
			alert('Товар добавлен в корзину!');
			$("#mini_korzina").html('<span id="korzina_cnt">'+parseInt(cart_co)+'</span>');		
			$.cookie("personal_cart_new", "", { expires : 365,  path : '/' });
			$.cookie("personal_cart_new", msg, { expires : 365,  path : '/' });
		}
	});
}


function loginback(){
	var phone = document.getElementById('login_phone').value;
	$.ajax({
		type: "GET",
		url: "/editor/system/library.php",
		data: "phone="+phone+"&action=1",
		success: function(msg){
			document.getElementById('loph').style.display = 'none';
			document.getElementById('lopw').style.display = 'block';
		}
	});
}


$(document).ready(function(){
	
	if(document.getElementById('tb-goods')){
		$('#tb-goods .up').click(function(e){up_down(this,1,null,'allocate', 1, 100, '');});
		$('#tb-goods .down').click(function(e){up_down(this,-1,null,'allocate', 1, 100, '')});
	}
	
	if(document.getElementById('kompl')){
		$('#kompl .up').click(function(e){up_down(this,1,null,'allocate', 1, 100, '');});
		$('#kompl .down').click(function(e){up_down(this,-1,null,'allocate', 1, 100, '')});
	}
	
	$(".tel").mask("+7 (999) 999-99-99");
	
});
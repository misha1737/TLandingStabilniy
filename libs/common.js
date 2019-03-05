


		//Калькулятор принятия решения
		function CalcDecesion()
		{

			var suma = $("#slider-value-1").val(), // сума
				srok = document.getElementById("slider-value-2").innerHTML,
				grivnya = document.getElementById("grivnya").checked, 
				dolar = document.getElementById("dolar").checked,	
				euro = document.getElementById("euro").checked,
				kinciSrocu = document.getElementById("kinciSrocu").checked,
				chomisyatsa = document.getElementById("chomisyatsa").checked,
				result = 0;	
			
				
					if($("#kinciSrocu").hasClass("checked")){
						if (grivnya){
								$("#valutaText").html( "Грн." );
						if (srok==0){
							result=0;
						}
						if (srok==1){
							result=(suma*0.1425/12);
						}
						if (srok==2){
							result=(suma*0.16/12)*3;
						}
						if (srok==3){
							result=(suma*0.17/12)*6;
						}
						if (srok==4){
							result=(suma*0.175/12)*12;
						}
						result=parseFloat(suma)+parseFloat(result);
							//console.log(srok)
						result=parseFloat(result).toFixed(2);
						document.getElementById('decision_percent').innerHTML = ""+result+ " грн.";
						document.getElementById('comentUcr').innerHTML ="В калькуляторі зазначено прогнозний дохід з урахуванням максимального бонусу 2% до оподаткування.";
						}

						if (dolar){
							$("#valutaText").html( "$" );
						if (srok==0){
							result=0;
						}
						if (srok==1){
							result=(suma*0.0125/12);
						}
						if (srok==2){
							result=(suma*0.0275/12)*3;
						}
						if (srok==3){
							result=(suma*0.035/12)*6;
						}
						if (srok==4){
							result=(suma*0.04/12)*12;
						}
						result=parseFloat(suma)+parseFloat(result);
							//console.log(srok)
						result=parseFloat(result).toFixed(2);
						document.getElementById('decision_percent').innerHTML = ""+result+ " $";
						document.getElementById('comentUcr').innerHTML ="Прогнозний розрахунок вашого доходу за депозитом Стабільний до оподаткування.";
						}

						if (euro){
							$("#valutaText").html( "€" );
						if (srok==0){
							result=0;
						}
						if (srok==1){
							result=(suma*0.005/12);
						}
						if (srok==2){
							result=(suma*0.015/12)*3;
						}
						if (srok==3){
							result=(suma*0.015/12)*6;
						}
						if (srok==4){
							result=(suma*0.025/12)*12;
						}
						result=parseFloat(suma)+parseFloat(result);
							//console.log(srok)
						result=parseFloat(result).toFixed(2);
						document.getElementById('decision_percent').innerHTML = ""+result+ " €";
						document.getElementById('comentUcr').innerHTML ="Прогнозний розрахунок вашого доходу за депозитом Стабільний до оподаткування.";
						}
					}

					if($("#chomisyatsa").hasClass("checked")){
						if (grivnya){
								$("#valutaText").html( "Грн." );
						if (srok==0){
							result=0;
						}
						if (srok==1){
							result=(suma*0.1425/12);
						}
						if (srok==2){
							result=(suma*0.155/12)*3;
						}
						if (srok==3){
							result=(suma*0.165/12)*6;
						}
						if (srok==4){
							result=(suma*0.17/12)*12;
						}
						result=parseFloat(suma)+parseFloat(result);
							//console.log(srok)
						result=parseFloat(result).toFixed(2);
						document.getElementById('decision_percent').innerHTML = ""+result+ " грн.";
						document.getElementById('comentUcr').innerHTML ="В калькуляторі зазначено прогнозний дохід з урахуванням максимального бонусу 2% до оподаткування.";
						}

						if (dolar){
							$("#valutaText").html( "$" );
						if (srok==0){
							result=0;
						}
						if (srok==1){
							result=(suma*0.0125/12);
						}
						if (srok==2){
							result=(suma*0.025/12)*3;
						}
						if (srok==3){
							result=(suma*0.0325/12)*6;
						}
						if (srok==4){
							result=(suma*0.0375/12)*12;
						}
						result=parseFloat(suma)+parseFloat(result);
							//console.log(srok)
						result=parseFloat(result).toFixed(2);
						document.getElementById('decision_percent').innerHTML = ""+result+ " $";
						document.getElementById('comentUcr').innerHTML ="Прогнозний розрахунок вашого доходу за депозитом Стабільний до оподаткування.";
						}

						if (euro){
							$("#valutaText").html( "€" );
						if (srok==0){
							result=0;
						}
						if (srok==1){
							result=(suma*0.005/12);
						}
						if (srok==2){
							result=(suma*0.0125/12)*3;
						}
						if (srok==3){
							result=(suma*0.0125/12)*6;
						}
						if (srok==4){
							result=(suma*0.0225/12)*12;
						}
						result=parseFloat(suma)+parseFloat(result);
							//console.log(srok)
						result=parseFloat(result).toFixed(2);
						document.getElementById('decision_percent').innerHTML = ""+result+ " €";
						document.getElementById('comentUcr').innerHTML ="Прогнозний розрахунок вашого доходу за депозитом Стабільний до оподаткування.";
						}
					}


		}


		jQuery(document).ready(function($) {

$('#dzvinok #submit').click(function(){

	$('#dzvinok #submit').attr('disabled',true);
	$('#dzvinok form').css('opacity','0.5');
	 var formData = {
           
    
        };
        console.log(formData);
		$.ajax({
		    type: "POST",
		    url: "contact-form.php",
		    data: { 
		         name:$("#dzvinok #name").val(),
      				tel:$("#dzvinok #tel").val()
		    },
		    success: function(msg) {
		    	$('#dzvinok form').css('opacity','1');
		    	$('#dzvinok #submit').removeAttr('disabled');
		       // var data = JSON.parse(msg);
		       // alert(data.Message);
		       var form=$("#contactForm").html();
		       $("#contactForm .otvet").remove();
		       $("#contactForm").append( "<div class='otvet'>"+msg+"</div>" );
		      if($("#contactForm .otvet code").text()=="0"){
		      	console.log("ura");
		      	$("#contactForm").html("<img width='100%' src='images/window.png'>");
		      };
		       var result=$("#contactForm .otvet result message_en").html();
		       $("#contactForm .otvet").html(result);
		      // $("#contactForm .otvet code").remove();
		       // $("#contactForm .otvet depo_id").remove();
		    //   console.log(form);
		    },
		     error: function (jqXHR, exception){ 

              alert(jqXHR);
       			return false; }
		});


})


				

$("#kinciSrocuButton").click(function() {

	$("#chomisyatsa").removeClass("checked");
	$("#kinciSrocu").addClass("checked")
	$("#chomisyatsaButton").css("color","#16225f");
		$("#kinciSrocuButton").css("color","#b31f35");
 CalcDecesion();
});
$("#chomisyatsaButton").click(function() {

	$("#kinciSrocu").removeClass("checked");
		$("#chomisyatsa").addClass("checked")
	
		$("#chomisyatsaButton").css("color","#b31f35");
	$("#kinciSrocuButton").css("color","#16225f");
CalcDecesion();

});
			//Плавный переход к якорю
			$('a[href^="#"]').click(function(){
				var target = $(this).attr('href');
				$('html, body').animate({scrollTop: $(target).offset().top-120}, 600);
				return false;
			});

			//Маски полей
			$('#phone').click(function(){
				$('#phone').focus();
			});
			$("#phone").mask("9999999999",{autoclear: false});
			$('#inn').click(function(){
				$('#inn').focus();
			});
			$("#inn").mask("9999999999",{autoclear: false});
			$('#date_birth').click(function(){
				$('#date_birth').focus();
			});
			$("#date_birth").mask("99.99.9999",{autoclear: false});

			//Закрытие модального окна
			$('.close_m').click(function(){
				$.fancybox.close();
			});

			//Слайдер
			$('.unislider').unslider({
				infinite: true,
				autoplay: true,
				nav: false
			});

			//Внешний вид select
			

			//Ползунки
			$( "#ui-slider-1" ).slider({
				value : 12000,
				min : 0,
				max : 100000,
				step : 100,
				create: function( event, ui ) {
					val = $( "#ui-slider-1" ).slider("value");
						$( "#slider-value-1" ).html( val );
					},
            	slide: function( event, ui ) {
					$( "#slider-value-1" ).val( ui.value );
             	}
        	});
			$( "#ui-slider-2" ).slider({
				value : 0,
				min : 0,
				max : 4,
				step : 1,
				create: function( event, ui ) {
					val = $( "#ui-slider-2" ).slider("value");
						$( "#slider-value-2" ).html( val );
					},
            	slide: function( event, ui ) {
					$( "#slider-value-2" ).html( ui.value );
					if (ui.value=="0"){
					$( "#value-month" ).html( "0 місяців" );
					}
					if (ui.value=="1"){
					$( "#value-month" ).html( "1 місяць" );
					}
					if (ui.value=="2"){
					$( "#value-month" ).html( "3 місяці" );
					}
					if (ui.value=="3"){
					$( "#value-month" ).html( "6 місяців" );
					}
					if (ui.value=="4"){
					$( "#value-month" ).html( "12 місяців" );
					}



             	}
        	});



		
		
		});


			//Переход к форме
			

		//Игровой барабан
		

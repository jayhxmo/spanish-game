// validate.js
var points = 0;
function validate(input) {
	getAnswer();
	// console.log("Input: " + $(input).val() + " =?= " + theAnswer + " is " + ($(input).val() == theAnswer));
	if ($(input).val() == theAnswer) {
	// if ($(input).val() == "") {
		$('.button--accept[data-stack = stack_buana]').click();
		points += 100;
	}

	else {
		$('.button--reject[data-stack = stack_buana]').click();
		points -= 10;
	}

	if (!isGameOver()) resetTime();
	$(input).val("");
	$(input).focus();
	$('.score').text(points + " PTS");
	if (points < 0) {
		$('.score').addClass("negativeRed");
	}

	else {
		$('.score').removeClass("negativeRed");	
	}

	var visibleCount = 0;
	$('.stack__item').each(function(i, obj) {
		if ($(this).css('opacity') != 0) {
			visibleCount++;
		}
	});
	
	if (visibleCount == 1) {
		gameOver();
		stopTime();
	}
}

var isOver = false;
function gameOver() {
	stopTime();
	isOver = true;

	if (points < 100) {
		swal({
			title: "Juego Terminado",
			text: "Muy mal. Necesita estudiar. Tus puntos: " + points,
			html: true,
			type: "error",
			confirmButtonText: "aprender",
			closeOnConfirm: true
		},
		function(){
			setTimeout(function(){ 
				$('.play').addClass('display-none');
				$('.learn').removeClass('visible-none');
		    }, 175);  
		    
			$('.play').addClass('visible-none');
			$('.learn').removeClass('display-none');
		});
	}

	else if (points < 500) {
		swal({
			title: "Juego Terminado",
			text: "Bien. Tus puntos:  " + points,
			html: true,
			confirmButtonText: "estudiar",
			closeOnConfirm: true
		},
		function(){
			setTimeout(function(){ 
				$('.play').addClass('display-none');
				$('.learn').removeClass('visible-none');
		    }, 175);  
		    
			$('.play').addClass('visible-none');
			$('.learn').removeClass('display-none');
		});
	}

	else {
		swal({
			title: "Juego Terminado",
			text: "MUY BIEN. Tus puntos:  " + points,
			html: true,
			type: "success",
			confirmButtonText: "felicidades",
			closeOnConfirm: true
		},
		function(){
			setTimeout(function(){ 
				$('.play').addClass('display-none');
				$('.learn').removeClass('visible-none');
		    }, 175);  
		    
			$('.play').addClass('visible-none');
			$('.learn').removeClass('display-none');
		});
	}
}

function isGameOver() {
	return isOver;
}
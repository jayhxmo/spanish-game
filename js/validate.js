// validate.js
var points = 0;
function validate(input) {
	getAnswer();
	console.log("Input: " + $(input).val() + " =?= " + theAnswer + " is " + ($(input).val() == theAnswer));
	if ($(input).val() == theAnswer) {
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
}

var isOver = false;
function gameOver() {
	stopTime();
	isOver = true;
	if (points < 100) {
		swal({
			title: "Juego Terminado",
			text: "You did a terrible job with a score of " + points + "<br><br><button class=\"confirm\" onclick=\"alert(\"thisshouldtakeyoutolearnpage\")\">Learn More</button>",
			html: true,
			type: "error",
			showConfirmButton: false
		});
	}
}

function isGameOver() {
	return isOver;
}
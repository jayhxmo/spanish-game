// validate.js
var cardCount = 10;

var points = 0;
function validate(input) {
	if ($(input).val() == "answer") {
		console.log("answer");
		$('.button--accept[data-stack = stack_buana]').click();
		points += 100;
	}

	else {
		console.log("wrong!");
		$('.button--reject[data-stack = stack_buana]').click();
		points -= 10;
	}

	cardCount--;
	if (cardCount == 0) gameOver();
	resetTime();
	$(input).val("");
	$(input).focus();
	$('.score').text(points + " PTS");
	if (points < 0) {
		$('.score').addClass("negativeRed");
	}
}

function gameOver() {
	clearInterval(timerVar);
}
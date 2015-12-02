// Timer.js

var timerVar = setInterval(countDown, 1000);
var time = 10;

function countDown() {
	time--;
	$('.timer').text(time);

	if (time == 0) {
		$('.button--reject[data-stack = stack_buana]').click();
		resetTime();
	}
}

function resetTime() {
	time = 10;
	$('.timer').text(time);
	clearInterval(timerVar);
	timerVar = setInterval(countDown, 1000);
}

function getScore() {
	return time * 100;
}
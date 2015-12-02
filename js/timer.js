// Timer.js

var timerVar = setInterval(countDown, 1000);
var time = 10;

function countDown() {
	time--;
	$('.timer').text(time);

	if (time == 0) {
		$('.button--reject[data-stack = stack_buana]').click();
		if (!isGameOver()) resetTime();
	}
}

function resetTime() {
	time = 10;
	$('.timer').text(time);
	stopTime();
	timerVar = setInterval(countDown, 1000);
}

function getScore() {
	return time * 100;
}

function stopTime() {
	clearInterval(timerVar);
}
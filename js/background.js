fade(1);
function fade(index) {
	$(".background").removeClass("color-" + (index - 1) % 10);
	$(".background").addClass("color-" + index  % 10);

	window.setTimeout(function () {
    	fade(index + 1);
	}, 2000);
}
fade(1);
function fade(index) {
	$(".introduction").removeClass("color-" + (index - 1) % 10);
	$(".introduction").addClass("color-" + index  % 10);

	window.setTimeout(function () {
    	fade(index + 1);
	}, 1500);
}
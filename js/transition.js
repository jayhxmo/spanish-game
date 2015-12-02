// Transition.js
function moveFromTo(from, to) {
	setTimeout(function(){ 
		$(from).addClass('display-none');
		$(to).removeClass('visible-none');
    }, 175);  
    
	$(from).addClass('visible-none');
	$(to).removeClass('display-none');
}

function submitName(name) {
	$('h3.username').text($(name).val());
	console.log($(name).val());
	console.log($('h3.username').text());
	moveFromTo(".name", ".play");
	$(".answers").focus();
}
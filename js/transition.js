// Transition.js
function moveFromTo(from, to) {
	console.log("Function called from " + from + " and to " + to);
	setTimeout(function(){ 
		$(from).addClass('display-none');
		$(to).removeClass('visible-none');
    }, 175);  
    
	$(from).addClass('visible-none');
	$(to).removeClass('display-none');
}

var gameStartTime = 3;

function submitName(name) {
	$('h3.username').text($(name).val());
	moveFromTo(".name", ".play");

	loadSentences();

	swal({
		title: "Prep&aacute;rate",
		text: "<div class=\"startCircle\"><h2 id=\"startTimer\"></h2></div>",
		timer: 3000,
		html: true,
		showConfirmButton: false
	});

	$("#startTimer").text(gameStartTime);
	var gameStartTimer = setInterval(gameStartCD, 1000);

	setTimeout(function(){
		clearInterval(gameStartTimer);
		
		$(".answers").focus();
		startGame();
    }, 3000);  
}


function gameStartCD() {
	gameStartTime--;
	$("#startTimer").text(gameStartTime);
}
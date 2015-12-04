// Content.js

var prompts = [
	"Yo he le&iacute;do muchos libros, _______ Don Quijote ayer.",
	"&iquest;_______ el cap&iacute;tulo del libro de qu&iacute;mica?",
	"Estoy en el club de libros; en la semana pasada nosotros _______ y discutimos <i>Las Aventuras de Huckleberry Finn</i>.",
	"&Eacute;l _______ Mi &Aacute;ntonia para la clase de Ingl&eacute;s",
	"&iquest;_______ vosotros el correo electr&oacute;nico que Se&ntilde;or Lynch envi&oacute;?",
	"Bob y Mar&iacute;a _______ art&iacute;culos en la red y los discutieron en la clase de historia.",

	// new verb
	"Yo _______ mi computadora con el sitio web \"pcpartpicker.com\".",
	"&iquest;_______ tu casa? &iexcl;Eres muy fuerte!",
	"Donald Trump _______ una torre con su nombre.",
	"Para un proyecto de biolog&iacute;a, Jeemin y yo _______ un videojuego con Pygame.",
	"&iquest;_______ esta mesa por vosotros mismos?",
	"Juan y Dee _______ una mesa para su casa.",
	

	// new verb
	"Yo _______ cuando jugaba f&uacute;tbol americano.",
	"T&uacute; _______ porque tropezaste con una banana.",
	"Bob _______ cuando jugaba baloncesto.",
	"Nosotros _______ en el piso porque estaba resbaladizo.",
	"&iquest;Est&aacute;is lastimados porque _______ en el hielo?",
	"Julia y Marco _______ porque ellos chocaron entre s&iacute;."
];

var answers = [
	"le\xED",
	"le\xEDste",
	"le\xEDmos",
	"ley\xF3",
	"le\xEDsteis",
	"leyeron",

	// new verb 
	"constru\xED",
	"construiste",
	"construy\xF3",
	"construimos",
	"construisteis",
	"construyeron",

	// new verb
	"ca\xED",
	"ca\xEDste",
	"cay\xF3",
	"ca\xEDmos",
	"ca\xEDsteis",
	"cayeron"
];

var questionIndex = [];

function loadSentences() {
	$('.stack__item').each(function(i, obj) {
		var sentence = getSentence();
		$(this).html("<div class=\"container\">"
							+ sentence
							+ "</div>");
	});
}

function getSentence() {
	var randomNum = parseInt(Math.random() * 10);
	if (notUsed(randomNum)) {
		questionIndex.push(randomNum);
		return prompts[randomNum];
	}

	return getSentence();
}

function notUsed(number) {
	for (previousNum in questionIndex) {
		if (questionIndex[previousNum] == number) {
			return false;
		}
	}
	return true;
}

var theAnswer = "empty";

function getAnswer() {
	var notFound = true;
	var cardNumber = 0;
	$('.stack__item').each(function(i, obj) {
		cardNumber++;
		if ($(this).css('opacity') != 0 && notFound) {
			cardNumber--;
			theAnswer = answers[questionIndex[cardNumber]];
			// console.log("Card #" + cardNumber + " & Q #" + questionIndex[cardNumber]);
			// console.log(prompts[questionIndex[cardNumber]]);
			// console.log("Answer is " + theAnswer);
			notFound = false;
			return theAnswer;
		}
	});
}
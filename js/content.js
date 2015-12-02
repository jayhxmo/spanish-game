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
	"le&iacute;",
	"le&iacute;ste",
	"le&iacute;mos",
	"ley&oacute;",
	"le&iacute;steis",
	"leyeron",

	// new verb 
	"constru&iacute;",
	"construiste",
	"construy&oacute;",
	"construimos",
	"construisteis",
	"construyeron",

	// new verb
	"ca&iacute;",
	"ca&iacute;ste",
	"cay&oacute;",
	"ca&iacute;mos",
	"ca&iacute;steis",
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

function getAnswer() {
	var cardNumber = 0;
	$('.stack__item').each(function(i, obj) {
		cardNumber++;
		if ($(this).css('opacity') != 0) {
			console.log("currently at #" + cardNumber);
			console.log("answer is " + answers[questionIndex[cardNumber]]);
			return answers[questionIndex[cardNumber]];
		}
	});
}
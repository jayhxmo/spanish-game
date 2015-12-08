// Leaderboard.js
Parse.initialize("MoRrAdiYRHSRmTcZOnwwYKAB8Yoa7qbgdDPRoY4f", "U0TUapaLDw4GG08uIto7DCeBSqThzu8DMvUwUad1");

var leaderboard = Parse.Object.extend("Leaderboard");
var query = new Parse.Query(leaderboard);

var pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8, pt9, pt10;
var n1, n2, n3, n4, n5, n6, n7, n8, n9, n10;
var objID = [
	"9iHrSFTW2F",
	"6234y9gNFz",
	"n8YmeROXuN",	
	"8zlYiOpCgG",
	"qZluFmqKze",
	"gQ2L4CC8fL",
	"vtDyTqzO3M",
	"Q28XQZ4xGi",
	"kM2ACgI0fw",
	"iWQzKHxdHQ"
];
query.get("9iHrSFTW2F", {
  success: function(results) {
  	$("#name-1").text(results.get('Name'));
  	$("#pts-1").text(results.get('Points') + " PTS");

  	n1 = results.get('Name');
  	pt1 = results.get('Points');
  },
  error: function(model, error) {}
});

query.get("6234y9gNFz", {
  success: function(results) {
  	$("#name-2").text(results.get('Name'));
  	$("#pts-2").text(results.get('Points') + " PTS");
  	
  	n2 = results.get('Name');
  	pt2 = results.get('Points');
  },
  error: function(model, error) {}
});

query.get("n8YmeROXuN", {
  success: function(results) {
  	$("#name-3").text(results.get('Name'));
  	$("#pts-3").text(results.get('Points') + " PTS");

  	n3 = results.get('Name');
  	pt3 = results.get('Points');
  },
  error: function(model, error) {}
});

query.get("8zlYiOpCgG", {
  success: function(results) {
  	$("#name-4").text(results.get('Name'));
  	$("#pts-4").text(results.get('Points') + " PTS");
  	
  	n4 = results.get('Name');
  	pt4 = results.get('Points');
  },
  error: function(model, error) {}
});

query.get("qZluFmqKze", {
  success: function(results) {
  	$("#name-5").text(results.get('Name'));
  	$("#pts-5").text(results.get('Points') + " PTS");
  	
  	n5 = results.get('Name');
  	pt5 = results.get('Points');
  },
  error: function(model, error) {}
});

query.get("gQ2L4CC8fL", {
  success: function(results) {
  	$("#name-6").text(results.get('Name'));
  	$("#pts-6").text(results.get('Points') + " PTS");

  	n6 = results.get('Name');
  	pt6 = results.get('Points');
  },
  error: function(model, error) {}
});

query.get("vtDyTqzO3M", {
  success: function(results) {
  	$("#name-7").text(results.get('Name'));
  	$("#pts-7").text(results.get('Points') + " PTS");
  	
  	n7 = results.get('Name');
  	pt7 = results.get('Points');
  },
  error: function(model, error) {}
});

query.get("Q28XQZ4xGi", {
  success: function(results) {
  	$("#name-8").text(results.get('Name'));
  	$("#pts-8").text(results.get('Points') + " PTS");

  	n8 = results.get('Name');
  	pt8 = results.get('Points');
  },
  error: function(model, error) {}
});

query.get("kM2ACgI0fw", {
  success: function(results) {
  	$("#name-9").text(results.get('Name'));
  	$("#pts-9").text(results.get('Points') + " PTS");

  	n9 = results.get('Name');
  	pt9 = results.get('Points');
  },
  error: function(model, error) {}
});

query.get("iWQzKHxdHQ", {
  success: function(results) {
  	$("#name-10").text(results.get('Name'));
  	$("#pts-10").text(results.get('Points') + " PTS");

  	n10 = results.get('Name');
  	pt10 = results.get('Points');
  },
  error: function(model, error) {}
});

function updateBoard(name, score) {
	var index = 0;
	if (score > pt1) { index = 1; }
	else if (score > pt2) { index = 2; }
	else if (score > pt3) { index = 3; }
	else if (score > pt4) { index = 4; }
	else if (score > pt5) { index = 5; }
	else if (score > pt6) { index = 6; }
	else if (score > pt7) { index = 7; }
	else if (score > pt8) { index = 8; }
	else if (score > pt9) { index = 9; }
	else if (score > pt10) { index = 10; }

	if (index == 10) {
		query.get(objID[10 - 1], {
		  success: function(results) {
		  	results.set('Name', name);
		  	results.set('Points', score);
		  	results.save();
		  },
		  error: function(model, error) {}
		});
	}

	if (index <= 9) {
		pt10 = pt9;
		n10 = n9;

		pt9 = score;
		n9 = name;
	}

	if (index <= 8) {
		pt9 = pt8;
		n9 = n8;

		pt8 = score;
		n8 = name;
	}
	// if (index == 10) {
	// 	query.get(objID[10 - 1], {
	// 	  success: function(results) {
	// 	  	results.set('Name') = name;
	// 	  	results.set('Points') = score;
	// 	  	results.save();
	// 	  },
	// 	  error: function(model, error) {}
	// 	});
	// }

	// if (index == 9) {
	// 	query.get(objID[10 - 1], {
	// 	  success: function(results) {
	// 	  	results.set('Name') = name;
	// 	  	results.set('Points') = score;
	// 	  },
	// 	  error: function(model, error) {}
	// 	});
	// }
}
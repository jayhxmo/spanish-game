// Transition.js
function moveFromTo(from, to) {
	setTimeout(function(){ 
		$(from).addClass('display-none');
		$(to).removeClass('visible-none');
    }, 175);  
    
	$(from).addClass('visible-none');
	$(to).removeClass('display-none');
}
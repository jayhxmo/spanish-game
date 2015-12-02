// cardbutton.js
(function() {
	var support = { animations : Modernizr.cssanimations },
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		onEndAnimation = function( el, callback ) {
			var onEndCallbackFn = function( ev ) {
				if( support.animations ) {
					if(ev.target != this) return;
					this.removeEventListener( animEndEventName, onEndCallbackFn);
				}
				if(callback && typeof callback === 'function') {callback.call();}
			};
			if( support.animations ) {
				el.addEventListener(animEndEventName, onEndCallbackFn);
			}
			else {
				onEndCallbackFn();
			}
		};

	function nextSibling(el) {
		var nextSibling = el.nextSibling;
		while(nextSibling && nextSibling.nodeType != 1) {
		nextSibling = nextSibling.nextSibling
		}
		return nextSibling;
	}

	var buana = new Stack(document.getElementById('stack_buana'), { 
		infinite: false
	});
		

	// controls the click ring effect on the button
	var buttonClickCallback = function(bttn) {
		var bttn = bttn || this;
		bttn.setAttribute('data-state', 'unlocked');
	};

	document.querySelector('.button--accept[data-stack = stack_buana]').addEventListener(clickeventtype, function() { buana.accept(buttonClickCallback.bind(this)); });
	document.querySelector('.button--reject[data-stack = stack_buana]').addEventListener(clickeventtype, function() { buana.reject(buttonClickCallback.bind(this)); });

	[].slice.call(document.querySelectorAll('.button--sonar')).forEach(function(bttn) {
		bttn.addEventListener(clickeventtype, function() {
			bttn.setAttribute('data-state', 'locked');
		});
	});

	[].slice.call(document.querySelectorAll('.button--material')).forEach(function(bttn) {
		var radialAction = nextSibling(bttn.parentNode);

		bttn.addEventListener(clickeventtype, function(ev) {
			var boxOffset = radialAction.parentNode.getBoundingClientRect(),
				offset = bttn.getBoundingClientRect();

			radialAction.style.left = Number(offset.left - boxOffset.left) + 'px';
			radialAction.style.top = Number(offset.top - boxOffset.top) + 'px';

			classie.add(radialAction, classie.has(bttn, 'button--reject') ? 'material-circle--reject' : 'material-circle--accept');
			classie.add(radialAction, 'material-circle--active');
			onEndAnimation(radialAction, function() {
				classie.remove(radialAction, classie.has(bttn, 'button--reject') ? 'material-circle--reject' : 'material-circle--accept');
				classie.remove(radialAction, 'material-circle--active');
			});

			// Gameover check
			var visibleCount = 0;
			$('.stack__item').each(function(i, obj) {
				if ($(this).css('opacity') != 0) {
					visibleCount++;
				}
			});
			if (visibleCount == 1) gameOver();
		});
	});
})();
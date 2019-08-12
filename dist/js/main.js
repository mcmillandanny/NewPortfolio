'use strict';

////Hamburger
var hamburger = document.querySelector('.hamburger');
var lines = document.querySelectorAll('.lines');
var nav = document.querySelector("nav");

function hamburgerToggle() {
	lines.forEach(function (line) {
		line.classList.toggle("change");
	});
};
hamburger.addEventListener("click", hamburgerToggle);

// Waypoints

var htmlBarGraph = document.querySelector('.html-bar');
var jsBarGraph = document.querySelector('.js-bar');

var waypoint = new Waypoint({
	element: htmlBarGraph,
	offset: "80%",
	handler: function handler(direction) {
		if (direction === 'down') {
			TweenMax.to(htmlBarGraph, .3, {
				width: "90%"
			});
		}
		// } else if (direction === "down") {
		// 	TweenMax.to(htmlBarGraph, .3, {
		//         width: "90%"
		// 	});
		// }
	}
});

var waypoint2 = new Waypoint({
	element: jsBarGraph,
	offset: "80%",
	handler: function handler(direction) {
		if (direction === 'down') {
			TweenMax.to(jsBarGraph, .3, {
				width: "75%"
			});
		}
		// } else if (direction === "down") {
		// 	TweenMax.to(htmlBarGraph, .3, {
		//         width: "90%"
		// 	});
		// }
	}
});
//# sourceMappingURL=main.js.map

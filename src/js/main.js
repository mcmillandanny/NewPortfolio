


////Hamburger
const hamburger = document.querySelector('.hamburger');
const lines = document.querySelectorAll('.lines');
const nav = document.querySelector("nav");

function hamburgerToggle() {
    lines.forEach(function(line) {
        line.classList.toggle("change"); 
    });
};
hamburger.addEventListener("click", hamburgerToggle);



// Waypoints

var htmlBarGraph = document.querySelector('.html-bar');
var jsBarGraph = document.querySelector('.js-bar');
var reactBarGraph = document.querySelector('.react-bar');
var wordpressBarGraph = document.querySelector('.wordpress-bar');
var vueBarGraph = document.querySelector('.vue-bar');
var gitBarGraph = document.querySelector('.git-bar');


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

var waypoint3 = new Waypoint({
	element: reactBarGraph,
	offset: "80%",
	handler: function handler(direction) {
		if (direction === 'down') {
			TweenMax.to(reactBarGraph, .3, {
                width: "65%"
            });
        }
		// } else if (direction === "down") {
		// 	TweenMax.to(htmlBarGraph, .3, {
        //         width: "90%"
		// 	});
		// }
	}
});

var waypoint4 = new Waypoint({
	element: wordpressBarGraph,
	offset: "80%",
	handler: function handler(direction) {
		if (direction === 'down') {
			TweenMax.to(wordpressBarGraph, .3, {
                width: "65%"
            });
        }
		// } else if (direction === "down") {
		// 	TweenMax.to(htmlBarGraph, .3, {
        //         width: "90%"
		// 	});
		// }
	}
});

var waypoint5 = new Waypoint({
	element: vueBarGraph,
	offset: "80%",
	handler: function handler(direction) {
		if (direction === 'down') {
			TweenMax.to(vueBarGraph, .3, {
                width: "65%"
            });
        }
		// } else if (direction === "down") {
		// 	TweenMax.to(htmlBarGraph, .3, {
        //         width: "90%"
		// 	});
		// }
	}
});

var waypoint4 = new Waypoint({
	element: gitBarGraph,
	offset: "80%",
	handler: function handler(direction) {
		if (direction === 'down') {
			TweenMax.to(gitBarGraph, .3, {
                width: "65%"
            });
        }
		// } else if (direction === "down") {
		// 	TweenMax.to(htmlBarGraph, .3, {
        //         width: "90%"
		// 	});
		// }
	}
});
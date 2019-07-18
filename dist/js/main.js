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
//# sourceMappingURL=main.js.map

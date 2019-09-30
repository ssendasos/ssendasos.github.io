'use strict';




var hotSalesSlider = document.getElementById('hot-sales-slider');
var hotSalesLeft = document.getElementById('hot-sales-left');
var hotSalesRight = document.getElementById('hot-sales-right');

var noveltySlider = document.getElementById('novelty-slider');
var noveltyLeft = document.getElementById('novelty-left');
var noveltyRight = document.getElementById('novelty-right');

var specialsSlider = document.getElementById('specials-slider');
var specialsLeft = document.getElementById('specials-left');
var specialsRight = document.getElementById('specials-right');

var brandsSlider = document.getElementById('brands-slider');
var brandsRight = document.getElementById('brands-right')
var brandsLeft = document.getElementById('brands-left');

var hotSalesRightClicks = 0;
var hotSalesLeftClicks = 0;

var noveltyRightClicks = 0;
var noveltyLeftClicks = 0;

var specialsRightClicks = 0;
var specialsLeftClicks = 0;

var brandsRightClicks = 0;
var brandsLeftClicks = 0;



hotSalesRight.addEventListener('click', function(evt) {
    if (hotSalesRightClicks <= 1) {
        hotSalesRightClicks++;
        hotSalesLeftClicks--;
        hotSalesSlider.style.transform = "translate(" + -165 * (hotSalesRightClicks - hotSalesLeftClicks) + "px"
    }
    
}, false);

hotSalesLeft.addEventListener('click', function(evt) {
    if(hotSalesLeftClicks < 0) {
        hotSalesLeftClicks++;
        hotSalesRightClicks--;
        hotSalesSlider.style.transform = "translate(" + 165 * (hotSalesLeftClicks - hotSalesRightClicks) + "px";
    }
});




noveltyRight.addEventListener('click', function(evt) {
    if (noveltyRightClicks <= 1) {
        noveltyRightClicks++;
        noveltyLeftClicks--;
        noveltySlider.style.transform = "translate(" + -165 * (noveltyRightClicks - noveltyLeftClicks) + "px"
    }
});

noveltyLeft.addEventListener('click', function(evt) {
    if(noveltyLeftClicks < 0) {
        noveltyLeftClicks++;
        noveltyRightClicks--;
        noveltySlider.style.transform = "translate(" + 165 * (noveltyLeftClicks - noveltyRightClicks) + "px";
    }
});



specialsRight.addEventListener('click', function(evt) {
    if (specialsRightClicks <= 1) {
        specialsRightClicks++;
        specialsLeftClicks--;
        specialsSlider.style.transform = "translate(" + -165 * (specialsRightClicks - specialsLeftClicks) + "px"
    }
});

specialsLeft.addEventListener('click', function(evt) {
    if(specialsLeftClicks < 0) {
        specialsLeftClicks++;
        specialsRightClicks--;
        specialsSlider.style.transform = "translate(" + 165 * (specialsLeftClicks - specialsRightClicks) + "px";
    }
});



brandsRight.addEventListener('click', function(evt) {
    if (brandsRightClicks <= 1) {
        brandsRightClicks++;
        brandsLeftClicks--;
        brandsSlider.style.transform = "translate(" + -95 * (brandsRightClicks - brandsLeftClicks) + "px"
    }
});

brandsLeft.addEventListener('click', function(evt) {
    if(brandsLeftClicks < 0) {
        brandsLeftClicks++;
        brandsRightClicks--;
        brandsSlider.style.transform = "translate(" + 95 * (brandsLeftClicks - brandsRightClicks) + "px";
    }
});
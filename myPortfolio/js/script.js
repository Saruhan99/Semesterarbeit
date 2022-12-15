//Typed Text in Header
var typed = new Typed(".mov",{
    strings: ["Student Wirtschaftsinformatik", "Softwaretester"] ,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true

})

$(document).ready(function () {

    //Hamburger Navigation
    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });

    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });

    $('#btn-send').click(function(){
        $("#input-name").val("Name und Vorname");
        $("#input-email").val("E-Mail");
        $("#input-text").val("Mitteilung");
        $("#success-message-box").fadeIn(700);
        $("#success-message-box").delay(5000).fadeOut(700);
    });

});

//Animation Shapes in Header
function fitElementToParent(el, padding) {
var timeout = null;
function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, {scale: 1});
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
}
resize();
window.addEventListener('resize', resize);
}

var layeredAnimation = (function() {

var transformEls = document.querySelectorAll('.transform-progress');
var layeredAnimationEl = document.querySelector('.layered-animations');
var shapeEls = layeredAnimationEl.querySelectorAll('.shape');
var triangleEl = layeredAnimationEl.querySelector('polygon');
var trianglePoints = triangleEl.getAttribute('points').split(' ');
var easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'];

fitElementToParent(layeredAnimationEl);

function createKeyframes(value) {
    var keyframes = [];
    for (var i = 0; i < 30; i++) keyframes.push({ value: value });
    return keyframes;
}

function animateShape(el) {

    var circleEl = el.querySelector('circle');
    var rectEl = el.querySelector('rect');
    var polyEl = el.querySelector('polygon');

    var animation = anime.timeline({
    targets: el,
    duration: function() { return anime.random(600, 2200); },
    easing: function() { return easings[anime.random(0, easings.length - 1)]; },
    complete: function(anim) { animateShape(anim.animatables[0].target); },
    })
    .add({
    translateX: createKeyframes(function(el) { 
        return el.classList.contains('large') ? anime.random(-300, 300) : anime.random(-520, 520);
    }),
    translateY: createKeyframes(function(el) { 
        return el.classList.contains('large') ? anime.random(-110, 110) : anime.random(-280, 280);
    }),
    rotate: createKeyframes(function() { return anime.random(-180, 180); }),
    }, 0);
    if (circleEl) {
    animation.add({
        targets: circleEl,
        r: createKeyframes(function() { return anime.random(32, 72); }),
    }, 0);
    }
    if (rectEl) {
    animation.add({
        targets: rectEl,
        width: createKeyframes(function() { return anime.random(64, 120); }),
        height: createKeyframes(function() { return anime.random(64, 120); }),
    }, 0);
    }
    if (polyEl) {
    animation.add({
        targets: polyEl,
        points: createKeyframes(function() { 
        var scale = anime.random(72, 180) / 100;
        return trianglePoints.map(function(p) { return p * scale; }).join(' ');
        }),
    }, 0);
    }

}

for (var i = 0; i < shapeEls.length; i++) {
    animateShape(shapeEls[i]);
}

})();

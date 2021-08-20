// Find all text with .tricks class and break each letter into a span
var tricksWord = document.getElementsByClassName("tricks");
for (var i = 0; i < tricksWord.length; i++) {
    var wordWrap = tricksWord.item(i);
    wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="tricksword">$2</span>');
}
var tricksLetter = document.getElementsByClassName("tricksword");
for (var i = 0; i < tricksLetter.length; i++) {
    var letterWrap = tricksLetter.item(i);
    letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

// Fade Up Animation
var fadeUp = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp
    .add({
        targets: '.fade-up .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [10, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp2 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp2
    .add({
        targets: '.fade-up2 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [10, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp3 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp3
    .add({
        targets: '.fade-up3 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [10, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp4 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp4
    .add({
        targets: '.fade-up4 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [10, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp5 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp5
    .add({
        targets: '.fade-up5 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [10, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp6 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp6
    .add({
        targets: '.fade-up6 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [10, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp7 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp7
    .add({
        targets: '.fade-up7 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [10, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp8 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp8
    .add({
        targets: '.fade-up8 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [10, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });






// Play animation when scrolled into view
$('#scroll-in1').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp.play();
    } else {}
});
$('#scroll-in2').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp2.play();
    } else {}
});
$('#scroll-in3').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp3.play();
    } else {}
});
$('#scroll-in4').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp4.play();
    } else {}
});
$('#scroll-in5').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp5.play();
    } else {}
});
$('#scroll-in6').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp6.play();
    } else {}
});
$('#scroll-in7').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp7.play();
    } else {}
});
$('#scroll-in8').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp8.play();
    } else {}
});








const text1 = baffle(".index1");
const text2 = baffle(".index2");
const text3 = baffle(".index3");
const text4 = baffle(".index4");
const text5 = baffle(".index5");
const text6 = baffle(".index6");


text1.set({
    characters: '(*+)',
    speed: 150
});
text2.set({
    characters: '(*+)',
    speed: 150
});
text3.set({
    characters: '(*+)',
    speed: 150
});
text4.set({
    characters: '(*+)',
    speed: 150
});
text5.set({
    characters: '(*+)',
    speed: 150
});
text6.set({
    characters: '(*+)',
    speed: 150
});


$(document).ready(function() {
    $("#index1").on("mouseover", function() {
        text1.start();
        text1.reveal(1500);
    });
});
$(document).ready(function() {
    $("#index2").on("mouseover", function() {
        text2.start();
        text2.reveal(1500);
    });
});
$(document).ready(function() {
    $("#index3").on("mouseover", function() {
        text3.start();
        text3.reveal(1500);
    });
});
$(document).ready(function() {
    $("#index4").on("mouseover", function() {
        text4.start();
        text4.reveal(1500);
    });
});
$(document).ready(function() {
    $("#index5").on("mouseover", function() {
        text5.start();
        text5.reveal(1500);
    });
});
$(document).ready(function() {
    $("#index6").on("mouseover", function() {
        text6.start();
        text6.reveal(1500);
    });
});



$('#index1').on('inview', function(event, isInView) {
    if (isInView) {
        text1.start();
        text1.reveal(1500);
    } else {}
});

$('#index2').on('inview', function(event, isInView) {
    if (isInView) {
        text2.start();
        text2.reveal(1500);
    } else {}
});

$('#index3').on('inview', function(event, isInView) {
    if (isInView) {
        text3.start();
        text3.reveal(1500);
    } else {}
});

$('#index4').on('inview', function(event, isInView) {
    if (isInView) {
        text4.start();
        text4.reveal(1500);
    } else {}
});

$('#index5').on('inview', function(event, isInView) {
    if (isInView) {
        text5.start();
        text5.reveal(1500);
    } else {}
});

$('#index6').on('inview', function(event, isInView) {
    if (isInView) {
        text6.start();
        text6.reveal(1500);
    } else {}
});

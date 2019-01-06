
var ding = new Audio();
ding.src = "assets/audio/345271__soneproject__ecofuture2.wav"
// IMAGE SLIDESHOW
var images = [
    'assets/images/Screen Shot 2018-12-17 at 12.19.46 PM.jpg', 
    'assets/images/Screen Shot 2018-12-17 at 12.20.45 PM.jpg', 
    'assets/images/Screen Shot 2018-12-17 at 1.23.38 PM.png',
    'assets/images/Screen Shot 2018-12-17 at 1.29.42 PM.png',
    'assets/images/Screen Shot 2018-12-17 at 1.30.20 PM.png',
    'assets/images/Screen Shot 2018-12-17 at 1.26.22 PM.png'
];
// The "num" var takes in the value of 0, marking the the beginning of the array of images.
var num = 0;
// The Function next is bulit into the HTML's "onclick" button using it to transition to the next photo.
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
// DISPLAY CLOCK FOR MAIN PAGE
function startTime() {
    var today = new Date();
    var d = today.getDay();
    var yr = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    // document.getElementById('date').innerHTML =
    // 'January' + ", " + d + "th, " + yr;
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

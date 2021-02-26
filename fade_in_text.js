window.onload = fadeIn;

function fadeIn() {
    const fade = document.getElementById("text-header");
    var opacity = 0;
    
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.01;
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 12);
}

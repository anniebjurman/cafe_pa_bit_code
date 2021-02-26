var myIndex = 0;
changePicture();

function changePicture() {
    var i;
    var pictures = document.getElementsByClassName("menu_pictures");

    for (i = 0; i < pictures.length; i++) {
        pictures[i].style.display = "none";
    }

    myIndex++;
    
    if (myIndex > pictures.length) {
        myIndex = 1;
    }
    
    pictures[myIndex-1].style.display = "block";
    setTimeout(changePicture, 4500);
}
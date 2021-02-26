$(document).ready(function () {
    $(function () {
        var coconut = false;

        $("#ball").draggable({
            containment: "parent"
        });

        $("#bowl").droppable({
            drop: function (event, ui) {
                $("#ball").attr("src", "pictures/chocolate-ball-coconut.png");
                coconut = true;
            }
        });

        $("#plate").droppable({
            drop: function (event, ui) {
                if (coconut == true) {
                    $("#h-output").html("Du klarade det!")
                    $("#p-output").html("Visa upp följande kod i kassan för att få en gratis chokladboll.")
                    $("#code-output").html("49GH3DR2")
                }
            }
        });
    });
});

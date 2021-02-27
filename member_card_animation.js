$("#b-animate").click(function () {
    $("#member-card").animate({
        height: '600px',
        opacity: '100%'
    });

    $("#card-header").animate({
        fontSize: '40px'
    });

    $("#card-img").animate({
        width: '40%'
    });

    $("#card-p").animate({
        fontSize: '15px'
    });

    $("#card-img2").animate({
        width: '90%',
        marginTop: '50px'
    });
});
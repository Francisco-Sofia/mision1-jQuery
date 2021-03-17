$('a').on('click', function () {
    $(".active").css("color", "#000");
    $(".active").removeClass("active");
    $(this).addClass("active");
})


$('a').on('mouseover', function () {
    $(this).css("color", "#EA178C");
})


$('a').on('mouseleave', function () {
    if (!$(this).hasClass("active")) {
        $(this).css("color", "#000");
    }
})
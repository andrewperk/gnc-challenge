$(document).ready(function() {
    $('.show-rules').click(function(e) {
        $("body").css("overflow", "hidden");
        $("html, body").animate({ scrollTop: 0 }, "fast");
        $('.official-rules').fadeIn();
        e.preventDefault();
    });

    $('.close-rules').click(function(e) {
        $("body").css("overflow", "scroll");
        $('.official-rules').fadeOut();
        e.preventDefault();
    });
});

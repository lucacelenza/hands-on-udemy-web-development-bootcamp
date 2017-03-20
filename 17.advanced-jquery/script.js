$("button").click(function() {
    var mode = $("select").val();

    if (mode === "Fade") {
        $("div").fadeToggle(1000, function() {
            //$(this).remove();
        });
    } else {
        $("div").slideToggle(1000, function() {
            //$(this).remove();
        });
    }
});
$("ul")
    //check off/on specific todos by clicking
    .on("click", "li", function() {
        $(this).toggleClass('completed');
    })
    //click on the x span to delete the todo
    .on("click", "span", function(event) {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });

        //stop event bubbling from going to off/on (.completed)
        event.stopPropagation();
    });

$("input[type=\"text\"]").keypress(function(event) {
    if (event.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        //create a new li and add to ul
        $("ul").append("<li><span>x</span> " + todoText + "</li>");
        //reset input value to be empty
        $(this).val('');
    }
});
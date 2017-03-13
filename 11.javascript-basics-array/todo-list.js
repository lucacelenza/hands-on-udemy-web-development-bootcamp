var todos = [];
var userChoice;

while (userChoice !== "quit") {
    userChoice = prompt("What would you like to do?");

    if (userChoice === "new") {
        addTodo(prompt("Enter a new todo."));
    } else if (userChoice === "list") {
        printTodos();
    } else if (userChoice === "delete") {
        removeTodo(prompt("Which todo you'd like to remove?"));
    }
}

console.log("App quitted.");

function addTodo(todo) {
    todos.push(todo);
    console.log("Todo \"" + todo + "\" added.")
}

function printTodos() {
    console.log("**********");
    todos.forEach(printTodo);
    console.log("**********");
}

function printTodo(todo, index) {
    console.log(index + ": " + todo);
}

function removeTodo(todo) {
    var indexOfTodoToRemove = todos.indexOf(todo);

    if (indexOfTodoToRemove !== -1) {
        console.log("Todo \"" + todos.splice(indexOfTodoToRemove, 1) + "\" removed.");
    }
}
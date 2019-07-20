
const displayTodos = (project) => {
    const display = document.getElementById("display-todo");
    display.innerHTML = "";

    let todoDiv = "";

    if (project['todo'].length > 0) {
       project['todo'].forEach(todo => {

        todoDiv += `<div class="${todo['priority']}"><p class="todo-title">${todo['title']}</p><p class="todo-description">${todo['description']}</p><p class="todo-duedate">${todo['duedate']}</p></div>`;
        });
    } else {
        todoDiv = 'No Todo yet!';
    }
    display.innerHTML += todoDiv;
}


export default displayTodos;
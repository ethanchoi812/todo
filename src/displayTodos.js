import projects from './projects';

const displayTodos = (project) => {
    const display = document.getElementById("display-todo");
    display.innerHTML = "";

    //let projectArr = projects();
    //let project = projectArr.find(project => project['name'] === projectName);
    let todoDiv = "";

    if (project['todos'].length > 0) {
       project['todos'].forEach(todo => {

        todoDiv += `<div class="${todo['priority']}"><p class="todo-title">${todo['title']}</p><p class="todo-description">${todo['description']}</p><p class="todo-duedate">${todo['duedate']}</p></div>`;
        });
    } else {
        todoDiv = 'No Todo yet!';
    }
    display.innerHTML += todoDiv;
}


export default displayTodos;
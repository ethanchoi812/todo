import projects from './projects';

const displayTodos = (project) => {

    const display = document.getElementById("display-todo");
    display.innerHTML = "";

    //let projectArr = projects();
    //let project = projectArr.find(project => project['name'] === projectName);
    let todoDiv = "";

    if (project['todos'].length > 0) {
       project['todos'].forEach(todo => {
        todoDiv += `<p>${todo['title']}</p><p>${todo['description']}</p><p>${todo['duedate']}</p>`;
        });
    } else {
        todoDiv = 'No Todo yet!';
    }
    console.log(todoDiv);
    display.innerHTML += todoDiv;
}


export default displayTodos;
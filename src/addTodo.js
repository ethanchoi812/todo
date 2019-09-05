import projects from './projects';
import displayTodos from './displayTodos';

const addTodo = (projectName) => {

    let projectArr = projects();
    let name;
    
    projectName ? name = projectName : name = "Uncategorized";

    document.getElementById('todo-form').addEventListener("submit", function(){
        event.preventDefault();

        let project = projectArr.find(project => project['name'] === name);
        let todo = newTodo();

        project['todo'].push(todo);
        localStorage.setItem('projects', JSON.stringify(projectArr));

        displayTodos(project);

        clearForm();

        return projectArr;
    });
}

const todo = (title, description, priority, duedate, done, id) => {
    return { title, description, priority, duedate, done, id };
}

const newTodo = () => {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let duedate = document.getElementById('duedate').value;
    let id = title.replace(/\s/g,'').toLowerCase();
    let done = false;


    let priority;

    document.getElementById('priority').checked === true ? priority = "priority-on" : priority = "priority-off";

    let newTodo = todo(title, description, priority, duedate, done, id);

    return newTodo;
}

const clearForm = () => {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('priority').checked = false;
    document.getElementById('duedate').value = '';

}

export default addTodo;
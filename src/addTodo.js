import projects from './projects';
import displayTodos from './displayTodos';
import clearForm from './clearForm';

const addTodo = (projectId) => {
    
    document.getElementById('todo-form').addEventListener("submit", function(){

        event.preventDefault();
        
        let projectArr = projects();
        let project = projectArr.find(project => project['id'] === projectId);
        let todo = newTodo();

        project['todo'].push(todo);
        localStorage.setItem('projects', JSON.stringify(projectArr));

        displayTodos(project);
        clearForm();

        return projectArr;
    });
}

const todo = (title, description, priority, duedate, id) => {
    return { title, description, priority, duedate, id };
}

const newTodo = () => {
    let title = document.getElementById('title').value;
    let descriptionText = document.getElementById('description').value;
    let duedate = document.getElementById('duedate').value;
    let id = title.replace(/\W/g,'').toLowerCase();

    let description = descriptionText.replace(/\n\r?/g, '<br>');

    let priority;

    document.getElementById('priority').checked === true ? priority = "priority-on" : priority = "priority-off";

    let newTodo = todo(title, description, priority, duedate, id);

    return newTodo;
}

export default addTodo;
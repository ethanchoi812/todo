import projects from './projects';
import displayTodos from './displayTodos';

const addTodo = (projectName) => {

    let projectArr = projects();
    //console.log(project);

    let name;
    projectName ? name = projectName : name = "Uncategorized";

    document.getElementById('todo-form').addEventListener("submit", function(){
        event.preventDefault();

        let project = projectArr.find(project => project['name'] === name);
        let todo = newTodo();

        project['todos'].push(todo);
        
        displayTodos(project);

        clearForm();

        return projectArr;
    });
}

const todo = (title, description, priority, duedate) => {
    return { title, description, priority, duedate };
}

const newTodo = () => {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let duedate = document.getElementById('duedate').value;
    let priority;
    document.getElementById('priority').checked === true ? priority = "priority-on" : priority = "priority-off";

    let newTodo = todo(title, description, priority, duedate);

    return newTodo;
}

const clearForm = () => {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('priority').checked = false;
    document.getElementById('duedate').value = '';

}

export default addTodo;
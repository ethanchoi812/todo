import projects from './projects';

const addTodo = (project) => {
    document.getElementById('todo-form').addEventListener("submit", function(){
        event.preventDefault();

        let todo = newTodo();

        project.push(todo);
        clearForm();
        console.log(projects);
        return projects;
    });
}

const todo = (title, description, priority, duedate) => {
    return { title, description, priority, duedate };
}

const newTodo = () => {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let priority = document.getElementById('priority').value;
    let duedate = document.getElementById('duedate').value;

    let newTodo = todo(title, description, priority, duedate);

    return newTodo;
}

function clearForm(){
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('priority').checked = false;
    document.getElementById('duedate').value = '';

}

export default addTodo;
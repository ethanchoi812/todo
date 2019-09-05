import openTodo from './openTodo';
import doneTodo from './doneTodo';

const displayTodos = (project) => {
    const display = document.getElementById('display-todos');
    display.innerHTML = ''

    let todoDiv = '';

    if (project['todo'].length > 0) {
       project['todo'].forEach( (todo) => {

        todoDiv +=
        `<div id="${todo['id']}" class="todo-row ${todo['priority']}">
            <div class="todo-title">
                <h3>${todo['title']}</h3><span>${todo['duedate']}</span>
                <input type="checkbox" name="done" id="checkbox-${todo['id']}"><label for="checkbox-${todo['id']}">Done?</label>
                <span class="delete-todo">Delete</span>
            </div>
            <div class="todo-details" style="display:none;">
                <p class="todo-description">${todo['description']}</p>
            </div>
        </div>`;

        });


    } else {
        todoDiv = 'No Todo yet!';
    }
    display.innerHTML += todoDiv;
    
    openTodo();
    doneTodo();

}

export default displayTodos;
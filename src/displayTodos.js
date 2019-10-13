import openTodo from "./openTodo";
import doneTodo from "./doneTodo";

const displayTodos = project => {
  const todoForm = document.getElementById("todo-form");
  const display = document.getElementById("display-todos");
  const showTodoFormBtn = document.getElementById("show-todo-form");

  todoForm.style.display = "none";
  showTodoFormBtn.style.display === "none"
    ? (showTodoFormBtn.style.display = "block")
    : showTodoFormBtn.style.display === "none";
  display.innerHTML = "";

  let todoDiv = "";

  if (project["todo"].length > 0) {
    project["todo"].forEach(todo => {
      todoDiv += `<div id="${todo["id"]}" class="todo-row ${todo["priority"]}">
                <div class="todo-title">
                    <h3>${todo["title"]}</h3><span>${todo["duedate"]}</span>
                    <div>
                    <input type="checkbox" name="done" id="checkbox-${
                      todo["id"]
                    }"><label for="checkbox-${todo["id"]}">Done?</label>
                    </div>
                </div>
                <div class="todo-details" style="display:none;">
                    <p class="todo-description">${todo["description"]}</p>
                </div>
            </div>`;
    });
  } else {
    todoDiv = "No Todo yet!";
  }

  display.innerHTML += todoDiv;

  let projectId = project["id"];

  doneTodo(projectId);
  openTodo();
};

export default displayTodos;

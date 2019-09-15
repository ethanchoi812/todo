import clearForm from "./clearForm";

const openTodoForm = () => {
  const showTodoFormBtn = document.getElementById("show-todo-form");
  const hideTodoFormBtn = document.getElementById("hide-todo-form");
  const todoForm = document.getElementById("todo-form");

  showTodoFormBtn.addEventListener("click", function() {
    todoForm.style.display = "block";
  });

  hideTodoFormBtn.addEventListener("click", function() {
    clearForm();
    todoForm.style.display = "none";
  });
};

export default openTodoForm;

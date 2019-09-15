const openTodo = () => {
  const todoTitles = document.querySelectorAll(".todo-title h3");
  todoTitles.forEach(function(todoTitle) {
    todoTitle.addEventListener("click", function() {
      let todoDetails = todoTitle.parentElement.nextElementSibling;
      todoDetails.style.display === "none"
        ? (todoDetails.style.display = "block")
        : (todoDetails.style.display = "none");
    });
  });
};

export default openTodo;

import projects from "./projects";
import displayTodos from "./displayTodos";

const doneTodo = projectId => {
  let projectArr = projects();
  let thisProject = projectArr.find(project => project["id"] === projectId);
  let todoArr = thisProject["todo"];

  const checkboxes = document.querySelectorAll(
    '.todo-title input[type="checkbox"]'
  );
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("click", () => {
      let thisTodo = checkbox.parentNode.parentNode.parentNode;
      let todoId = thisTodo.id;
      let index = todoArr.findIndex(todo => todo["id"] === todoId);

      // remove todo from todoArr
      todoArr.splice(index, 1);
      thisProject["todo"] = todoArr;

      localStorage.setItem("projects", JSON.stringify(projectArr));
      displayTodos(thisProject);
      return thisProject;
    });
  });
};

export default doneTodo;

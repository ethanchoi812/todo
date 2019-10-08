import projects from "./projects";
import displayProjects from "./displayProjects";
import openProject from "./openProject";
import validateRequired from "./validateRequired";

const addProject = () => {
  let projectNameField = document.querySelector(
    'input[type="text"]#project-name'
  );

  projectNameField.addEventListener("blur", () => {
    validateRequired(projectNameField);
  });

  document
    .getElementById("project-form")
    .addEventListener("submit", function() {
      event.preventDefault();

      if (!validateRequired(projectNameField)) {
        return false;
      } else {
        let projectArr = projects();
        let newProj = newProject();
        projectArr.push(newProj);
        localStorage.setItem("projects", JSON.stringify(projectArr));

        displayProjects(projectArr);
        openProject();

        clearForm();
        return projectArr;
      }
    });
};

const project = (id, name, todo) => {
  return { id, name, todo };
};

const newProject = () => {
  let name = document.getElementById("project-name").value;
  let todo = [];

  let d = new Date();
  let n = d.getTime();
  let id = name.replace(/\W/g, "").toLowerCase() + n;

  let newProject = project(id, name, todo);

  return newProject;
};

function clearForm() {
  document.getElementById("project-name").value = "";
}

export default addProject;

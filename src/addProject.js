import projects from "./projects";
import displayProjects from "./displayProjects";
import openProject from "./openProject";
import validateRequired from "./validateRequired";

const addProject = () => {
  //set up projects
  let projectArr = projects();
  let projectNameField = document.querySelector(
    'input[type="text"]#project-name'
  );

  document
    .getElementById("project-form")
    .addEventListener("submit", function() {
      event.preventDefault();

      if (!validateRequired(projectNameField)) {
        return false;
      } else {
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
  let id = name.replace(/\W/g, "").toLowerCase();

  let newProject = project(id, name, todo);

  return newProject;
};

function clearForm() {
  document.getElementById("project-name").value = "";
}

export default addProject;

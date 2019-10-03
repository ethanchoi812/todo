import projects from "./projects";
import addProject from "./addProject";
import displayProjects from "./displayProjects";
import openProject from "./openProject";
import validateRequired from "./validateRequired";

let projectArr = projects();
let projectNameField = document.querySelector(
  'input[type="text"]#project-name'
);

addProject();

//display all projects
displayProjects(projectArr);

// isValid = validateRequired(projectNameField);
// if (isValid) {

//open project
openProject();

projectNameField.addEventListener("blur", () => {
  validateRequired(projectNameField);
});

import projects from "./projects";
import addProject from "./addProject";
import displayProjects from "./displayProjects";
import openProject from "./openProject";
import "./style.css";

let projectArr = projects();

addProject();

//display all projects
displayProjects(projectArr);

//open project
openProject();

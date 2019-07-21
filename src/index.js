import projects from './projects';
import addProject from './addProject';
import displayProjects from './displayProjects';
import openProject from './openProject';


let projectArr = projects();

//add project
addProject();

//display all projects
displayProjects(projectArr);

//open project
openProject();
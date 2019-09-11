import projects from './projects';
import addProject from './addProject';
import displayProjects from './displayProjects';
import openProject from './openProject';
import deleteProject from './deleteProject';


let projectArr = projects();

//add project
addProject();

//display all projects
displayProjects(projectArr);

//delete project
deleteProject();

//open project
openProject();


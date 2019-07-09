import dateField from './dateField';
import projects from './projects';
import addProject from './addProject';
import openProject from './openProject';
import displayProjects from './displayProjects';


let projectArr = projects();

//add project
addProject();

//display all projects
displayProjects(projectArr);

//open project
openProject();

//add todo 
//addTodo();




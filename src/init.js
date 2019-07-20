import projects from './projects';
import addProject from './addProject';
import openProject from './openProject';
import displayProjects from './displayProjects';

const init = () => {

    let projectArr = projects();

    //add project
    addProject();

    //display all projects
    displayProjects(projectArr);

    //open project
    openProject();
}

export default init;

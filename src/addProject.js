import projects from './projects';
import displayProjects from './displayProjects';
import openProject from './openProject';

//set up projects
let projectArr = projects();

displayProjects(projectArr);

const addProject = () => {
    document.getElementById('project-form').addEventListener("submit", function(){
        event.preventDefault();

        let newProj = newProject();
        projectArr.push(newProj);

        displayProjects(projectArr);
        openProject();
        
        clearForm();
        
        return projectArr;
    });

}

const project = (name) => {
    return { name };
}

const newProject = () => {
    let name = document.getElementById('project-name').value;
    let newProject = project(name);

    return newProject;
}

function clearForm(){
    document.getElementById('project-name').value = '';
}


export default addProject;
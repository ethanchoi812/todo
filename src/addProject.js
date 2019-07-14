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
        localStorage.setItem('projects', JSON.stringify(projectArr));

        displayProjects(projectArr);
        openProject();
        
        clearForm();
        
        return projectArr;
    });

}

const project = (name, todo) => {
    return { name, todo };
}

const newProject = () => {
    let name = document.getElementById('project-name').value;
    let todo = [];
    let newProject = project(name, todo);

    return newProject;
}

function clearForm(){
    document.getElementById('project-name').value = '';
}


export default addProject;
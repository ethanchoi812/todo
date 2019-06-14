import projects from './projects';

const projects = () => [];

const addProject = () => {
    document.getElementById('project-form').addEventListener("submit", function(){
        event.preventDefault();

        let project = newProject();
        projects.push(project);

        clearForm();
        console.log(projects);

        return projects;
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
import projects from './projects';

//set up projects
let projectArr = projects();

const display = document.getElementById("display");

projectArr.forEach(project => {
    display.innerHTML += `<div class='project' data-name=${project['name']}>` + project["name"] + "</div>"; 
});

const addProject = () => {
    document.getElementById('project-form').addEventListener("submit", function(){
        event.preventDefault();

        let newProj = newProject();

        projectArr.push(newProj);
        display.innerHTML += `<div class='project' data-name=${project['name']}>` + newProj["name"] + "</div>"; 

        clearForm();
        console.log(projectArr);
        
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
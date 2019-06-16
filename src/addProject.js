import projects from './projects';

//set up projects
let projectArr = projects();

const displayProject = document.getElementById("display-projects");

projectArr.forEach(project => {
    displayProject.innerHTML += "<div class='project'>" + project["name"] + " " + "</div>"; 
});

const addProject = () => {
    document.getElementById('project-form').addEventListener("submit", function(){
        event.preventDefault();

        let newProj = newProject();

        projectArr.push(newProj);
        displayProject.innerHTML += "<div class='project'>" + newProj["name"] + " " + "</div>"; 

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
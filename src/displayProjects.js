//set up projects

const displayProjects = (projectArr) => {

    const display = document.getElementById("display");

    display.innerHTML = "";

    projectArr.forEach(project => {
        //display all projects
        display.innerHTML += `<div class='project' data-name=${project['name']}>` + project['name'] + "</div>"; 
        
    });
}

export default displayProjects;
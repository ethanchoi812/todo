//set up projects

const displayProjects = (projectArr) => {

    const display = document.getElementById("display");

    display.innerHTML = "";

    if (projectArr.length > 0) {
        projectArr.forEach(project => {
            //display all projects
            display.innerHTML += `<div class='project' data-name=${project['name']}>` + project['name'] + "</div>";     
        });
    } else {
        display.innerHTML = "No projects yet!";
    }
}

export default displayProjects;
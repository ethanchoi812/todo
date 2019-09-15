const displayProjects = projectArr => {
  const display = document.getElementById("display-projects");
  display.innerHTML = "";

  if (projectArr.length > 0) {
    projectArr.forEach(project => {
      //display all projects
      display.innerHTML += `<div class='project' data-id=${project["id"]}>${
        project["name"]
      }</div>`;
    });
  } else {
    display.innerHTML = "No projects yet! Add one";
  }
};

export default displayProjects;

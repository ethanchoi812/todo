
//open project to show todo

const openProject = () => {
    const display = document.getElementById("display");

    let projects = document.querySelectorAll(".project");
    
    projects.forEach(function(project){
        
        project.addEventListener("click", function(){
            //hide forms
            let forms = document.querySelectorAll("form");
            forms.forEach((form) => { form.style.display = "none" });

            //display details
            let projectName = project.dataset.name;
            
            console.log(this);
        });
    });
}

export default openProject;
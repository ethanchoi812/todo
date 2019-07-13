import projects from './projects';
import addTodo from './addTodo';
import displayTodos from './displayTodos';

//open project to show todo
const openProject = () => {

    let projectArr = projects();
    const display = document.getElementById("display");
    let projectEl = document.querySelectorAll(".project");

    projectEl.forEach(function(el){
        
        el.addEventListener("click", function(){
            //hide project form
            let forms = document.querySelectorAll("#project-form");
            forms.forEach((form) => { form.style.display = "none" });

            //display details
            let projectName = el.dataset.name;

            let project = projectArr.find(project => project['name'] === projectName);

            display.innerHTML = `<div>${projectName}</div><div class='back'>Back</div>`
            addTodo(projectName);
            displayTodos(project);

        });
    });
}

export default openProject;
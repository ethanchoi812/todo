import addTodo from './addTodo';

//open project to show todo
const openProject = () => {
    const display = document.getElementById("display");

    let projectEl = document.querySelectorAll(".project");
    
    

    projectEl.forEach(function(el){
        
        el.addEventListener("click", function(){
            //hide project form
            let forms = document.querySelectorAll("#project-form");
            forms.forEach((form) => { form.style.display = "none" });

            //display details
            let projectName = el.dataset.name;

            display.innerHTML = `${projectName}<div class='back'>Back</div>`
            console.log(projectName);

            addTodo(projectName);

        });
    });
}

export default openProject;
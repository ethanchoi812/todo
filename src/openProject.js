import projects from './projects';
import addTodo from './addTodo';
import displayTodos from './displayTodos';
import init from './init';

//open project to show todo
const openProject = () => {

    let projectArr = projects();
    const display = document.getElementById('display');
    let projectEl = document.querySelectorAll('.project');

    projectEl.forEach(function(el){
        
        el.addEventListener('click', function(){
            //hide project form
            let projectForm = document.getElementById("project-form");
            projectForm.style.display = "none";

            let todoForm = document.getElementById("todo-form");
            todoForm.style.display = "block";

            //display details
            let projectId = el.dataset.id ;
            let project = projectArr.find(project => project['id'] === projectId);

            display.innerHTML = `<div>${project['name']}</div><div id='back'>Back</div>`;
            
            const back = document.getElementById('back');
            back.addEventListener('click', function(){
                //todo: clear page;
                init();
            });

            addTodo(project['name']);
            displayTodos(project);

        });
    });    
}

export default openProject;
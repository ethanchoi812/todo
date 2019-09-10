import projects from './projects';
import displayTodos from './displayTodos';
import openTodoForm from './openTodoForm';
import addTodo from './addTodo';
import goHome from './goHome';
import dateField from './dateField';

//open project to show todo
const openProject = () => {

    let projectArr = projects();
    const display = document.getElementById('display-projects');
    let projectEl = document.querySelectorAll('.project');

    projectEl.forEach((el) => {
        
        el.addEventListener('click', function(){
            //hide project form
            const projectForm = document.getElementById('project-form');
            projectForm.style.display = 'none';

            //display details
            let projectId = el.dataset.id ;
            let project = projectArr.find(project => project['id'] === projectId);

            display.innerHTML =
                `<div>${project['name']}</div>
                <div id='go-home'>Go Home</div>
                <div class="btn-container" id="show-todo-form">
                    <button>Add a Todo</button>
                </div>`;

            displayTodos(project);
            openTodoForm();
            addTodo(projectId);
            goHome();
        });
    });    
}

export default openProject;
import projects from './projects';
import displayTodos from './displayTodos';
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

            const todoForm = document.getElementById('todo-form');
            todoForm.style.display = 'block';

            //display details
            let projectId = el.dataset.id ;
            let project = projectArr.find(project => project['id'] === projectId);

            display.innerHTML = `<div>${project['name']}</div><div id='go-home'>Go Home</div>`;

            displayTodos(project);
            addTodo(projectId);
            goHome();
        });
    });    
}

export default openProject;
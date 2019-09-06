import projects from './projects';
import displayTodos from './displayTodos';

const doneTodo = (project) => {
    
    let projectArr = projects();
    let todoArr = project['todo'];
    console.log(todoArr);

    const doneCheckboxes = document.querySelectorAll(".todo-title input[type='checkbox']");
    doneCheckboxes.forEach(function(checkbox) {

        checkbox.addEventListener("click", () => {
            
            if (checkbox.checked) {
            
                let todoId = checkbox.parentNode.parentNode.id;
                console.log(todoId);

                let index = todoArr.findIndex((todo) => todo['id'] === todoId);

                // remove todo from todoArr
                todoArr.splice(index, 1);
                console.log(todoArr);

                //remove og todoArr from projectArr?
                //push to projectArr
                //projectArr.push(todoArr);
                //localStorage.setItem('projects', JSON.stringify(projectArr));
                                      
            } 
        });
    });

//    displayTodos(project);
    //return projectArr;
}

export default doneTodo;
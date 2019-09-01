
const doneTodo = () => {
    const doneCheckboxes = document.querySelectorAll(".todo-title input[type='checkbox']");
    doneCheckboxes.forEach(function(checkbox) {

        let todo = checkbox.parentNode;
        let todoTitleColor = todo.querySelector("h3");
        let todoDueDateColor = todo.querySelector("span");
        let todoDetails = todo.nextElementSibling;

        checkbox.addEventListener("click", () => {
            
            
            if (checkbox.checked) {

                todoTitleColor.style.color = "#ccc";
                todoDueDateColor.style.color  = "#ccc";
                todoDetails.style.color  = "#ccc";
                      
            } else if (!checkbox.checked) {

                todoTitleColor.style.color  = "#000";
                todoDueDateColor.style.color = "#000";      
                todoDetails.style.color  = "#000";
                
            }
        });
    });
}

export default doneTodo;
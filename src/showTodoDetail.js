const showTodoDetail = () => {
   
    //const todoRow = document.getElementById("id");
    const todoTitleDivs = document.querySelectorAll(".todo-title");
    todoTitleDivs.forEach(function(todoTitle){
        
        todoTitle.addEventListener("click", function(){

            let todoDetails = todoTitle.nextElementSibling;
            todoDetails.style.display === "none" ? todoDetails.style.display = "block" : todoDetails.style.display = "none";
        
        });
    });
}

export default showTodoDetail;
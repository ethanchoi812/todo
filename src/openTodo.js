
const openTodo = () => {

    const allTodos = document.querySelectorAll('.project');

    allTodos.forEach( (todo) => {
        todo.addEventListener( 'click', () => {
            //todo: add open todo function
        });
    });
}
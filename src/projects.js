const projects = () => {

    let projects = (localStorage.getItem('projects')) ? JSON.parse(localStorage.getItem('projects')) : [{name: "Uncategorized", todos: []}];
    return projects;
}

export default projects;
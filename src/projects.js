const projects = () => {
    
    let projects = (localStorage.getItem('projects')) ? JSON.parse(localStorage.getItem('projects')) : [];
    return projects;
}

export default projects;
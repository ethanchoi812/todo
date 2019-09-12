import projects from './projects';

const deleteProject = (projectId) => {

    let projectArr = projects();
    let index = projectArr.findIndex(project => project['id'] === projectId);

    const deleteBtn = document.getElementById('delete-project');

    deleteBtn.addEventListener('click', () => {
        projectArr.splice(index, 1);
        localStorage.setItem('projects', JSON.stringify(projectArr));
        location.reload(true);
                          
    });

}

export default deleteProject;
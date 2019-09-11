
const deleteProject = () => {

    let projects = document.querySelectorAll('.project');

    projects.forEach((project) => {

        let deleteBtn = project.getElementsByClassName('delete-project')[0];

        project.addEventListener('mouseenter', () => {
            if (deleteBtn.style.display === 'none') {
                deleteBtn.style.display = 'inline-block'
            };
        });

        project.addEventListener('mouseleave', () => {
            if (deleteBtn.style.display === 'inline-block') {
                deleteBtn.style.display = 'none'
            };
        });
    });
}

export default deleteProject;
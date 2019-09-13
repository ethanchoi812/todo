const clearForm = () => {
    
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('priority').checked = false;
    document.getElementById('duedate').value = '';

}

export default clearForm;
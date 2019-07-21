const goHome = () => {
    
    const homeBtn = document.getElementById('go-home');
    homeBtn.addEventListener('click', () => { 
        location.reload(true);

    });
} 

export default goHome;
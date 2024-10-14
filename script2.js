document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const projectCard = button.closest('.project-card');
        const details = projectCard.getAttribute('data-details');
        
        document.getElementById('modal-text').innerText = details;
        document.getElementById('modal').style.display = 'block';
    });
});

document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

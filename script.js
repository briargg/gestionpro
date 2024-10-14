document.querySelectorAll('.confirm-button').forEach(button => {
    button.addEventListener('click', () => {
        const stageCard = button.closest('.stage-card');
        const comment = stageCard.querySelector('textarea').value;

        if (comment.trim() === "") {
            alert("Por favor, deja un comentario antes de confirmar la conformidad.");
            return;
        }

        const modalText = document.getElementById('modal-text');
        modalText.innerText = `Comentario: ${comment}`;
        document.getElementById('modal').style.display = 'block';

        // Optionally, clear the textarea after confirmation
        stageCard.querySelector('textarea').value = '';
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

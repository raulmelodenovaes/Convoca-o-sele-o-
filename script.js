document.getElementById('infoButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Confirme sua presença até o dia 10 de Novembro. Estamos ansiosos para vê-lo (ou não) em campo! 😂';
    messageDiv.classList.remove('hidden');
});

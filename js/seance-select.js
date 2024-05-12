
const selectElement = document.getElementById('liste-seances');
const h1Element = document.getElementById('seance');

// Écoutez les changements de sélection dans la balise <select>
selectElement.addEventListener('change', () => {
    // Mettez à jour le texte de la balise <h1> avec la valeur sélectionnée
    h1Element.textContent = selectElement.value;
});
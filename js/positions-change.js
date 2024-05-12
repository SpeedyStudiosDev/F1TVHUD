let ranks = document.querySelector('ol#ranks');
let gainPos = document.querySelector('#gain-pos');
let pertePos = document.querySelector('#perte-pos');

// Fonction pour déplacer un élément vers le haut
function moveUp(element) {
    let prevElement = element.previousElementSibling;
    if (prevElement) {
        ranks.insertBefore(element, prevElement);
    }
}

// Fonction pour déplacer un élément vers le bas
function moveDown(element) {
    let nextElement = element.nextElementSibling;
    if (nextElement) {
        ranks.insertBefore(nextElement, element);
    }
}

// Ajoutez un écouteur d'événements aux boutons
gainPos.addEventListener('click', function() {
    let focusedElement = document.querySelector('#focus');
    if (focusedElement) {
        moveUp(focusedElement);
    }
});

pertePos.addEventListener('click', function() {
    let focusedElement = document.querySelector('#focus');
    if (focusedElement) {
        moveDown(focusedElement);
    }
});
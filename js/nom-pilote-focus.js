// Sélectionnez tous les éléments li dans #ranks
let elements = document.querySelectorAll('ol#ranks li');

// Ajoutez un écouteur d'événements à chaque élément li
elements.forEach((element) => {
    element.addEventListener('click', function(event) {
        // Enlevez l'id #focus de tous les éléments
        elements.forEach((el) => {
            el.id = el.id.replace('focus', '');
        });

        // Ajoutez l'id #focus à l'élément cliqué
        this.id = 'focus';

        // Empêchez l'événement de se propager aux éléments parent
        event.stopPropagation();
    });
});

// Ajoutez un écouteur d'événements au document pour enlever l'id #focus lorsque vous cliquez ailleurs
document.addEventListener('click', function(event) {
    // Si l'élément cliqué n'a pas la classe .bouger-pilotes, enlevez l'id #focus
    if (!event.target.classList.contains('bouger-pilotes')) {
        elements.forEach((el) => {
            el.id = el.id.replace('focus', '');
        });
    }
});
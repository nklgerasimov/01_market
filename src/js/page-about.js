const cards = document.querySelectorAll('.people__card__wripper');

cards.forEach(function(card){
    card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
    });
});

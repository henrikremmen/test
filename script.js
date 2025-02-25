document.addEventListener('DOMContentLoaded', function() {
    var lolElement = document.getElementById('lol');
    if (lolElement) {
        lolElement.addEventListener('click', function() {
            lolElement.style.opacity = '0';
        });
    }
});
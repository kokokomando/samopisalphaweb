document.getElementById('rotateRightButton').addEventListener('click', rotateRight);
document.getElementById('rotateLeftButton').addEventListener('click', rotateLeft);

function rotateRight() {
    const Rightelement = document.getElementById('app11');
    const Middleelement = document.getElementById('app');

    if (Rightelement && Middleelement) {
        Rightelement.id = 'app';
        Middleelement.id = 'app11';

        // Remove the onclick attribute from the app11 div
        Rightelement.removeAttribute('onclick');
        Rightelement.removeAttribute('style');

        // Add a z-index attribute to Middleelement
        Middleelement.removeAttribute('style');
        Middleelement.style.zIndex = '100';
        
        
    }
}

function rotateLeft() {
    const Leftelement = document.getElementById('app22');
    const Middleelement = document.getElementById('app');

    if (Leftelement && Middleelement) {
        // Swap the ids of Leftelement and Middleelement
        Leftelement.id = 'app';
        Middleelement.id = 'app22';

        // Remove the onclick attribute from the app22 div
        Leftelement.removeAttribute('onclick');

        // Add a z-index attribute to Middleelement
        Middleelement.style.zIndex = '100';
    }
}


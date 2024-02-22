// scripts.js

document.getElementById('rotateRightButton').addEventListener('click', rotateRight);
document.getElementById('rotateLeftButton').addEventListener('click', rotateLeft);

function rotateRight() {
    const Rightelement = document.getElementById('app11');
    const Middleelement = document.getElementById('app');

    if (Rightelement && Middleelement) {
        Rightelement.id = 'app';
        Middleelement.id = 'app11';

        Rightelement.removeAttribute('onclick');
        Rightelement.removeAttribute('style');

        Rightelement.style.zIndex = '100';
        Middleelement.style.zIndex = '10';
    }
}

function rotateLeft() {
    const Leftelement = document.getElementById('app22');
    const Middleelement = document.getElementById('app');

    if (Leftelement && Middleelement) {
        Middleelement.id = 'app22';
        Leftelement.id = 'app';

        Leftelement.removeAttribute('onclick');

        Leftelement.style.zIndex = '100';
        Middleelement.style.zIndex = '10';
    }
}

// Initial check on page load
function initialCheck() {
    if (window.innerWidth <= 800) {
        document.getElementById('rotateLeftButton').style.scale = '3.5';
        document.getElementById('rotateRightButton').style.scale = '3.5';
        document.getElementById('app11').style.left = '29%';
    } else if (window.innerWidth <= 1100) {
        document.getElementById('rotateLeftButton').style.scale = '4.5';
        document.getElementById('rotateRightButton').style.scale = '4.5';
        document.getElementById('app11').style.left = '39%';
    } else if (window.innerWidth <= 1400) {
        document.getElementById('rotateLeftButton').style.scale = '5';
        document.getElementById('rotateRightButton').style.scale = '5';
        document.getElementById('app11').style.left = '43%';
    } else {
        document.getElementById('rotateLeftButton').style.scale = '8';
        document.getElementById('rotateRightButton').style.scale = '8';
        document.getElementById('app11').style.left = '47%';
    }
}

initialCheck();

// Add an event listener for resize
window.addEventListener('resize', function () {
    initialCheck();
});

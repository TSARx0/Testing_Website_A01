const smallBox = document.querySelector('.small-box');
const bigBox = document.querySelector('.big-box');

let positionX = 0;
let positionY = 0;
let velocityX = 2;
let velocityY = 2;

function animate() {
    positionX += velocityX;
    positionY += velocityY;

    if (positionX + 50 >= 300 || positionX <= 0) {
        velocityX = -velocityX;
    }

    if (positionY + 50 >= 300 || positionY <= 0) {
        velocityY = -velocityY;
    }

    smallBox.style.left = positionX + 'px';
    smallBox.style.top = positionY + 'px';

    requestAnimationFrame(animate);
}

animate();

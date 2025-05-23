function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function goToPage2() {
    window.location.href = '2.html';
}

function goToPage1() {
    window.location.href = '1.html';
}
let currentImageIndex = 1;
const images = [
    "img/b.jpg",
    "img/bb.jpg",
    "img/bbb.jpg",
    "img/bbbb.jpg",
    "img/bbbbb.jpg",
    "img/bbbbbb.jpg",
    "img/bbbbbbb.jpg",
    "img/bt.jpg",
];
 
function transitionNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const image = document.querySelector('.circle img');
    image.src = images[currentImageIndex]; 
}


function transitionPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; 
    const image = document.querySelector('.circle img');
    image.src = images[currentImageIndex]; 
}
setInterval(transitionNextImage, 2000);

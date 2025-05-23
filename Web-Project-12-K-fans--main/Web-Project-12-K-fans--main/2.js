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
    "img/l.jpg",
    "img/ll.jpg",
    "img/lll.jpg",
    "img/llll.jpg",
    "img/lllll.jpg",
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
setInterval(transitionNextImage, 3000);

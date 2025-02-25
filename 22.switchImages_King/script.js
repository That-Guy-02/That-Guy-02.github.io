const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

let index = 0;
const container = document.getElementById('imageContainer');

function updateImage() {
    container.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}

container.addEventListener('click', updateImage);
updateImage();

const sentences = [
    "The ghouls at Monster High.",
    "Monster High means love and acceptence.",
    "Getting my first Frankie Stein doll made me excited to grow up into a gorgeous person.",
    "Roses are as sharp as vampire fangs.",
    "Don't judge a monster by their claws."
];

let currentIndex = 0;

const image = document.getElementById('image');
const textBox = document.getElementById('textBox');

// Set the initial text in the text box
textBox.value = sentences[currentIndex];

// Change the text when the image is clicked
image.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sentences.length;  // Cycle through the sentences
    textBox.value = sentences[currentIndex];
});

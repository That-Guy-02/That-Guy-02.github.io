const texts = [
    "Bartholomew at first. The idea was a selfsona that’s femme, skinny, and Melanie Martinez vibes.",
    "Purple skin and a Euphoria mug.",
    "Witchy woman, it’s giving something but I don’t know what.",
    "I saw WAP and I said “yes, this needs a sexy edge to it”.",
    "Okay, we’re going to resemble me a little bit more. Now you’re Dexter.",
    "The last one was boring. I feel like a demon sometimes? Oh, a cute demon man!",
    "Let’s bring the femininity back and make him more elegant.",
    "Nevermind! Let’s go full sexy and femme because that’s what I am, come on!",
    "Now this feels a little more “Dorzoluth”.",
    "Dorzoluth, let’s give you my body!",
    "Let’s expand the universe a bit.",
    "I think we finally got somewhere.",
];

const images = document.querySelectorAll('.images img');
const textOverlay = document.getElementById('textOverlay');

function updateText() {
    let scrollPosition = window.scrollY;
    let viewportHeight = window.innerHeight;

    images.forEach((img, index) => {
        let imgPosition = img.offsetTop;

        if (scrollPosition + viewportHeight / 2 >= imgPosition) {
            textOverlay.textContent = texts[index];
        }
    });
}

window.addEventListener('scroll', updateText);

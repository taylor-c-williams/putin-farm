const catImage = document.getElementById('cat');
const catSound = document.getElementById('cat-sound');

const dogImage = document.getElementById('dog');
const dogSound = document.getElementById('dog-sound');

const horseImage = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');

const titleArea = document.getElementById('title-area');

function playSoundAndChangeText(sound, animalName){
    sound.play();
    titleArea.textContent = animalName;
    setTimeout(() => {
        titleArea.textContent = 'Which Putin is your forbidden lover?';
    }, 2500);
}

catImage.addEventListener('click', ()=> {
    playSoundAndChangeText(catSound, 'Cat-Putin?');
});
dogImage.addEventListener('click', ()=> {
    playSoundAndChangeText(dogSound, 'Dog-Putin?');
});
horseImage.addEventListener('click', ()=> {
    playSoundAndChangeText(horseSound, 'Horse-Putin?');
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'h') {
        playSoundAndChangeText(horseSound, 'Horse-Putin');
    }
    if (event.key === 'd') {
        playSoundAndChangeText(dogSound, 'Dog-Putin');  
    }
    if (event.key === 'c') {
        playSoundAndChangeText(catSound, 'Cat-Putin');
    }
});
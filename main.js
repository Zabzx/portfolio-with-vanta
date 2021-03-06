//Typewriting Effect
function typeWriting() {
    const texts = ['Front End Web Developer', 'UI/UX Developer', 'Problem Solver.'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }

        currentText = texts[count]
        letter = currentText.slice(0, ++index)

        const typing = document.querySelector('.typing');
        typing.style.fontSize = '30px'
        typing.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }

        setTimeout(type, 100)
    }());
}
typeWriting();
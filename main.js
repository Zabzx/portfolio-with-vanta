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
        typing.style.fontSize = '20px'
        typing.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }

        setTimeout(type, 100)
    }());
}

//Navbar animation
function navBar() {
    const menuBtn = document.querySelector('.menu');
    const links = document.querySelectorAll('.navlinks li')

    menuBtn.addEventListener('click', () => {
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 3}s`
            }
        })
    })
}
navBar();
typeWriting();
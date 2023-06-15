import about from './about';
import home from './home';
const background = document.querySelector('.content');

home()

function test() {
    about()
}

let aboutButton = document.querySelector('.about_section');
aboutButton.addEventListener('click', test)
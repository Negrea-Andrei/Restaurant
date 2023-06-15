import about from './about';
import home from './home';

home()

let aboutButton = document.querySelector('.about_section');
aboutButton.addEventListener('click', about)
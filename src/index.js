import about from './about';
import home from './home';
import menu from './menu';
import contact from './contact';

home()

let aboutButton = document.querySelector('.about_section');
aboutButton.addEventListener('click', about);

let homeButton = document.querySelector('.home_section');
homeButton.addEventListener('click', home);

let menuButton = document.querySelector('.menu_section');
menuButton.addEventListener('click', menu);

let contactButton = document.querySelector('.contact_section');
contactButton.addEventListener('click', contact);

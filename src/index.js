import about from './about';
import home from './home';

const background = document.querySelector('.content');
background.innerHTML = '';
background.style.display = 'flex';
background.style.background = `url(D:\HTML\Restaurant\dist\b2193088b5c3438a025f.jpeg) center/cover`;

const text = document.createElement('div');
text.innerHTML = "Welcome to <br>Odin's seafood restaurant!"
text.className = "welcome";

background.appendChild(text);

let aboutButton = document.querySelector('.about_section');
aboutButton.addEventListener('click', about);

let homeButton = document.querySelector('.home_section');
homeButton.addEventListener('click', home);

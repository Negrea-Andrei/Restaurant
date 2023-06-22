import './home.css';

function home() {    
    const background = document.querySelector('.content');    
    background.innerHTML = '';
    background.style.display = 'flex';
    background.style.background = `url(6eb4940579414f7e5086.jpeg) center/cover`;    
    background.style.height = '100%';

    const text = document.createElement('div');
    text.innerHTML = "Welcome to <br>Odin's seafood restaurant!"
    text.className = "welcome";

    background.appendChild(text);
}

export default home;
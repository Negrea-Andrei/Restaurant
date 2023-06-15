import './home.css';

function home() {    
    const background = document.querySelector('.content');

    const text = document.createElement('div');
    text.innerHTML = "Welcome to <br>Odin's seafood restaurant!"
    text.classList.add('welcome');

    background.appendChild(text);
}

export default home;
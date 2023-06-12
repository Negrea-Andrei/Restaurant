import './home.css'

const background = document.createElement('div');
background.classList.add('content')

const text = document.createElement('div');
text.innerHTML= "Welcome to <br>Odin's seafood restaurant!"
text.classList.add('welcome');

background.appendChild(text);
document.body.appendChild(background)
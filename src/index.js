import laughing from './assets/laughing.svg';
import generateJoke from './generateJoke';
import './styles/main.scss';

const laughImg = document.getElementById('laughImg');

laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', () => generateJoke());

generateJoke();

import axios from 'axios';

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  axios.get('https://icanhazdadjoke.com', config).then((response) => {
    document.getElementById('joke').innerHTML = response.data.joke;
  });
}

export default generateJoke;

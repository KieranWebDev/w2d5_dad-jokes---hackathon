const joke = document.querySelector('#joke');

//fetch data and display joke
fetch('https://icanhazdadjoke.com/', {
  headers: { accept: 'application/json' },
});

async function getJoke() {
  let response = await fetch('https://icanhazdadjoke.com/', {
    headers: { accept: 'application/json' },
  });
  let jsonJokeData = await response.json();

  joke.innerText = jsonJokeData.joke;
  console.log(jsonJokeData.joke);
}

getJoke();

//get a new joke button
newJokeBtn = document.querySelector('#new-joke');
newJokeBtn.addEventListener('click', getJoke);

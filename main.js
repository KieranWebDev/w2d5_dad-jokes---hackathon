
const jokeList = document.querySelector("#joke")

// fetch a dad joke
fetch('https://icanhazdadjoke.com/', {
  headers: { accept: 'application/json' },
});

async function getJoke() {
  let response = await fetch('https://icanhazdadjoke.com/', {
    headers: { accept: 'application/json' },
  });
  let jsonJokeData = await response.json();
  jokeList.innerText = jsonJokeData.joke;
  console.log(jsonJokeData.joke);
  
}

getJoke();

const joke = jokeList.innerText 

console.log(joke)
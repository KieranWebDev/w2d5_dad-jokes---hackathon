console.log('test');

// fetch a dad joke
fetch('https://icanhazdadjoke.com/', {
  headers: { accept: 'application/json' },
});

async function getJoke() {
  let response = await fetch('https://icanhazdadjoke.com/', {
    headers: { accept: 'application/json' },
  });
  let jsonJokeData = await response.json();
  console.log(jsonJokeData.joke);
}

getJoke();
// console.log(jsonJokeData.joke);

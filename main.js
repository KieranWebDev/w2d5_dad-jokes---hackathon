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



// LIKE
const list = document.querySelector("#theList");
likeButton = document.querySelector("#like-list");


let likeJokeList = function(){
    let newListItem = document.createElement("li");
newListItem.innerText = joke.innerText;
list.appendChild(newListItem);
}

likeButton.addEventListener("click", likeJokeList)


// DISLIKE

const listTwo = document.querySelector("#listTwo");
dislikeButton = document.querySelector("#dislike-list");


let dislikeJokeList = function(){
    let secondListItem = document.createElement("li");
secondListItem.innerText = joke.innerText;
listTwo.appendChild(secondListItem);
}

dislikeButton.addEventListener("click", dislikeJokeList)


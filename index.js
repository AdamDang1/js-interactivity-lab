// console.log('hello world!')
const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault();

    let inputField = document.querySelector('input');

    let movie = document.createElement('li');

    let movieTitle = document.createElement('span');
    movieTitle.addEventListener('click', crossOffMovie);
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteMovie);

    let list = document.querySelector('ul');
    list.appendChild(movie);

    inputField.value = '';
}

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = `${event.target.previousSibling.textContent} was deleted!`;
    revealMessage();
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');

    if(event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`;
    } else {
        message.textContent = `${event.target.textContent} added back!`;
    }
    revealMessage();
}

const revealMessage = () => {
    message.classList.remove('hide');
    setTimeout (() => {
        message.classList.add('hide');
    }, 1000);
}

document.querySelector('form').addEventListener('submit', addMovie);
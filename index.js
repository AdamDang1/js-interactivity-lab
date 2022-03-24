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
    message.textContent = 'Movie was deleted!'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');

    if(event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}

document.querySelector('form').addEventListener('submit', addMovie)
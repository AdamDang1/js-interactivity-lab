// console.log('hello world!')

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
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');
}

document.querySelector('form').addEventListener('submit', addMovie)
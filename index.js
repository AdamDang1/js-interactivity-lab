// console.log('hello world!')

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let list = document.querySelector('ul')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    list.appendChild(movie)

    inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie)
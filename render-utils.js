export function renderMovies(movies) {
    const div = document.createElement('div');
    div.classList.add('movie-card');

    const titleEl = document.createElement('h3');
    titleEl.textContent = movies.title;

    const genreEl = document.createElement('p');
    genreEl.textContent = movies.genre;

    const locEl = document.createElement('p');
    locEl.textContent = movies.localization;

    div.append(titleEl, genreEl, locEl);

    return div;
}

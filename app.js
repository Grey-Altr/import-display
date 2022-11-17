/* Imports */
import { fetchMovies } from './fetch-utils.js';
import { renderMovies } from './render-utils.js';
/* Get DOM Elements */
const moviesContainer = document.getElementById('movies-container');
/* State */

/* Events */

/* Display Functions */
window.addEventListener('load', async () => {
    const movies = await fetchMovies();
    for (let movie of movies) {
        const movieEl = renderMovies(movie);
        moviesContainer.append(movieEl);
    }
});
// (don't forget to call any display functions you want to run on page load!)

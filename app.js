/* Imports */
import { fetchMovies, fetchCities } from './fetch-utils.js';
import { renderMovies, renderCities } from './render-utils.js';
/* Get DOM Elements */
const moviesContainer = document.getElementById('movies-container');
const citiesContainer = document.getElementById('cities-container');
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

window.addEventListener('load', async () => {
    const cities = await fetchCities();
    for (let city of cities) {
        const cityEl = renderCities(city);
        citiesContainer.append(cityEl);
    }
});

// (don't forget to call any display functions you want to run on page load!)

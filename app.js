/* Imports */
import { fetchMovies, fetchCities, fetchCars, fetchPeople } from './fetch-utils.js';
import { renderMovies, renderCities, renderCars, renderPeople } from './render-utils.js';
/* Get DOM Elements */
const moviesContainer = document.getElementById('movies-container');
const citiesContainer = document.getElementById('cities-container');
const carsContainer = document.getElementById('cars-container');
const peopleContainer = document.getElementById('people-container');
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

window.addEventListener('load', async () => {
    const cars = await fetchCars();
    for (let car of cars) {
        const carEl = renderCars(car);
        carsContainer.append(carEl);
    }
});

window.addEventListener('load', async () => {
    const people = await fetchPeople();
    for (let person of people) {
        const personEl = renderPeople(person);
        peopleContainer.append(personEl);
    }
});

// (don't forget to call any display functions you want to run on page load!)

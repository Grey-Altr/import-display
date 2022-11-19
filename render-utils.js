export function renderMovies(movies) {
    const div = document.createElement('div');
    div.classList.add('movies-card');

    const titleEl = document.createElement('h3');
    titleEl.textContent = movies.title;

    const ul = document.createElement('ul');
    for (let genre of movies.genre) {
        const li = document.createElement('li');
        li.textContent = genre;
        ul.append(li);
    }

    const genreEl = document.createElement('p');
    genreEl.textContent = 'Genre:';
    genreEl.append(ul);

    const locEl = document.createElement('p');
    locEl.textContent = movies.localization;

    div.append(titleEl, genreEl, locEl);

    return div;
}

export function renderCities(cities) {
    const div = document.createElement('div');
    div.classList.add('cities-card');

    const cityEl = document.createElement('h3');
    cityEl.textContent = cities.city;

    const countryEl = document.createElement('p');
    countryEl.textContent = cities.country;

    const cCodeEl = document.createElement('p');
    cCodeEl.textContent = cities.country_code;

    const postalEl = document.createElement('p');
    postalEl.textContent = cities.postal_code;

    div.append(cityEl, countryEl, cCodeEl, postalEl);

    return div;
}

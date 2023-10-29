async function fetchMovieData() {
    try {
        const response = await fetch('https://portiaportia.github.io/json/movies.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const moviesData = await response.json();
        
        const container = document.querySelector('.container');
        moviesData.forEach((movie) => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie';
            
            const movieImage = document.createElement('img');
            movieImage.src = `https://portiaportia.github.io/json/${movie.img}`;
            movieCard.appendChild(movieImage);
            
            const textContent = document.createElement('div');
            textContent.className = 'text-content';
            
            const movieTitle = document.createElement('h2');
            movieTitle.textContent = movie.title;
            textContent.appendChild(movieTitle);
            
            const directorLabel = document.createElement('p');
            directorLabel.textContent = `Director: ${movie.director}`;
            textContent.appendChild(directorLabel);
            
            const actorsLabel = document.createElement('p');
            actorsLabel.textContent = `Actors: ${movie.actors.join(', ')}`;
            textContent.appendChild(actorsLabel);
            
            const yearLabel = document.createElement('p');
            yearLabel.textContent = `Year Released: ${movie.year}`;
            textContent.appendChild(yearLabel);
            
            const genresLabel = document.createElement('p');
            genresLabel.textContent = `Genres: ${movie.genres.join(', ')}`;
            textContent.appendChild(genresLabel);
            
            const movieDescription = document.createElement('p');
            movieDescription.textContent = movie.description;
            textContent.appendChild(movieDescription);
            
            movieCard.appendChild(textContent);
            container.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

window.addEventListener('load', fetchMovieData);
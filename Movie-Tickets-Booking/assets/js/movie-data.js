// Movie database
const movies = {
    1: {
        id: 1,
        title: "The Dark Knight",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        rating: 9.0,
        duration: "2h 32m",
        genre: "Action, Crime, Drama",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        releaseDate: "July 18, 2008",
        director: "Christopher Nolan",
        cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
        language: "English"
    },
    2: {
        id: 2,
        title: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        rating: 8.8,
        duration: "2h 28m",
        genre: "Action, Adventure, Sci-Fi",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        releaseDate: "July 16, 2010",
        director: "Christopher Nolan",
        cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
        language: "English"
    },
    3: {
        id: 3,
        title: "Interstellar",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        rating: 8.6,
        duration: "2h 49m",
        genre: "Adventure, Drama, Sci-Fi",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        releaseDate: "November 7, 2014",
        director: "Christopher Nolan",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        language: "English"
    }
};

// Function to load movie data on booking page
function loadMovieDetails() {
    console.log('loadMovieDetails function called');
    
    // Get movie ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));
    
    console.log('Movie ID from URL:', movieId);
    
    // Get movie data
    const movie = movies[movieId];
    
    console.log('Movie data:', movie);
    
    if (movie) {
        // Update movie poster
        const poster = document.getElementById('moviePoster');
        if (poster) {
            poster.src = movie.poster;
            poster.alt = movie.title;
            console.log('Updated poster to:', movie.poster);
        }
        
        // Update movie title
        const title = document.getElementById('movieTitle');
        if (title) {
            title.textContent = movie.title;
            console.log('Updated title to:', movie.title);
        }
        
        // Update rating
        const rating = document.getElementById('movieRating');
        if (rating) {
            rating.innerHTML = `<i class="fas fa-star"></i> ${movie.rating}/10`;
            console.log('Updated rating to:', movie.rating);
        }
        
        // Update duration
        const duration = document.getElementById('movieDuration');
        if (duration) {
            duration.innerHTML = `<i class="fas fa-clock"></i> ${movie.duration}`;
            console.log('Updated duration to:', movie.duration);
        }
        
        // Update genre
        const genre = document.getElementById('movieGenre');
        if (genre) {
            genre.innerHTML = `<i class="fas fa-film"></i> ${movie.genre}`;
            console.log('Updated genre to:', movie.genre);
        }
        
        // Update description
        const description = document.getElementById('movieDescription');
        if (description) {
            description.textContent = movie.description;
            console.log('Updated description to:', movie.description);
        }
        
        // Update additional info
        document.getElementById('movieReleaseDate').textContent = movie.releaseDate;
        console.log('Updated release date to:', movie.releaseDate);
        document.getElementById('movieDirector').textContent = movie.director;
        console.log('Updated director to:', movie.director);
        document.getElementById('movieCast').textContent = movie.cast;
        console.log('Updated cast to:', movie.cast);
        document.getElementById('movieLanguage').textContent = movie.language;
        console.log('Updated language to:', movie.language);
    } else {
        console.log('Movie not found, redirecting to index');
        window.location.href = 'index.html';
    }
}

// Call the function when the page loads
console.log('Script loaded, checking document ready state');
if (document.readyState === 'loading') {
    console.log('Document is still loading, adding DOMContentLoaded event listener');
    document.addEventListener('DOMContentLoaded', loadMovieDetails);
} else {
    console.log('Document is already loaded, calling loadMovieDetails directly');
    loadMovieDetails();
}

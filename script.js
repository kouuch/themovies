const API_KEY = "33302caa4b9d1494b26ae2686ee8dd30"

let page = 1;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
const API_IMG_URL  = "https://image.tmdb.org/t/p/w1280"

async function getMovies(url){
    const respon = await fetch (url)
    const data = await respon.json()
    showMovies(data.results)
}

function showMovies (movies){
    moviesEl.innerHTML = ''
    movies.forEach(movie => {
        const {title, poster_path, overview}= movie //data tertampung
        const moviesCard = document.createElement("div")
        moviesCard.innerHTML = `
        <img src="${poster_path}">
        <p>${title}</p>`
        moviesEl.appendChild(moviesCard)
    });
}

getMovies(API_URL)
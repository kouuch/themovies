const API_KEY = "33302caa4b9d1494b26ae2686ee8dd30"

let page = 1;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`

async function getMovies(url){
    const respon = await fetch (url)
    const data = await respon.json()
    showMovies(data.results)//showMovies di tangkap -> function showMovies
}

function showMovies (movies){
    //document.getElementById("movies")
    moviesEl.innerHTML = ''
    movies.forEach(movie => {
        //console.log(movie.title) //proses mapping
        const {title, poster_path, overview}= movie //data tertampung
        //console.log(title, poster_path, overview)
        const moviesCard = document.createElement("div")
        moviesCard.innerHTML = `<p>${title}</p>`
        moviesEl.appendChild(moviesCard)
    });
}

getMovies(API_URL)
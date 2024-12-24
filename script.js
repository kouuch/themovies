const API_KEY = "33302caa4b9d1494b26ae2686ee8dd30"

let page = 1;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`

async function getMovies(url){
    const respon = await fetch (url)
    const data = await respon.json()
    showMovies(data.results)
}

function showMovies (movies){
    console.log("from data movies:", movies)
}

getMovies(API_URL)
const API_KEY = "33302caa4b9d1494b26ae2686ee8dd30"

let page = 1;
const API_URL = () =>`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
const API_IMG_URL  = "https://image.tmdb.org/t/p/w1280"
const API_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
async function getMovies(url){
    const respon = await fetch (url)
    const data = await respon.json()
    showMovies(data.results)
    // console.log(data)
}

function updatePage(){
    getMovies(API_URL())
    currentPage.innerHTML = page
}

function nextPage(){
    if (page >= 1){
        page += 1 ;
        updatePage()
    }
}

function prevPage(){
    if(page > 1){
        page -= 1;
        updatePage()
    }
}

next.addEventListener("click",()=>{
    nextPage()
})

prev.addEventListener("click",()=>{
    prevPage()
})

function showMovies (movies){
    moviesEl.innerHTML = ''
    movies.forEach(movie => {
        const {title, poster_path, overview}= movie //data tertampung
        const moviesCard = document.createElement("div")
        moviesCard.classList.add("movie") //-> <div id="movie"></div>
        moviesCard.innerHTML = `
        <img src="${API_IMG_URL + poster_path}" alt="the movie images"/>
        <div class= "detail">
            <h4>${title}</h4>  
            <p>${overview.substring(0, 100)}...</p>
        </div>
        `
        moviesEl.appendChild(moviesCard)
    })
}

searchForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const searchQuery = search.value

    if(searchQuery !== ''){
        getMovies(API_SEARCH_URL + searchQuery)
        search.value = ''
    }
})

updatePage()

title.addEventListener("click", () =>{
    location.reload()
})
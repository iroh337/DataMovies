var imgAPI = "https://image.tmdb.org/t/p/w280"
var  apiKeyTmdb = "e6a8c3a735702cbd286b2abcb9d6dc1a"
var searchURL =  `https://api.themoviedb.org/3/search/movie?api_key=${apiKeyTmdb}&query=`


const input = document.querySelector(".input")

const search = document.querySelector("#search")

search.addEventListener('click', getDataMovies)



async function pushJson(){
    // const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKeyTmdb}&query=${movie}`).then(response => response.json())
    const pop_data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKeyTmdb}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`).then(response=> response.json())
    init(pop_data)
}  



function init(pop_data) {
    const other_movies = document.querySelector(".other-movies")
    other_movies.innerHTML=''
    for( var i = 0 ; i < 12 ; i++){
        
        other_movies.innerHTML += `
        <div class="movies movie-${i}" style="position:relative;">
            <img src="https://image.tmdb.org/t/p/w300/${pop_data.results[i].poster_path}">
            <a style="position:absolute;" href="./details/details.html?idmovie=${pop_data.results[i].id}"></a>
        </div>
        `
    }
    return init;
}
pushJson()

function clearAll(){
    const result = document.querySelector('.result')
    result.remove(img)
}
async function getDataMovies(){
    var movie = input.value
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKeyTmdb}&query=${movie}`).then(response => response.json())
    const other_movies = document.querySelector(".other-movies")
    const result = document.querySelector('.result')
    result.innerHTML = ''
    
    console.log(data)
    other_movies.style.display = 'none'
    for( var i = 0 ; i < data.results.length ; i++){
        result.innerHTML += `
        <div class="movies movie-${i}" style="position:relative;">
            <img id="img-movies" src="https://image.tmdb.org/t/p/w300/${data.results[i].poster_path}" alt="${data.results[i].title}">
            <a style="position:absolute;" href="./details/details.html?idmovie=${data.results[i].id}"></a>
        </div>
        `
    }
    if (data.results.length === 0){
        result.innerHTML = `<div class="spinner-border" role="status">
        <span class="sr-only"></span>
        </div>`
        setTimeout(function() {
            result.innerHTML = "<h1>Movie not Found</h1>"
        }, 1500);
    }

}

input.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        getDataMovies()
    }
})
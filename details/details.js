const urlParam = new URLSearchParams(window.location.search)
var apiKeyTmdb = "e6a8c3a735702cbd286b2abcb9d6dc1a"
var imgAPI = "https://image.tmdb.org/t/p/w280"



const idmovie =  urlParam.get("idmovie")

// console.log(idmovie)

async function showDetails(){
    // const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKeyTmdb}&query=${movie}`).then(response => response.json())
    const data = await fetch(`https://api.themoviedb.org/3/movie/${idmovie}?api_key=${apiKeyTmdb}`).then(response => response.json())

    // console.log(data)

    var image_post = document.querySelector(".image-post")
    image_post.src = `https://image.tmdb.org/t/p/w300${data.poster_path}`

    var title = document.querySelector('.title')
    title.innerHTML = data.title

    var originalTitle = document.querySelector('.span-original-title')
    originalTitle.innerText = data.original_title

    var overView = document.querySelector('.overview')
    overView.innerHTML = data.overview
    
    var dates = document.querySelector('.date')
    dates.innerHTML = data["release_date"]

}

showDetails()

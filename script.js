var btn = document.querySelector('.btn')
var movie_txt = document.querySelector('.movie')
var display = document.querySelector('.display')
var apiKEY = "80d4ba0b"
var container = document.querySelector('.container')



btn.addEventListener('click', () => {
    getMovie()
})



async function getMovie(){
    let movie = movie_txt.value
    const data = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${apiKEY}`).then(response => response.json())

    console.log(data)  
    // console.log(data['Actors']) 
    

    if(movie == ''){
        display.innerHTML = `<h3 style='color:white; text-align:center;''>Please do not leave the field empty.</h3>`
        
        
    }else if(data.Response === 'True'){
        container.style.marginTop = '20%'
        display.innerHTML = `<img class = "img-movie" src='${data['Poster']}'></img>
        <div class="areatitle">
            <p class="title"><span> Title:</span> ${data['Title']}</p>
            <p class = "year"><span>Year:</span> ${data['Year']}</p>
            <p class = "type"><span>Type:</span> ${data['Type']}</p>
            <p class = "genre"><span>Genre:</span> ${data['Genre']}</p>
        </div>
        <div class="info">
            <p class = "plot">${data['Plot']}</p>
            <p class='actors'><span>Cast:</span> ${data['Actors']}</p>
            <p class = "awards"><span>Awards:</span> ${data['Awards']}</p>
            <p class = "director"><span>Director:</span> ${data['Director']}</p>
            </div>
            
        `
    }else{
        display.innerHTML = `<h3 style='margin:30px auto;'>Movie/Serie not found.</h3>`
        
    }
}
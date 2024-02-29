
var apiKEY = "80d4ba0b"






async function getMovie(){
   
    const data = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${apiKEY}`).then(response => response.json())
}
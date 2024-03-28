let input=document.getElementById("input")
let search=document.getElementById("search-button")
let weather=document.getElementById("weather")
let key='8f5a641e3480e1aa7cac25fa7089748d'

search.addEventListener("click",function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        let temp=Math.round(data.main.temp-273.15)
        let weatherdesc=data.weather[0].description
        weather.innerHTML=`
                     <h3>Temperature: ${temp}</h3>
                     <h3>Description:${weatherdesc}</h3>
        `
    })
    .catch(error=>{
        weather.innerHTML=`<p>${error}</p>`
    })
})
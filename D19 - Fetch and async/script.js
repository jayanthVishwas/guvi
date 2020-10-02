let header = document.createElement("header")
header.innerHTML="Rest countries with climate data"
header.style.fontSize="2rem"

let row1 = document.createElement("div")
row1.setAttribute("class", "row")

fetchData()

async function fetchData() {
  let response = await fetch("https://restcountries.eu/rest/v2/all")
  let data
  if (response.ok) {
    data = await response.json();
  } else {
    console.log("HTTP-Error: " + response.status);
    return
  }

  getDetails(data)

}

function getDetails(data) {
  console.log(data)
  let dict = {}

  for (let i = 0; i < data.length; i++) {
    dict = {
      capital: data[i].capital,
      latlng: data[i].latlng,
      region: data[i].region,
      currencies: data[i].currencies,
      flag: data[i].flag,
      name: data[i].name,
      currencies: data[i].currencies
    }

    createCards(dict)
  }


}



function createCards(dict) {
  let div1 = document.createElement("div")
  div1.setAttribute("class", "col-sm-6 col-md-4 col-lg-3 cards")

  let div2 = document.createElement("div")
  div2.setAttribute("class", "card")

  let cardHeader = document.createElement("div")
  cardHeader.setAttribute("class", "card-header")
  cardHeader.innerHTML = dict.name

  let image = document.createElement("img")
  image.setAttribute("class", "card-img-top")
  image.src = dict.flag
  image.alt = "card image cap"

  let div3 = document.createElement("div")
  div3.setAttribute("class", "card-body")


  let capital = document.createElement("h6")
  capital.innerHTML = "Capital: " + dict.capital


  let latlng = document.createElement("h6")
  latlng.innerHTML = "Lat & Long: " + dict.latlng


  let region = document.createElement("h6")
  region.innerHTML = "Region: " + dict.region


  let currencyCode = document.createElement("h6")
  currencyCode.innerHTML = "Country Code: " + dict.currencies[0].code


  let climate = document.createElement('h6');


  let button = document.createElement("button")
  button.innerHTML = "Click for Weather"
  button.type = "button"


  button.onclick= async function(){
    try{
      let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+dict.name + "&appid=016a51d1d7c6d1ad566fc5a8139d771e")
      let data
      if (response.ok) {
        data = await response.json();
        climate.innerHTML = "Climate: " +(data.main.temp-273.15).toFixed(2) + "°C, "+ data.weather[0].description
      } else {
        console.log("HTTP-Error: " + response.status);
        climate.innerHTML="Climate data not available"
        return
      }
    }
    catch(err){
      console.log(err)
    }


  }
  button.setAttribute("class","btn btn-outline-dark")

  div3.append(capital, latlng, region, currencyCode,climate, button)
  div2.append(cardHeader,image, div3)
  div1.append(div2)
  row1.append(div1)

}



document.body.append(header,row1)

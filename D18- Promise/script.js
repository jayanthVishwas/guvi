let row1 = document.getElementById("row1")

let promise = new Promise(function(resolve, reject) {
  let request = new XMLHttpRequest()

  let url = "https://restcountries.eu/rest/v2/all"

  request.open('GET', url, true)

  request.send();
  let data
  request.onload = function(){
    data = JSON.parse(this.response)
    if(this.readyState===4 && this.status ===200){
      resolve(data)
    }else{
      reject("error in the API server")
    }
  }
})

promise.then(function(data){
console.log(getDetails(data))

})


function getDetails(data){
console.log(data)
let dict={}

  for(let i=0; i<data.length; i++){
     dict= {capital: data[i].capital,
            latlng: data[i].latlng,
            region: data[i].region,
            currencies:data[i].currencies,
          flag: data[i].flag,
        name: data[i].name,
        currencies: data[i].currencies}

    createCards(dict)
  }


}



function createCards(dict){
  let div1 = document.createElement("div")
  div1.setAttribute("class","col-sm-6 col-md-4 col-lg-3 cards")

  let div2 = document.createElement("div")
  div2.setAttribute("class","card")

  let image = document.createElement("img")
  image.setAttribute("class","card-img-top")
  image.src = dict.flag
  image.alt="card image cap"

  let div3 = document.createElement("div")
  div3.setAttribute("class","card-body")

  let name = document.createElement("h6")
  name.innerHTML = "Name: "+dict.name

  let capital = document.createElement("h6")
  capital.innerHTML = "Capital: " +dict.capital

  let latlng = document.createElement("h6")
  latlng.innerHTML = "Lat & Long: "+dict.latlng

  let region = document.createElement("h6")
  region.innerHTML = "Region: "+dict.region

  let currencyCode = document.createElement("h6")
  currencyCode.innerHTML = "Currency Code: "+dict.currencies[0].code

  let currencyName = document.createElement("h6")
  currencyName.innerHTML = "Currency Name: "+dict.currencies[0].name

  let currencySymbol = document.createElement("h6")
  currencySymbol.innerHTML = "Currency Symbol: "+dict.currencies[0].symbol


  div3.append(name,capital,latlng,region, currencyCode,currencyName,currencySymbol)
  div2.append(image,div3)
  div1.append(div2)
  row1.append(div1)

}

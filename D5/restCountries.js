let request = new XMLHttpRequest()

let url = "https://restcountries.eu/rest/v2/all"

request.open('GET',url, true)

request.send();
let data
request.onload = function(){
  data = JSON.parse(this.response)

  // Get the countries in asia - filter
  const asias = data.filter((x)=> x.region==="Asia")
  console.log(asias)

  // Get the countries with population less than 2L - fliter
  const popls= data.filter((x)=> x.population<200000)
  console.log(popls)

  // Bumpup the current population  of all the counteirs by 1L - Map
  const newData = data.map((x) => {
    x.population+=100000
    return x
  })
  console.log(newData)

  // convert all the names in capital - map
  const caps = data.map((x)=> {
    x.name = x.name[0].toUpperCase()+x.name.slice(1)
    return x
  })
  console.log(caps)

  // print follwoig details  name , capital , flag  - foreach,filter
  data.forEach(function(x){
    console.log(x.name,x.capital,x.flag)
  })

  // Print the total population of the countries  - reduce
  const totPop = data.reduce((total,x)=> total+x.population,0)
  console.log(totPop)

  // Print the total population of the countries in asia - filter & reduce
  const asiaCountries = data.filter((x)=>{
    if(x.region==="Asia") return x
  })
  const asiaPop = asiaCountries.reduce((total,x)=>total+x.population,0)
  console.log(asiaPop)




}

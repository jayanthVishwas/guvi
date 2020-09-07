let request = new XMLHttpRequest()

let url = "http://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=016a51d1d7c6d1ad566fc5a8139d771e"



request.open('GET',url, true)

request.send();

request.onload = function(){
  let data = JSON.parse(this.response)
  console.log(data)
}

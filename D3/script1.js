let request = new XMLHttpRequest()
let url = "https://dog.ceo/api/breeds/list/all";




request.open('GET',url, true)

request.send();

request.onload = function(){
  let data = JSON.parse(this.response)
  console.log(data)
}

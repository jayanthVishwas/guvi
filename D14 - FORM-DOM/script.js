let main = document.createElement("div")
main.setAttribute("class","mainDiv")

let form = document.createElement("form")

let label1 = document.createElement("label")
label1.innerHTML="First Name"
let firstName = document.createElement("input")

let br1 = document.createElement("br")

let label2 = document.createElement("label")
label2.innerHTML="Last Name"
let lastName = document.createElement("input")
let br2 = document.createElement("br")

let label3 = document.createElement("label")
label3.innerHTML="Address"
let address = document.createElement("input")
let br3 = document.createElement("br")

let label4 = document.createElement("label")
label4.innerHTML="Pin code"
let pinCode = document.createElement("input")
let br4 = document.createElement("br")

let label5 = document.createElement("label")
label5.innerHTML="Gender"
let gender = document.createElement("input")
let br5 = document.createElement("br")

let label6 = document.createElement("label")
label6.innerHTML="Food"
let food = document.createElement("select")
food.multiple=true
food.innerHTML='<option value="Dosa">Dosa</option> <option value="biryani">biryani</option> <option value="pizza">pizza</option> <option value="oats">oats</option> <option value="salad">salad</option>'

let br6 = document.createElement("br")

let label7 = document.createElement("label")
label7.innerHTML="State"
let state = document.createElement("input")
let br7 = document.createElement("br")

let label8 = document.createElement("label")
label8.innerHTML="Country"
let country = document.createElement("input")
let br8 = document.createElement("br")


let table = document.createElement("table")
let tr1 = document.createElement("tr")

let th1 = document.createElement("th")
th1.innerHTML="First Name"

let th2 = document.createElement("th")
th2.innerHTML="Last Name"

let th3 = document.createElement("th")
th3.innerHTML="Address"

let th4 = document.createElement("th")
th4.innerHTML="Pin Code"

let th5=document.createElement("th")
th5.innerHTML="Gender"

let th6=document.createElement("th")
th6.innerHTML="Food"

let th7=document.createElement("th")
th7.innerHTML="State"

let th8=document.createElement("th")
th8.innerHTML="Country"


table.append(tr1)
tr1.append(th1,th2,th3,th4,th5,th6,th7,th8)

document.body.append(main)

main.append(form)

form.append(label1,firstName,br1, label2,lastName,br2, label3,address,br3, label4,pinCode,br4, label5,gender,br5, label6,food,br6, label7,state,br7, label8,country,br8)

form.append(table)

let submit = document.createElement("button")
submit.innerHTML="Submit"
submit.onclick=getValues
form.append(submit)

function getValues(){
  console.log("hit")
  let trTemp = document.createElement("tr")

  let td1 = document.createElement("td")
  td1.innerHTML=firstName.value

  let td2 = document.createElement("td")
  td2.innerHTML=lastName.value

  trTemp.append(td1,td2)
  table.append(trTemp)
}

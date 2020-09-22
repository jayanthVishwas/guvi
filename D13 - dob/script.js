let divMain = document.createElement("div")
divMain.setAttribute("class","random")

let heading1 = document.createElement("h3")
heading1.innerHTML="Unique 8-digit random number"
heading1.setAttribute("class","heading")

let generateBtn = document.createElement("button")
generateBtn.innerHTML="Generate"
generateBtn.setAttribute("class","btn btn-success button1")

let output = document.createElement("div")
output.setAttribute("class","outputField")

document.body.append(divMain)
divMain.append(heading1)
divMain.append(generateBtn)
divMain.append(output)

generateBtn.onclick=generate



function generate(){
  function f1(op,count){
      if(count===7) return op
      let n = Math.floor(Math.random() * 9)
      while(op.includes(n)){
          n = Math.floor(Math.random() * 9)
      }
      op.push(n)
      count++
      f1(op,count)
  }

  let op=[]
  let n = Math.floor(Math.random() * 9)
  op.push(n)

  f1(op,0)

  output.innerHTML=op.join("")
}


//DOB
let divMain2 = document.createElement("div")
divMain2.setAttribute("class","dateTime")

let heading2 = document.createElement("h3")
heading2.innerHTML="Date Manipulation"
heading2.setAttribute("class","heading")

let heading3 = document.createElement("h3")
heading3.innerHTML="Enter DOB"
heading3.setAttribute("class","heading")

let inputDate = document.createElement("input")
inputDate.setAttribute("class","dateText")
inputDate.value="Month/Day/Year"

let field1 = document.createElement("div")
field1.setAttribute("class","fields")
let dcDiv = document.createElement("div")
dcDiv.innerHTML="Day count"
let dayCountOp = document.createElement("div")
dayCountOp.setAttribute("class","op-fields")

let field2 = document.createElement("div")
field2.setAttribute("class","fields")
let yearDiffDiv = document.createElement("div")
yearDiffDiv.innerHTML="Year Difference"
let yearDiffOp = document.createElement("div")
yearDiffOp.setAttribute("class","op-fields")

let field3 = document.createElement("div")
field3.setAttribute("class","fields")
let monthDiffDiv = document.createElement("div")
monthDiffDiv.innerHTML="Month Difference"
let monthDiffOp = document.createElement("div")
monthDiffOp.setAttribute("class","op-fields")

let field4 = document.createElement("div")
field4.setAttribute("class","fields")
let minDiffDiv = document.createElement("div")
minDiffDiv.innerHTML="Minute Difference"
let minDiffOp = document.createElement("div")
minDiffOp.setAttribute("class","op-fields")

let field5 = document.createElement("div")
field5.setAttribute("class","fields")
let secDiffDiv = document.createElement("div")
secDiffDiv.innerHTML="Second Difference"
let secDiffOp = document.createElement("div")
secDiffOp.setAttribute("class","op-fields")

let field6 = document.createElement("div")
field6.setAttribute("class","fields")
let milisecDiffDiv = document.createElement("div")
milisecDiffDiv.innerHTML="Milli Second Difference"
let milisecDiffOp = document.createElement("div")
milisecDiffOp.setAttribute("class","op-fields")

let get = document.createElement("button")
get.setAttribute("class", "button1")
get.innerHTML="Get"
get.setAttribute("class","btn btn-success button1")

document.body.append(divMain2)
divMain2.append(heading2)
divMain2.append(heading3)
divMain2.append(inputDate)

divMain2.append(field1)
field1.append(dcDiv)
field1.append(dayCountOp)

divMain2.append(field2)
field2.append(yearDiffDiv)
field2.append(yearDiffOp)

divMain2.append(field3)
field3.append(monthDiffDiv)
field3.append(monthDiffOp)

divMain2.append(field4)
field4.append(minDiffDiv)
field4.append(minDiffOp)

divMain2.append(field5)
field5.append(secDiffDiv)
field5.append(secDiffOp)

divMain2.append(field6)
field6.append(milisecDiffDiv)
field6.append(milisecDiffOp)

divMain2.append(get)


get.onclick= parseDates
inputDate.onclick=function(){
  inputDate.value=""
}
function parseDates(){

let today = new Date()

let todaydate = ''+ (today.getMonth()+1) +'/'+ today.getDate() +'/'+ today.getFullYear()

let date1 = new Date(inputDate.value)
let date2 = new Date(todaydate)

var Difference_In_Time = date2.getTime() - date1.getTime();

dayCountOp.innerHTML = Difference_In_Time / (1000 * 3600 * 24);

yearDiffOp.innerHTML = date2.getYear()-date1.getYear()

monthDiffOp.innerHTML  = Math.abs(Math.round(Difference_In_Time / (1000 * 3600 * 24*7*4))) ;

minDiffOp.innerHTML = Difference_In_Time/(1000*60)

secDiffOp.innerHTML = Difference_In_Time/(1000)

milisecDiffOp.innerHTML= Difference_In_Time

}


let skeleton = document.createElement("div")
skeleton.setAttribute("class","skeleton")

//textarea

let inp = document.createElement("input")
inp.size=10
inp.setAttribute("class","inp")
skeleton.append(inp)

let container=document.createElement("div")
container.setAttribute("class","container")

let btn1 = createbutton(1)
let btn2 = createbutton(2)
let btn3 = createbutton(3)
let btn4 = createbutton(4)
let btn5 = createbutton(5)
let btn6 = createbutton(6)
let btn7 = createbutton(7)
let btn8 = createbutton(8)
let btn9 = createbutton(9)
let btn0 = createbutton(0)
let btnP = createbutton("+")
let btnM = createbutton("-")
let btnPr = createbutton("*")
let btnD = createbutton("/")
let btnEq = createbutton("=")
let btnDel = createbutton("Del")
let btnCE = createbutton("CE")

btn1.onclick=function(){inp.value= inp.value + btn1.innerHTML}
btn2.onclick=function(){inp.value= inp.value + btn2.innerHTML}
btn3.onclick=function(){inp.value= inp.value + btn3.innerHTML}
btn4.onclick=function(){inp.value= inp.value + btn4.innerHTML}
btn5.onclick=function(){inp.value= inp.value + btn5.innerHTML}
btn6.onclick=function(){inp.value= inp.value + btn6.innerHTML}
btn7.onclick=function(){inp.value= inp.value + btn7.innerHTML}
btn8.onclick=function(){inp.value= inp.value + btn8.innerHTML}
btn9.onclick=function(){inp.value= inp.value + btn9.innerHTML}
btn0.onclick=function(){inp.value= inp.value + btn0.innerHTML}

btnP.onclick=function(){inp.value= inp.value + btnP.innerHTML}
btnM.onclick=function(){inp.value= inp.value + btnM.innerHTML}
btnPr.onclick=function(){inp.value= inp.value + btnPr.innerHTML}
btnD.onclick=function(){inp.value= inp.value + btnD.innerHTML}
btnEq.onclick=function(){inp.value= inp.value + btnEq.innerHTML}
// btnPer.onclick=function(){inp.value= inp.value + btnPer.innerHTML}

btnDel.onclick=function(){
  inp.value= parseInt(inp.value /10)
}

btnCE.onclick=function(){
  inp.value=null
}
btnEq.onclick = function(){
  console.log(inp.value)
  let total = eval(inp.value)
  console.log(total)
  inp.value=total
}

container.append(btn1)
container.append(btn2)
container.append(btn3)
container.append(btn4)
container.append(btn5)
container.append(btn6)
container.append(btn7)
container.append(btn8)
container.append(btn9)
container.append(btn0)
container.append(btnP)
container.append(btnM)
container.append(btnPr)
container.append(btnD)
container.append(btnEq)
container.append(btnDel)
container.append(btnCE)

skeleton.append(container)
document.body.append(skeleton)



function buttonPress(value){
  inp.value=value
}

function createbutton(value){
  let temp= document.createElement("button")
  temp.innerHTML=value
  temp.setAttribute("class","buttons")

  return temp
}

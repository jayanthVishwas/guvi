let countries=['Select' , 'India','USA','Canada']
let states = {'India':['Select' ,'Karnataka','Andhra Pradesh','Tamil Nadu'],'USA':['Select' ,'California','Texas','Washington'],'Canada':['Select' ,'Ontario','British Columbia','Alberta']}
let cities= {"Karnataka":['Bangalore','Mangalore','Mysore'],"Andhra Pradesh":['Hyderabad','Vijaywada','Vizag'],
              "Tamil Nadu":['Chennai','Coimbatore','Ooty'], "California":['San Fransisco','Los Angeles','San Diego'],
              "Texas":["Austin","Dallas","Huoston"], "Washington":["Seattle","Portland"],
              "Ontario":["Toronto","Ottawa","London"],"British Columbia":["Vancouver","Victoria","Richmond"],
            "Alberta":["Edmonton","Calgary","Lethbridge"]}

var userDataList = []
var isEdit = false
let userId = null
let usersList=[]

//----------------------DOM creation-----------------------------------
let formDiv = document.createElement("div")
formDiv.setAttribute("class","form-div")
let form = document.createElement("form")
form.method = "POST"

let nameDiv = document.createElement("div")
nameDiv.setAttribute("class","form-group")
let labelName = document.createElement("label")
labelName.setAttribute("for","inputName")
labelName.innerHTML="Name"
let inpName = document.createElement("input")
inpName.setAttribute("class","form-control")
inpName.setAttribute("id","inputName")

let emailDiv = document.createElement("div")
emailDiv.setAttribute("class","form-group")
let labelEmail = document.createElement("label")
labelEmail.setAttribute("for","inputEmail")
labelEmail.innerHTML="Email"
let inpEmail = document.createElement("input")
inpEmail.setAttribute("type","email")
inpEmail.setAttribute("class","form-control")
inpEmail.setAttribute("id","inputEmail")
inpEmail.setAttribute("aria-describedby","emailHelp")
inpEmail.setAttribute("placeholder","Enter email")

let paswdDiv=document.createElement("div")
paswdDiv.setAttribute("class","form-group")
let labelPaswd = document.createElement("label")
labelPaswd.setAttribute("for","inputPaswd")
labelPaswd.innerHTML="Password"
let inputPaswd = document.createElement("input")
inputPaswd.setAttribute("type","password")
inputPaswd.setAttribute("class","form-control")
inputPaswd.setAttribute("id","inputPaswd")
inputPaswd.setAttribute("placeholder","Password")

let rePaswdDiv=document.createElement("div")
rePaswdDiv.setAttribute("class","form-group")
let labelRePaswd = document.createElement("label")
labelRePaswd.setAttribute("for","inputRePaswd")
labelRePaswd.innerHTML="Re-enter Password"
let inputRePaswd = document.createElement("input")
inputRePaswd.setAttribute("type","password")
inputRePaswd.setAttribute("class","form-control")
inputRePaswd.setAttribute("id","inputRePaswd")
inputRePaswd.setAttribute("placeholder","Re-enter Password")

let labelCountries = document.createElement("label")
labelCountries.innerHTML="Country"
let selCountries = document.createElement("select")
selCountries.setAttribute("class","form-control")
selCountries.setAttribute("id","countries")
for(let i=0; i<countries.length;i++){
  let optn = document.createElement("option")
  optn.innerHTML=countries[i]
  selCountries.append(optn)
}

let labelStates = document.createElement("label")
labelStates.innerHTML="State"
let selStates = document.createElement("select")
selStates.setAttribute("class","form-control")
selStates.setAttribute("id","states")
let statesOpt1 = document.createElement("option")


let labelCities = document.createElement("label")
labelCities.innerHTML="City"
let selCities = document.createElement("select")
selCities.setAttribute("class","form-control")
selCities.setAttribute("id","cities")

let addr1Div = document.createElement("div")
addr1Div.setAttribute("class","form-group")
let labelAddr1 = document.createElement("label")
labelAddr1.innerHTML="Address Line 1"
labelAddr1.setAttribute("for","inputAddr1")
let inputAddr1 = document.createElement("input")
inputAddr1.setAttribute("class","form-control")
inputAddr1.setAttribute("id","inputAddr1")
inputAddr1.setAttribute("placeholder","Address")

let addr2Div = document.createElement("div")
addr2Div.setAttribute("class","form-group")
let labelAddr2 = document.createElement("label")
labelAddr2.innerHTML="Address Line 2"
labelAddr2.setAttribute("for","inputAddr2")
let inputAddr2 = document.createElement("input")
inputAddr2.setAttribute("class","form-control")
inputAddr2.setAttribute("id","inputAddr2")
inputAddr2.setAttribute("placeholder","Address")

let genderDiv =  document.createElement("div")
genderDiv.setAttribute("class","form-group")
let labelgender = document.createElement("label")
labelgender.innerHTML="Gender"
let selGender = document.createElement("select")
selGender.setAttribute("class","form-control")
selGender.setAttribute("id","gender")
let gender1 = document.createElement("option")
gender1.innerHTML="Male"
let gender2 = document.createElement("option")
gender2.innerHTML="Female"
let gender3 = document.createElement("option")
gender3.innerHTML="Prefer not to say"
selGender.append(gender1,gender2,gender3)

let maritalDiv = document.createElement("div")
maritalDiv.setAttribute("class","form-group")
let labelMarital = document.createElement("label")
labelMarital.innerHTML="Marital Status"
let selMarital = document.createElement("select")
selMarital.setAttribute("class","form-control")
selMarital.setAttribute("id","marital")
let martital1 = document.createElement("option")
martital1.innerHTML="Single"
let martital2 = document.createElement("option")
martital2.innerHTML="Married"
selMarital.append(martital1,martital2)

let foodDiv = document.createElement("div")
foodDiv.setAttribute("class","form-group")
let labelFood = document.createElement("label")
labelFood.innerHTML="Favourite Food"
labelFood.setAttribute("for","inputFood")
let inputFood = document.createElement("input")
inputFood.setAttribute("class","form-control")
inputFood.setAttribute("id","inputFood")

let colorDiv = document.createElement("div")
colorDiv.setAttribute("class","form-group")
let labelColor = document.createElement("label")
labelColor.innerHTML="Favourite Color"
labelColor.setAttribute("for","inputColor")
let inputColor = document.createElement("input")
inputColor.setAttribute("class","form-control")
inputColor.setAttribute("id","inputColor")

let submitBtn = document.createElement("button")
submitBtn.setAttribute("type","submit")
submitBtn.setAttribute("class","btn btn-primary")
submitBtn.innerHTML="Submit"

let tableDiv = document.createElement("div")
let table = document.createElement("table")
table.setAttribute("class","table")
let thead = createTableHeading();
let tbody = document.createElement("tbody");
tbody.id = "table-Body";

table.append(thead,tbody)
tableDiv.append(table)


colorDiv.append(labelColor,inputColor)
foodDiv.append(labelFood,inputFood)
maritalDiv.append(labelMarital,selMarital)
genderDiv.append(labelgender,selGender)
addr2Div.append(labelAddr2,inputAddr2)
addr1Div.append(labelAddr1,inputAddr1)
rePaswdDiv.append(labelRePaswd,inputRePaswd)
paswdDiv.append(labelPaswd,inputPaswd)
emailDiv.append(labelEmail,inpEmail)
nameDiv.append(labelName,inpName)
form.append(nameDiv,emailDiv,paswdDiv,rePaswdDiv,labelCountries,selCountries,labelStates,selStates, labelCities,selCities,addr1Div,addr2Div,
genderDiv,maritalDiv,foodDiv,colorDiv,submitBtn)
formDiv.append(form)
document.body.append(formDiv,tableDiv)

selCountries.onchange=function(){
  let c = document.getElementById("countries");
  let selectedCountry = c.options[c.selectedIndex].value;
  if(selectedCountry=="Select") {
    selStates.innerHTML=''
    return
  }
  let statesList = states[selectedCountry]
  // console.log(statesList)
  selStates.innerHTML=""
  for(let i=0; i<statesList.length;i++){
    let optn = document.createElement("option")
    optn.innerHTML=statesList[i]
    selStates.append(optn)
  }
}

selStates.onchange=function(){
  let s = document.getElementById("states");
  let selectedState = s.options[s.selectedIndex].value;
  let cityList = cities[selectedState]
  if(selectedState=="Select") {
    selCities.innerHTML=''
    return
  }
  selCities.innerHTML=""
  for(let i=0; i<cityList.length;i++){
    let optn = document.createElement("option")
    optn.innerHTML=cityList[i]
    selCities.append(optn)
  }
}

form.addEventListener("submit",async event=>{
  event.preventDefault()
  //console.log(event.target[0].value)
  let formData = event.target;

  let userData = {
    "name": formData[0].value,
    "email": formData[1].value,
    "password": formData[2].value,
    "country": formData[4].value,
    "state": formData[5].value,
    "city": formData[6].value,
    "address1": formData[7].value,
    "address2": formData[8].value,
    "gender": formData[9].value,
    "marital": formData[10].value,
    "food": formData[11].value,
    "color": formData[12].value
  }
  console.log(userData)
  if (!isEdit) {
      let dataToApi = await fetch("https://5f7c7c9200bd74001690ad46.mockapi.io/users/", {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
              "Content-Type": "application/json"
          }
      });
  } else {
      let putdata = await fetch("https://5f7c7c9200bd74001690ad46.mockapi.io/users/" + userId, {
          method: "PUT",
          body: JSON.stringify(userData),
          headers: {
              "Content-Type": "application/json"
          }
      });
      isEdit = false;
      userId = null;
  }
  let paswd = document.getElementById("inputPaswd").value
  let rePaswd = document.getElementById("inputRePaswd").value
  
  if(comparePaswds(paswd,rePaswd)==false) {
    alert("Passwords doesn't match!...Please check the password entered")
  }

  getUsers()
})

function comparePaswds(p1,p2){
  if(p1!==p2)return false
  else return true
}
async function getUsers(){
  let userRequest = await fetch("https://5f7c7c9200bd74001690ad46.mockapi.io/users/")
  let userData = await userRequest.json()
  usersList=userData
  console.log(userData)

  populateTable(userData)
}

function populateTable(userData) {
  document.getElementById("table-Body").innerHTML = "";
  userData.forEach((element) => {
    let tr = document.createElement("tr");
    let name = createTableData(element.name);
    let email = createTableData(element.email);
    let country = createTableData(element.country);
    let state = createTableData(element.state);
    let city = createTableData(element.city);
    let address1 = createTableData(element.address1);
    let address2 = createTableData(element.address2);
    let gender = createTableData(element.gender);
    let marital = createTableData(element.marital);
    let food = createTableData(element.food);
    let color = createTableData(element.color);
    let editButton = createEditButton(element.id);
    let delButton = createDelButton(element.id);
    tr.append(name, email, country, state, city, address1, address2, gender, marital, food, color, editButton, delButton);
    tbody.appendChild(tr);
  });
}

function createTableData(text) {
    let td = document.createElement("td");
    td.innerHTML = text;
    return td;
}

function createEditButton(id) {
    let btn = document.createElement("button")
    btn.innerHTML = "Edit"
    btn.setAttribute("class","btn btn-primary")
    btn.setAttribute("onclick", "editTable(" + id + ")")
    return btn
}

function createDelButton(id) {
    let btn = document.createElement("button")
    btn.innerHTML = "Delete"
    btn.setAttribute("class","btn btn-primary")
    btn.setAttribute("onclick", "deleteTableRow(" + id + ")")
    return btn
}

async function deleteTableRow(id) {
    let deletedRow = await fetch("https://5f7c7c9200bd74001690ad46.mockapi.io/users/" + id, {
        method: "DELETE"
    });
    await deletedRow.json();
    getUsers()
}

function editTable(id) {
    isEdit = true;
    userId = id
    let currentUser = usersList[id - 1]
    console.log("edit:",currentUser)
    document.querySelector("#inputName").value = currentUser.name;
    document.querySelector("#inputEmail").value = currentUser.email;
    document.querySelector("#inputPaswd").value = "";
    document.querySelector("#inputRePaswd").value = "";
    document.querySelector("#inputAddr1").value = currentUser.address1;
    document.querySelector("#inputAddr2").value = currentUser.address2;
    document.querySelector("#inputFood").value = currentUser.food;
    document.querySelector("#inputColor").value = currentUser.color;
}

function createTableHeading() {
    let thead = document.createElement("thead")
    let th1 = createTh("Name")
    let th2 = createTh("Email")
    let th3 = createTh("Country")
    let th4 = createTh("State")
    let th5 = createTh("City")
    let th6 = createTh("Address1")
    let th7 = createTh("Address2")
    let th8 = createTh("Gender")
    let th9 = createTh("Marital Status")
    let th10 = createTh("Food")
    let th11 = createTh("Color")
    let th12 = createTh("Operations")
    thead.append(th1, th2, th3, th4, th5, th6, th7, th8, th9, th10, th11,th12)
    return thead
}

function createTh(text) {
    let th = document.createElement("th")
    th.innerHTML = text
    return th
}

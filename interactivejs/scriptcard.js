// //DOM = Document Object Model - a representation of the structure of your webpage
// //accessing an element - getElementById,  getElementByTagName,  getElementByClass, querySelector, querySelectorAll

// //getElementById
// let h1 = document.getElementById("headings");
// console.log(h1)

// let h12 = document.getElementById("headings").innerText;
// console.log(h12)

// //getElementByClass
// let para = document.getElementsByClassName("paratext");
// console.log(para)
// console.log(para.length)
// let para2 = document.getElementsByClassName("paratext");

// for (let i = 0; i < para2.length; i++){
//   console.log(para2[i]);
//   para2[i].style.color = "red"
// }

// //another id

// let maindiv  = document.getElementById("maindiv");
// console.log(maindiv);
// maindiv.style.border = "2px solid red"

// let artone =  document.getElementById("artone").innerText = "This is something else";

// //another class
// let htwo = document.getElementsByClassName("htwo");
// console.log(htwo);
// console.log(htwo.length);

// for (let i = 0; i < htwo.length; i++){
//   console.log(htwo[i]);
//   htwo[i].style.color="blue";
// }

// let spanone = document.getElementsByClassName("spanone");
// console.log(spanone);

// for (let z = 0; z < spanone.length; z++){
//   console.log(spanone[z]);
//   if (z == 1) {
//     spanone[z].style.border = "4px solid yellow"

//   }

// }

//tags

// let anonp = document.getElementsByTagName("p");
// console.log(anonp);
// anonp[2].innerHTML = "This is me changing the third paragraph"

//queryselector or queryselectorall

// let anonheading = document.querySelector(".paratext");
// console.log(anonheading);
// let newp = document.querySelector("p");
// console.log( "this is a paragh", newp);
// let anonheading1 = document.querySelectorAll(".paratext");
// console.log(anonheading1);

//Events - things that happen to your html element e.g click

// 1. select the element
//2. put it in a variable for easy access
// //3. add the event listener and action(has 2 parameters, the event and the callbackfunction)


// //format to writin event listenenrs
// // let selecteditem = document.querySelector("p");
// // selecteditem.addEventListener("event", callbackfn);

// let divpara = document.querySelector("#divpara");

// let divbtn = document.querySelector("#divbtn");
// divbtn.addEventListener("click", clickbtn)

// function clickbtn(){
// //  divpara.innerHTML = "This paragraph has changed"
// // divpara.classList.toggle("teststyle")
// if(divpara.innerHTML === "This will change on click"){
//   divpara.innerHTML = "This paragraph has changed"
// } else {
//   divpara.innerHTML = "This will change on click"
// }
// }

//toggle

let username = document.getElementById("username")
let submit = document.getElementById("submit")
let result = document.getElementById("result")

submit.addEventListener("click", (e)=>{
  e.preventDefault();
  let email = document.getElementById("email").value;
  console.log("Username:", username.value);
  console.log("Email:", email);

  result.innerHTML = `Your username is <strong> ${username.value}</strong> and your email is <strong>${email}</strong>.`;
})

//class

class Student {
  constructor(firstname, lastname, pet, favcolor){
    this.firstname = firstname;
    this.lastname = lastname;
    this.pet = pet;
    this.favcolor = favcolor;
  }
  fullname(){
    return `Your name is ${this.firstname} and your last name is ${this.lastname}`
  }
}

let assel = new Student("Assel", "Irmag", "Bobbly", 4);
console.log(assel.fullname())


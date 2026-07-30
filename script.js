// ===============================
// DIGITAL LIBRARY PORTAL
// script.js
// ===============================

// Welcome Message
window.onload = function () {
    alert("📚 Welcome to Digital Library Portal!");
};

// ===============================
// LIVE SEARCH
// ===============================

const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    cards.forEach(function(card){

        let title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(value)){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";

        }

    });

});

// ===============================
// EXPLORE BUTTON
// ===============================

const explore = document.querySelector(".explore");

explore.addEventListener("click", function(){

    document.getElementById("books").scrollIntoView({

        behavior:"smooth"

    });

});

// ===============================
// READ NOW BUTTON
// ===============================

const readBtn = document.querySelectorAll(".card button");

readBtn.forEach(function(button){

button.addEventListener("click", function(){

let bookName = this.parentElement.querySelector("h3").innerText;

alert("📖 Opening " + bookName + " Book");

});

});

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", function(){

if(window.scrollY > 300){

topBtn.style.display = "block";

}
else{

topBtn.style.display = "none";

}

});

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// DARK MODE
// ===============================

const darkBtn = document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.id="darkBtn";

document.body.appendChild(darkBtn);

darkBtn.onclick=function(){

document.body.classList.toggle("dark");

};

// ===============================
// CONTACT FORM
// ===============================

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Message Sent Successfully!");

form.reset();

});

// ===============================
// ACTIVE NAVBAR
// ===============================

const links=document.querySelectorAll("nav a");

links.forEach(function(link){

link.addEventListener("click",function(){

links.forEach(function(item){

item.classList.remove("active");

});

this.classList.add("active");

});

});

// ===============================
// NAVBAR SHADOW
// ===============================

const header=document.querySelector("header");

window.addEventListener("scroll",function(){

if(window.scrollY>50){

header.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

}
else{

header.style.boxShadow="none";

}

});

console.log("Digital Library Portal Loaded Successfully");
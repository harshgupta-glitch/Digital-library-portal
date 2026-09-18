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
// ================= BOOK SEARCH =================

const bookSearch = document.getElementById("bookSearch");
const categoryFilter = document.getElementById("categoryFilter");
const bookCards = document.querySelectorAll(".book-card");

function filterBooks(){

    let searchValue = bookSearch
        ? bookSearch.value.toLowerCase()
        : "";

    let categoryValue = categoryFilter
        ? categoryFilter.value
        : "all";

    bookCards.forEach(book => {

        let title = book.querySelector("h3")
            .innerText.toLowerCase();

        let author = book.querySelector("p")
            .innerText.toLowerCase();

        let category = book.dataset.category;

        let matchSearch =
            title.includes(searchValue) ||
            author.includes(searchValue);

        let matchCategory =
            categoryValue === "all" ||
            category === categoryValue;

        book.style.display =
            matchSearch && matchCategory
            ? "block"
            : "none";
    });
}

if(bookSearch)
    bookSearch.addEventListener("keyup", filterBooks);

if(categoryFilter)
    categoryFilter.addEventListener("change", filterBooks);


// ================= BOOK POPUP =================

function showBook(title, author, description){

    document.getElementById("modalTitle").innerText = title;

    document.getElementById("modalAuthor").innerText =
        "Author: " + author;

    document.getElementById("modalDescription").innerText =
        description;

    document.getElementById("bookModal").style.display =
        "flex";
}

function closeBook(){

    document.getElementById("bookModal").style.display =
        "none";
}


// Close popup by clicking outside

window.addEventListener("click", function(e){

    let modal = document.getElementById("bookModal");

    if(e.target === modal){
        modal.style.display = "none";
    }

});


//index.js

import {Contact} from "./Contact.js";

const formInfo = document.getElementById("formInfo");

let hasJob = false;
if(hasJob){
    //have job
    showMessage("I am employed!");
}
else{
    //need a job
    showMessage("I am not employed!");
}

let today = new Date();
let dayOfWeek = today.getDay();
if(dayOfWeek === 0 || dayOfWeek === 6){
    showMessage("Its the weekend baby! I will follow up Monday.")
}

function showMessage(message){    
    formInfo.innerHTML = "<p>" + message + "<p>";
}

function clearMessage(){
    formInfo.innerHTML = "";
}

const first = "first";

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event){
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
});

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++){
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event){
        event.target.style = "background-color: #999999;";
    });
    item.addEventListener("mouseleave", function (event){
        event.target.style = "";
    });
}
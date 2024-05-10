"use strict"

window.onload=init;

function init(){
    const greetUserBtn = document.getElementById("greetUserBtn");
    greetUserBtn.onclick = onGreetUserBtnClicked;


}

function onGreetUserBtnClicked() {
    let nameField = document.getElementById("nameField").value;
    let outString = `Hello ${nameField}`;
    

    let messageDiv = document.getElementById("messageDiv")
    messageDiv.innerHTML = outString;

}
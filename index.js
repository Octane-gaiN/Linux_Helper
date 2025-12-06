const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const message = document.getElementById("message");
const button = document.getElementById("button");
const inputs = document.querySelectorAll("input");

// const h1 = document.getElementById("contact-title").textContent;

function sendForm() {
    let required = true;
    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].value === ""){
            required = false;
        }
    }
    // name.value === "" || age.value === "" || email.value === "" || message.value === ""
    if (!required){
        alert("Пожалуйста заполните все поля");
    } else {
        console.log(name.value, age.value, email.value, message.value);
        // alert("Сообщение отправлено");
        name.value === "";
        age.value === "";
        email.value === "";
        message.value === "";
        form.innerHTML = `<h1>Сообщение отправлено!<h1>`;
        button.style = "display: none;";
    }
}
// function openSideBar(){
//     openSideBar.
// }
// console.log(name);
// name.value = "";
// let a = 1;
// form.innerHTML = name.value
// console.log(name);
// console.log(h1);
// console.log("hello world");
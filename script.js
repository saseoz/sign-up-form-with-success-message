const form = document.querySelector(".email-container");
const email = document.getElementById("email");
const success = document.querySelector(".success-container");
const mainCard = document.querySelector("main");
const userMail = document.querySelector(".user-mail");

const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validate() {
    const errorMsg = email.previousElementSibling.children[1];
    console.log(errorMsg)
    if (!email.value.match(pattern)) {
        errorMsg.classList.add("show");
        email.style.borderColor = "hsl(4, 100%, 67%)"
        email.style.backgroundColor = "hsl(5, 100%, 95%)";
        return false;
    } else {
        errorMsg.classList.remove("show");
        email.style.borderColor = "";
        email.style.backgroundColor = "";
        return true;
    }
}

email.addEventListener("keyup", validate);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!validate()) {
        return;
    } else {
        success.classList.add("show");
        mainCard.classList.add("hide");
        userMail.innerText = email.value; 
    }
});

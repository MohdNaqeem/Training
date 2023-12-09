submitButton = document.querySelector("#submit");
inputFirstName = document.querySelector("#firstName");
inputLastName = document.querySelector("#lastName");
inputEmail = document.querySelector("#email");
inputPassword = document.querySelector("#password");
messageFirstName = document.querySelector("#firstNameMessage");
messageLastName = document.querySelector("#lastNameMessage");
messageEmail = document.querySelector("#emailMessage");
messagePassword = document.querySelector("#passwordMessage");

submitButton.addEventListener("click", () => {
  if (inputFirstName.value === "") {
    inputFirstName.style.borderColor = "red";
    messageFirstName.classList.remove("hide");
    setTimeout(() => {
      inputFirstName.style.borderColor = "grey";
      messageFirstName.classList.add("hide");
    }, "2000");
  }
  if (inputLastName.value === "") {
    inputLastName.style.borderColor = "red";
    messageLastName.classList.remove("hide");
    setTimeout(() => {
      inputLastName.style.borderColor = "grey";
      messageLastName.classList.add("hide");
    }, "2000");
  }
  if (inputEmail.value === "") {
    inputEmail.style.borderColor = "red";
    messageEmail.innerHTML = "Email cannot be empty";
    messageLastName.classList.remove("hide");

    messageEmail.classList.remove("hide");
    setTimeout(() => {
      inputEmail.style.borderColor = "grey";
      messageEmail.classList.add("hide");
    }, "2000");
  }

  if (
    !inputEmail.value === "" ||
    !inputEmail.value.includes("@") ||
    !inputEmail.value.includes(".")
  ) {
    inputEmail.style.borderColor = "red";
    messageEmail.innerHTML = "Not a valid email";
    messageEmail.classList.remove("hide");
    setTimeout(() => {
      inputEmail.style.borderColor = "grey";
      messageEmail.classList.add("hide");
    }, "2000");
  }

  if (inputPassword.value === "") {
    inputPassword.style.borderColor = "red";
    messagePassword.classList.remove("hide");
    setTimeout(() => {
      inputPassword.style.borderColor = "grey";
      messagePassword.classList.add("hide");
    }, "2000");
  }
});

function validate() {
  const emailRegex = new RegExp("/^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/");
  const emailInput = document.querySelector("#email").value;
  if (emailInput === "") {
    console.log("Empty");
  } else if (emailRegex.test(emailInput) == false) {
    console.log("Invalid");
  } else {
    console.log("Yea boi");
  }
}

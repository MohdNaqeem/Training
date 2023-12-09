document.querySelector("#generate").addEventListener("click", () => {
  fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 224)}`)
    .then((response) => response.json())
    .then((data) => {
      adviceGenerated = data;
      console.log(adviceGenerated.slip.advice);
      document.querySelector(
        "#advice"
      ).innerHTML = `"${adviceGenerated.slip.advice}"`;
      document.querySelector(
        "#id"
      ).innerHTML = `Advice# ${adviceGenerated.slip.id}`;
    });
});

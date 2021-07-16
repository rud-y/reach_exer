document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", toggleText);
  });

  function toggleText(event) {
    let btn = event.target;
    // console.log(btn);
    let addedText =
      event.target.previousElementSibling.querySelector(".hidden");

    if (addedText.style.display === "none") {
      addedText.style.display = "inline";
      btn.innerHTML = "Show Less";
    } else {
      addedText.style.display = "none";
      btn.innerHTML = "Show More";
    }
  }
});

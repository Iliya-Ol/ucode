function func1() {
  const radio = document.querySelectorAll("input[type=radio]"),
    div = document.querySelector("#answer");
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      if (radio[i].classList.contains("first")) {
        div.innerText = `Incorrect`;
      } else if (radio[i].classList.contains("second")) {
        div.innerText = `Correct`;
      } else if (radio[i].classList.contains("third")) {
        div.innerText = `Incorrect`;
      }
    }
  }
}

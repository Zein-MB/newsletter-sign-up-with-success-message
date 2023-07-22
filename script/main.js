let userEmail = document.querySelector("input"),
  regEx = /[a-z]{4,10}(\d+)?@(gmail|(\w+)company).com/g,
  submitBtn = document.querySelector("button"),
  errorMessage = document.getElementById("errorMessage"),
  form = document.forms[0],
  signUp = document.querySelector("main"),
  section = document.querySelector('section'),
  picture = document.querySelector('picture'),
  scMsg = document.querySelector(".success-message");

userEmail.addEventListener("keyup", () => {
  if (regEx.test(userEmail.value)) {
    errorMessage.style.opacity = "0";
    userEmail.classList.remove("error");

    submitBtn.onclick = () => {
      window.open("/success.html", "_self");
    };
  } else if (!regEx.test(userEmail.value)) {
    errorMessage.style.opacity = "1";
    userEmail.classList.add("error");

    form.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
});

function removeFaded(...els) {
  els.forEach(el => {
    el.classList.remove('faded')
  })
}

window.addEventListener('load', removeFaded(signUp, section, picture))
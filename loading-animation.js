let btn = document.getElementById("btn");
let loadBar = document.getElementById("load-bar");

var flag = 1;

btn.addEventListener("click", function () {
  if (flag == 1) {
    loadBar.classList.add("loadbyjs");
    btn.innerText = "STOP NOW";
    btn.style.backgroundColor = "red";
    loadBar.style.opacity = "1";
    flag = 2;
  } else {
    loadBar.classList.remove("loadbyjs");
    btn.innerText = "START NOW";
    btn.style.backgroundColor = "green";
    loadBar.style.opacity = "0.3";
    flag = 1;
  }
});

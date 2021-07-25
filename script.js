const nav = document.getElementById("nav");
alert(nav);

let button = document.getElementById("changeBackground");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = "fuchsia";
});

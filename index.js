function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

for(let i = 0; i < 4; i++) {
  document.querySelectorAll(".overlay-btn")[i].addEventListener("click", function() {
    closeNav();
  });
}

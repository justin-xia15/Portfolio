mybutton = document.getElementById("myBtn");

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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 776 || document.documentElement.scrollTop > 776) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //Chrome, Firefox, IE and Opera
}



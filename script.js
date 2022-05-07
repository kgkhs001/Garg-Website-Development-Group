window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })

  // Modal Stuff (popup)

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn-2");
btn2.onclick = function() {
  modal.style.display = "block";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var submit = document.getElementById("submit");
var serviceOne = document.getElementById("service-1");
var serviceTwo = document.getElementById("service-2");
var serviceThree = document.getElementById("service-3");
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

serviceOne.onclick = function() {
  modal.style.display = "block";
}

serviceTwo.onclick = function() {
  modal.style.display = "block";
}

serviceThree.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// submit.onclick = function() {
//   modal.style.display = "none";
// }


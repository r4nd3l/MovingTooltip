// Default DevCorner JavaScript Setting
var spanText = document.getElementById('tooltip');
window.onmousemove = function(e){
  var x = e.clientX,
      y = e.clientY;

  spanText.style.top = (y + 20) + 'px';
  spanText.style.left = (x + 20) + 'px';
}


// Get the modal
var modal = document.getElementById('_myModal');

// Get the button that opens the modal
var btn = document.getElementById("_myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("_close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
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

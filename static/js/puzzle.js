//jQuery( document ).ready( function( $ ) {

  // Your JavaScript goes here

//});


document.addEventListener('DOMContentLoaded', function() {

  const solutionInput = document.querySelector('.solution__input');
  const solutionButton = document.querySelector('.solution__button');
  const hexes = document.querySelectorAll('.hexagon__letter');


  // Solution handling
  solutionButton.addEventListener('click', function(e) {
    const solutionValue = solutionInput.value.toLowerCase().split(' ').join('-');
    solutionValue ? window.location = `/${solutionValue}` : alert("You didn\'t enter a solution")
  });


  // Hexagon handling
  hexes.forEach(function(hex) {
    hex.addEventListener('click', function(e) {
      solutionInput.value += hex.textContent;
    })
  })


})

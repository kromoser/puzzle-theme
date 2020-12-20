//jQuery( document ).ready( function( $ ) {

  // Your JavaScript goes here

//});


document.addEventListener('DOMContentLoaded', function() {

  const solutionInput = document.querySelector('.solution__input');
  const solutionButton = document.querySelector('.solution__button');
  const cancelButton = document.querySelector('.cancel__button');
  const hexes = document.querySelectorAll('polygon');
  const letters = document.querySelectorAll('text');

  // Solution handling
  solutionButton.addEventListener('click', function(e) {
    const solutionValue = solutionInput.value.toLowerCase().split(' ').join('-');
    solutionValue ? window.location = `/${solutionValue}` : alert("You didn\'t enter a solution")
  });

  // Cancel button handling
  cancelButton.addEventListener('click', function(e) {
    solutionInput.value = '';
  })


  // Hexagon handling
  hexes.forEach(function(hex) {
    hex.addEventListener('click', function(e) {
      const hexId = hex.id;
      //console.log(hexId)
      const hexLetter = document.querySelector(`#text${hexId}`);
      solutionInput.value += hexLetter.textContent;
    })
  });

  // Text handling
  letters.forEach(function(letter) {
    letter.addEventListener('click', function(e) {
      solutionInput.value += letter.textContent;
    })
  })




})

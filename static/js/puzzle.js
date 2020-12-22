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
  });

  // Input mask handling and hex highlighting
  const buttons = document.querySelectorAll('polygon, text');

  const firstHexGroup = document.querySelectorAll('.hex-1');
  const secondHexGroup = document.querySelectorAll('.hex-2');
  const thirdHexGroup = document.querySelectorAll('.hex-3');

  function highlightHexGroup(hexGroup) {
    hexGroup.forEach(function(el) {
      el.classList.add('opaque');
    })
  }

  highlightHexGroup(firstHexGroup);

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
     hexes.forEach(function(el) {
       el.classList.remove('opaque')
     })
     if (solutionInput.value.length === 9) {
        solutionInput.value += ' ';
      } else if (solutionInput.value.length === 18 ) {
        solutionInput.value += ' ';
      }

     if ( solutionInput.value.length < 9 ) {
       highlightHexGroup(firstHexGroup);
     } else if ( solutionInput.value.length < 18 ) {
       highlightHexGroup(secondHexGroup);
     } else {
       highlightHexGroup(thirdHexGroup);
     }

    })
  });

  // Hex highlighting
  hexes.forEach(function(hex) {
    hex.addEventListener('click', function(e) {

    })
  })




})

//   document.addEventListener('DOMContentLoaded', function () {
//     var imageContainer = document.getElementById('image-container');
//     var scrollImage = document.getElementById('scroll-image');

//     window.addEventListener('scroll', function () {
//         var scrollPosition = window.scrollY;
//         var opacity = 1 - scrollPosition / 500;

//         scrollImage.style.opacity = opacity.toFixed(2);
//     });
// });

 // Add event listener for hover effect
 var allBoxes = document.querySelectorAll('.quarter-finals-box, .semi-finals-box, .finals-box');

 allBoxes.forEach(function(box) {
     box.addEventListener('mouseover', function() {
         var teamName = this.querySelector('.bracket-team-name').innerText.trim();

         // Apply hover effect to all boxes with the same team name
         allBoxes.forEach(function(otherBox) {
             if (otherBox.querySelector('.bracket-team-name').innerText.trim() === teamName) {
                 otherBox.parentElement.classList.add('hovered');
             }
         });
     });

     box.addEventListener('mouseout', function() {
         // Remove hover effect from all boxes
         allBoxes.forEach(function(otherBox) {
             otherBox.parentElement.classList.remove('hovered');
         });
     });
 });



//COLORS FORM
function addColoredDivs() {
  var boxes = document.querySelectorAll('.box');

  boxes.forEach(function(box) {
    var text = box.textContent.trim();

    if (text.includes('L')) {
      addColorClass(box, 'box-red');
    } else if (text.includes('D')) {
      addColorClass(box, 'box-orange');
    } else if (text.includes('W')) {
      addColorClass(box, 'box-green');
    } else if (text.includes('-')) {
      addColorClass(box, 'box-red')
    } else if (text.includes('+')) {
      addColorClass(box, 'box-green')
    }
  });
}

function addColorClass(element, colorClass) {
  element.classList.add(colorClass);
}

// Example usage:
addColoredDivs();
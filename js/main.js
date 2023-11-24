 // Function to handle click events for dropdowns
//  const handleDropdownEvents = (dropdown) => {
//     dropdown.addEventListener('click', () => {
   
//       dropdown.classList.toggle('active');

   
//       document.querySelectorAll('.dropdown').forEach((otherDropdown) => {
//         if (otherDropdown !== dropdown) {
//           otherDropdown.classList.remove('active');
//         }
//       });
//     });
//   };

  
//   const dropdowns = document.querySelectorAll('.dropdown');
//   dropdowns.forEach(handleDropdownEvents);


//TAB
 
//   function openTab(tabId) {

//     const tabs = document.querySelectorAll('.tab');
//     tabs.forEach(tab => tab.classList.remove('active-tab'));

  
//     const selectedTab = document.getElementById(tabId);
//     selectedTab.classList.add('active-tab');
//   }

 
//   function openSubTab(subTabId) {
  
//     const subtabs = document.querySelectorAll('.subtab');
//     subtabs.forEach(subtab => subtab.classList.remove('active-subtab'));


//     const selectedSubTab = document.getElementById(subTabId);
//     selectedSubTab.classList.add('active-subtab');
//   }


//   const mainTabs = document.querySelectorAll('#mainTabs button');
//   mainTabs.forEach(mainTab => {
//     mainTab.addEventListener('click', () => {
//       openTab(mainTab.getAttribute('data-tab'));
//     });
//   });

 
//   const subTabButtons = document.querySelectorAll('.tab button');
//   subTabButtons.forEach(subTabButton => {
//     subTabButton.addEventListener('click', () => {
//       openSubTab(subTabButton.getAttribute('data-subtab'));
//     });
//   });


//   document.addEventListener('DOMContentLoaded', function () {
//     var imageContainer = document.getElementById('image-container');
//     var scrollImage = document.getElementById('scroll-image');

//     window.addEventListener('scroll', function () {
//         var scrollPosition = window.scrollY;
//         var opacity = 1 - scrollPosition / 500;

//         scrollImage.style.opacity = opacity.toFixed(2);
//     });
// });



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
 // Function to handle click events for dropdowns
 const handleDropdownEvents = (dropdown) => {
    dropdown.addEventListener('click', () => {
      // Toggle the active class on the clicked dropdown
      dropdown.classList.toggle('active');

      // Close other dropdowns
      document.querySelectorAll('.dropdown').forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove('active');
        }
      });
    });
  };

  // Add event listeners for each dropdown
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(handleDropdownEvents);


//TAB
  // Function to handle tab clicks
  function openTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    // Show the selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab');
  }

  // Function to handle subtab clicks
  function openSubTab(subTabId) {
    // Hide all subtabs
    const subtabs = document.querySelectorAll('.subtab');
    subtabs.forEach(subtab => subtab.classList.remove('active-subtab'));

    // Show the selected subtab
    const selectedSubTab = document.getElementById(subTabId);
    selectedSubTab.classList.add('active-subtab');
  }

  // Get all main tab buttons and add click event listeners
  const mainTabs = document.querySelectorAll('#mainTabs button');
  mainTabs.forEach(mainTab => {
    mainTab.addEventListener('click', () => {
      openTab(mainTab.getAttribute('data-tab'));
    });
  });

  // Get all subtab buttons and add click event listeners
  const subTabButtons = document.querySelectorAll('.tab button');
  subTabButtons.forEach(subTabButton => {
    subTabButton.addEventListener('click', () => {
      openSubTab(subTabButton.getAttribute('data-subtab'));
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.getElementById('image-container');
    var scrollImage = document.getElementById('scroll-image');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var opacity = 1 - scrollPosition / 500; // Adjust the divisor to control the scroll distance

        scrollImage.style.opacity = opacity.toFixed(2); // Limit the opacity to two decimal places
    });
});


function addColoredDivs() {
    var boxes = document.querySelectorAll('.box');

    boxes.forEach(function(box) {
      var text = box.textContent.trim();

      // Check if the text contains 'L', 'D', or 'W'
      if (text.includes('L')) {
        addColorClass(box, 'box-red');
      } else if (text.includes('D')) {
        addColorClass(box, 'box-orange');
      } else if (text.includes('W')) {
        addColorClass(box, 'box-green');
      }
    });
  }

  function addColorClass(element, colorClass) {
    element.classList.add(colorClass);
  }

  // Example usage:
  addColoredDivs();
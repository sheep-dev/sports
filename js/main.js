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
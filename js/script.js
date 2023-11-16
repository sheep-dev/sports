// STANDING DROPDOWN
const dropdowns = document.querySelectorAll('.dropdown-container');

dropdowns.forEach(dropdown => {
  const btn = dropdown.querySelector('.standing-btn');
  const content = dropdown.querySelector('.dropdown-standing-content');

  // Set initial display style to 'block'
  content.style.display = 'block';

  btn.addEventListener('click', function() {
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});



// MULTIPLE DROPDOWN
let activeItem = null;

const toggleDropdown = (itemId) => {
  const selectedItem = document.getElementById(itemId);

  // TOGGLE
  if (selectedItem.classList.contains('active')) {
    selectedItem.classList.remove('active');
    activeItem = null;
  } else {
    // CLOSE
    if (activeItem) {
      activeItem.classList.remove('active');
    }

    // OPEN
    selectedItem.classList.add('active');
    activeItem = selectedItem;
  }
};


// MULTIPLE TABS
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab');

tabButtons.forEach(button => {
  button.addEventListener('click', function() {
    const tabId = this.dataset.set;
    tabContents.forEach(content => {
      content.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
  });
});

// MULTIPLE MODALS
const modalButtons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('[data-close]');

modalButtons.forEach(button => {
  button.addEventListener('click', function () {
    const modalId = this.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', function () {
    const modalId = this.dataset.close;
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
  });
});

modals.forEach(modal => {
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});


// DATE
let currentDate = new Date();

function displayDate() {
  const dateDisplay = document.getElementById('dateDisplay');
  dateDisplay.textContent = currentDate.toDateString();
}

function previousDate() {
  currentDate.setDate(currentDate.getDate() - 1);
  displayDate();
}

function nextDate() {
  currentDate.setDate(currentDate.getDate() + 1);
  displayDate();
}

// Initial display
displayDate();


$(document).ready(function() {
  // Show notification on desktop refresh
  if ($(window).width() > 600) {
      $('#notification').show();
  }

  // Hide notification on close button click
  $('#closeBtn').click(function() {
      $('#notification').hide();
  });

  // Show notification on scroll for mobile
  if ($(window).width() <= 600) {
      $(window).scroll(function() {
          $('#notification').show();
      });
  }
});


// NOTIFICATION
function closeParagraph() {
  var paragraph = document.getElementById('notification');
  paragraph.style.display = 'none';
}
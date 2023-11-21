// STANDING DROPDOWN
const dropdowns = document.querySelectorAll('.dropdown-container');

dropdowns.forEach(dropdown => {
  const btn = dropdown.querySelector('.standing-btn');
  const content = dropdown.querySelector('.dropdown-standing-content');

  content.style.display = 'block';

  btn.addEventListener('click', () => {
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
// const tabButtons = document.querySelectorAll('.tab-button');
// const tabContents = document.querySelectorAll('.tab');

// tabButtons.forEach(button => {
//   button.addEventListener('click', function() {
//     const tabId = this.dataset.set;
//     tabContents.forEach(content => {
//       content.style.display = 'none';
//     });
//     document.getElementById(tabId).style.display = 'flex';
//   });
// });

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab');

tabButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove the 'active' class from all tab buttons
    tabButtons.forEach(btn => {
      btn.classList.remove('tab-active');
    });

    // Add the 'active' class to the clicked tab button
    this.classList.add('tab-active');

    const tabId = this.dataset.set;
    tabContents.forEach(content => {
      content.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'flex';
  });
});


document.addEventListener('DOMContentLoaded', function () {
 
  let currentIndex = 0;

 
  function showContent(index) {
   
    const contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(div => div.style.display = 'none');

   
    contentDivs[index].style.display = 'block';
  }

 
  function next() {
    currentIndex = (currentIndex + 1) % contentDivs.length;
    showContent(currentIndex);
  }

  function prev() {
    currentIndex = (currentIndex - 1 + contentDivs.length) % contentDivs.length;
    showContent(currentIndex);
  }

  
  document.getElementById('nextBtn').addEventListener('click', next);
  document.getElementById('prevBtn').addEventListener('click', prev);


  showContent(currentIndex);
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


// NOTIFICATION
function closeParagraph() {
  var paragraph = document.getElementById('notification');
  paragraph.style.display = 'none';
}
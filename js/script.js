// MULTIPLE DROPDOWN
const dropdowns = document.querySelectorAll('.dropdown');

function closeDropdowns() {
  dropdowns.forEach(dropdown => {
    dropdown.querySelector('.dropdown-content').style.display = 'none';
  });
}

dropdowns.forEach(dropdown => {
  const btn = dropdown.querySelector('.dropbtn');
  const content = dropdown.querySelector('.dropdown-content');
  btn.addEventListener('click', function() {
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      closeDropdowns();
      content.style.display = 'block';
    }
  });
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown-content') && !event.target.matches('.dropbtn')) {
    closeDropdowns();
  }
});


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
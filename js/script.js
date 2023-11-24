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


// ESPORTS SIDEBAR
const esportsSideLeftCenter = document.querySelectorAll('.esports-categories-dropdown');

esportsSideLeftCenter.forEach(esportsDrop => {
  const esportsBtn = esportsDrop.querySelector('.esports-btn')
  const esportsContent = esportsDrop.querySelector('.esports-categories-dropdown-content')

  esportsContent.style.display = 'none'

  esportsBtn.addEventListener('click', () => {
    if (esportsContent.style.display === 'block') {
      esportsContent.style.display = 'none'
      console.log('hide')
    } else {
      esportsContent.style.display = 'block'
      console.log('show')
    }
  })
})


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

    tabButtons.forEach(btn => {
      btn.classList.remove('tab-active', 'header-tab-active');
    });

    this.classList.add('tab-active', 'header-tab-active');

    const tabId = this.dataset.set;
    tabContents.forEach(content => {
      content.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'flex';
  });
});

// MULTIPLE NESTED TABS
const nestedTabBtn = document.querySelectorAll('.nested-tab-button');
const nestedTabContent = document.querySelectorAll('.nested-tab');

nestedTabBtn.forEach(buttons => {
  buttons.addEventListener('click', function() {
    
    nestedTabBtn.forEach(btns => {
      btns.classList.remove('tab-active', 'header-tab-active');
    })

    this.classList.add('tab-active', 'header-tab-active');

    const tabIds = this.dataset.set;
    nestedTabContent.forEach(contents => {
      contents.style.display = 'none';
    });

    document.getElementById(tabIds).style.display = 'flex';
  })
})

//MULTIPLE CHILDREN TABS
const childTabBtn = document.querySelectorAll('.child-tab-button')
const childTabContent = document.querySelectorAll('.child-tab')

childTabBtn.forEach(childBtn => {
  childBtn.addEventListener('click', function() {

    childTabBtn.forEach(childButtons => {
      childButtons.classList.remove('tab-active', 'header-tab-active')
    });

    this.classList.add('tab-active', 'header-tab-active');

    const tabChild = this.dataset.set;
    childTabContent.forEach(childCotent => {
      childCotent.style.display = 'none';
    })
    document.getElementById(tabChild).style.display = 'flex'
  })
})


// MOBILE SLIDER PAGES
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

displayDate();



// ---------

// NOTIFICATION
function closeParagraph() {
  var paragraph = document.getElementById('notification');
  paragraph.style.display = 'none';
}


// ---------
/* Functions
============================================================================ */

function formValidator() { 

  let checkForm = function (form) {

    const formInputs = form.elements;
    const errorMessage = form.querySelector('.image-form__error-message');
    let everythingIsFine = true;
    errorMessage.innerText = '';

    for (let i = 0; i < formInputs.length; i++) {
      if (formInputs[i].type === 'reset' || formInputs[i].type === 'submit') {
        continue;
      }

      formInputs[i].classList.remove('ut-has-error');

      if (!formInputs[i].value) {
        everythingIsFine = false;
        formInputs[i].classList.add('ut-has-error');
      }
    }

    if (!everythingIsFine) {
      errorMessage.innerText = "Es müssen alle Felder ausgefüllt werden";
      throw Error('Form Validation not successful');
    }

    return true;
  }

  this.scan = function () { 
    document.querySelectorAll('form[data-js-validate=true]').forEach(function (form) {  
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        try {
          
          if (checkForm(form)) {
            form.submit();
          }
        } catch(e) {
          console.error(e);
        }
      });
    });
  }
}





function viewSwitcher() {

  let switcherButton = document.querySelector('#viewSwitcher');
  let overviewContainer = document.querySelector('#overview');
  
  this.init = function() {
    
    /* Gibt es überhaupt einen Overview Container? 
       Denn auf den Detailseiten gibt es ja keinen :) */
    if (overviewContainer !== null) {
      
      /* Interaktionselement aktivieren (sichtbar machen) */
      switcherButton.classList.add("is-active");

      switcherButton.addEventListener('click', this.switchState.bind(this));
    }
  }

  this.switchState = function() {
    if (switcherButton.dataset.view === 'list') {
      switcherButton.dataset.view = 'cards'

      switcherButton.classList.remove('list-view');
      switcherButton.classList.add('card-view')

      overviewContainer.classList.remove('is-list-view');
      overviewContainer.classList.add('is-card-view');

    } else if (switcherButton.dataset.view === 'cards') {
      switcherButton.dataset.view = 'list'

      switcherButton.classList.remove('card-view');
      switcherButton.classList.add('list-view');

      overviewContainer.classList.remove('is-card-view');
      overviewContainer.classList.add('is-list-view');
    }
  };
}





function navToNeighbours () { 

  let data = {};
  data.previous = false;
  data.next = false;

  const $navigation = document.querySelector('[data-js-footer-nav]');

  const template = (type, url, img, title) => `
    <div class="nav-item ${type}">
      <a href="${url}">
        <img src="${img}">
        <span>${title}</span>
      </a>
    </div>`;

  function generateNavitem(type, data) { 
    console.log(type);
    console.log(data);

    const element = template(
      type,
      `../${data.link}`,
      data.bildurlxs,
      data.title,
    );

    $navigation.insertAdjacentHTML('beforeend', element);
  }

  this.init = function() { 
    data.previous = (typeof previous != 'undefined' && previous.link ) ? previous : false;
    data.next = (typeof next != 'undefined' && next.link) ? next : false;
    
    if (data.previous) { generateNavitem("previous", data.previous); }
    if (data.next) { generateNavitem("next", data.next ); }
  }

}


function accordion(elementid) {
  const buttonMarkup = '<button class="btn is-right icon-arrow-down"></button>';
  const $el = document.getElementById(elementid);
  const $target = document.getElementById($el.dataset.target);

  this.init = function () {
    $el.addEventListener('click', this.toggle.bind(this));
    $el.insertAdjacentHTML('beforeend', buttonMarkup);
  };

  this.toggle = function () {
    $el.classList.toggle('is-open');
    $target.classList.toggle('is-open');
  }
}


/* Main
============================================================================ */


document.addEventListener("DOMContentLoaded", function(event) {
  
  /* Hier die Funktionen aufrufen */

  /* Form Validator */
  let validator = new formValidator();
  validator.scan();

  /* View Switcher */
  let switcher = new viewSwitcher();
  switcher.init();

  /* Navigation zwischen den Gemälden */
  let nav = new navToNeighbours();
  nav.init();

  /* Accordion */
  let accordionIds = [
    'dimensions-headline',
    'material-headline',
    'provenienz-headline',
  ];
  let accs = [];

  accordionIds.forEach((id) => {
    let acc = new accordion(id)
    acc.init();
    accs.push(acc);
  })
  

});


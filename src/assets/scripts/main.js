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

      /* Hier bitte den restlichen Code für den ViewSwitcher einfügen.
         Für den Switcher Button gibt es schon die CSS-Klassen
         card-view: für den Card View (default)
         list-view: für den List View

         …
         …
         …

      */
    }
  }
}





function navToNeighbours () { 

  let data = {};
  data.previous = false;
  data.next = false;

  function generateNavitem(type, data) { 
    console.log(type);
    console.log(data);

    /* Hier bitte den Code für die Navigation zwischen den Gemälden einfügen. 
    
    …
    …
    …

    */
  }

  this.init = function() { 
    data.previous = (typeof previous != 'undefined' && previous.link ) ? previous : false;
    data.next = (typeof next != 'undefined' && next.link) ? next : false;
    
    if (data.previous) { generateNavitem("previous", data.previous); }
    if (data.next) { generateNavitem("next", data.next ); }
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

});


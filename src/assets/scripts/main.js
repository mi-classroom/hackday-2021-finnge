/* Functions
============================================================================ */

function FormValidator() {
  const checkForm = (form) => {
    const $errorMessage = form.querySelector('.image-form__error-message');
    let everythingIsFine = true;
    $errorMessage.innerText = '';

    Array.from(form.elements).forEach((formInput) => {
      if (formInput.type === 'reset' || formInput.type === 'submit') {
        return;
      }

      formInput.classList.remove('ut-has-error');

      if (!formInput.value) {
        everythingIsFine = false;
        formInput.classList.add('ut-has-error');
      }
    });

    if (!everythingIsFine) {
      $errorMessage.innerText = 'Es müssen alle Felder ausgefüllt werden';
      throw Error('Form Validation not successful');
    }

    return true;
  };

  this.scan = () => {
    document.querySelectorAll('form[data-js-validate=true]').forEach((form) => {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        try {
          if (checkForm(form)) {
            form.submit();
          }
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e);
        }
      });
    });
  };
}

function ViewSwitcher() {
  const switcherButton = document.querySelector('#viewSwitcher');
  const overviewContainer = document.querySelector('#overview');

  this.init = () => {
    if (overviewContainer !== null) {
      switcherButton.classList.add('is-active');
      switcherButton.addEventListener('click', this.switchState.bind(this));
    }
  };

  this.switchState = () => {
    if (switcherButton.dataset.view === 'list') {
      switcherButton.dataset.view = 'cards';

      switcherButton.classList.remove('list-view');
      switcherButton.classList.add('card-view');

      overviewContainer.classList.remove('is-list-view');
      overviewContainer.classList.add('is-card-view');
    } else if (switcherButton.dataset.view === 'cards') {
      switcherButton.dataset.view = 'list';

      switcherButton.classList.remove('card-view');
      switcherButton.classList.add('list-view');

      overviewContainer.classList.remove('is-card-view');
      overviewContainer.classList.add('is-list-view');
    }
  };
}

function NavToNeighbours() {
  const data = {};
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

  function generateNavitem(type, itemData) {
    const element = template(
      type,
      `../${itemData.link}`,
      itemData.bildurlxs,
      itemData.title,
    );

    $navigation.insertAdjacentHTML('beforeend', element);
  }

  this.init = () => {
    /* global previous, next */
    data.previous = (typeof previous !== 'undefined' && previous.link) ? previous : false;
    data.next = (typeof next !== 'undefined' && next.link) ? next : false;

    if (data.previous) { generateNavitem('previous', data.previous); }
    if (data.next) { generateNavitem('next', data.next); }
  };
}

function Accordion(elementid) {
  const buttonMarkup = '<button class="btn is-right icon-arrow-down"></button>';
  const $el = document.getElementById(elementid);
  const $target = document.getElementById($el.dataset.target);

  this.init = () => {
    $el.addEventListener('click', this.toggle.bind(this));
    $el.insertAdjacentHTML('beforeend', buttonMarkup);
  };

  this.toggle = () => {
    $el.classList.toggle('is-open');
    $target.classList.toggle('is-open');
  };
}

/* Main
============================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* Hier die Funktionen aufrufen */

  /* Form Validator */
  const validator = new FormValidator();
  validator.scan();

  /* View Switcher */
  const switcher = new ViewSwitcher();
  switcher.init();

  /* Navigation zwischen den Gemälden */
  const nav = new NavToNeighbours();
  nav.init();

  /* Accordion */
  const accordionIds = [
    'dimensions-headline',
    'material-headline',
    'provenienz-headline',
  ];
  const accs = [];

  accordionIds.forEach((id) => {
    const acc = new Accordion(id);
    acc.init();
    accs.push(acc);
  });
});

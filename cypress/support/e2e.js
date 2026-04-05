// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// Disable all CSS transitions and animations (fix for CI)
Cypress.on('window:before:load', (win) => {
  const style = win.document.createElement('style')
  style.innerHTML = `
    * {
      transition: none !important;
      animation: none !important;
    }
    .modal.fade {
      opacity: 1 !important;
    }
    .modal.fade .modal-dialog {
      transform: none !important;
    }
  `
  win.document.head.appendChild(style)
})

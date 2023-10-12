describe('Check Hamburger works', () => {
  it('should navigate to the homepage and perform actions', () => {
    // Visit the homepage
    cy.visit('/');

    // Verify that the title is present
    cy.get('.title').should('contain.text', 'FidZulu');

    // Perform actions on the elements
    cy.get('#hamburger').click(); // Click the hamburger icon to open the modal

    // Verify that the modal is opened
    cy.get('.modal-title').should('contain.text', 'Find by Categories');

    // Perform actions inside the modal
    cy.get('.sidebar-options').contains('Toys').click();

    // You can add more interactions based on your application's behavior

    // After performing actions, you might want to close the modal
    cy.get('.btn-close').click();
  });
});

describe('Logo click navigation Test to homepage', () => {
  it('should navigate to the homepage and perform actions', () => {
    cy.visit('/');

    // Verify that the title is present
    cy.get('#top-fidzulu').should('contain.text', 'FidZulu');

    // Click on the title to navigate to the homepage
    cy.get('#top-fidzulu').click();

    // Verify that the URL matches the homepage route
    cy.url().should('eq', Cypress.config().baseUrl );
  });
});

describe('select location', () => {
  it('should change the country when a dropdown item is clicked', () => {
    // Visit the page
    cy.visit('/'); // Adjust the URL based on your application

    // Verify the initial state
    cy.get('.nav-dropdown').should('contain.text', 'Location');
    cy.get('#location-dropdown').should('not.be.visible');

    // Click on the dropdown toggle
    cy.get('.nav-dropdown').click();

    // Click on a dropdown item (e.g., 'US')
    cy.contains('#location-dropdown button', 'US').click();

    // Verify that the country has changed
    cy.get('.nav-dropdown').should('contain.text', 'US');

    // Add more assertions as needed
  });
});

// cypress/integration/cart-navigation.spec.js

describe('Cart Navigation Tests', () => {
  it('should navigate to the Cart page when clicking on the Cart button', () => {
    // Visit the page
    cy.visit('/'); // Adjust the URL based on your application

    // Verify the initial state
    cy.url().should('include', '/'); // Verify that you are on the correct page
    cy.get('.nav-btns .nav-btn').should('contain.text', 'Cart');

    // Click on the Cart button
    cy.get('.nav-btns .nav-btn').click();

    // Verify that the URL has changed to the Cart page
    cy.url().should('eq', Cypress.config().baseUrl +'Cart');

    // Add more assertions as needed
  });
});

// cypress/integration/footer-navigation.spec.js

describe('Footer Navigation to homepage', () => {
  it('should navigate to the About page when clicking on the About link', () => {
    // Visit the page
    cy.visit('/'); // Adjust the URL based on your application

    // Verify the initial state
    cy.url().should('include', '/'); // Verify that you are on the correct page
    cy.get('.title').should('contain.text', 'FidZulu');

    // Click on the About link
    cy.get('#bottom-fidzulu').click();

    // Verify that the URL has changed to the About page
    cy.url().should('eq', Cypress.config().baseUrl);

    // Add more assertions as needed
  });
});

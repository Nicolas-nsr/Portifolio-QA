describe('Redirect Projetos Github', () => {
 it('passes', () => {
    cy.visit('nicolas-nsr.github.io/Portifolio-QA')
    cy.get('#inicio a.green').click();
    // Page URL changed.
    cy.url().should('eq', 'https://nicolas-nsr.github.io/Portifolio-QA/#projetos')
    cy.get('#projetos a.all-link').click();
 })
})

describe('Redirect Contato Linkedin', () => {
  it('passes', () => {
    cy.visit('nicolas-nsr.github.io/Portifolio-QA')
    // Page URL changed.
    cy.url()
      .should('eq', 'https://nicolas-nsr.github.io/Portifolio-QA/')
    // The LinkedIn link in the contact section is present and has the correct URL.
    cy.get('#contato a.outline')
      .should(($el) => {
        expect($el).to.have.attr('href', 'https://linkedin.com/in/nicolas-seabra-da-rosa-204a3b155')
        expect($el).to.contain.text('LINKEDIN ↗')
      })
    
    cy.get('#inicio a.outline').click();
    cy.get('#nav-menu a[href="#contato"]').click();
    // Page URL changed.
    cy.url()
      .should('eq', 'https://nicolas-nsr.github.io/Portifolio-QA/#contato')
    
    cy.get('#contato a.outline').click();
  })
})
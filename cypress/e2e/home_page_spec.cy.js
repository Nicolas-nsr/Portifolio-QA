describe('Acesso ao Portifólio', () => {
  it('passes', () => {
    cy.visit('nicolas-nsr.github.io/Portifolio-QA')
  })
})

describe('Acessar o Sobre', () => {
  it('passes', () => {
    cy.visit('nicolas-nsr.github.io/Portifolio-QA')
    cy.url()
      .should('eq', 'https://nicolas-nsr.github.io/Portifolio-QA/')
    // The 'Sobre' navigation link is present.
    cy.get('#nav-menu a:nth-child(1)')
      .should(($el) => {
        expect($el).to.be.visible
        expect($el).to.have.attr('href', '#sobre')
        expect($el).to.contain.text('Sobre')
      })
    // The 'Sobre' section heading is present.
    cy.get('#sobre h2')
      .should('contain.text', 'Qualidade começa com boas perguntas.')
    
  })
})

describe('Acessar o Projetos', () => {
  it('passes', () => {
    cy.visit('nicolas-nsr.github.io/Portifolio-QA')
    // Page URL changed.
    cy.url()
      .should('eq', 'https://nicolas-nsr.github.io/Portifolio-QA/')
    // The 'Projetos' navigation link is present in the header.
    cy.get('#nav-menu a:nth-child(2)')
      .should(($el) => {
        expect($el).to.be.visible
        expect($el).to.have.attr('href', '#projetos')
        expect($el).to.contain.text('Projetos')
      })
    // The 'Projetos em destaque' heading is visible within the 'Projetos' section.
    cy.get('#projetos h2')
      .should('contain.text', 'Projetos em destaque')
    
  })
})

describe('Acessar o Experiência', () => {
  it('passes', () => {
    cy.visit('nicolas-nsr.github.io/Portifolio-QA')
    // Page URL changed.
    cy.url()
      .should('eq', 'https://nicolas-nsr.github.io/Portifolio-QA/')
    // The 'Experiência' navigation link is present in the header.
    cy.get('#nav-menu a:nth-child(3)')
      .should(($el) => {
        expect($el).to.be.visible
        expect($el).to.have.attr('href', '#experiencia')
        expect($el).to.contain.text('Experiência')
      })
    // The 'Experiência profissional' heading is present in the experience section.
    cy.get('#experiencia h2')
      .should('contain.text', 'Experiência profissional')
    
    cy.get('#nav-menu a[href="#experiencia"]').click();
    // Page URL changed.
    cy.url()
      .should('eq', 'https://nicolas-nsr.github.io/Portifolio-QA/#experiencia')
    
  })
})

describe('Acessar o Formação', () => {
  it('passes', () => {
    cy.visit('nicolas-nsr.github.io/Portifolio-QA')
    // Page URL changed.
    cy.url()
      .should('eq', 'https://nicolas-nsr.github.io/Portifolio-QA/')
    // The section title 'Formação e cursos' is displayed.
    cy.get('#formacao h2')
      .should('contain.text', 'Formação e cursos')
    
    cy.get('#nav-menu a[href="#formacao"]').click();
    // Page URL changed.
    cy.url()
      .should('eq', 'https://nicolas-nsr.github.io/Portifolio-QA/#formacao')
    
  })
})

describe('Acessar o Contato', () => {
  it('passes', () => {
    cy.visit('nicolas-nsr.github.io/Portifolio-QA')
    cy.get('#nav-menu a[href="#contato"]').click();
    // Page URL changed.
    cy.url()
      .should('eq', 'https://nicolas-nsr.github.io/Portifolio-QA/#contato')
    // The page navigated to the contact section.
    cy.get('html')
      .should('have.attr', 'style', 'scroll-behavior: auto;')
    
  })
})
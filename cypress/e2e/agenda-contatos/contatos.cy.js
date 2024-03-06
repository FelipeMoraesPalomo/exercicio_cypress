/// <reference types="cypress" />

describe("Testes para a agenda", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve incluir um novo contato", () => {
    cy.get('input[type="text"]').type("teste");
    cy.get('input[type="email"]').type("teste@gmail.com");
    cy.get('input[type="tel"]').type("4002 8922");
    cy.get('button[type="submit"]').click();

    cy.get("ul>li:contains(teste)").should("be.visible");
  });

  it("Deve editar um contato", () => {
    cy.get("button.edit").last().click();
    cy.get('input[type="text"]').clear().type("NomeAlterado");
    cy.get('input[type="email"]').clear().type("alterado@gmail.com");
    cy.get('input[type="tel"]').clear().type("000 00 0");
    cy.get('button[type="submit"]').click();

    cy.get("ul>li:contains(NomeAlterado)").should("be.visible");
  });

  it("Deve remover um contato", () => {
    cy.get("button.delete").last().click();
    cy.contains("NomeAlterado").should("not.exist");
  });
});

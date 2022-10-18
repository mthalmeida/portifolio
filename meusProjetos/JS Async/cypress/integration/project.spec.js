const fetchMock = require("../mocks/fetch");

const PROJECT_URL = "./index.html";

describe("Project Javascript Async", () => {
  beforeEach(() => {
    cy.visit(PROJECT_URL, {
      onBeforeLoad(win) {
        cy.stub(win, "fetch").callsFake(fetchMock).as("mockFetch");
      },
    });
    cy.clearLocalStorage();
  });

  describe("1 - Vamos consultar uma API que fornece os valores de crypto moedas", () => {
    it("Implemente uma requisição, para consumir a API crypto moedas", () => {
      cy.get("@mockFetch").should(
        "calledWith",
        "https://api.coincap.io/v2/assets"
      );
    });
  });

  describe("2 - Agora vamos fazer com que as moedas apareçam na tela", () => {
    it("Dentro da <ul> com id coins-list crie uma <li> para cada moeda da requisição", () => {
      cy.get("#coins-list").children("li");
    });

    it("Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares. Exemplo: Bitcoin (BTC): 23207.95", () => {
      cy.get("#coins-list")
        .children("li")
        .should("have.length.at.least", 10)
        .first()
        .should("have.text", "Bitcoin (BTC): 23207.95");
    });
  });

  describe("3 - Mostrar somente as 10 primeiras moedas da requisição", () => {
    it("Filtrar o array das moedas para mostrar apenas as 10 primeiras?", () => {
      cy.get("#coins-list > li", { timeout: 10000 }).should("have.length", 10);
    });
  });  
});

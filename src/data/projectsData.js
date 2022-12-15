const projects = [
  {
    name: "Playground Functions",
    description:
      "Segundo projeto do curso Trybe que buscou desenvolver minhas habilidades em Javascript com testes e raciocínio lógico focados em linguagem de programação.",
    url: "https://github.com/mthalmeida/playgroundFunctions",
    page: "",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "Art Pixels",
    description:
      "Terceiro projeto do curso Trybe com o objetivo de testar e aprimorar conhecimentos em Javascript, HTML e CSS com criação dinâmica e eventos de página.",
    url: "https://github.com/mthalmeida/pixelsArt",
    page: "https://mthalmeida.github.io/pixelsArt/",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "Trybewarts",
    description:
      "Desenvolvimento de uma página de formulário da Escola de Magia de Trybewarts, em que as pessoas estudantes podem enviar seus feedbacks sobre ela. O tema desse projeto é baseado na obra Harry Potter, de J. K. Rowling.",
    url: "https://github.com/mthalmeida/trybeWarts",
    page: "https://mthalmeida.github.io/trybeWarts/",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "Lista de tarefas",
    description:
      "Desenvolvido um site para organizar uma listagem de tarefas utilizando apenas linguagem JS e CSS com auxilo de Framework.",
    url: "https://github.com/mthalmeida/TodoList",
    page: "https://mthalmeida.github.io/TodoList/",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "Zoo Functions",
    description:
      "Desenvolvimento de funções que buscam informações sobre as informações de um zoológico como: espécie, local de origem, dados sobre as pessoas que colaboram com a manutenção e cuidado do zoológico.",
    url: "https://github.com/mthalmeida/zooFunction",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "JS Async",
    description:
      "Uso de API que retorna um TOP 10 das principais moedas do mercado, utilizando CSS, HTML e API externa com uso de testes unitarios de verificação.",
    url: "https://github.com/mthalmeida/TestAsync",
    page: "https://mthalmeida.github.io/JSAsync/",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "API do Mercado Livre com TDD",
    description:
      "Elaboração de um E-commerce utilizando a API do Mercado Livre com a utilização de testes TDD (Test Driven Development).",
    url: "https://github.com/mthalmeida/ShoppingCart",
    page: "https://mthalmeida.github.io/ShoppingCart/",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "Solar System",
    description:
      "Utilizando uma API local, foi desenvolvido meu primeiro projeto em REACT que contem informações de nossos planetas e missões já realizadas até o momento pela NASA.",
    url: "https://github.com/mthalmeida/solarSystem",
    page: "",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "Async Test",
    description:
      "Implementado várias funções na resolução dos requisitos propostos com utilização de testes unitários para garantir que as implementações das funções estão corretas, de acordo com o que está sendo solicitado.",
    url: "https://github.com/mthalmeida/asyncTest",
    page: "",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "React Music",
    description:
      "Feito uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas utilizando a API do Itunes.",
    url: "https://github.com/mthalmeida/reactMusic",
    page: "https://mthalmeida.github.io/reactMusic/",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "Online Store",
    description: "Projeto desenvolvido em grupo com o objetivo de consumir a API do Mercado Livre, filtrando, categorizando e redirecionando itens a pagina de checkout.",
    url: "https://github.com/mthalmeida/onlineStoreApi",
    page: "https://mthalmeida.github.io/onlineStoreApi/",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "Testes em React",
    description: "Desenvolvido testes em React-Testing-Library automatizando e simulando eventos, fluxos lógicos assíncronos com mochs de APIs.",
    url: "https://github.com/mthalmeida/testes-em-react",
    page: "",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "Trybe Wallet",
    description: "Carteira de controle de gastos com conversor de moedas automatizado.",
    url: "https://github.com/mthalmeida/trybeWallet/",
    page: "https://mthalmeida.github.io/trybeWallet/",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "Trivia Game",
    description: "<Em desenvolvimento>",
    url: "",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  {
    name: "App de Receitas",
    description: "<Em desenvolvimento>",
    url: "",
    image:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

export default projects;

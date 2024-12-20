import trybewarts from '../components/images/projects/trybewarts.png'
import todolistImage from '../components/images/projects/todolist.png'
import monitorCripto from '../components/images/projects/monitorCripto.png'
import jest from '../components/images/projects/jest.png'
import music from '../components/images/projects/music.png'
import react from '../components/images/projects/react.png'
import walletManager from '../components/images/projects/walletManager.png'
import wordpress from '../components/images/projects/wordpress.png'
import gerenciamento from '../components/images/projects/gerenciamento.png'
import taskManager from '../components/images/projects/taskManager.png'

const projects = [
  {
    name: 'Trybewarts',
    description:
      'Página personalizada inspirada na obra de Harry Potter, de J. K. Rowling. Desenvolvida com HTML, Bootstrap e CSS, esta página permite que os estudantes enviem seus feedbacks sobre a escola. Com um design e elementos interativos, essa pagina foi elaborada como objetivo de exercitar as habilidades de forms e implementação do Bootstrap.',
    url: 'https://github.com/mthalmeida/trybeWarts',
    page: 'https://mthalmeida.github.io/trybeWarts/',
    image: trybewarts
  },

  {
    name: 'Lista de tarefas',
    description:
      'Sistema desenvolvido em HTML, CSS e JavaScript, para adicionar, organizar e priorizar tarefas. Com esse aplicativo, você pode gerenciar suas tarefas de forma fácil e intuitiva. Adicione novas tarefas, defina prioridades, marque as concluídas e mantenha-se produtivo .Com uma interface amigável e responsiva, este sistema simplifica a gestão do dia a dia. ',
    url: 'https://github.com/mthalmeida/TodoList',
    page: 'https://mthalmeida.github.io/TodoList/',
    image: todolistImage
  },
  {
    name: 'Monitor para criptomoedas',
    description:
      'Monitor desenvolvido com HTML, CSS e JavaScript, que acompanha em tempo real as top 15 criptomoedas do mercado. Utilizando uma integração de uma API externa e com o design elaborado para que seja usado em monitores externos, atualiza automaticamente todos os valores a cada 5 minutos, garantindo informações atualizadas.',
    url: 'https://github.com/mthalmeida/TestAsync',
    page: 'https://mthalmeida.github.io/JSAsync/',
    image: monitorCripto
  },

  {
    name: 'Testes Assíncronos',
    description:
      'Conjunto de funções personalizadas que atendem às especificações definidas no briefing, utilizando testes unitários abrangentes. Esses testes permitem verificar se as funções estão funcionando corretamente, de acordo com as solicitações e requisitos estabelecidos. Dessa forma, garantindo a total confiança na funcionalidade e desempenho das soluções.',
    url: 'https://github.com/mthalmeida/asyncTest',
    page: '',
    image: jest
  },

  {
    name: 'React Music',
    description:
      'Aplicativo web que reproduz músicas de diversas bandas e artistas, utilizando a API do Itunes diretamente do navegador. O aplicativo permite que se pesquise por faixas e as reproduza por um determinado período com uma boa qualidade sonora. Este projeto foi realizado com o objetivo de utilizar APIs externas e criar aplicações web envolventes, funcionais e testadas.',
    url: 'https://github.com/mthalmeida/reactMusic',
    page: 'https://mthalmeida.github.io/reactMusic/',
    image: music
  },

  {
    name: 'Testes em React',
    description:
      'Testes utilizando React-Testing-Library para automatizar e simular eventos em um projeto React. Com esse conjunto de testes, é possível validar fluxos lógicos assíncronos, incluindo a interação com APIs, usando mocks. Esses testes garantem a qualidade e confiabilidade do código, permitindo identificar e corrigir problemas de forma rápida e eficiente.',
    url: 'https://github.com/mthalmeida/testes-em-react',
    page: '',
    image: react
  },

  {
    name: 'Wallet Manager',
    description:
      'Elaborado um aplicativo web para o gerenciamento de gastos, criado com HTML, CSS e React. A funcionalidade especial do aplicativo é a conversão automática de gastos de outras moedas para o Real, utilizando cotações reais de mercado. Dessa forma, podendo monitorar e controlar os gastos de forma eficiente, com total transparência e precisão.',
    url: 'https://github.com/mthalmeida/trybeWallet/',
    page: 'https://mthalmeida.github.io/trybeWallet/',
    image: walletManager
  },

  {
    name: 'Grupo Mobelar Móveis',
    description:
      'Site completo e personalizado criado com a combinação de HTML, CSS e WordPress, aprimorado com plugins para melhorar e metrificar seu uso. Além disso, foi utilizado banco de dados MySQL para gerenciar informações de forma eficiente, com hospedagem confiável e um registro de domínio exclusivo.',
    url: '',
    page: 'https://www.grupomobelar.com.br/',
    image: wordpress
  },

  {
    name: 'Sistema de Gerenciamento',
    description:
      'Implementado um sistema de gestão completo, utilizando HTML, CSS, PHP e MySQL, garantindo a disponibilidade e segurança dos dados e permitindo ao cliente acopanhar o andamento do projeto de forma virtual. Disponibilizado também uma versão mobile para Android utilizando Kodular e Firebase, permitindo acesso por meio de dispositivos móveis.',
    url: '',
    page: 'https://www.grupomobelar.com.br/sistema/index.php/login',
    image: gerenciamento
  },

  {
    name: 'Task Manager v1.0.1',
    description:
      'Sistema de gerenciamento de tarefas desenvolvido em PHP, CSS, HTML e MySql. Uma solução prática e intuitiva para organizar a vida pessoal e profissional, mantendo os contatos atualizados e gerenciando as tarefas diárias com facilidade.',
    url: 'https://github.com/mthalmeida/taskManager',
    page: '',
    image: taskManager
  }
]

export default projects

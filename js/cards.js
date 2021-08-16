const CARDS = [
  {
    number: 0x00,
    name: {
      en: 'Pseudo-Random Number Generator',
      pt: 'Gerador de Números Pseudoaleatórios'
    },
    algorithm: {
      en: '',
      pt: 'Números aleatórios gerados por computadores não são realmente aleatórios porque computadores são dispositivos determinísticos e previsíveis. O algoritmo usado aqui gera um fluxo de números cuja ordem é difícil de prever, mas cuja distribuição é uniforme, ou seja, todos os números aparecem com a mesma frequência.'
    },
    message: {
      en: 'Beginning of a journey. Every outcome is equally likely. But there is method to your madness.',
      pt:'Essa carta simboliza o início de uma jornada. Cada possibilidade é igualmente provável. Mas existe um método para a sua loucura.'
    }
  },
  {
    number: 0x01,
    name: {
      en: 'Fast Fourier Transform',
      pt: 'Transformação Rápida de Fourier'
    },
    algorithm: {
      en: '',
      pt: 'A Transformação Rápida de Fourier é um algoritmo usado para navegar entre duas representações da mesma informação: uma que mostra quando certas coisas acontecem e outra que expressa com que frequência.'
    },
    message: {
      en: 'Transformation between two realms. Creativity as material resource. Bring your own practical knowledge, tools and rituals.',
      pt:'De forma mais ampla, esta carta representa uma transformação entre dois universos. Use sua criatividade como um recurso material e crie suas próprias práticas, ferramentas e rituais.'
    }
  },
  {
    number: 0x02,
    name: {
      en: 'PageRank',
      pt: 'PageRank'
    },
    algorithm: {
      en: '',
      pt: 'PageRank é o algoritmo de análise de links usado pelo Google para classificar as páginas nos resultados de pesquisa. É uma forma de medir a relevância de um website contando a quantidade e a qualidade dos links apontados para ele.'
    },
    message: {
      en: 'Inner knowledge and intuition. A way into the divine subconscious mind. Not all silence bears secrets.',
      pt:'No plano humano, esse algoritmo fala do conhecimento interno e intuição. Um caminho para a mente subconsciente divina. Nem todo silêncio contém segredos.'
    }
  },
  {
    number: 0x03,
    name: {
      en: 'Reaction-Diffusion',
      pt: 'Reação-Difusão'
    },
    algorithm: {
      en: '',
      pt: 'O algoritmo de reação-difusão proposto por Alan Turing originalmente para descrever reações químicas entre duas substâncias também pode ser usado para modelar outros processos dinâmicos encontrados na natureza. Muitas vezes é utilizado para gerar diferentes tipos de efeitos visuais porque é capaz de gerar padrões periódicos que não são perfeitamente simétricos ou repetitivos.'
    },
    message: {
      en: 'You can have both nature AND nurture in beautiful abundance. Just don\'t waste your time looking for something that isn\'t there. Movement doesn\'t equal progress.',
      pt:'Essa carta mostra que podemos desfrutar da junção entre natureza e cultura. Só não perca seu tempo procurando por algo que não existe. Movimento não é a mesma coisa que progresso.'
    }
  },
  {
    number: 0x04,
    name: {
      en: 'Alpha–Beta Pruning',
      pt: 'Poda Alfa-Beta'
    },
    algorithm: {
      en: '',
      pt: 'A Poda Alfa-Beta é um algoritmo usado em programas de jogos para escolher o lance ideal. Ele otimiza o processo de listagem de todos os movimentos possíveis, removendo todos aqueles que não são ideais ou não resultarão no resultado desejado ao final do jogo.'
    },
    message: {
      en: 'Consider all your possibilities before clearing up space for new beginnings. Be aware of rules, patterns and time restrictions related to your ventures.',
      pt:'Essa carta pede para você considerar todas as possibilidades de ação antes de investir em recomeços. Esteja ciente das regras, padrões e restrições relacionadas aos seus empreendimentos.'
    }
  },
  {
    number: 0x05,
    name: {
      en: 'Quicksort',
      pt: 'Quicksort'
    },
    algorithm: {
      en: '',
      pt: 'Na ciência da computação, um algoritmo de ordenação é um algoritmo de manipulação de dados que coloca um conjunto de elementos em uma certa ordem (frequentemente ordem numérica ou alfabética). O Quicksort é um algoritmo que funciona recursivamente, dividindo os elementos a serem ordenados em dois conjuntos e, em seguida, organizando separadamente cada um dos dois subconjuntos.'
    },
    message: {
      en: 'Material preoccupation with law and order. Don\'t inflate your ego with righteousness by ignoring social and community matters.',
      pt:'Essa carta simboliza uma preocupação material com regras e ordem. Não polua seu ego com retidão e superioridade, ignorando questões sociais e comunitárias.'
    }
  },
  {
    number: 0x06,
    name: {
      en: 'Greatest Common Divisor',
      pt: 'Máximo Divisor Comum'
    },
    algorithm: {
      en: '',
      pt: 'O máximo divisor comum (MDC) de dois números é o maior número que os divide sem deixar sobra. Um algoritmo para encontrar o MDC de dois números foi descrito por Euclides por volta de 300 aC e é um dos primeiros exemplos de uma descrição de um procedimento para realizar um cálculo de acordo com regras bem definidas.'
    },
    message: {
      en: 'Choice doesn\'t have to mean abdication. Synthesize. Figure out a way to integrate both sides, or keep one for later.',
      pt:'Essa carta mostra que uma escolha não significa abdicação. Sintetize. Descubra uma maneira de integrar os dois lados ou guarde um para depois.'
    }
  },
  {
    number: 0x07,
    name: {
      en: 'Maze Search',
      pt: 'Travessia de Grafos e Labirintos'
    },
    algorithm: {
      en: '',
      pt: 'Algoritmos de travessia são utilizados para automatizar sistemas de navegação e mapeamento. Geralmente esses algoritmos utilizam duas estratégias de busca: uma que prioriza a busca por um caminho de cada vez, indo o mais longe possível antes de retroceder, e outra que explora vários caminhos ao mesmo tempo, dando um passo de cada vez em cada direção possível.'
    },
    message: {
      en: 'One way to weather the storm is to step on the accelerator. Many decisions and actions are reversible. Don\'t be afraid of making mistakes and backtracking.',
      pt:'Essa carta indica que uma maneira de enfrentar à tempestade é pisando no acelerador. Muitas decisões e ações são reversíveis. Não tenha medo de cometer erros e retroceder.'
    }
  },
  {
    number: 0x08,
    name: {
      en: 'Splay Trees',
      pt: 'Árvore Splay'
    },
    algorithm: {
      en: '',
      pt: 'Na ciência da computação, uma árvore binária é um tipo de estrutura usada para organizar dados. Elas permitem buscas rápidas porque os dados são organizados de uma forma que diminui o número de comparações feitas durante a busca por um elemento específico. As Árvores Splay são árvores especiais, onde os elementos acessados com frequência são ainda mais fáceis de encontrar.'
    },
    message: {
      en: 'Action, reaction, cause and effect. There is a difference between equity and equality. There are many layers to be unpacked and balanced.',
      pt:'Essa carta simboliza processos de ação e reação, causa e efeito. Existe uma diferença entre equidade e igualdade. Existem muitas camadas a serem entendidas e equilibradas.'
    }
  },
  {
    number: 0x09,
    name: {
      en: 'SHA3-512',
      pt: 'SHA3-512'
    },
    algorithm: {
      en: '',
      pt: ''
    },
    message: {
      en: 'Some answers come from within. Being alone is not the same as being lonely. It is what it is, but what is it? There might only be room for one. Close the door.',
      pt:'Esse algoritmo indica que algumas respostas vêm de dentro. Solidão não é a mesma coisa que estar sozinha. Pode não haver espaço para maiores quantidades... Feche a porta.'
    }
  },
  {
    number: 0x0A,
    name: {
      en: 'Perlin Noise',
      pt: 'Ruído Perlin'
    },
    algorithm: {
      en: '',
      pt: ''
    },
    message: {
      en: 'Change is fundamental. All bad things end, and so do good things. It feels like you\'ve been here before, but have you really?',
      pt:'Essa carta revela que a mudança é fundamental. Todas as coisas ruins acabam, mas as coisas boas também. Pode até parecer que você já esteve por aqui antes, mas preste atenção nos pequenos detalhes.'
    }
  },
  {
    number: 0x0B,
    name: {
      en: 'Travelling Salesperson',
      pt: 'Caixeiro-Viajante'
    },
    algorithm: {
      en: '',
      pt: ''
    },
    message: {
      en: 'Self-control, temperance and discipline. Nurture over nature. Eventually all roads go the same way. You might not be able to bruteforce your way out.',
      pt:'Essa carta simboliza autocontrole, moderação e disciplina. Aprenda com a natureza. Eventualmente, todas as estradas levam ao mesmo lugar. Você não deve usar a força bruta para sair dessa.'
    }
  },
  {
    number: 0x0C,
    name: {
      en: 'Hilbert Curves',
      pt: 'Curva de Hilbert'
    },
    algorithm: {
      en: '',
      pt: ''
    },
    message: {
      en: 'Turn, turn, turn. Change direction. Learn to listen for new callings . Things are out of your control for now. Breathe. Take the ride. It\'s an opportunity to see things from a different perspective.',
      pt:'Essa carta nos apresenta à uma mudança de direção. Aprenda a ouvir novos chamados. As coisas estão fora de seu controle por enquanto. Respire. É uma oportunidade de ver as coisas de uma perspectiva diferente.'
    }
  },
  {
    number: 0x0D,
    name: {
      en: 'Mark & Sweep',
      pt: 'Coletor Mark & Sweep'
    },
    algorithm: {
      en: '',
      pt: 'O algoritmo Mark & Sweep é usado para fazer gerenciamento automático de memória. É a parte de um programa responsável por limpar e liberar a memória ocupada por código que não está mais sendo usado.'
    },
    message: {
      en: 'Everything being pruned away is recycled in the name of fertility. Cut the cords that link you to the past and head into the harvest. But, if you plant ice you\'re gonna harvest wind.',
      pt:'Esta carta representa novos começos. Tudo que é podado é reciclado em nome da fertilidade. Corte as amarras que te ligam ao passado e desfrute da abundância da colheita.'
    }
  },
  {
    number: 0x0E,
    name: {
      en: 'Diffie-Hellman Keys',
      pt: 'Chaves Diffie–Hellman'
    },
    algorithm: {
      en: '',
      pt: ''
    },
    message: {
      en: 'Be prepared: make sure you have all the pieces before starting to solve the puzzle. It might mean waiting for the moment with patience and moderation.',
      pt:'Essa carta simboliza um tipo de alerta. Esteje preparado: verifique todas as peças antes de começar a montar o quebra-cabeça. Isso pode significar um momento de espera com paciência e moderação.'
    }
  },
  {
    number: 0x0F,
    name: {
      en: 'JPEG Compression',
      pt: 'Compressão JPEG'
    },
    algorithm: {
      en: '',
      pt: 'O algoritmo JPEG explora propriedades fisiológicas da visão humana para diminuir o tamanho de arquivos de imagem. Comprime imagens por partes, diminuindo a informação sobre a intensidade das cores e ignorando conteúdo de alta frequência.'
    },
    message: {
      en: 'Bring out your inner fears and desires. Don\'t be subtle. They aren\'t as numerous or complicated as you think.',
      pt:'Esta carta pede para você revelar seus medos e desejos internos. Não seja sutil, pois não são tão numerosos ou complicados quanto você pensa.'
    }
  },
  {
    number: 0x10,
    name: {
      en: 'Blockchain Proof-of-Work',
      pt: 'Prova de Trabalho em Blockchain'
    },
    algorithm: {
      en: '',
      pt: ''
    },
    message: {
      en: 'Uncontrolled energy. Sudden change. Revolution over evolution. Past, present and future are superimposed all of a sudden. Beware of cognitive dissonance.',
      pt:'Essa carta simboliza toda e qualquer energia descontrolada. Mudança repentina. Revolução ao invés de evolução. Passado, presente e futuro se sobrepõem de repente. Cuidado com a dissonância cognitiva.'
    }
  },
  {
    number: 0x11,
    name: {
      en: 'CORDIC',
      pt: 'CORDIC'
    },
    algorithm: {
      en: '',
      pt: ''
    },
    message: {
      en: 'Channel your abilities and resources to transcend the limitations of earthly and material concerns. True power comes from the core.',
      pt:'Essa carta pede concentração. Foque suas habilidades e recursos para transcender as limitações e preocupações materiais e terrestres. O verdadeiro poder vem de dentro.'
    }
  },
  {
    number: 0x12,
    name: {
      en: 'Viterbi Encoding',
      pt: 'Encodificação de Viterbi'
    },
    algorithm: {
      en: '',
      pt: 'O Algoritmo de Viterbi usa análise estatística e de probabilidade para reconstruir mensagens transmitidas em canais ruidosos.'
    },
    message: {
      en: 'Daily routine is just a set up for your dreams. Trust your subconscious and resensitize yourself to the meaning of hidden states.',
      pt:'Esta carta mostra que uma rotina diária pode ser o começo de uma configuração para conquistas maiores. Confie no seu subconsciente e re-sensibilize-se ao significado de estados ocultos.'
    }
  },
  {
    number: 0x13,
    name: {
      en: 'Primality Test',
      pt: 'Teste de Primalidade'
    },
    algorithm: {
      en: '',
      pt: ''
    },
    message: {
      en: 'Inner essence. Untraditional power centers. Reflected similarities are seen under a different light. Find the natural centers of resonance.',
      pt:'Essa carta revela a existência de um conhecimento interno e poderes não tradicionais. As semelhanças refletidas são vistas sob uma luz diferente. Encontre os centros naturais de ressonância.'
    }
  },
  {
    number: 0x14,
    name: {
      en: 'Convex Hull',
      pt: 'Fecho Convexo'
    },
    algorithm: {
      en: '',
      pt: ''
    },
    message: {
      en: 'Judiciously gather wisdom from tradition and customs. Be mindful of walls and enclosures. Design your own rituals to strengthen the non-material aspects of your life.',
      pt:'Esse algoritmo simboliza uma combinação cuidadosa de sabedorias tradicionais e costumes. Esteja atento a paredes e cercas. Desenhe seus próprios rituais para fortalecer os aspectos não materiais de sua vida.'
    }
  },
  {
    number: 0x15,
    name: {
      en: 'PID Controller',
      pt: 'Controlador PID'
    },
    algorithm: {
      en: '',
      pt: ''
    },
    message: {
      en: 'Looking back and walking forward. Searching for resolution and completeness. You\'ll relax when you realize you\'re in the right place.',
      pt:'Essa carta pede para você caminhar para frente olhando para trás. Procure resolução e integridade. Você vai relaxar quando perceber que já está no lugar certo.'
    }
  }
];

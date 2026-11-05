export type ServicePoint = {
  title: string;
  text: string;
};

export type Service = {
  title: string;
  text: string;
  img: string;
  alt: string;
  objectPosition?: string;
  about: {
    lead: string;
    points: ServicePoint[];
    note: string;
  };
};

export type BodyArea = {
  title: string;
  text: string;
  label: string;
};

export const services: Service[] = [
  {
    title: "Fisioterapia",
    text: "Um plano individual para recuperar movimento, confiança e participação na rotina.",
    img: "fisioterapia.jpg",
    alt: "Fisioterapeuta mobiliza o joelho de um paciente deitado em maca",
    about: {
      lead: "A fisioterapia cuida da função do movimento. O fisioterapeuta observa como você se move, o que limita a rotina e quais recursos cabem no seu momento.",
      points: [
        {
          title: "Avaliação do movimento",
          text: "inclui sua história, o que você quer voltar a fazer e testes simples, quando necessários. O plano nasce dessa leitura.",
        },
        {
          title: "Sessão individual",
          text: "pode reunir mobilização, exercício e orientação. Cada recurso é explicado e ajustado ao conforto e ao objetivo combinados.",
        },
        {
          title: "Frequência revista",
          text: "é definida depois da avaliação. Não existe um número de sessões que sirva para todas as pessoas, e o plano pode mudar conforme sua resposta.",
        },
      ],
      note: "A fisioterapia não promete um resultado único. A indicação e os recursos dependem da avaliação profissional.",
    },
  },
  {
    title: "Quiropraxia",
    text: "Técnicas manuais escolhidas de acordo com sua avaliação e conforto.",
    img: "quiropraxia.jpg",
    alt: "Profissional mobiliza o quadril de uma paciente deitada em maca",
    about: {
      lead: "A quiropraxia é um cuidado manual para queixas do sistema musculoesquelético, sobretudo coluna e articulações. Nada é aplicado antes de uma conversa sobre sua história e seu conforto.",
      points: [
        {
          title: "Explicação antes da técnica",
          text: "o profissional descreve o que pretende fazer e escuta se aquilo faz sentido para você. O atendimento pode ser interrompido a qualquer momento.",
        },
        {
          title: "Técnicas escolhidas na avaliação",
          text: "mobilizações e ajustes manuais entram só quando a avaliação indicar. A intensidade é adaptada, sem um protocolo igual para todo mundo.",
        },
        {
          title: "Limite claro",
          text: "a quiropraxia não substitui diagnóstico médico nem “realinha” o corpo de forma definitiva. Se outro caminho for mais adequado, isso é conversado.",
        },
      ],
      note: "Dor forte, formigamento, perda de força ou um trauma recente pedem avaliação antes de qualquer técnica manual.",
    },
  },
  {
    title: "Hidroterapia",
    text: "Exercícios na água para movimentar o corpo com mais leveza.",
    img: "hidroterapia.jpg",
    alt: "Profissional acompanha paciente flutuando de costas na piscina",
    about: {
      lead: "A hidroterapia usa a água para facilitar o movimento. O empuxo reduz a carga sobre as articulações e a resistência da água pode ajudar no fortalecimento, sempre com acompanhamento.",
      points: [
        {
          title: "Por que a água",
          text: "flutuar alivia parte do peso do corpo e pode tornar o exercício mais confortável para quem sente dificuldade em solo.",
        },
        {
          title: "Sessão orientada",
          text: "os exercícios, o tempo e a intensidade são combinados depois da avaliação. Você não entra na piscina sem a orientação do profissional.",
        },
        {
          title: "Antes de indicar",
          text: "feridas abertas, algumas infecções de pele e outras condições pedem outro caminho. O profissional confirma se a água é adequada no seu caso.",
        },
      ],
      note: "A hidroterapia é um recurso da fisioterapia, não um treino livre na piscina. A indicação depende da avaliação.",
    },
  },
  {
    title: "Pilates",
    text: "Movimentos precisos para força, controle e consciência corporal.",
    img: "pilates.jpg",
    alt: "Mulher pratica pilates com aro, pernas elevadas sobre o colchonete",
    about: {
      lead: "O pilates trabalha força, controle e consciência do corpo em movimentos precisos, com atenção à respiração e à postura. Na clínica, a sessão é adaptada ao que a avaliação mostrou.",
      points: [
        {
          title: "Qualidade do movimento",
          text: "os exercícios priorizam controle, não velocidade. O aro e outros acessórios de solo entram quando ajudam o objetivo daquela sessão.",
        },
        {
          title: "Adaptação",
          text: "amplitude, apoio e dificuldade mudam conforme seu conforto. O mesmo exercício não é exigido da mesma forma para todas as pessoas.",
        },
        {
          title: "O que se busca",
          text: "mais estabilidade e facilidade para os gestos do dia a dia. A resposta varia, e o plano é revisto ao longo das sessões.",
        },
      ],
      note: "O método foi criado por Joseph Pilates. Aqui ele é conduzido com avaliação prévia, sem promessa de um resultado padrão.",
    },
  },
  {
    title: "RPG",
    text: "Reeducação postural global para alinhar o corpo com mais consciência.",
    img: "rpg.jpg",
    alt: "Profissional avalia a postura de uma paciente sentada, com as mãos na nuca e na lombar",
    about: {
      lead: "A Reeducação Postural Global (RPG) observa o corpo por cadeias musculares, não só por uma região isolada. As posturas são escolhidas depois de ver como você se organiza em pé, sentado e em movimento.",
      points: [
        {
          title: "Leitura da postura",
          text: "o profissional relaciona a queixa com a forma como o corpo se sustenta, em vez de tratar um ponto sem olhar o restante.",
        },
        {
          title: "Posturas sustentadas",
          text: "você mantém posições específicas, com respiração, pelo tempo que o seu ritmo permitir. A sessão costuma ser individual.",
        },
        {
          title: "Expectativa realista",
          text: "o RPG pode ajudar na consciência postural e em queixas musculoesqueléticas. Não existe um alinhamento definitivo igual para todo mundo.",
        },
      ],
      note: "O método foi desenvolvido pelo fisioterapeuta Philippe Souchard. A indicação e a duração são definidas na avaliação.",
    },
  },
  {
    title: "Psicoterapia",
    text: "Um espaço de escuta para cuidar da saúde emocional com acompanhamento profissional.",
    img: "psicoterapia.jpg",
    alt: "Paciente conversa sentada no sofá com uma profissional que anota em um caderno",
    about: {
      lead: "A psicoterapia é um espaço de escuta com um profissional da psicologia. Você fala sobre o que está vivendo e, juntos, combinam um caminho de cuidado emocional.",
      points: [
        {
          title: "Primeira conversa",
          text: "serve para entender o que você busca, como prefere ser acompanhado e se aquele formato faz sentido. Não há um roteiro único de sessão.",
        },
        {
          title: "Sigilo e ritmo",
          text: "o que é dito permanece no cuidado profissional. A frequência é alinhada com você e pode ser revista, sem um número fixo de encontros.",
        },
        {
          title: "O que a sessão não é",
          text: "não é conselho de ocasião nem atendimento de urgência. O trabalho segue no tempo combinado entre você e o profissional.",
        },
      ],
      note: "Se houver risco imediato, procure um serviço de emergência ou ligue para o CVV, no 188. Este texto não substitui o acompanhamento.",
    },
  },
  {
    title: "Nutrição",
    text: "Orientação alimentar individual, conversada a partir da sua rotina e dos seus objetivos.",
    img: "nutricao.jpg",
    alt: "Frutas, verduras e fita métrica sobre a mesa, com uma profissional ao fundo",
    objectPosition: "center bottom",
    about: {
      lead: "A nutrição aqui é orientação alimentar individual. O plano parte da sua rotina, do que você come de fato e dos objetivos que fizerem sentido depois da avaliação.",
      points: [
        {
          title: "Escuta da rotina",
          text: "horários, preferências, restrições e o que você já tentou entram na conversa antes de qualquer orientação escrita.",
        },
        {
          title: "Plano possível de manter",
          text: "as sugestões buscam caber na sua vida e podem ser ajustadas. Não se trata de uma dieta igual para todos nem de uma promessa de peso.",
        },
        {
          title: "Medidas com contexto",
          text: "peso, circunferências ou exames, quando usados, ajudam a entender o momento. Nenhuma meta é definida sem conversar com você.",
        },
      ],
      note: "O nutricionista não substitui o acompanhamento médico quando ele for necessário. Suplementos só entram se houver indicação profissional.",
    },
  },
  {
    title: "Acupuntura",
    text: "Uma técnica com agulhas considerada após avaliação e conversa sobre indicação.",
    img: "acupuntura.jpg",
    alt: "Profissional insere uma agulha nas costas de um paciente, com outras agulhas já aplicadas",
    about: {
      lead: "A acupuntura aplica agulhas finas em pontos do corpo como recurso complementar. Ela só é proposta quando a avaliação indicar e depois que você concordar com o procedimento.",
      points: [
        {
          title: "Consentimento",
          text: "você sabe onde as agulhas serão colocadas, por quanto tempo tendem a permanecer e o que pode sentir. A sessão pode ser interrompida.",
        },
        {
          title: "Material de uso único",
          text: "as agulhas são estéreis e descartáveis, e o profissional permanece presente durante o atendimento.",
        },
        {
          title: "Quando pode não ser indicada",
          text: "infecção na pele, alterações de coagulação e outras condições são verificadas antes. A acupuntura não substitui o cuidado indicado para o seu caso.",
        },
      ],
      note: "A técnica não trata um diagnóstico por conta própria. A decisão de usar agulhas depende da avaliação e do seu aceite.",
    },
  },
];

export const bodyAreas: Record<string, BodyArea> = {
  cervical: {
    title: "Pescoço",
    text: "Atenção à mobilidade e ao conforto cervical.",
    label: "Saiba mais sobre cuidado para o pescoço",
  },
  ombros: {
    title: "Ombros",
    text: "Movimento gradual para tarefas do dia a dia.",
    label: "Saiba mais sobre cuidado para o ombro esquerdo",
  },
  "ombros-r": {
    title: "Ombros",
    text: "Cuidado individual para a região dos ombros.",
    label: "Saiba mais sobre cuidado para o ombro direito",
  },
  lombar: {
    title: "Coluna lombar",
    text: "Avaliação do movimento e das suas atividades.",
    label: "Saiba mais sobre cuidado para a coluna lombar",
  },
  quadril: {
    title: "Quadril",
    text: "Mobilidade e força alinhadas à sua rotina.",
    label: "Saiba mais sobre cuidado para o quadril",
  },
  joelho: {
    title: "Joelho",
    text: "Acompanhamento de força e confiança ao mover.",
    label: "Saiba mais sobre cuidado para o joelho esquerdo",
  },
  "joelho-r": {
    title: "Joelho",
    text: "Cuidado adaptado às suas necessidades.",
    label: "Saiba mais sobre cuidado para o joelho direito",
  },
  tornozelo: {
    title: "Tornozelo",
    text: "Mobilidade e equilíbrio para cada passo.",
    label: "Saiba mais sobre cuidado para o tornozelo",
  },
};

export const hotspotOrder = [
  "cervical",
  "ombros",
  "ombros-r",
  "lombar",
  "quadril",
  "joelho",
  "joelho-r",
  "tornozelo",
] as const;

export const promises = [
  {
    image: "consultation.jpg",
    alt: "Fisioterapeuta escuta paciente durante uma conversa de avaliação",
    label: "Escuta antes de tudo",
    text: "Cada pessoa chega com uma história diferente. A primeira etapa é entender o que importa para você.",
    source: "Um compromisso da nossa equipe",
  },
  {
    image: "therapy-session.jpg",
    alt: "Fisioterapeuta conduz atendimento individual com paciente",
    label: "Plano feito em parceria",
    text: "Você participa das decisões: explicamos as possibilidades e construímos juntos os próximos passos.",
    source: "Um compromisso da nossa equipe",
  },
  {
    image: "rehab-exercise.jpg",
    alt: "Profissional orienta exercício de movimento em clínica",
    label: "Progresso com respeito",
    text: "Acompanhamos como seu corpo responde e ajustamos o cuidado sem apressar o seu processo.",
    source: "Um compromisso da nossa equipe",
  },
];

export const faqs = [
  {
    question: "Como agendar uma avaliação?",
    answer:
      "Você pode enviar uma solicitação pelo botão “Agendar avaliação”. A equipe entrará em contato quando o formulário estiver conectado ao canal oficial da clínica. Os dados enviados nesta demonstração não são transmitidos.",
  },
  {
    question: "Preciso de encaminhamento médico para fisioterapia?",
    answer:
      "A necessidade pode variar conforme o serviço, o convênio e a sua situação. Se você tiver exames ou orientações médicas, leve-os à conversa inicial. Confirme os requisitos com a clínica antes de agendar.",
  },
  {
    question: "O que esperar da primeira consulta?",
    answer:
      "A primeira conversa costuma incluir escuta da sua história e objetivos, avaliação do movimento e alinhamento de possibilidades de cuidado. O profissional explica cada etapa e responde às suas dúvidas.",
  },
  {
    question: "Quais condições vocês tratam?",
    answer:
      "A fisioterapia pode apoiar diferentes necessidades musculoesqueléticas e de movimento. A indicação e os recursos adequados dependem de uma avaliação individual.",
  },
  {
    question: "Quantas sessões serão necessárias?",
    answer:
      "Não existe um número único que sirva para todas as pessoas. A frequência e a duração são conversadas após a avaliação e podem ser revistas conforme sua evolução e seus objetivos.",
  },
];

export const whyCards = [
  {
    img: "consultation.jpg",
    alt: "Fisioterapeuta conversa com paciente durante avaliação",
    caption: "Escuta e plano individual",
  },
  {
    img: "rehab-exercise.jpg",
    alt: "Fisioterapeuta orienta exercício de movimento",
    caption: "Movimento com orientação",
  },
  {
    img: "therapy-session.jpg",
    alt: "Atendimento individual de fisioterapia",
    caption: "Cuidado baseado em avaliação",
  },
  {
    img: "patient-movement.jpg",
    alt: "Paciente realiza exercício com apoio profissional",
    caption: "Acompanhamento em cada etapa",
  },
];

export const benefits = [
  ["Avaliação individual", "para compreender sua necessidade e seus objetivos."],
  ["Plano construído em parceria", "com explicações claras em cada etapa."],
  ["Movimento orientado", "de acordo com seu momento e seu conforto."],
  ["Acompanhamento próximo", "para conversar sobre mudanças no processo."],
  ["Abordagem respeitosa", "sem soluções iguais para todo mundo."],
] as const;

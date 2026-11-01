export type Service = {
  title: string;
  text: string;
  img: string;
  alt: string;
  detail: string;
  objectPosition?: string;
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
    detail:
      "A avaliação considera sua história, seus objetivos e como o movimento aparece no dia a dia. O plano é conversado com você e revisto ao longo do cuidado.",
  },
  {
    title: "Quiropraxia",
    text: "Técnicas manuais escolhidas de acordo com sua avaliação e conforto.",
    img: "quiropraxia.jpg",
    alt: "Profissional mobiliza o quadril de uma paciente deitada em maca",
    detail:
      "A quiropraxia é considerada após conversa sobre sua história e seus objetivos. As técnicas são explicadas antes e adaptadas ao seu conforto.",
  },
  {
    title: "Hidroterapia",
    text: "Exercícios na água para movimentar o corpo com mais leveza.",
    img: "hidroterapia.jpg",
    alt: "Profissional acompanha paciente flutuando de costas na piscina",
    detail:
      "A hidroterapia pode fazer parte do cuidado quando a avaliação indicar. A intensidade e os exercícios são combinados de acordo com o seu momento.",
  },
  {
    title: "Pilates",
    text: "Movimentos precisos para força, controle e consciência corporal.",
    img: "pilates.jpg",
    alt: "Mulher pratica pilates com aro, pernas elevadas sobre o colchonete",
    detail:
      "As sessões são orientadas por avaliação e adaptadas aos seus objetivos, com atenção à postura e ao conforto em cada exercício.",
  },
  {
    title: "RPG",
    text: "Reeducação postural global para alinhar o corpo com mais consciência.",
    img: "rpg.jpg",
    alt: "Profissional avalia a postura de uma paciente sentada, com as mãos na nuca e na lombar",
    detail:
      "O RPG trabalha posturas escolhidas após avaliação. O ritmo é individual e pode ser revisto conforme sua resposta.",
  },
  {
    title: "Psicoterapia",
    text: "Um espaço de escuta para cuidar da saúde emocional com acompanhamento profissional.",
    img: "psicoterapia.jpg",
    alt: "Paciente conversa sentada no sofá com uma profissional que anota em um caderno",
    detail:
      "A psicoterapia começa com uma conversa sobre o que você busca. O formato e a frequência são alinhados com o profissional responsável.",
  },
  {
    title: "Nutrição",
    text: "Orientação alimentar individual, conversada a partir da sua rotina e dos seus objetivos.",
    img: "nutricao.jpg",
    alt: "Frutas, verduras e fita métrica sobre a mesa, com uma profissional ao fundo",
    objectPosition: "center bottom",
    detail:
      "O plano alimentar é construído após entender sua rotina, preferências e necessidades. As orientações podem ser revistas ao longo do acompanhamento.",
  },
  {
    title: "Acupuntura",
    text: "Uma técnica com agulhas considerada após avaliação e conversa sobre indicação.",
    img: "acupuntura.jpg",
    alt: "Profissional insere uma agulha nas costas de um paciente, com outras agulhas já aplicadas",
    detail:
      "A acupuntura é proposta quando fizer sentido para o seu caso, com explicação prévia e consentimento. A adequação depende da avaliação profissional.",
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

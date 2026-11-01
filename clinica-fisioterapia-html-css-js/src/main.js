const icon = (name, extra = "") => {
  const paths = {
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    spine: '<path d="M12 2.5c-1.4 0-2.2 1.1-1.7 2.3.4.9.4 1.4-.2 2.1-.7.7-.6 1.8.1 2.4.7.7.6 1.7-.1 2.4-.7.7-.7 1.8.1 2.5.7.7.7 1.6 0 2.4-.7.7-.6 1.8.2 2.4.7.6.7 1.2.3 2.2-.5 1.1.3 2.3 1.7 2.3s2.2-1.2 1.7-2.3c-.4-1-.4-1.6.3-2.2.8-.6.9-1.7.2-2.4-.7-.8-.7-1.7 0-2.4.8-.7.8-1.8.1-2.5-.7-.7-.8-1.7-.1-2.4.7-.6.8-1.7.1-2.4-.6-.7-.6-1.2-.2-2.1.5-1.2-.3-2.3-1.7-2.3Z"/><path d="M9.4 8.7h5.2M9.2 12h5.6m-5.2 3.3h4.8"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    insta: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    facebook: '<path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z"/>',
    x: '<path d="M5 4h4l10 16h-4L5 4Z"/><path d="m5 20 6-7M13 11l6-7"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24" ${extra}>${paths[name] || paths.arrow}</svg>`;
};

const services = [
  { title: "Fisioterapia", text: "Um plano individual para recuperar movimento, confiança e participação na rotina.", img: "therapy-session.jpg", alt: "Fisioterapeuta orienta movimento de ombro em consultório", detail: "A avaliação considera sua história, seus objetivos e como o movimento aparece no dia a dia. O plano é conversado com você e revisto ao longo do cuidado." },
  { title: "Terapia manual", text: "Técnicas manuais escolhidas de acordo com sua avaliação e conforto.", img: "patient-movement.jpg", alt: "Fisioterapeuta acompanha exercício de mobilidade", detail: "A terapia manual pode integrar um plano de fisioterapia quando fizer sentido para sua avaliação. As técnicas são explicadas antes e adaptadas ao seu conforto." },
  { title: "Agulhamento a seco", text: "Uma técnica possível no cuidado de pontos de tensão muscular.", img: "needling.jpg", alt: "Profissional realiza técnica de agulhamento a seco de forma cuidadosa", detail: "O agulhamento a seco é considerado somente após avaliação, conversa sobre indicação e consentimento. A adequação depende do seu caso e do profissional responsável." },
  { title: "Bandagem terapêutica", text: "Suporte complementar para acompanhar a sua movimentação.", img: "therapy-session.jpg", alt: "Atendimento fisioterapêutico individual em clínica", detail: "A bandagem pode ser usada como recurso complementar quando apropriado. A escolha do material, aplicação e duração são avaliadas individualmente." },
  { title: "Reabilitação", text: "Acompanhamento progressivo para retomar atividades com mais segurança.", img: "rehab-exercise.jpg", alt: "Fisioterapeuta orienta exercício de reabilitação em colchonete", detail: "O processo de reabilitação respeita seu ponto de partida, prioridades e resposta ao movimento. Cada etapa é combinada com clareza, sem promessas de prazo." },
  { title: "Fisio fitness", text: "Exercícios orientados por avaliação e adaptados aos seus objetivos.", img: "consultation.jpg", alt: "Paciente conversa com fisioterapeuta durante avaliação", detail: "Exercícios terapêuticos são selecionados e ajustados ao que você precisa e consegue fazer naquele momento, com orientação profissional." },
];

const areaData = {
  cervical: { title: "Pescoço", text: "Atenção à mobilidade e ao conforto cervical." },
  ombros: { title: "Ombros", text: "Movimento gradual para tarefas do dia a dia." },
  "ombros-r": { title: "Ombros", text: "Cuidado individual para a região dos ombros." },
  lombar: { title: "Coluna lombar", text: "Avaliação do movimento e das suas atividades." },
  quadril: { title: "Quadril", text: "Mobilidade e força alinhadas à sua rotina." },
  joelho: { title: "Joelho", text: "Acompanhamento de força e confiança ao mover." },
  "joelho-r": { title: "Joelho", text: "Cuidado adaptado às suas necessidades." },
  tornozelo: { title: "Tornozelo", text: "Mobilidade e equilíbrio para cada passo." },
};

const promises = [
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

const faqs = [
  ["Como agendar uma avaliação?", "Você pode enviar uma solicitação pelo botão “Agendar avaliação”. A equipe entrará em contato quando o formulário estiver conectado ao canal oficial da clínica. Os dados enviados nesta demonstração não são transmitidos."],
  ["Preciso de encaminhamento médico para fisioterapia?", "A necessidade pode variar conforme o serviço, o convênio e a sua situação. Se você tiver exames ou orientações médicas, leve-os à conversa inicial. Confirme os requisitos com a clínica antes de agendar."],
  ["O que esperar da primeira consulta?", "A primeira conversa costuma incluir escuta da sua história e objetivos, avaliação do movimento e alinhamento de possibilidades de cuidado. O profissional explica cada etapa e responde às suas dúvidas."],
  ["Quais condições vocês tratam?", "A fisioterapia pode apoiar diferentes necessidades musculoesqueléticas e de movimento. A indicação e os recursos adequados dependem de uma avaliação individual."],
  ["Quantas sessões serão necessárias?", "Não existe um número único que sirva para todas as pessoas. A frequência e a duração são conversadas após a avaliação e podem ser revistas conforme sua evolução e seus objetivos."],
];

const app = document.querySelector("#app");
app.innerHTML = `
  <header class="site-header">
    <div class="announcement">Fisioterapia e reabilitação com cuidado próximo e individualizado</div>
    <div class="nav-wrap">
      <div class="container nav-inner">
        <a class="brand" href="#inicio" aria-label="Clínica Movimento — início">
          <span class="brand-mark">${icon("spine")}</span>
          <span class="brand-copy"><strong>Clínica Movimento</strong><small>fisioterapia & cuidado</small></span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu-principal">${icon("menu")}</button>
        <nav class="main-nav" id="menu-principal" aria-label="Navegação principal">
          <details class="nav-services">
            <summary>Serviços ${icon("down")}</summary>
            <div class="service-menu">
              ${services.map((s, i) => `<a href="#servico-${i + 1}">${s.title}</a>`).join("")}
            </div>
          </details>
          <a href="#newsletter" title="Conteúdos e novidades por e-mail">Blog</a>
          <a href="#faq">Perguntas frequentes</a>
          <a href="#por-que">Sobre</a>
          <a href="#agendar" data-booking>Valores</a>
          <a href="#contato">Contato</a>
          <a href="#agendar" class="btn btn-primary mobile-cta" data-booking>Agendar avaliação</a>
        </nav>
        <a class="btn btn-primary nav-cta" href="#agendar" data-booking>Agendar avaliação</a>
      </div>
    </div>
  </header>

  <main id="conteudo">
    <section class="hero" id="inicio" aria-labelledby="hero-title">
      <div class="hero-content">
        <div class="hero-copy">
          <span class="eyebrow">Movimento com acolhimento</span>
          <h1 id="hero-title">Movimento com mais liberdade.</h1>
          <p>Um cuidado próximo e individualizado para ajudar você a reduzir dores, recuperar movimentos e se sentir acompanhado em cada etapa.</p>
          <div class="hero-actions">
            <a class="btn btn-light" href="#agendar" data-booking>Agendar avaliação ${icon("arrow")}</a>
            <a class="hero-link" href="#servicos">Conheça os serviços</a>
          </div>
        </div>
      </div>
      <a class="scroll-cue" href="#cuidado"><span>${icon("down")}</span> Role para explorar</a>
      <div class="hero-glass">
        <img src="/images/patient-movement.jpg" alt="" width="54" height="58" />
        <div><p>Seu cuidado começa com uma conversa.</p><a href="#cuidado">Conheça nossa abordagem</a></div>
      </div>
    </section>

    <section class="section care-section" id="cuidado" aria-labelledby="care-title">
      <div class="container care-grid">
        <div class="anatomy-panel reveal" aria-label="Selecione uma região do corpo para saber mais sobre o cuidado">
          <span class="anatomy-fallback" aria-hidden="true">+</span>
          <img class="anatomy-figure" src="/images/anatomy.png" alt="Ilustração anatômica do corpo humano com áreas de tratamento destacadas" width="390" height="440" loading="lazy" />
          <button class="hotspot" type="button" data-area="cervical" style="top:18%;left:50%" aria-label="Saiba mais sobre cuidado para o pescoço" aria-pressed="true"></button>
          <button class="hotspot" type="button" data-area="ombros" style="top:25%;left:40%" aria-label="Saiba mais sobre cuidado para o ombro esquerdo" aria-pressed="false"></button>
          <button class="hotspot" type="button" data-area="ombros-r" style="top:25%;left:60%" aria-label="Saiba mais sobre cuidado para o ombro direito" aria-pressed="false"></button>
          <button class="hotspot" type="button" data-area="lombar" style="top:46%;left:50%" aria-label="Saiba mais sobre cuidado para a coluna lombar" aria-pressed="false"></button>
          <button class="hotspot" type="button" data-area="quadril" style="top:55%;left:50%" aria-label="Saiba mais sobre cuidado para o quadril" aria-pressed="false"></button>
          <button class="hotspot" type="button" data-area="joelho" style="top:70%;left:44%" aria-label="Saiba mais sobre cuidado para o joelho esquerdo" aria-pressed="false"></button>
          <button class="hotspot" type="button" data-area="joelho-r" style="top:70%;left:56%" aria-label="Saiba mais sobre cuidado para o joelho direito" aria-pressed="false"></button>
          <button class="hotspot" type="button" data-area="tornozelo" style="top:88%;left:50%" aria-label="Saiba mais sobre cuidado para o tornozelo" aria-pressed="false"></button>
          <article class="area-card" aria-live="polite">
            <img src="/images/therapy-session.jpg" alt="Atendimento fisioterapêutico individual" width="172" height="82" loading="lazy" />
            <h3>Pescoço</h3><p>Atenção à mobilidade e ao conforto cervical.</p>
            <button type="button" data-booking>Conversar sobre a região</button>
          </article>
        </div>
        <div class="care-copy reveal reveal-delay-1">
          <span class="eyebrow">Cuidado que olha para você</span>
          <h2 id="care-title">Atenção às áreas que fazem parte da sua vida.</h2>
          <p>O corpo não funciona em partes isoladas. Nosso olhar considera seus movimentos, sua rotina e o que você deseja voltar a fazer.</p>
          <ul class="benefit-list">
            <li><span><strong>Avaliação individual</strong> para compreender sua necessidade e seus objetivos.</span></li>
            <li><span><strong>Plano construído em parceria</strong>, com explicações claras em cada etapa.</span></li>
            <li><span><strong>Movimento orientado</strong> de acordo com seu momento e seu conforto.</span></li>
            <li><span><strong>Acompanhamento próximo</strong> para conversar sobre mudanças no processo.</span></li>
            <li><span><strong>Abordagem respeitosa</strong>, sem soluções iguais para todo mundo.</span></li>
          </ul>
          <a class="btn btn-primary" href="#agendar" data-booking>Agendar avaliação ${icon("arrow")}</a>
          <span class="ghost-care" aria-hidden="true">Do seu jeito, no seu tempo</span>
        </div>
      </div>
    </section>

    <section class="section services-section" id="servicos" aria-labelledby="services-title">
      <div class="container">
        <div class="section-heading reveal">
          <span class="eyebrow">Cuidado para cada etapa</span>
          <h2 id="services-title">Serviços de fisioterapia pensados para você.</h2>
          <p class="section-intro">Conheça possibilidades de cuidado. A indicação é sempre conversada após entender sua necessidade.</p>
        </div>
        <div class="service-grid">
          ${services.map((s, i) => `
            <article class="service-card reveal ${i % 3 ? `reveal-delay-${i % 3}` : ""}" id="servico-${i + 1}">
              <div class="service-image"><img src="/images/${s.img}" alt="${s.alt}" width="600" height="400" loading="lazy" /></div>
              <div class="service-body"><h3>${s.title}</h3><p>${s.text}</p>
                <div class="service-actions">
                  <button class="btn btn-primary" type="button" data-booking data-service="${s.title}">Agendar</button>
                  <button class="btn btn-outline" type="button" data-service-detail="${i}">Saiba mais</button>
                </div>
              </div>
            </article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section why-section" id="por-que" aria-labelledby="why-title">
      <div class="container why-layout">
        <div class="why-top">
          <div class="why-top-copy reveal">
            <span class="eyebrow">Uma relação de confiança</span>
            <h2 id="why-title">Cuidado profissional, com espaço para escuta.</h2>
            <p>Você não precisa atravessar o processo sozinho. Nossa equipe acompanha cada etapa com atenção e conversa aberta.</p>
          </div>
          <div class="carousel-controls" aria-label="Controles dos diferenciais">
            <button class="icon-btn" type="button" data-scroll="why-track" data-direction="-1" aria-label="Ver diferenciais anteriores">${icon("arrow", 'style="transform:rotate(180deg)"')}</button>
            <button class="icon-btn" type="button" data-scroll="why-track" data-direction="1" aria-label="Ver próximos diferenciais">${icon("arrow")}</button>
          </div>
        </div>
        <div class="why-track" id="why-track" tabindex="0" aria-label="Diferenciais do cuidado">
          <figure class="why-card"><img src="/images/consultation.jpg" alt="Fisioterapeuta conversa com paciente durante avaliação" width="360" height="450" loading="lazy" /><figcaption>Escuta e plano individual</figcaption></figure>
          <figure class="why-card"><img src="/images/rehab-exercise.jpg" alt="Fisioterapeuta orienta exercício de movimento" width="360" height="450" loading="lazy" /><figcaption>Movimento com orientação</figcaption></figure>
          <figure class="why-card"><img src="/images/therapy-session.jpg" alt="Atendimento individual de fisioterapia" width="360" height="450" loading="lazy" /><figcaption>Cuidado baseado em avaliação</figcaption></figure>
          <figure class="why-card"><img src="/images/patient-movement.jpg" alt="Paciente realiza exercício com apoio profissional" width="360" height="450" loading="lazy" /><figcaption>Acompanhamento em cada etapa</figcaption></figure>
        </div>
      </div>
    </section>

    <section class="section voices-section" aria-labelledby="voices-title">
      <div class="container">
        <div class="section-heading reveal">
          <span class="eyebrow">Nossa forma de cuidar</span>
          <h2 id="voices-title">O que você pode esperar de nós.</h2>
          <p>Em vez de publicar depoimentos sem autorização, compartilhamos os compromissos que orientam nosso atendimento.</p>
        </div>
        <div class="promise-carousel">
          <button class="icon-btn filled" type="button" data-promise="previous" aria-label="Compromisso anterior">${icon("arrow", 'style="transform:rotate(180deg)"')}</button>
          <article class="promise-card" aria-live="polite">
            <img src="/images/consultation.jpg" alt="Fisioterapeuta escuta paciente durante uma conversa de avaliação" width="470" height="444" loading="lazy" />
            <div class="promise-copy">
              <span class="promise-index">Compromisso 01 / 03</span>
              <blockquote>“Cada pessoa chega com uma história diferente. A primeira etapa é entender o que importa para você.”</blockquote>
              <p>Um compromisso da nossa equipe · Escuta antes de tudo</p>
            </div>
          </article>
          <button class="icon-btn filled" type="button" data-promise="next" aria-label="Próximo compromisso">${icon("arrow")}</button>
        </div>
        <div class="promise-pagination" aria-label="Escolher compromisso"></div>
      </div>
    </section>

    <div class="marquee-band" aria-hidden="true">
      <div class="marquee-track"><span>Escuta · Movimento · Cuidado ·</span><b>•</b><span>Escuta · Movimento · Cuidado ·</span><b>•</b><span>Escuta · Movimento · Cuidado ·</span><b>•</b><span>Escuta · Movimento · Cuidado ·</span><b>•</b></div>
    </div>

    <section class="section faq-section" id="faq" aria-labelledby="faq-title">
      <div class="container faq-wrap">
        <div class="section-heading reveal">
          <span class="eyebrow">Estamos aqui para esclarecer</span>
          <h2 id="faq-title">Perguntas frequentes.</h2>
          <p>Informação clara também faz parte do cuidado.</p>
        </div>
        <div class="faq-list">
          ${faqs.map(([q, answer], i) => `
            <article class="faq-item ${i === 0 ? "is-open" : ""}">
              <h3><button class="faq-question" type="button" aria-expanded="${i === 0}" aria-controls="faq-answer-${i}"><span>${q}</span><span class="faq-icon" aria-hidden="true">${i === 0 ? "−" : "+"}</span></button></h3>
              <div class="faq-answer" id="faq-answer-${i}" ${i === 0 ? "" : "hidden"}><div><p>${answer}</p></div></div>
            </article>`).join("")}
        </div>
        <p class="faq-note">As orientações gerais não substituem avaliação individual ou orientação profissional.</p>
      </div>
    </section>

    <section class="cta-band" id="contato" aria-labelledby="cta-title">
      <div class="container cta-content">
        <div class="cta-copy">
          <h2 id="cta-title">Vamos conversar sobre o seu próximo passo?</h2>
          <p>Conte o que você busca. A avaliação é o começo de um cuidado construído junto com você.</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-light" href="#agendar" data-booking>Agendar avaliação ${icon("arrow")}</a>
          <a class="btn btn-outline-light" href="#contato-detalhes">Fale conosco</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer" id="contato-detalhes">
    <div class="container">
      <div class="footer-grid">
        <section class="footer-col footer-newsletter" id="newsletter" aria-labelledby="newsletter-title">
          <h3 id="newsletter-title">Receba dicas de cuidado e movimento</h3>
          <p>Novidades e conteúdos informativos, com atenção à sua privacidade.</p>
          <form class="newsletter-form" id="newsletter-form">
            <label class="sr-only" for="newsletter-email">Seu e-mail</label>
            <input id="newsletter-email" name="email" type="email" autocomplete="email" placeholder="Digite seu e-mail" required />
            <button class="btn btn-primary" type="submit">Quero receber</button>
            <p class="form-status" id="newsletter-status" aria-live="polite"></p>
          </form>
        </section>
        <nav class="footer-col" aria-label="Links rápidos">
          <h3>Links rápidos</h3>
          <ul class="footer-links">
            <li><a href="#inicio">Início</a></li><li><a href="#servicos">Serviços</a></li>
            <li><a href="#por-que">Sobre o cuidado</a></li><li><a href="#newsletter">Conteúdos</a></li>
            <li><a href="#faq">Perguntas frequentes</a></li><li><a href="#agendar" data-booking>Valores e avaliação</a></li><li><a href="#contato-detalhes">Contato</a></li>
          </ul>
        </nav>
        <nav class="footer-col" aria-label="Nossos serviços">
          <h3>Nossos serviços</h3>
          <ul class="footer-links">${services.map((s, i) => `<li><a href="#servico-${i + 1}">${s.title}</a></li>`).join("")}</ul>
        </nav>
        <section class="footer-col" aria-labelledby="contact-title">
          <h3 id="contact-title">Siga-nos / Contato</h3>
          <div class="social-links" aria-label="Redes sociais (links a configurar)">
            <button type="button" aria-label="Instagram — link a configurar" data-social="Instagram">${icon("insta")}</button>
            <button type="button" aria-label="Facebook — link a configurar" data-social="Facebook">${icon("facebook")}</button>
            <button type="button" aria-label="X — link a configurar" data-social="X">${icon("x")}</button>
          </div>
          <p class="form-status social-status" aria-live="polite"></p>
          <ul class="contact-list">
            <li>${icon("phone")}<span>Telefone: <strong>Consulte os canais oficiais da clínica</strong></span></li>
            <li>${icon("mail")}<span>E-mail: <strong>Fale com a equipe para mais informações</strong></span></li>
            <li>${icon("pin")}<span>Endereço: <strong>Local confirmado no agendamento</strong></span></li>
          </ul>
          <p class="editable-config">Atualize os canais oficiais e o endereço antes da publicação.</p>
        </section>
      </div>
      <div class="footer-bottom">
        <span>© <span id="year"></span> Clínica Movimento. Todos os direitos reservados.</span>
        <span><a href="#privacidade" data-policy="privacidade">Privacidade</a> · <a href="#termos" data-policy="termos">Termos de uso</a></span>
        <span>Informações institucionais editáveis</span>
      </div>
    </div>
  </footer>

  <dialog class="booking-dialog" id="booking-dialog" aria-labelledby="booking-title">
    <div class="dialog-inner">
      <button class="dialog-close" type="button" aria-label="Fechar formulário">${icon("close")}</button>
      <span class="eyebrow">Um primeiro passo</span>
      <h2 id="booking-title">Agende uma avaliação.</h2>
      <p>Deixe seus dados para iniciar a conversa. Os campos são demonstrativos e ainda não enviam informações à clínica.</p>
      <form class="booking-form" id="booking-form">
        <div class="field"><label for="booking-name">Seu nome</label><input id="booking-name" name="name" autocomplete="name" required /></div>
        <div class="field"><label for="booking-phone">Telefone para contato</label><input id="booking-phone" name="phone" type="tel" autocomplete="tel" placeholder="(00) 00000-0000" required /></div>
        <div class="field full"><label for="booking-email">E-mail</label><input id="booking-email" name="email" type="email" autocomplete="email" required /></div>
        <div class="field full"><label for="booking-service">O que você procura?</label><select id="booking-service" name="service"><option value="">Quero conversar sobre minhas necessidades</option>${services.map(s => `<option>${s.title}</option>`).join("")}</select></div>
        <div class="field full"><label for="booking-message">Se quiser, conte um pouco mais</label><textarea id="booking-message" name="message" placeholder="O que você gostaria de voltar a fazer?"></textarea></div>
        <p class="form-privacy field full">Ao enviar, você declara estar ciente de que este formulário ainda não está conectado ao canal oficial da clínica. Não inclua informações médicas sensíveis.</p>
        <button class="btn btn-primary" type="submit">Revisar solicitação ${icon("arrow")}</button>
        <p class="dialog-status field full" id="booking-status" aria-live="polite"></p>
      </form>
    </div>
  </dialog>
`;

document.querySelector("#year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  menuToggle.innerHTML = icon(isOpen ? "menu" : "close");
  mainNav.classList.toggle("is-open", !isOpen);
});
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.innerHTML = icon("menu");
    const details = mainNav.querySelector(".nav-services");
    if (details) details.open = false;
  });
});

const bookingDialog = document.querySelector("#booking-dialog");
const bookingForm = document.querySelector("#booking-form");
const bookingStatus = document.querySelector("#booking-status");
document.querySelectorAll("[data-booking]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    const service = trigger.dataset.service;
    if (service) document.querySelector("#booking-service").value = service;
    bookingStatus.textContent = "";
    bookingDialog.showModal();
    document.body.classList.add("dialog-open");
    window.setTimeout(() => document.querySelector("#booking-name").focus(), 40);
  });
});
const closeDialog = () => {
  bookingDialog.close();
  document.body.classList.remove("dialog-open");
};
document.querySelector(".dialog-close").addEventListener("click", closeDialog);
bookingDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
bookingDialog.addEventListener("click", (event) => {
  if (event.target === bookingDialog) closeDialog();
});
bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;
  bookingStatus.textContent = "Formulário de demonstração: sua solicitação não foi enviada. Conecte um canal oficial antes de publicar.";
});

document.querySelectorAll("[data-service-detail]").forEach((button) => {
  button.addEventListener("click", () => {
    const service = services[Number(button.dataset.serviceDetail)];
    document.querySelector("#booking-title").textContent = service.title;
    document.querySelector(".dialog-inner > p").textContent = service.detail;
    document.querySelector("#booking-service").value = service.title;
    bookingStatus.textContent = "";
    bookingDialog.showModal();
    document.body.classList.add("dialog-open");
    document.querySelector("#booking-service").focus();
  });
});
bookingDialog.addEventListener("close", () => {
  document.querySelector("#booking-title").textContent = "Agende uma avaliação.";
  document.querySelector(".dialog-inner > p").textContent = "Deixe seus dados para iniciar a conversa. Os campos são demonstrativos e ainda não enviam informações à clínica.";
});

document.querySelectorAll(".hotspot").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".hotspot").forEach((point) => point.setAttribute("aria-pressed", String(point === button)));
    const area = areaData[button.dataset.area];
    const card = document.querySelector(".area-card");
    card.querySelector("h3").textContent = area.title;
    card.querySelector("p").textContent = area.text;
  });
});
document.querySelector(".area-card [data-booking]").addEventListener("click", () => {
  document.querySelector("#booking-message").value = `Gostaria de conversar sobre cuidado para: ${document.querySelector(".area-card h3").textContent}.`;
});

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    const track = document.getElementById(button.dataset.scroll);
    const card = track.querySelector(".why-card");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: (card.getBoundingClientRect().width + gap) * Number(button.dataset.direction), behavior: "smooth" });
  });
});

let promiseIndex = 0;
const promiseCard = document.querySelector(".promise-card");
const promiseDots = document.querySelector(".promise-pagination");
promiseDots.innerHTML = promises.map((_, i) => `<button type="button" aria-label="Ver compromisso ${i + 1}" aria-current="${i === 0}"></button>`).join("");
function renderPromise(index) {
  promiseIndex = (index + promises.length) % promises.length;
  const item = promises[promiseIndex];
  promiseCard.querySelector("img").src = `/images/${item.image}`;
  promiseCard.querySelector("img").alt = item.alt;
  promiseCard.querySelector(".promise-index").textContent = `Compromisso ${String(promiseIndex + 1).padStart(2, "0")} / 03`;
  promiseCard.querySelector("blockquote").textContent = `“${item.text}”`;
  promiseCard.querySelector(".promise-copy p").textContent = `Um compromisso da nossa equipe · ${item.label}`;
  promiseDots.querySelectorAll("button").forEach((dot, i) => dot.setAttribute("aria-current", String(i === promiseIndex)));
}
document.querySelector('[data-promise="previous"]').addEventListener("click", () => renderPromise(promiseIndex - 1));
document.querySelector('[data-promise="next"]').addEventListener("click", () => renderPromise(promiseIndex + 1));
promiseDots.querySelectorAll("button").forEach((dot, index) => dot.addEventListener("click", () => renderPromise(index)));

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const answer = item.querySelector(".faq-answer");
    const opening = button.getAttribute("aria-expanded") !== "true";
    document.querySelectorAll(".faq-item").forEach((other) => {
      const question = other.querySelector(".faq-question");
      const content = other.querySelector(".faq-answer");
      const isCurrent = other === item && opening;
      other.classList.toggle("is-open", isCurrent);
      question.setAttribute("aria-expanded", String(isCurrent));
      question.querySelector(".faq-icon").textContent = isCurrent ? "−" : "+";
      content.hidden = !isCurrent;
    });
    if (opening) answer.hidden = false;
  });
});

const newsletterForm = document.querySelector("#newsletter-form");
newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!newsletterForm.reportValidity()) return;
  document.querySelector("#newsletter-status").textContent = "Cadastro demonstrativo: conecte a newsletter para receber inscrições.";
  newsletterForm.reset();
});
document.querySelectorAll("[data-social]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".social-status").textContent = `Adicione o endereço oficial do perfil ${button.dataset.social} antes de publicar.`;
  });
});
document.querySelectorAll("[data-policy]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".social-status").textContent = `Inclua o conteúdo oficial de ${link.dataset.policy === "privacidade" ? "privacidade" : "termos de uso"} antes da publicação.`;
    document.querySelector("#contact-title").scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -35px 0px" })
  : null;
document.querySelectorAll(".reveal").forEach((element) => {
  if (revealObserver) revealObserver.observe(element);
  else element.classList.add("is-visible");
});


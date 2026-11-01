"use client";

import { useEffect, useState, type FormEvent } from "react";
import { services } from "../data/clinic";
import { useBooking } from "./booking";
import { Icon } from "./icons";

export function SiteFooter() {
  const { openBooking } = useBooking();
  const [year, setYear] = useState(2026);
  const [newsletterStatus, setNewsletterStatus] = useState("");
  const [socialStatus, setSocialStatus] = useState("");

  useEffect(() => {
    // new Date() during render is blocked while Cache Components prerenders the page.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read the year only after mount
    setYear(new Date().getFullYear());
  }, []);

  function handleNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setNewsletterStatus("Cadastro demonstrativo: conecte a newsletter para receber inscrições.");
    event.currentTarget.reset();
  }

  function showPolicy(kind: "privacidade" | "termos") {
    setSocialStatus(
      `Inclua o conteúdo oficial de ${kind === "privacidade" ? "privacidade" : "termos de uso"} antes da publicação.`,
    );
    document.getElementById("contact-title")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <footer className="site-footer" id="contato-detalhes">
      <div className="container">
        <div className="footer-grid">
          <section className="footer-col footer-newsletter" id="newsletter" aria-labelledby="newsletter-title">
            <h3 id="newsletter-title">Receba dicas de cuidado e movimento</h3>
            <p>Novidades e conteúdos informativos, com atenção à sua privacidade.</p>
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <label className="sr-only" htmlFor="newsletter-email">
                Seu e-mail
              </label>
              <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="Digite seu e-mail" required />
              <button className="btn btn-primary" type="submit">
                Quero receber
              </button>
              <p className="form-status" aria-live="polite">
                {newsletterStatus}
              </p>
            </form>
          </section>
          <nav className="footer-col" aria-label="Links rápidos">
            <h3>Links rápidos</h3>
            <ul className="footer-links">
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a href="#por-que">Sobre o cuidado</a>
              </li>
              <li>
                <a href="#newsletter">Conteúdos</a>
              </li>
              <li>
                <a href="#faq">Perguntas frequentes</a>
              </li>
              <li>
                <button type="button" onClick={() => openBooking()}>
                  Valores e avaliação
                </button>
              </li>
              <li>
                <a href="#contato-detalhes">Contato</a>
              </li>
            </ul>
          </nav>
          <nav className="footer-col" aria-label="Nossos serviços">
            <h3>Nossos serviços</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={service.title}>
                  <a href={`#servico-${index + 1}`}>{service.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <section className="footer-col" aria-labelledby="contact-title">
            <h3 id="contact-title">Siga-nos / Contato</h3>
            <div className="social-links" aria-label="Redes sociais (links a configurar)">
              {(["Instagram", "Facebook", "X"] as const).map((network) => (
                <button
                  key={network}
                  type="button"
                  aria-label={`${network} — link a configurar`}
                  onClick={() =>
                    setSocialStatus(`Adicione o endereço oficial do perfil ${network} antes de publicar.`)
                  }
                >
                  <Icon name={network === "Instagram" ? "insta" : network === "Facebook" ? "facebook" : "x"} />
                </button>
              ))}
            </div>
            <p className="form-status social-status" aria-live="polite">
              {socialStatus}
            </p>
            <ul className="contact-list">
              <li>
                <Icon name="phone" />
                <span>
                  Telefone: <strong>Consulte os canais oficiais da clínica</strong>
                </span>
              </li>
              <li>
                <Icon name="mail" />
                <span>
                  E-mail: <strong>Fale com a equipe para mais informações</strong>
                </span>
              </li>
              <li>
                <Icon name="pin" />
                <span>
                  Endereço: <strong>Local confirmado no agendamento</strong>
                </span>
              </li>
            </ul>
            <p className="editable-config">Atualize os canais oficiais e o endereço antes da publicação.</p>
          </section>
        </div>
        <div className="footer-bottom">
          <span>© {year} Clínica Movimento. Todos os direitos reservados.</span>
          <span>
            <button type="button" onClick={() => showPolicy("privacidade")}>
              Privacidade
            </button>
            {" · "}
            <button type="button" onClick={() => showPolicy("termos")}>
              Termos de uso
            </button>
          </span>
          <span>Informações institucionais editáveis</span>
        </div>
      </div>
    </footer>
  );
}

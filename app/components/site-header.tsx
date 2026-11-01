"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { services } from "../data/clinic";
import { BookButton } from "./booking";
import { Icon } from "./icons";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    setMenuOpen(false);
    if (detailsRef.current) detailsRef.current.open = false;
  }

  return (
    <header className="site-header">
      <div className="announcement">Fisioterapia e reabilitação com cuidado próximo e individualizado</div>
      <div className="nav-wrap">
        <div className="container nav-inner">
          <a className="brand" href="#inicio" aria-label="Fisioclinic — início" onClick={closeMenu}>
            <span className="brand-mark">
              <Image src="/brand/mark.png" alt="" width={170} height={231} loading="eager" />
            </span>
            <span className="brand-copy">
              <strong>Fisioclinic</strong>
              <small>Fisioterapia • saude • bem-estar</small>
            </span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
          <nav className={`main-nav${menuOpen ? " is-open" : ""}`} id="menu-principal" aria-label="Navegação principal">
            <details className="nav-services" ref={detailsRef}>
              <summary>
                Serviços <Icon name="down" />
              </summary>
              <div className="service-menu">
                {services.map((service, index) => (
                  <a key={service.title} href={`#servico-${index + 1}`} onClick={closeMenu}>
                    {service.title}
                  </a>
                ))}
              </div>
            </details>
            <a href="#newsletter" title="Conteúdos e novidades por e-mail" onClick={closeMenu}>
              Blog
            </a>
            <a href="#faq" onClick={closeMenu}>
              Perguntas frequentes
            </a>
            <a href="#por-que" onClick={closeMenu}>
              Sobre
            </a>
            <BookButton className="nav-text-link" onOpen={closeMenu}>
              Valores
            </BookButton>
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
            <BookButton className="btn btn-primary mobile-cta" onOpen={closeMenu}>
              Agendar avaliação
            </BookButton>
          </nav>
          <BookButton className="btn btn-primary nav-cta">Agendar avaliação</BookButton>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import { useRef } from "react";
import { whyCards } from "../data/clinic";
import { Icon } from "./icons";
import { useRevealGroup } from "./reveal";

export function Why() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useRevealGroup(sectionRef);

  function scrollTrack(direction: number) {
    const track = trackRef.current;
    const card = track?.querySelector(".why-card");
    if (!track || !card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: (card.getBoundingClientRect().width + gap) * direction,
      behavior: "smooth",
    });
  }

  return (
    <section className="section why-section" id="por-que" aria-labelledby="why-title" ref={sectionRef}>
      <div className="container why-layout">
        <div className="why-top">
          <div className="why-top-copy reveal">
            <span className="eyebrow">Uma relação de confiança</span>
            <h2 id="why-title">Cuidado profissional, com espaço para escuta.</h2>
            <p>
              Você não precisa atravessar o processo sozinho. Nossa equipe acompanha cada etapa com atenção e conversa
              aberta.
            </p>
          </div>
          <div className="carousel-controls" aria-label="Controles dos diferenciais">
            <button
              className="icon-btn"
              type="button"
              aria-label="Ver diferenciais anteriores"
              onClick={() => scrollTrack(-1)}
            >
              <Icon name="arrow" style={{ transform: "rotate(180deg)" }} />
            </button>
            <button className="icon-btn" type="button" aria-label="Ver próximos diferenciais" onClick={() => scrollTrack(1)}>
              <Icon name="arrow" />
            </button>
          </div>
        </div>
        <div className="why-track" id="why-track" tabIndex={0} aria-label="Diferenciais do cuidado" ref={trackRef}>
          {whyCards.map((card) => (
            <figure className="why-card" key={card.caption}>
              <Image src={`/images/${card.img}`} alt={card.alt} width={360} height={450} />
              <figcaption>{card.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { benefits, bodyAreas, hotspotOrder } from "../data/clinic";
import { useBooking } from "./booking";
import { Icon } from "./icons";
import { useRevealGroup } from "./reveal";

export function Care() {
  const sectionRef = useRef<HTMLElement>(null);
  const { openBooking } = useBooking();
  const [areaId, setAreaId] = useState<(typeof hotspotOrder)[number]>("cervical");
  const area = bodyAreas[areaId];

  useRevealGroup(sectionRef);

  return (
    <section className="section care-section" id="cuidado" aria-labelledby="care-title" ref={sectionRef}>
      <div className="container care-grid">
        <div
          className="anatomy-panel reveal"
          aria-label="Selecione uma região do corpo para saber mais sobre o cuidado"
        >
          <span className="anatomy-fallback" aria-hidden="true">
            +
          </span>
          <Image
            className="anatomy-figure"
            src="/images/anatomy.png"
            alt="Ilustração anatômica do corpo humano com áreas de tratamento destacadas"
            width={390}
            height={440}
          />
          {hotspotOrder.map((id) => (
            <button
              key={id}
              className="hotspot"
              type="button"
              data-area={id}
              aria-label={bodyAreas[id].label}
              aria-pressed={areaId === id}
              onClick={() => setAreaId(id)}
            />
          ))}
          <article className="area-card" aria-live="polite">
            <Image
              src="/images/therapy-session.jpg"
              alt="Atendimento fisioterapêutico individual"
              width={172}
              height={82}
            />
            <h3>{area.title}</h3>
            <p>{area.text}</p>
            <button
              type="button"
              onClick={() =>
                openBooking({
                  message: `Gostaria de conversar sobre cuidado para: ${area.title}.`,
                })
              }
            >
              Conversar sobre a região
            </button>
          </article>
        </div>
        <div className="care-copy reveal reveal-delay-1">
          <span className="eyebrow">Cuidado que olha para você</span>
          <h2 id="care-title">Atenção às áreas que fazem parte da sua vida.</h2>
          <p>
            O corpo não funciona em partes isoladas. Nosso olhar considera seus movimentos, sua rotina e o que você
            deseja voltar a fazer.
          </p>
          <ul className="benefit-list">
            {benefits.map(([title, text]) => (
              <li key={title}>
                <span>
                  <strong>{title}</strong> {text}
                </span>
              </li>
            ))}
          </ul>
          <button className="btn btn-primary" type="button" onClick={() => openBooking()}>
            Agendar avaliação <Icon name="arrow" />
          </button>
          <span className="ghost-care" aria-hidden="true">
            Do seu jeito, no seu tempo
          </span>
        </div>
      </div>
    </section>
  );
}

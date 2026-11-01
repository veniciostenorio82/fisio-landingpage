"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { promises } from "../data/clinic";
import { Icon } from "./icons";
import { useRevealGroup } from "./reveal";

export function Promises() {
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const item = promises[index];

  useRevealGroup(sectionRef);

  function show(next: number) {
    setIndex((next + promises.length) % promises.length);
  }

  return (
    <section className="section voices-section" aria-labelledby="voices-title" ref={sectionRef}>
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Nossa forma de cuidar</span>
          <h2 id="voices-title">O que você pode esperar de nós.</h2>
          <p>
            Em vez de publicar depoimentos sem autorização, compartilhamos os compromissos que orientam nosso
            atendimento.
          </p>
        </div>
        <div className="promise-carousel">
          <button className="icon-btn filled" type="button" aria-label="Compromisso anterior" onClick={() => show(index - 1)}>
            <Icon name="arrow" style={{ transform: "rotate(180deg)" }} />
          </button>
          <article className="promise-card" aria-live="polite">
            <Image src={`/images/${item.image}`} alt={item.alt} width={470} height={444} />
            <div className="promise-copy">
              <span className="promise-index">Compromisso {String(index + 1).padStart(2, "0")} / 03</span>
              <blockquote>“{item.text}”</blockquote>
              <p>
                {item.source} · {item.label}
              </p>
            </div>
          </article>
          <button className="icon-btn filled" type="button" aria-label="Próximo compromisso" onClick={() => show(index + 1)}>
            <Icon name="arrow" />
          </button>
        </div>
        <div className="promise-pagination" aria-label="Escolher compromisso">
          {promises.map((promise, dotIndex) => (
            <button
              key={promise.label}
              type="button"
              aria-label={`Ver compromisso ${dotIndex + 1}`}
              aria-current={dotIndex === index ? "true" : undefined}
              onClick={() => show(dotIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

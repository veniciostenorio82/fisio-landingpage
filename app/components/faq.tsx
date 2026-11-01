"use client";

import { useRef, useState } from "react";
import { faqs } from "../data/clinic";
import { useRevealGroup } from "./reveal";

export function Faq() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  useRevealGroup(sectionRef);

  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title" ref={sectionRef}>
      <div className="container faq-wrap">
        <div className="section-heading reveal">
          <span className="eyebrow">Estamos aqui para esclarecer</span>
          <h2 id="faq-title">Perguntas frequentes.</h2>
          <p>Informação clara também faz parte do cuidado.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
                <h3>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div className="faq-answer" id={`faq-answer-${index}`} hidden={!isOpen}>
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="faq-note">As orientações gerais não substituem avaliação individual ou orientação profissional.</p>
      </div>
    </section>
  );
}

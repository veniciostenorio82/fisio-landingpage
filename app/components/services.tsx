"use client";

import Image from "next/image";
import { useRef } from "react";
import { services } from "../data/clinic";
import { useBooking } from "./booking";
import { useRevealGroup } from "./reveal";

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { openBooking, openServiceDetail } = useBooking();

  useRevealGroup(sectionRef);

  return (
    <section className="section services-section" id="servicos" aria-labelledby="services-title" ref={sectionRef}>
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Cuidado para cada etapa</span>
          <h2 id="services-title">Tratamentos pensados para você.</h2>
          <p className="section-intro">
            Conheça possibilidades de cuidado. A indicação é sempre conversada após entender sua necessidade.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`service-card reveal${index % 3 ? ` reveal-delay-${index % 3}` : ""}`}
              id={`servico-${index + 1}`}
            >
              <div className="service-image">
                <Image
                  src={`/images/${service.img}`}
                  alt={service.alt}
                  width={600}
                  height={400}
                  style={service.objectPosition ? { objectPosition: service.objectPosition } : undefined}
                />
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-actions">
                  <button className="btn btn-primary" type="button" onClick={() => openBooking({ service: service.title })}>
                    Agendar
                  </button>
                  <button
                    className="btn btn-outline"
                    type="button"
                    aria-label={`Saiba mais sobre ${service.title}`}
                    onClick={() => openServiceDetail(index)}
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { BookButton } from "./booking";
import { Icon } from "./icons";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow">Movimento com acolhimento</span>
          <h1 id="hero-title">Movimento com mais liberdade.</h1>
          <p>
            Um cuidado próximo e individualizado para ajudar você a reduzir dores, recuperar movimentos e se sentir
            acompanhado em cada etapa.
          </p>
          <div className="hero-actions">
            <BookButton className="btn btn-light">
              Agendar avaliação <Icon name="arrow" />
            </BookButton>
            <a className="hero-link" href="#servicos">
              Conheça os serviços
            </a>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#cuidado">
        <span>
          <Icon name="down" />
        </span>
        Role para explorar
      </a>
      
    </section>
  );
}

import { BookButton } from "./booking";
import { Icon } from "./icons";

export function Cta() {
  return (
    <section className="cta-band" id="contato" aria-labelledby="cta-title">
      <div className="container cta-content">
        <div className="cta-copy">
          <h2 id="cta-title">Vamos conversar sobre o seu próximo passo?</h2>
          <p>Conte o que você busca. A avaliação é o começo de um cuidado construído junto com você.</p>
        </div>
        <div className="cta-actions">
          <BookButton className="btn btn-light">
            Agendar avaliação <Icon name="arrow" />
          </BookButton>
          <a className="btn btn-outline-light" href="#contato-detalhes">
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}

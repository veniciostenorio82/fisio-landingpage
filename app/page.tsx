import { BookingProvider } from "./components/booking";
import { Care } from "./components/care";
import { Cta } from "./components/cta";
import { Faq } from "./components/faq";
import { Hero } from "./components/hero";
import { Promises } from "./components/promises";
import { Services } from "./components/services";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { Why } from "./components/why";

export default function Home() {
  return (
    <BookingProvider>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Care />
        <Services />
        <Why />
        <Promises />
        <div className="marquee-band" aria-hidden="true">
          <div className="marquee-track">
            <span>Escuta · Movimento · Cuidado ·</span>
            <b>•</b>
            <span>Escuta · Movimento · Cuidado ·</span>
            <b>•</b>
            <span>Escuta · Movimento · Cuidado ·</span>
            <b>•</b>
            <span>Escuta · Movimento · Cuidado ·</span>
            <b>•</b>
          </div>
        </div>
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </BookingProvider>
  );
}

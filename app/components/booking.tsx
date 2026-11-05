"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import { services } from "../data/clinic";
import { Icon } from "./icons";

type OpenBookingOptions = {
  service?: string;
  message?: string;
};

type BookingContextValue = {
  openBooking: (options?: OpenBookingOptions) => void;
  openServiceDetail: (index: number) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const value = useContext(BookingContext);
  if (!value) {
    throw new Error("useBooking deve ser usado dentro de BookingProvider");
  }
  return value;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const detailRef = useRef<HTMLDialogElement>(null);
  const bookAfterDetail = useRef<string | null>(null);
  const [open, setOpen] = useState(false);
  const [detailIndex, setDetailIndex] = useState<number | null>(null);
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const detail = detailIndex !== null ? services[detailIndex] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;

    if (!dialog.open) dialog.showModal();
    document.body.classList.add("dialog-open");

    const timeout = window.setTimeout(() => {
      document.getElementById("booking-name")?.focus();
    }, 40);

    return () => window.clearTimeout(timeout);
  }, [open]);

  useEffect(() => {
    const dialog = detailRef.current;
    if (!dialog || detailIndex === null) return;

    if (!dialog.open) dialog.showModal();
    document.body.classList.add("dialog-open");

    const timeout = window.setTimeout(() => {
      document.getElementById("service-detail-title")?.focus();
    }, 40);

    return () => window.clearTimeout(timeout);
  }, [detailIndex]);

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleDialogClose() {
    document.body.classList.remove("dialog-open");
    setOpen(false);
    setStatus("");
  }

  function openBooking(options?: OpenBookingOptions) {
    setService(options?.service ?? "");
    setMessage(options?.message ?? "");
    setStatus("");
    setOpen(true);
  }

  function openServiceDetail(index: number) {
    if (!services[index]) return;
    setDetailIndex(index);
  }

  function closeServiceDetail() {
    detailRef.current?.close();
  }

  function handleDetailClose() {
    const nextService = bookAfterDetail.current;
    bookAfterDetail.current = null;
    setDetailIndex(null);
    if (nextService) {
      openBooking({ service: nextService });
      return;
    }
    document.body.classList.remove("dialog-open");
  }

  function bookFromDetail() {
    if (!detail) return;
    bookAfterDetail.current = detail.title;
    closeServiceDetail();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setStatus(
      "Formulário de demonstração: sua solicitação não foi enviada. Conecte um canal oficial antes de publicar.",
    );
  }

  return (
    <BookingContext.Provider value={{ openBooking, openServiceDetail }}>
      {children}
      <dialog
        ref={dialogRef}
        className="booking-dialog"
        id="agendar"
        aria-labelledby="booking-title"
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
      >
        <div className="dialog-inner">
          <button className="dialog-close" type="button" aria-label="Fechar formulário" onClick={closeDialog}>
            <Icon name="close" />
          </button>
          <span className="eyebrow">Um primeiro passo</span>
          <h2 id="booking-title">Agende uma avaliação.</h2>
          <p>
            Deixe seus dados para iniciar a conversa. Os campos são demonstrativos e ainda não enviam informações à
            clínica.
          </p>
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="booking-name">Seu nome</label>
              <input id="booking-name" name="name" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="booking-phone">Telefone para contato</label>
              <input
                id="booking-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(00) 00000-0000"
                required
              />
            </div>
            <div className="field full">
              <label htmlFor="booking-email">E-mail</label>
              <input id="booking-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field full">
              <label htmlFor="booking-service">O que você procura?</label>
              <select
                id="booking-service"
                name="service"
                value={service}
                onChange={(event) => setService(event.target.value)}
              >
                <option value="">Quero conversar sobre minhas necessidades</option>
                {services.map((item) => (
                  <option key={item.title}>{item.title}</option>
                ))}
              </select>
            </div>
            <div className="field full">
              <label htmlFor="booking-message">Se quiser, conte um pouco mais</label>
              <textarea
                id="booking-message"
                name="message"
                placeholder="O que você gostaria de voltar a fazer?"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <p className="form-privacy field full">
              Ao enviar, você declara estar ciente de que este formulário ainda não está conectado ao canal oficial da
              clínica. Não inclua informações médicas sensíveis.
            </p>
            <button className="btn btn-primary" type="submit">
              Revisar solicitação <Icon name="arrow" />
            </button>
            <p className="dialog-status field full" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </dialog>
      <dialog
        ref={detailRef}
        className="booking-dialog service-dialog"
        aria-labelledby="service-detail-title"
        onClose={handleDetailClose}
        onClick={(event) => {
          if (event.target === detailRef.current) closeServiceDetail();
        }}
      >
        {detail ? (
          <>
            <button
              className="dialog-close"
              type="button"
              aria-label={`Fechar informações sobre ${detail.title}`}
              onClick={closeServiceDetail}
            >
              <Icon name="close" />
            </button>
            <div className="service-dialog-media">
              <Image
                src={`/images/${detail.img}`}
                alt={detail.alt}
                width={680}
                height={400}
                style={detail.objectPosition ? { objectPosition: detail.objectPosition } : undefined}
              />
            </div>
            <div className="dialog-inner">
              <span className="eyebrow">Sobre este cuidado</span>
              <h2 id="service-detail-title" tabIndex={-1}>
                {detail.title}
              </h2>
              <p className="service-lead">{detail.about.lead}</p>
              <ul className="benefit-list">
                {detail.about.points.map((point) => (
                  <li key={point.title}>
                    <span>
                      <strong>{point.title}</strong> {point.text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="service-note">{detail.about.note}</p>
              <div className="service-dialog-actions">
                <button className="btn btn-primary" type="button" onClick={bookFromDetail}>
                  Agendar avaliação <Icon name="arrow" />
                </button>
                <button className="btn btn-outline" type="button" onClick={closeServiceDetail}>
                  Fechar
                </button>
              </div>
            </div>
          </>
        ) : null}
      </dialog>
    </BookingContext.Provider>
  );
}

export function BookButton({
  className,
  children,
  service,
  message,
  onOpen,
}: {
  className?: string;
  children: ReactNode;
  service?: string;
  message?: string;
  onOpen?: () => void;
}) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onOpen?.();
        openBooking({ service, message });
      }}
    >
      {children}
    </button>
  );
}

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

const defaultTitle = "Agende uma avaliação.";
const defaultDescription =
  "Deixe seus dados para iniciar a conversa. Os campos são demonstrativos e ainda não enviam informações à clínica.";

export function useBooking() {
  const value = useContext(BookingContext);
  if (!value) {
    throw new Error("useBooking deve ser usado dentro de BookingProvider");
  }
  return value;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(defaultTitle);
  const [description, setDescription] = useState(defaultDescription);
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [focusField, setFocusField] = useState<"name" | "service">("name");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;

    if (!dialog.open) dialog.showModal();
    document.body.classList.add("dialog-open");

    const fieldId = focusField === "service" ? "booking-service" : "booking-name";
    const timeout = window.setTimeout(() => {
      document.getElementById(fieldId)?.focus();
    }, 40);

    return () => window.clearTimeout(timeout);
  }, [open, focusField, title]);

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleDialogClose() {
    document.body.classList.remove("dialog-open");
    setOpen(false);
    setTitle(defaultTitle);
    setDescription(defaultDescription);
    setStatus("");
  }

  function openBooking(options?: OpenBookingOptions) {
    setTitle(defaultTitle);
    setDescription(defaultDescription);
    setService(options?.service ?? "");
    setMessage(options?.message ?? "");
    setStatus("");
    setFocusField("name");
    setOpen(true);
  }

  function openServiceDetail(index: number) {
    const item = services[index];
    if (!item) return;
    setTitle(item.title);
    setDescription(item.detail);
    setService(item.title);
    setMessage("");
    setStatus("");
    setFocusField("service");
    setOpen(true);
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
          <h2 id="booking-title">{title}</h2>
          <p>{description}</p>
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

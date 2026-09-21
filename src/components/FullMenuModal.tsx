import { useEffect, useRef } from "react";

import type { Language } from "../types/language";

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function FullMenuModal({
  isOpen,
  onClose,
  language,
}: FullMenuModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener("keydown", handleKeyDown);

      previouslyFocusedElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const copy =
    language === "es"
      ? {
          title: "Menú completo",
          close: "Cerrar menú",
          open: "Abrir PDF",
          download: "Descargar menú",
        }
      : {
          title: "Full Menu",
          close: "Close menu",
          open: "Open PDF",
          download: "Download Menu",
        };

  return (
    <div
      className="menu-modal-backdrop"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className="menu-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="full-menu-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="menu-modal-header">
          <h2 id="full-menu-title">{copy.title}</h2>

          <button
            ref={closeButtonRef}
            type="button"
            className="menu-modal-close"
            onClick={onClose}
            aria-label={copy.close}
          >
            ×
          </button>
        </div>

        <div className="menu-modal-document">
          <iframe src="/menu/guayas-menu.pdf" title={copy.title} />
        </div>

        <div className="menu-modal-actions">
          <a
            href="/menu/guayas-menu.pdf"
            target="_blank"
            rel="noreferrer"
            className="menu-modal-secondary-button"
          >
            {copy.open}
          </a>

          <a
            href="/menu/guayas-menu.pdf"
            download
            className="menu-modal-primary-button"
          >
            {copy.download}
          </a>
        </div>
      </section>
    </div>
  );
}

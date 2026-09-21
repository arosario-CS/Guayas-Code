import { translations } from "../data/translations";

import type { Language } from "../types/language";

interface OrderSectionProps {
  language: Language;
}

export default function OrderSection({ language }: OrderSectionProps) {
  const copy = translations[language];

  return (
    <section className="order-section" id="contact">
      <div className="order-inner">
        <div className="order-content">
          <p className="order-eyebrow">{copy.order.eyebrow}</p>

          <h2>{copy.order.title}</h2>

          <p className="order-description">{copy.order.description}</p>

          <div className="order-actions">
            <a
              href="tel:+17576474640"
              className="order-button order-button-primary"
            >
              <span aria-hidden="true">☎</span>
              {copy.order.callButton}
            </a>

            <a
              href="https://www.facebook.com/share/14DZb83SAW2/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="order-button order-button-secondary"
            >
              {copy.order.facebookButton}
            </a>
          </div>
        </div>

        <div className="order-details">
          <div className="order-detail-card">
            <span className="order-detail-label">{copy.order.hours}</span>

            <div className="order-day">
              <span>{copy.order.saturday}</span>
              <span>11 AM – 1 PM</span>
            </div>

            <div className="order-time-secondary">3 PM – 8 PM</div>

            <div className="order-day">
              <span>{copy.order.sunday}</span>
              <span>11 AM – 1 PM</span>
            </div>

            <div className="order-time-secondary">3 PM – 8 PM</div>
          </div>

          <div className="order-detail-card">
            <span className="order-detail-label">{copy.order.phone}</span>

            <a href="tel:+17576474640" className="order-phone">
              (757) 647-4640
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

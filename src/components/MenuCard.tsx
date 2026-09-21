import { useState } from "react";

import type { Language } from "../types/language";
import type { MenuItem } from "../types/menu";

interface MenuCardProps {
  item: MenuItem;
  language: Language;
}

export default function MenuCard({ item, language }: MenuCardProps) {
  const [failedImage, setFailedImage] = useState<string | null>(null);

  const description = item.description?.[language];

  const hasValidImage = Boolean(item.image) && failedImage !== item.image;

  return (
    <article className="menu-card">
      {hasValidImage ? (
        <div className="menu-card-image-wrapper">
          <img
            src={item.image}
            alt={item.name}
            className="menu-card-image"
            loading="lazy"
            decoding="async"
            onError={() => {
              if (item.image) {
                setFailedImage(item.image);
              }
            }}
          />
        </div>
      ) : (
        <div className="menu-card-image-wrapper menu-card-placeholder">
          <img
            src="/images/ecuador-logo.png"
            alt=""
            className="menu-card-placeholder-logo"
            aria-hidden="true"
          />
        </div>
      )}

      <div className="menu-card-content">
        <div className="menu-card-header">
          <h3>{item.name}</h3>

          {item.price !== undefined && (
            <span className="menu-card-price">${item.price.toFixed(2)}</span>
          )}
        </div>

        {description && <p className="menu-card-description">{description}</p>}

        {item.options && item.options.length > 0 && (
          <div className="menu-card-options">
            {item.options.map((option) => (
              <div
                key={`${option.label.en}-${option.price}`}
                className="menu-card-option"
              >
                <span>{option.label[language]}</span>

                <strong>${option.price.toFixed(2)}</strong>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

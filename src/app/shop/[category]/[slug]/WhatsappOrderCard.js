"use client";

import { useMemo, useState } from "react";
import { formatUGX, SHOP_WHATSAPP } from "../../../../config/shop";

export default function WhatsappOrderCard({ product }) {
  const [qty, setQty] = useState(1);
  const total = product.priceUGX * qty;

  const messageText = useMemo(
    () =>
      `Hi Weblery, I'd like to order:\n\n` +
      `• ${product.name} × ${qty}\n` +
      `  ${formatUGX(product.priceUGX)} each\n\n` +
      `Total: ${formatUGX(total)}\n\n` +
      `Product: shop.weblery.com/shop/${product.category}/${product.slug}`,
    [product, qty, total]
  );

  const displayLine = `Hi Weblery, I'd like to order: ` +
    // highlighted product name
    ``;

  const waHref = `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(messageText)}`;

  return (
    <div className="wa-draft">
      <div className="wa-draft__head">
        <span className="wa-draft__dot" aria-hidden="true" />
        Message to Weblery — draft
      </div>

      <div className="wa-draft__body">
        {`Hi Weblery, I'd like to order:\n\n• `}
        <em>{product.name}</em>
        {` × ${qty}\n  ${formatUGX(product.priceUGX)} each\n\nTotal: `}
        <em>{formatUGX(total)}</em>
      </div>

      <div className="wa-draft__actions">
        <div className="qty" aria-label="Quantity">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span>{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="shop-btn shop-btn--wa"
          style={{ flex: 1, justifyContent: "center", minWidth: 220 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.212 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
          </svg>
          Send on WhatsApp
        </a>
      </div>
    </div>
  );
}

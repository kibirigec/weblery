import Link from "next/link";
import "./shop.css";
import { CATEGORIES, SHOP_WHATSAPP } from "../../config/shop";

export const metadata = {
  title: "Weblery Shop — Watches, earbuds & everyday tech.",
  description:
    "Curated wristwear, audio, and small electronics — delivered across Uganda. Order on WhatsApp.",
};

function ShopNav() {
  return (
    <header className="shop-nav">
      <div className="shop-nav__inner">
        <Link href="/shop" className="shop-nav__brand">
          <img
            src="/FullLogo.svg"
            alt="Weblery"
            className="shop-nav__brand-mark"
          />
          <span className="shop-nav__brand-tag">/shop</span>
        </Link>

        <nav className="shop-nav__links">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/shop/${c.slug}`}
              className="shop-nav__link"
            >
              {c.name}
            </Link>
          ))}
        </nav>

        <a
          href={`https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(
            "Hi Weblery, I have a question about the shop."
          )}`}
          target="_blank"
          rel="noreferrer"
          className="shop-nav__wa"
          aria-label="Chat with Weblery on WhatsApp"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.212 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
          </svg>
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function ShopFooter() {
  return (
    <footer className="shop-footer">
      <div className="shop-footer__inner">
        <span>© {new Date().getFullYear()} Weblery Shop · Kampala, Uganda</span>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/" className="shop-nav__link">
            weblery.com
          </Link>
          <Link href="/privacy" className="shop-nav__link">
            Privacy
          </Link>
          <Link href="/terms" className="shop-nav__link">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function ShopLayout({ children }) {
  return (
    <div className="shop-root">
      <ShopNav />
      {children}
      <ShopFooter />
    </div>
  );
}

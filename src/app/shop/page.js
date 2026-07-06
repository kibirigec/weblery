import Link from "next/link";
import {
  CATEGORIES,
  getNewArrivals,
  formatUGX,
  SHOP_WHATSAPP,
} from "../../config/shop";

export const metadata = {
  title: "Weblery Shop — Watches, earbuds & everyday tech.",
  description:
    "Small tech and everyday accessories, curated and delivered across Uganda. Order on WhatsApp.",
};

export default function ShopHome() {
  const newArrivals = getNewArrivals(6);

  return (
    <>
      {/* ------------ HERO ------------ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="shop-hero-glow" aria-hidden="true" />
        <div
          className="shop-wrap"
          style={{
            position: "relative",
            paddingTop: 72,
            paddingBottom: 72,
            display: "grid",
            gap: 48,
          }}
        >
          <div style={{ maxWidth: "44rem" }}>
            <span className="shop-eyebrow">Weblery Shop · Uganda</span>
            <h1
              className="shop-title"
              style={{ marginTop: 12, fontSize: "clamp(38px, 6vw, 68px)" }}
            >
              Small tech, big finds.
            </h1>
            <p className="shop-lede" style={{ marginTop: 18 }}>
              Watches, earbuds, bracelets, and the accessories you keep meaning
              to buy — picked one at a time, delivered across Uganda, paid on WhatsApp.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <Link href="/shop/watches" className="shop-btn shop-btn--primary">
                Shop everything
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href={`https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(
                  "Hi Weblery, I'd like a hand picking something."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="shop-btn shop-btn--ghost"
              >
                Ask us to pick
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------ CATEGORIES ------------ */}
      <section className="shop-wrap" style={{ paddingBottom: 80 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
          <div>
            <span className="shop-eyebrow">Categories</span>
            <h2 className="shop-title" style={{ marginTop: 8, fontSize: "clamp(24px, 3vw, 32px)" }}>
              Browse the four shelves.
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/shop/${c.slug}`} className="category-tile">
              <div className="category-tile__media">
                <img src={c.heroImage} alt={c.name} loading="lazy" />
              </div>
              <div className="category-tile__overlay" />
              <div className="category-tile__body">
                <div className="category-tile__eyebrow">Shop</div>
                <div className="category-tile__name">{c.name}</div>
                <div className="category-tile__tag">{c.tagline}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ------------ NEW ARRIVALS ------------ */}
      <section className="shop-wrap" style={{ paddingBottom: 80 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
          <div>
            <span className="shop-eyebrow">Just landed</span>
            <h2 className="shop-title" style={{ marginTop: 8, fontSize: "clamp(24px, 3vw, 32px)" }}>
              New arrivals.
            </h2>
          </div>
          <Link href="/shop/accessories" className="shop-nav__link" style={{ fontSize: 14 }}>
            See everything &rarr;
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {newArrivals.map((p) => (
            <Link
              key={p.slug}
              href={`/shop/${p.category}/${p.slug}`}
              className="product-tile"
            >
              {p.isNew && <div className="product-tile__badge">New</div>}
              <div className="product-tile__media">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="product-tile__body">
                <div>
                  <div className="product-tile__name">{p.name}</div>
                  <div className="product-tile__meta">
                    {CATEGORIES.find((c) => c.slug === p.category)?.name}
                  </div>
                </div>
                <div className="product-tile__price">{formatUGX(p.priceUGX)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ------------ HOW IT WORKS ------------ */}
      <section
        style={{
          background: "var(--shop-bg-2)",
          borderTop: "1px solid var(--shop-hairline)",
          borderBottom: "1px solid var(--shop-hairline)",
        }}
      >
        <div className="shop-wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div style={{ display: "grid", gap: 8, marginBottom: 40, maxWidth: "40rem" }}>
            <span className="shop-eyebrow">How it works</span>
            <h2 className="shop-title" style={{ fontSize: "clamp(26px, 3.2vw, 36px)" }}>
              Pick it, message us, we deliver.
            </h2>
          </div>

          <ol
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            {[
              {
                n: "01",
                title: "Pick a piece",
                body: "Browse the shelves, find what you like, open the product page.",
              },
              {
                n: "02",
                title: "Send on WhatsApp",
                body: "Tap the WhatsApp button — your message is drafted with the item and price. Confirm your address and delivery window.",
              },
              {
                n: "03",
                title: "We deliver",
                body: "Kampala same-day where possible; up-country in 2–5 days. Pay on delivery or via Mobile Money.",
              },
            ].map((step) => (
              <li
                key={step.n}
                style={{
                  border: "1px solid var(--shop-hairline)",
                  borderRadius: 18,
                  padding: "22px 22px 26px",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  style={{
                    fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
                    fontSize: 12,
                    color: "var(--shop-tide)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {step.n}
                </div>
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 18,
                    fontWeight: 700,
                    color: "var(--shop-paper)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </div>
                <p style={{ marginTop: 8, color: "var(--shop-mist)", fontSize: 14, lineHeight: 1.55 }}>
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

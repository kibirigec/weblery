import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CATEGORIES,
  getCategory,
  getProductsByCategory,
  formatUGX,
} from "../../../config/shop";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: "Shop — Weblery" };
  return {
    title: `${cat.name} — Weblery Shop`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return notFound();

  const products = getProductsByCategory(category);

  return (
    <>
      {/* Category header */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="shop-hero-glow" aria-hidden="true" />
        <div
          className="shop-wrap"
          style={{ position: "relative", paddingTop: 56, paddingBottom: 40 }}
        >
          {/* Breadcrumb */}
          <div style={{ fontSize: 13, color: "var(--shop-mist)", marginBottom: 20 }}>
            <Link href="/shop" className="shop-nav__link">
              Shop
            </Link>
            <span style={{ margin: "0 8px", opacity: 0.5 }}>/</span>
            <span style={{ color: "var(--shop-paper)" }}>{cat.name}</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div style={{ maxWidth: "36rem" }}>
              <span className="shop-eyebrow">{cat.tagline}</span>
              <h1 className="shop-title" style={{ marginTop: 10, fontSize: "clamp(32px, 5vw, 52px)" }}>
                {cat.name}
              </h1>
              <p className="shop-lede" style={{ marginTop: 16 }}>
                {cat.description}
              </p>
            </div>
            <div style={{ color: "var(--shop-mist)", fontSize: 13 }}>
              {products.length} {products.length === 1 ? "piece" : "pieces"}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="shop-wrap" style={{ paddingBottom: 80 }}>
        {products.length === 0 ? (
          <div
            style={{
              border: "1px solid var(--shop-hairline)",
              borderRadius: 18,
              padding: 32,
              color: "var(--shop-mist)",
            }}
          >
            Nothing here yet. Check the other shelves.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {products.map((p) => (
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
                    <div className="product-tile__meta">{p.tagline}</div>
                  </div>
                  <div className="product-tile__price">{formatUGX(p.priceUGX)}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

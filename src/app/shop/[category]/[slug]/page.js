import Link from "@/app/components/MarketLink";
import { notFound } from "next/navigation";
import {
  PRODUCTS,
  getCategory,
  getProduct,
  getProductsByCategory,
  formatUGX,
} from "../../../../config/shop";
import WhatsappOrderCard from "./WhatsappOrderCard";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  if (!product) return { title: "Not found — Weblery Shop" };
  return {
    title: `${product.name} — Weblery Shop`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }) {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  if (!product) return notFound();
  const cat = getCategory(category);
  const related = getProductsByCategory(category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <div className="shop-wrap" style={{ paddingTop: 40, paddingBottom: 80 }}>
        {/* Breadcrumb */}
        <nav
          style={{
            fontSize: 13,
            color: "var(--shop-mist)",
            marginBottom: 28,
          }}
          aria-label="Breadcrumb"
        >
          <Link href="/shop" className="shop-nav__link">
            Shop
          </Link>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>/</span>
          <Link href={`/shop/${category}`} className="shop-nav__link">
            {cat?.name}
          </Link>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>/</span>
          <span style={{ color: "var(--shop-paper)" }}>{product.name}</span>
        </nav>

        {/* Split view */}
        <div
          style={{
            display: "grid",
            gap: 40,
            gridTemplateColumns: "1fr",
          }}
          className="product-detail-grid"
        >
          {/* Media */}
          <div
            style={{
              background: "var(--shop-tile)",
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "1 / 1",
              position: "relative",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {product.isNew && (
              <div className="product-tile__badge" style={{ top: 20, left: 20 }}>
                New
              </div>
            )}
          </div>

          {/* Info column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <span className="shop-eyebrow">{cat?.name}</span>
              <h1
                className="shop-title"
                style={{
                  marginTop: 10,
                  fontSize: "clamp(28px, 4.2vw, 40px)",
                }}
              >
                {product.name}
              </h1>
              <div
                style={{
                  marginTop: 12,
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--shop-paper)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {formatUGX(product.priceUGX)}
              </div>
              <p className="shop-lede" style={{ marginTop: 18 }}>
                {product.description}
              </p>
            </div>

            {/* WhatsApp draft — signature element */}
            <WhatsappOrderCard product={product} />

            {/* Highlights */}
            <div
              style={{
                borderTop: "1px solid var(--shop-hairline)",
                paddingTop: 24,
              }}
            >
              <div className="shop-eyebrow" style={{ marginBottom: 12 }}>
                Details
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "grid",
                  gap: 10,
                }}
              >
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      color: "var(--shop-paper)",
                      fontSize: 14,
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        marginTop: 8,
                        width: 4,
                        height: 4,
                        borderRadius: 999,
                        background: "var(--shop-tide)",
                        flexShrink: 0,
                      }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section style={{ marginTop: 80 }}>
            <div style={{ marginBottom: 24 }}>
              <span className="shop-eyebrow">Same shelf</span>
              <h2
                className="shop-title"
                style={{ marginTop: 8, fontSize: "clamp(22px, 2.4vw, 28px)" }}
              >
                More {cat?.name.toLowerCase()}.
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 20,
              }}
            >
              {related.map((p) => (
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
                    <div className="product-tile__price">
                      {formatUGX(p.priceUGX)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Two-column layout at wider viewports */}
      <style>{`
        @media (min-width: 900px) {
          .product-detail-grid {
            grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr) !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </>
  );
}

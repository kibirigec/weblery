export const SHOP_WHATSAPP = "256746642075";

export const CATEGORIES = [
  {
    slug: "watches",
    name: "Watches",
    tagline: "Time you can wear.",
    description: "Analog, digital, and everything between — pieces that look sharper than the price tag suggests.",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "earbuds",
    name: "Earbuds",
    tagline: "Sound, unbothered.",
    description: "Wireless and wired sets picked for battery life, fit, and honest bass.",
    heroImage: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "bracelets",
    name: "Bracelets",
    tagline: "Everyday accents.",
    description: "Beaded, braided, minimal metal — small pieces that finish the look.",
    heroImage: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "accessories",
    name: "Accessories",
    tagline: "The little upgrades.",
    description: "Cables, cases, chargers — the things you forget you needed until you actually use them.",
    heroImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1200",
  },
];

export const PRODUCTS = [
  // ------------------ Watches ------------------
  {
    slug: "carbon-field-watch",
    category: "watches",
    name: "Carbon Field Watch",
    priceUGX: 129000,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=900",
    tagline: "Everyday analog, quietly rugged.",
    description: "A matte-carbon dial with a fabric strap. Reads well in sunlight, disappears into a shirt cuff, and takes a knock without complaint.",
    highlights: [
      "38mm stainless case",
      "Quartz movement, ~2 year battery",
      "Water-resistant to 3ATM",
      "20mm fabric strap, quick-release",
    ],
    isNew: true,
  },
  {
    slug: "gold-link-classic",
    category: "watches",
    name: "Gold Link Classic",
    priceUGX: 189000,
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=900",
    tagline: "Dress it up without saying anything.",
    description: "Slim gold-tone case on a five-link bracelet. Weighty enough to feel real, thin enough to slide under a sleeve.",
    highlights: [
      "36mm slim profile",
      "Adjustable link bracelet",
      "Champagne dial, applied indices",
      "Sapphire-hardened mineral crystal",
    ],
  },
  {
    slug: "digital-retro-1988",
    category: "watches",
    name: "Digital Retro 1988",
    priceUGX: 89000,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=900",
    tagline: "The one your dad wore, done right.",
    description: "Chunky resin case, negative LCD, backlight that actually works. Alarm, stopwatch, and dual-time — nothing you didn't ask for.",
    highlights: [
      "Negative-display LCD",
      "Alarm + stopwatch + dual time",
      "Resin case, ~5 year battery",
      "42mm case width",
    ],
  },

  // ------------------ Earbuds ------------------
  {
    slug: "aero-anc-earbuds",
    category: "earbuds",
    name: "Aero ANC Earbuds",
    priceUGX: 155000,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&q=80&w=900",
    tagline: "Silence, on a switch.",
    description: "Active noise cancellation that actually cancels — buses, generators, open-plan offices. Long battery, snug fit, no software drama.",
    highlights: [
      "Active noise cancellation",
      "~7h buds / 28h with case",
      "Bluetooth 5.3, low latency",
      "USB-C, 15-min quick charge",
    ],
    isNew: true,
  },
  {
    slug: "studio-wired-earbuds",
    category: "earbuds",
    name: "Studio Wired Earbuds",
    priceUGX: 45000,
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=900",
    tagline: "Old faithful, dialled in.",
    description: "3.5mm wired set with a real driver behind it. Honest mids, controlled bass, inline mic for calls.",
    highlights: [
      "3.5mm jack, tangle-resistant cable",
      "In-line mic and remote",
      "Three ear-tip sizes",
      "Braided fabric sleeve",
    ],
  },
  {
    slug: "clip-open-buds",
    category: "earbuds",
    name: "Clip Open Buds",
    priceUGX: 119000,
    image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&q=80&w=900",
    tagline: "Aware, hands-free, all day.",
    description: "Open-ear clip design — you hear traffic, boda horns, and your kid — while your call sounds like you're in a booth.",
    highlights: [
      "Open-ear clip fit",
      "Dual-mic beamforming",
      "~6h battery, 24h with case",
      "Sweat + rain resistant",
    ],
  },

  // ------------------ Bracelets ------------------
  {
    slug: "obsidian-bead-bracelet",
    category: "bracelets",
    name: "Obsidian Bead Bracelet",
    priceUGX: 35000,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80&w=900",
    tagline: "One accent, done.",
    description: "Matte obsidian beads on an elastic cord. Sits low on the wrist, works with a watch, doesn't shout.",
    highlights: [
      "Genuine obsidian, 8mm beads",
      "Elastic core, one size fits most",
      "Matte finish, no coating",
    ],
  },
  {
    slug: "steel-cuff-bracelet",
    category: "bracelets",
    name: "Steel Cuff Bracelet",
    priceUGX: 59000,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=900",
    tagline: "Weight where it matters.",
    description: "Brushed stainless open cuff. Slides on and stays put. Heavy enough to feel like something.",
    highlights: [
      "Brushed 316L stainless steel",
      "Adjustable open-cuff design",
      "Hypoallergenic, resists tarnish",
    ],
    isNew: true,
  },
  {
    slug: "cord-signal-bracelet",
    category: "bracelets",
    name: "Cord Signal Bracelet",
    priceUGX: 25000,
    image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&q=80&w=900",
    tagline: "Paracord, better than it should be.",
    description: "Braided cord with a low-profile magnetic clasp. Doesn't snag, doesn't fray, doesn't cost much.",
    highlights: [
      "550-grade paracord weave",
      "Magnetic clasp with safety loop",
      "Adjustable, 18–22cm",
    ],
  },

  // ------------------ Accessories ------------------
  {
    slug: "braided-usbc-cable",
    category: "accessories",
    name: "Braided USB-C Cable · 2m",
    priceUGX: 29000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=900",
    tagline: "The last one you'll buy this year.",
    description: "Nylon-braided, fast-charge, 2 metres. Bends without splitting, plugs in without wobbling.",
    highlights: [
      "60W USB-C to USB-C",
      "Nylon-braided sleeve",
      "2 metres, aluminium housings",
      "Data + charge",
    ],
  },
  {
    slug: "pocket-power-10k",
    category: "accessories",
    name: "Pocket Power 10K",
    priceUGX: 79000,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=900",
    tagline: "One phone. Twice. Every day.",
    description: "10,000mAh in a slim shell that actually fits a pocket. USB-C in and out, quick charge, LCD gauge.",
    highlights: [
      "10,000mAh capacity",
      "20W USB-C PD in/out",
      "Live-percentage display",
      "Passes carry-on rules",
    ],
    isNew: true,
  },
  {
    slug: "leather-phone-sleeve",
    category: "accessories",
    name: "Leather Phone Sleeve",
    priceUGX: 65000,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&q=80&w=900",
    tagline: "Slide in, slide out.",
    description: "Full-grain leather sleeve, felt-lined. Ages with you. Works for phones up to 6.7\".",
    highlights: [
      "Full-grain leather exterior",
      "Soft felt interior",
      "Fits phones up to 6.7\"",
      "Ages to a darker patina",
    ],
  },
];

export function getCategory(slug) {
  return CATEGORIES.find((c) => c.slug === slug) || null;
}

export function getProduct(categorySlug, productSlug) {
  return (
    PRODUCTS.find(
      (p) => p.category === categorySlug && p.slug === productSlug
    ) || null
  );
}

export function getProductsByCategory(categorySlug) {
  return PRODUCTS.filter((p) => p.category === categorySlug);
}

export function getNewArrivals(limit = 6) {
  const newest = PRODUCTS.filter((p) => p.isNew);
  const rest = PRODUCTS.filter((p) => !p.isNew);
  return [...newest, ...rest].slice(0, limit);
}

export function formatUGX(n) {
  return "UGX " + new Intl.NumberFormat("en-US").format(n);
}

export function whatsappOrderLink(product, quantity = 1) {
  const total = product.priceUGX * quantity;
  const message =
    `Hi Weblery, I'd like to order:\n\n` +
    `• ${product.name} × ${quantity}\n` +
    `  ${formatUGX(product.priceUGX)} each\n\n` +
    `Total: ${formatUGX(total)}\n\n` +
    `Product link: https://shop.weblery.com/shop/${product.category}/${product.slug}`;
  return `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

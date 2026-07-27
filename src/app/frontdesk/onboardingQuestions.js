/**
 * The questions the onboarding asks, one per page.
 *
 * Business type comes first because it seeds everything after it — the service
 * checklist is drawn from the type, which is what lets the rest be tapped
 * rather than typed. `industry` maps to a template in the app
 * (packages/core/src/templates); anything without its own template gets the
 * neutral "general" one, which asks nothing trade-specific.
 */

export const BUSINESS_TYPES = [
  { id: "hvac", label: "Home services & trades", hint: "HVAC, plumbing, electrical, roofing", industry: "hvac",
    services: ["Repairs", "Installations", "Maintenance plans", "Emergency callouts", "Inspections", "Quotes & estimates"] },
  { id: "events", label: "Events & rentals", hint: "Weddings, AV, staging, hire", industry: "events",
    services: ["Event planning", "Weddings", "Sound & PA hire", "Lighting", "Staging", "Screens & projectors", "Decor"] },
  { id: "clinic", label: "Clinic or practice", hint: "Dental, medical, veterinary", industry: "general",
    services: ["New patient visits", "Check-ups & cleanings", "Treatments", "Emergency appointments", "Referrals"] },
  { id: "legal", label: "Law firm", hint: "Any practice area", industry: "general",
    services: ["Consultations", "Case intake", "Document review", "Court representation"] },
  { id: "property", label: "Property & real estate", hint: "Agents, lettings, management", industry: "general",
    services: ["Viewings", "Valuations", "Lettings", "Property management", "Sales"] },
  { id: "beauty", label: "Salon, spa or fitness", hint: "Appointments and memberships", industry: "general",
    services: ["Appointments", "Consultations", "Memberships", "Walk-ins", "Gift vouchers"] },
  { id: "trade", label: "Shop or restaurant", hint: "Orders, bookings, enquiries", industry: "general",
    services: ["Orders", "Table bookings", "Deliveries", "Catering", "Opening hours enquiries"] },
  { id: "other", label: "Something else", hint: "We'll keep the questions general", industry: "general",
    services: ["Enquiries", "Quotes", "Bookings", "Support", "Complaints"] },
];

export const DAY_PATTERNS = [
  { id: "mon-fri", label: "Monday to Friday" },
  { id: "mon-sat", label: "Monday to Saturday" },
  { id: "everyday", label: "Every day" },
  { id: "varies", label: "It varies" },
];

export const HOUR_PATTERNS = [
  { id: "9-5", label: "9:00 AM – 5:00 PM", open: "9:00 AM", close: "5:00 PM" },
  { id: "8-6", label: "8:00 AM – 6:00 PM", open: "8:00 AM", close: "6:00 PM" },
  { id: "7-7", label: "7:00 AM – 7:00 PM", open: "7:00 AM", close: "7:00 PM" },
  { id: "24-7", label: "Open 24 hours", open: "12:00 AM", close: "11:59 PM" },
];

export const AFTER_HOURS = [
  { id: "urgent", label: "Yes — for urgent jobs", value: "Takes urgent calls outside opening hours." },
  { id: "no", label: "No — messages only", value: "Outside opening hours the team takes a message and calls back." },
  { id: "unsure", label: "Not sure yet", value: "" },
];

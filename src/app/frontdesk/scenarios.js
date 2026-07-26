/**
 * One business per scenario, driving the scan panel, the call and the ticket.
 *
 * These three panels are a chain: the site is what Front Desk read, the call
 * is what it did with that, and the ticket is what the team received. Every
 * field on a ticket must be something the caller actually says in that
 * scenario's script — if you edit one, walk the whole chain.
 *
 * `gap` on a line is the silence before it starts, so timings can't drift out
 * of order the way hand-written absolute timestamps do.
 */

export const SCENARIOS = [
  {
    id: "hvac",
    label: "HVAC",
    site: {
      domain: "summitheatingandair.com",
      business: "Summit Heating & Air",
      area: "Clark County, NV",
      hours: "Mon–Sat 7–6 · 24/7 emergency",
      booking: "Phone + online form",
      services: ["AC repair", "Furnace install", "Duct cleaning", "Maintenance plans", "Emergency callout"],
    },
    caller: { number: "(702) 866-2222", when: "Incoming · 9:41 PM" },
    script: [
      { agent: true, gap: 0.8, text: "Summit Heating and Air, this is Riley — how can I help?" },
      { agent: false, gap: 0.6, text: "Hi — my AC stopped cooling this afternoon and it won't come back on." },
      { agent: true, gap: 0.5, text: "Sorry to hear it. How warm is it inside right now?" },
      { agent: false, gap: 0.5, text: "Eighty-eight degrees, and I've got two young kids at home." },
      { agent: true, gap: 0.4, text: "That makes it urgent. Can I take your name and the service address?" },
      { agent: false, gap: 0.5, text: "Maria Lopez, 4821 Maple Avenue." },
      { agent: true, gap: 0.4, text: "Thanks Maria. Best number to reach you on?" },
      { agent: false, gap: 0.5, text: "Seven oh two, eight six six, two two two two." },
      { agent: true, action: true, gap: 0.35, text: "Checking calendar availability" },
      { agent: true, gap: 0.4, text: "Got it. Earliest visit is tomorrow between eight and ten — shall I hold it?" },
      { agent: false, gap: 0.5, text: "Yes please, the earliest you have." },
      { agent: true, action: true, gap: 0.3, text: "Booking appointment · texting team" },
      { agent: true, gap: 0.4, text: "Booked. I'm flagging this urgent and texting the team now." },
    ],
    calendar: {
      day: "Tomorrow · Thu",
      slots: [
        { time: "7:00", label: "Crew huddle" },
        { time: "8:00", label: "Maria Lopez — AC not cooling", booked: true },
        { time: "10:30", label: "Nguyen — furnace service" },
        { time: "1:00", label: "Ortiz — duct clean" },
      ],
      note: "8–10 was the first slot with a two-hour gap. 9:00 was already taken.",
    },
    ticket: {
      when: "New call · 9:42 PM",
      badge: "URGENT",
      tone: "urgent",
      summary:
        "Maria called after hours — her AC stopped cooling this afternoon and the house is at 88°F with two young kids at home. She'd like the earliest available visit.",
      fields: [
        ["Caller", "Maria Lopez"],
        ["Phone", "(702) 866-2222"],
        ["Address", "4821 Maple Avenue"],
        ["Needs", "AC not cooling — repair"],
        ["Preferred time", "Tomorrow, 8–10 AM"],
      ],
    },
  },

  {
    id: "realestate",
    label: "Real estate",
    site: {
      domain: "brightlinerealty.com",
      business: "Brightline Realty",
      area: "Austin, TX",
      hours: "Mon–Sun 8–8",
      booking: "Phone + showing requests",
      services: ["Buyer representation", "Listings", "Rentals", "Valuations", "Property management"],
    },
    caller: { number: "(512) 447-9130", when: "Incoming · 7:12 PM" },
    script: [
      { agent: true, gap: 0.8, text: "Brightline Realty, this is Avery — how can I help?" },
      { agent: false, gap: 0.6, text: "Hi, I'm calling about the four-bedroom on Maple Street." },
      { agent: true, gap: 0.5, text: "Of course. Are you hoping to tour it, or after more detail first?" },
      { agent: false, gap: 0.5, text: "I'd like to see it this weekend if that's possible." },
      { agent: true, gap: 0.4, text: "It is. Have you been pre-approved with a lender yet?" },
      { agent: false, gap: 0.5, text: "Yes, up to six hundred thousand." },
      { agent: true, gap: 0.4, text: "That helps. Can I take your name and best number?" },
      { agent: false, gap: 0.5, text: "Dana Whitfield, five one two, four four seven, nine one three zero." },
      { agent: true, action: true, gap: 0.35, text: "Checking calendar availability" },
      { agent: true, gap: 0.4, text: "Thanks Dana. Is Saturday morning or afternoon better?" },
      { agent: false, gap: 0.5, text: "Saturday morning works." },
      { agent: true, action: true, gap: 0.3, text: "Booking viewing · notifying agent" },
      { agent: true, gap: 0.4, text: "Booked. I'm sending this to the listing agent now." },
    ],
    calendar: {
      day: "Saturday",
      slots: [
        { time: "9:00", label: "Open house prep — Cedar Ave" },
        { time: "10:00", label: "Dana Whitfield — showing, Maple St", booked: true },
        { time: "12:30", label: "Buyer consult — Okafor" },
        { time: "3:00", label: "Listing photos" },
      ],
      note: "Saturday morning had one opening left. It was held before she hung up.",
    },
    ticket: {
      when: "New call · 7:13 PM",
      badge: "NEW LEAD",
      tone: "new",
      summary:
        "Dana called about the 4-bed on Maple Street and wants to tour it this weekend. Already pre-approved up to $600k, so she's ready to move.",
      fields: [
        ["Caller", "Dana Whitfield"],
        ["Phone", "(512) 447-9130"],
        ["Property", "4-bed, Maple Street"],
        ["Needs", "Viewing — pre-approved $600k"],
        ["Preferred time", "Saturday morning"],
      ],
    },
  },

  {
    id: "law",
    label: "Law firm",
    site: {
      domain: "marchetticole.com",
      business: "Marchetti & Cole",
      area: "Phoenix, AZ",
      hours: "Mon–Fri 8:30–6",
      booking: "Phone + intake form",
      services: ["Employment law", "Severance review", "Wrongful termination", "Discrimination", "Free consultations"],
    },
    caller: { number: "(602) 318-4477", when: "Incoming · 6:48 PM" },
    // Chosen to show what is specific to a law firm rather than generic
    // intake: a hard deadline, a conflict check, and the agent declining to
    // give legal advice when asked to.
    script: [
      { agent: true, gap: 0.8, text: "Marchetti and Cole, this is Jordan — how can I help?" },
      { agent: false, gap: 0.6, text: "I was let go this morning and handed a severance agreement to sign." },
      { agent: true, gap: 0.5, text: "Sorry to hear that. Does the agreement give you a deadline?" },
      { agent: false, gap: 0.5, text: "Seven days, so by next Tuesday. Do you think I should sign it?" },
      { agent: true, gap: 0.4, text: "I'm not able to advise on that — an attorney will. What I can do is get you in front of one before Tuesday." },
      { agent: false, gap: 0.5, text: "That would help. Thank you." },
      { agent: true, gap: 0.4, text: "Can I take your name and best number?" },
      { agent: false, gap: 0.5, text: "Ray Ellison, six oh two, three one eight, four four seven seven." },
      { agent: true, gap: 0.4, text: "Thanks Ray. And your employer's name, so we can run a conflict check?" },
      { agent: false, gap: 0.5, text: "Halvorsen Logistics." },
      { agent: true, action: true, gap: 0.35, text: "Running conflict check" },
      { agent: true, gap: 0.4, text: "Got it. First opening is tomorrow at two — shall I hold it?" },
      { agent: false, gap: 0.5, text: "Yes, please." },
      { agent: true, action: true, gap: 0.3, text: "Booking consultation · flagging deadline" },
      { agent: true, gap: 0.4, text: "Booked. I'm marking this deadline-sensitive for the intake attorney." },
    ],
    calendar: {
      day: "Tomorrow · Wed",
      slots: [
        { time: "9:30", label: "Deposition — Hartley" },
        { time: "12:00", label: "Blocked — court" },
        { time: "2:00", label: "Ray Ellison — severance review", booked: true },
        { time: "4:00", label: "Case review" },
      ],
      note: "Morning was in court. 2:00 was the first slot that still cleared his Tuesday deadline.",
    },
    ticket: {
      when: "New call · 6:49 PM",
      badge: "DEADLINE",
      tone: "urgent",
      summary:
        "Ray was terminated this morning and handed a severance agreement with a seven-day deadline. He asked whether to sign it — Front Desk declined to advise and booked him with an attorney first.",
      fields: [
        ["Caller", "Ray Ellison"],
        ["Phone", "(602) 318-4477"],
        ["Matter", "Severance review — terminated today"],
        ["Deadline", "Next Tuesday (7 days)"],
        ["Conflict check", "Halvorsen Logistics"],
        ["Booked", "Tomorrow, 2:00 PM"],
      ],
    },
  },

  {
    id: "dental",
    label: "Dental",
    site: {
      domain: "rivercitydental.com",
      business: "River City Dental",
      area: "Portland, OR",
      hours: "Tue–Sat 8–5",
      booking: "Phone + online booking",
      services: ["Cleanings", "Whitening", "Implants", "Emergency visits", "New patients"],
    },
    caller: { number: "(503) 662-0184", when: "Incoming · 5:26 PM" },
    script: [
      { agent: true, gap: 0.8, text: "River City Dental, this is Sam — how can I help?" },
      { agent: false, gap: 0.6, text: "Hi, I'd like to book a cleaning." },
      { agent: true, gap: 0.5, text: "Happy to. Have you been in to see us before?" },
      { agent: false, gap: 0.5, text: "No, I'd be a new patient." },
      { agent: true, gap: 0.4, text: "Welcome. Are you hoping to use insurance for the visit?" },
      { agent: false, gap: 0.5, text: "Yes, I'm with Delta Dental." },
      { agent: true, gap: 0.4, text: "We take that. Can I get your name and best number?" },
      { agent: false, gap: 0.5, text: "Priya Raman, five oh three, six six two, oh one eight four." },
      { agent: true, action: true, gap: 0.35, text: "Checking calendar availability" },
      { agent: true, gap: 0.4, text: "Thanks Priya. We have Thursday at ten or Friday at two." },
      { agent: false, gap: 0.5, text: "Thursday at ten works." },
      { agent: true, action: true, gap: 0.3, text: "Booking appointment · sending forms" },
      { agent: true, gap: 0.4, text: "Booked. I'm texting the new-patient forms over now." },
    ],
    calendar: {
      day: "Thursday",
      slots: [
        { time: "9:00", label: "Cleaning — J. Park" },
        { time: "10:00", label: "Priya Raman — new patient cleaning", booked: true },
        { time: "11:00", label: "Crown fitting — Alvarez" },
        { time: "2:00", label: "Open" },
      ],
      note: "New patients need a longer slot, so 10:00 was offered over 11:00.",
    },
    ticket: {
      when: "New call · 5:27 PM",
      badge: "NEW PATIENT",
      tone: "new",
      summary:
        "Priya called to book a cleaning as a new patient, and asked whether her insurance is accepted. She's with Delta Dental, which the practice takes.",
      fields: [
        ["Caller", "Priya Raman"],
        ["Phone", "(503) 662-0184"],
        ["Visit", "New patient — cleaning"],
        ["Insurance", "Delta Dental"],
        ["Booked", "Thursday, 10:00 AM"],
      ],
    },
  },
];

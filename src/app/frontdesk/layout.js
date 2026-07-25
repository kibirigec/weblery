import "./frontdesk.css";

export const metadata = {
  title: "Front Desk by Weblery — Never lose another customer to a missed call",
  description:
    "An AI receptionist that answers the calls your business misses, captures the job details, and texts your team. Answers as your business, from day one. No install, keep your number.",
  openGraph: {
    title: "Front Desk by Weblery — the calls you miss, answered",
    description:
      "An AI receptionist that answers as your business, captures the job, and texts your team. Hear it answer your phone.",
    type: "website",
  },
};

export default function FrontDeskLayout({ children }) {
  return <div className="fd">{children}</div>;
}

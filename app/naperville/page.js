import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Mobile Auto Detailing in Naperville, IL | Kodak Detailing",
  description:
    "5-star mobile auto detailing in Naperville, IL. We come to your driveway from downtown to Ashwood Park — full details from $300, paint correction from $275. Book online.",
  alternates: { canonical: "/naperville" },
  openGraph: {
    title: "Mobile Auto Detailing in Naperville, IL | Kodak Detailing",
    description:
      "Premium mobile auto detailing across Naperville — downtown, Ashwood Park, White Eagle, Tall Grass and every neighborhood between.",
    url: "https://kodakdetailing.com/naperville",
    siteName: "Kodak Mobile Detailing",
    images: [
      {
        url: "/hero-car.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile auto detailing in Naperville, IL",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const napervilleSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: "Kodak Mobile Detailing — Naperville, IL",
  image: "https://kodakdetailing.com/logo.png",
  url: "https://kodakdetailing.com/naperville",
  telephone: "+1-630-528-7990",
  priceRange: "$100-$300",
  description:
    "Premium mobile auto detailing serving Naperville, IL — downtown, Ashwood Park, North Naperville, South Naperville, White Eagle, Tall Grass, Hobson Greene, Knoch Knolls, Saybrook, and all surrounding neighborhoods.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Naperville",
    addressRegion: "IL",
    postalCode: "60540",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Naperville",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
  },
};

const neighborhoods = [
  "Downtown Naperville",
  "Ashwood Park",
  "North Naperville",
  "South Naperville",
  "White Eagle",
  "Tall Grass",
  "Hobson Greene",
  "Knoch Knolls",
  "Saybrook",
];

const services = [
  {
    name: "Maintenance Detail",
    price: "$120",
    description: "Quick weekly or monthly clean to keep your Naperville driver looking sharp.",
  },
  {
    name: "Full Detail",
    price: "From $300",
    description: "Our most popular package — complete interior and exterior reset.",
  },
  {
    name: "Paint Correction",
    price: "From $275",
    description: "Two-step correction to remove scratches, swirls, and oxidation.",
  },
  {
    name: "Interior Detail",
    price: "From $150",
    description: "Deep clean of seats, carpets, dashboard, and every interior surface.",
  },
  {
    name: "Exterior Detail",
    price: "From $175",
    description: "Hand wash, clay bar, and one-step polish to restore the gloss.",
  },
  {
    name: "Odor Elimination",
    price: "$100–$150",
    description: "Pet, smoke, or food odors — treated at the source so they don't return.",
  },
];

const faqs = [
  {
    q: "Do you serve all of Naperville?",
    a: "Yes — every neighborhood from downtown Naperville and the Riverwalk area to Ashwood Park, White Eagle, Tall Grass, and out toward Warrenville. If you're inside Naperville city limits, we come to you.",
  },
  {
    q: "How long does a Naperville mobile detail take?",
    a: "Maintenance details run about an hour. A full detail takes 3–4 hours. Paint correction can be 5–7 hours depending on the condition of the paint. All we need from you is a parking spot.",
  },
  {
    q: "Do I need to be home during the detail?",
    a: "Not at all. As long as we can access the vehicle and we've confirmed the details, you can go about your day in Naperville while we work.",
  },
  {
    q: "Do you do paint correction or waxing?",
    a: "Paint correction starts at $275 — a clay bar treatment, compound cut, and finishing polish for a true showroom finish. Hand waxing is included with our exterior and full detail packages to seal the paint and bring out the gloss. We don't currently offer ceramic coatings.",
  },
  {
    q: "How do I book?",
    a: "Use the booking form on our homepage or call (630) 528-7990. We'll confirm your appointment quickly and bring everything to your driveway.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const trustCards = [
  {
    title: "Same-Day Detail, Your Driveway",
    body:
      "We pull up to your home or office, do the work, and you keep your Saturday. No 30-minute drive, no waiting in a shop lobby, no second trip to pick up the car.",
  },
  {
    title: "Trusted on the Cars You Care About",
    body:
      "Full details, multi-step paint correction, hand waxing — done at the level you'd expect from a high-end shop. The kind of work that gets us called back to luxury daily drivers, performance cars, and weekend builds across Naperville.",
  },
  {
    title: "Real Naperville Reviews",
    body:
      "Every five-star review is from a real local customer. People hire us once and call us back — the difference shows up in the details.",
  },
];

export default function NapervillePage() {
  return (
    <div className={`${inter.className} min-h-screen bg-[#12111F] text-white`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(napervilleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative border-b border-[#4fd8e8]/15">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="flex flex-col items-center text-center">
            <a href="/">
              <img
                src="/logo.png"
                alt="Kodak Mobile Detailing logo"
                className="h-32 w-auto md:h-40"
              />
            </a>
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.35em] text-white/50 md:text-xs">
              Naperville, IL
            </p>
            <h1
              className={`${playfair.className} mt-6 max-w-4xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-7xl`}
            >
              Mobile Auto Detailing in Naperville
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              We bring premium auto detailing directly to your driveway anywhere in
              Naperville — downtown, Ashwood Park, White Eagle, Tall Grass, and
              beyond. The same five-star service Naperville drivers trust, on your
              schedule.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="/#booking"
                className="rounded-full bg-[#4fd8e8] px-7 py-4 font-semibold text-[#0b0d1c] transition hover:scale-[1.02] hover:opacity-95"
              >
                Book Your Detail
              </a>
              <a
                href="tel:+16305287990"
                className="rounded-full border border-[#4fd8e8]/30 px-7 py-4 font-medium text-white transition hover:bg-[#4fd8e8]/10"
              >
                Call (630) 528-7990
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/58">
              <span>⭐ 5.0 Rated</span>
              <span>✔ Mobile to your driveway</span>
              <span>✔ Trusted on luxury & performance vehicles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Naperville drivers choose us */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
            For Naperville Drivers
          </p>
          <h2
            className={`${playfair.className} mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl`}
          >
            Local, Mobile, and Trusted
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/62">
            Naperville drivers expect things done right. We bring shop-quality
            detailing to your driveway with no compromises on the work — just on
            the inconvenience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trustCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-[#4fd8e8]/15 bg-[#4fd8e8]/[0.04] p-7 shadow-lg shadow-black/20"
            >
              <h3
                className={`${playfair.className} text-xl font-semibold tracking-[-0.02em]`}
              >
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-white/62">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="border-y border-[#4fd8e8]/15 bg-[#090b18]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
              Service Area
            </p>
            <h2
              className={`${playfair.className} mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl`}
            >
              Naperville Neighborhoods We Serve
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/62">
              Every corner of Naperville is on our route. If you don't see your
              neighborhood, just ask — we likely already serve it.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {neighborhoods.map((n) => (
              <div
                key={n}
                className="rounded-2xl border border-[#4fd8e8]/15 bg-[#4fd8e8]/[0.04] px-6 py-5 text-center text-white/85"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
            What We Offer
          </p>
          <h2
            className={`${playfair.className} mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl`}
          >
            Detailing Packages in Naperville
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/62">
            Whether you need a quick maintenance wash or a full paint correction,
            here's what we bring to your Naperville driveway.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="rounded-[1.75rem] border border-[#4fd8e8]/15 bg-[#4fd8e8]/[0.04] p-7 shadow-xl shadow-black/20 text-white"
            >
              <h3
                className={`${playfair.className} text-2xl font-semibold tracking-[-0.03em]`}
              >
                {s.name}
              </h3>
              <p className="mt-3 text-3xl font-bold">{s.price}</p>
              <p className="mt-4 text-[15px] leading-7 opacity-80">{s.description}</p>
              <a
                href="/#booking"
                className="mt-7 inline-block rounded-full bg-[#4fd8e8] px-5 py-3 font-medium text-[#0b0d1c] transition hover:opacity-90"
              >
                Book in Naperville
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="/#packages" className="text-[#4fd8e8] underline">
            See all detailing packages and full descriptions →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-[#4fd8e8]/15 bg-[#4fd8e8]/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
              Common Questions
            </p>
            <h2
              className={`${playfair.className} mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl`}
            >
              Naperville Detailing FAQ
            </h2>
          </div>
          <div className="mt-12 space-y-6">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-[1.5rem] bg-[#0f1224] p-7 shadow-xl shadow-black/25"
              >
                <h3 className={`${playfair.className} text-xl font-semibold text-white`}>
                  {f.q}
                </h3>
                <p className="mt-3 leading-8 text-white/72">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 text-center">
        <h2
          className={`${playfair.className} text-4xl font-semibold tracking-[-0.03em] md:text-5xl`}
        >
          Book Your Naperville Detail
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/62">
          Same-week appointments available. Call{" "}
          <a href="tel:+16305287990" className="text-[#4fd8e8] underline">
            (630) 528-7990
          </a>{" "}
          or book online.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="/#booking"
            className="rounded-full bg-[#4fd8e8] px-7 py-4 font-semibold text-[#0b0d1c] transition hover:scale-[1.02] hover:opacity-95"
          >
            Book Your Detail
          </a>
          <a
            href="/"
            className="rounded-full border border-[#4fd8e8]/30 px-7 py-4 font-medium text-white transition hover:bg-[#4fd8e8]/10"
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
}

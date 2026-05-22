import { Playfair_Display, Inter } from "next/font/google";
import { posts } from "./posts";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Auto Detailing Blog | Kodak Mobile Detailing — Naperville, IL",
  description:
    "Honest, useful auto detailing guides from Kodak Mobile Detailing in Naperville. Pricing breakdowns, paint correction explainers, seasonal car care, and more.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Auto Detailing Blog | Kodak Mobile Detailing",
    description:
      "Pricing breakdowns, paint correction explainers, and seasonal car care guides from a Naperville detailer.",
    url: "https://kodakdetailing.com/blog",
    siteName: "Kodak Mobile Detailing",
    images: [{ url: "/hero-car.jpg", width: 1200, height: 630, alt: "Kodak Mobile Detailing blog" }],
    locale: "en_US",
    type: "website",
  },
};

export default function BlogIndex() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
  );

  return (
    <div className={`${inter.className} min-h-screen bg-[#12111F] text-white`}>
      {/* Hero */}
      <section className="relative border-b border-[#4fd8e8]/15">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
          <div className="flex flex-col items-center text-center">
            <a href="/">
              <img
                src="/logo.png"
                alt="Kodak Mobile Detailing logo"
                className="h-24 w-auto md:h-32"
              />
            </a>
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.35em] text-white/50 md:text-xs">
              Auto Detailing Blog
            </p>
            <h1
              className={`${playfair.className} mt-6 max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl`}
            >
              Honest, Useful Detailing Guides
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              No fluff, no upsell-bait. Real explanations of pricing, services, and seasonal car care
              from a working mobile detailer in Naperville.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {sorted.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-[1.75rem] border border-[#4fd8e8]/15 bg-[#4fd8e8]/[0.04] p-7 shadow-lg shadow-black/20 transition hover:border-[#4fd8e8]/40 hover:bg-[#4fd8e8]/[0.08]"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#4fd8e8]/80">
                {post.category}
              </p>
              <h2
                className={`${playfair.className} mt-4 text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-white group-hover:text-[#4fd8e8]`}
              >
                {post.title}
              </h2>
              <p className="mt-4 leading-7 text-white/68">{post.excerpt}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/45">
                {post.readTime}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#4fd8e8]/15 bg-[#090b18]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 text-center">
          <h2
            className={`${playfair.className} text-3xl font-semibold tracking-[-0.03em] md:text-4xl`}
          >
            Ready to book a detail?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/62">
            Premium mobile auto detailing across Naperville and the west Chicago suburbs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
        </div>
      </section>
    </div>
  );
}

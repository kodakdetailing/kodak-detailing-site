import { notFound } from "next/navigation";
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

export function metadataForSlug(slug) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Kodak Mobile Detailing`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://kodakdetailing.com/blog/${post.slug}`,
      siteName: "Kodak Mobile Detailing",
      images: [{ url: "/hero-car.jpg", width: 1200, height: 630, alt: post.title }],
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/hero-car.jpg"],
    },
  };
}

function renderSection(section, idx) {
  switch (section.type) {
    case "lead":
      return (
        <p key={idx} className="mt-6 text-xl leading-9 text-white/82 first:mt-0">
          {section.text}
        </p>
      );
    case "p":
      return (
        <p key={idx} className="mt-6 text-lg leading-8 text-white/72">
          {section.text}
        </p>
      );
    case "h2":
      return (
        <h2
          key={idx}
          className={`${playfair.className} mt-14 text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl`}
        >
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={idx}
          className={`${playfair.className} mt-10 text-2xl font-semibold tracking-[-0.02em] text-white`}
        >
          {section.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={idx} className="mt-6 space-y-3 text-lg leading-8 text-white/72">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-3 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#4fd8e8]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div
          key={idx}
          className="mt-8 overflow-x-auto rounded-2xl border border-[#4fd8e8]/15 bg-[#0f1224]"
        >
          <table className="w-full text-left text-sm">
            <thead className="bg-[#4fd8e8]/[0.06] text-[11px] font-semibold uppercase tracking-[0.15em] text-white/65">
              <tr>
                {section.rows[0].map((cell, i) => (
                  <th key={i} className="px-5 py-4">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#4fd8e8]/10 text-white/75">
              {section.rows.slice(1).map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c} className="px-5 py-4 leading-6">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div
          key={idx}
          className="mt-10 rounded-2xl border-l-4 border-[#4fd8e8] bg-[#4fd8e8]/[0.06] p-6"
        >
          {section.title && (
            <p className={`${playfair.className} text-lg font-semibold text-white`}>
              {section.title}
            </p>
          )}
          <p className="mt-2 leading-8 text-white/78">{section.text}</p>
        </div>
      );
    case "cta":
      return (
        <div
          key={idx}
          className="mt-14 rounded-[1.75rem] border border-[#4fd8e8]/25 bg-[#4fd8e8]/[0.06] p-8 text-center"
        >
          <h3
            className={`${playfair.className} text-2xl font-semibold tracking-[-0.02em] text-white md:text-3xl`}
          >
            {section.title}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/72">{section.body}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
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
      );
    case "related":
      return (
        <div key={idx} className="mt-14 rounded-2xl border border-[#4fd8e8]/15 bg-[#0f1224] p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
            {section.title || "Related"}
          </p>
          <ul className="mt-4 space-y-3">
            {section.links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="text-lg leading-7 text-[#4fd8e8] underline-offset-4 hover:underline"
                >
                  → {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export function RenderPost({ slug }) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: "https://kodakdetailing.com/hero-car.jpg",
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: { "@type": "Organization", name: "Kodak Mobile Detailing", url: "https://kodakdetailing.com" },
    publisher: {
      "@type": "Organization",
      name: "Kodak Mobile Detailing",
      logo: { "@type": "ImageObject", url: "https://kodakdetailing.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://kodakdetailing.com/blog/${post.slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kodakdetailing.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://kodakdetailing.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://kodakdetailing.com/blog/${post.slug}` },
    ],
  };

  const publishedFormatted = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`${inter.className} min-h-screen bg-[#12111F] text-white`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="border-b border-[#4fd8e8]/15">
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-16">
          <nav className="text-xs uppercase tracking-[0.2em] text-white/45">
            <a href="/" className="hover:text-white">Home</a>
            <span className="px-2">/</span>
            <a href="/blog" className="hover:text-white">Blog</a>
          </nav>
          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.35em] text-[#4fd8e8]/80">
            {post.category}
          </p>
          <h1
            className={`${playfair.className} mt-5 text-4xl font-medium leading-[1.1] tracking-[-0.03em] md:text-5xl`}
          >
            {post.title}
          </h1>
          <p className="mt-6 text-sm text-white/55">
            {publishedFormatted} · {post.readTime}
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-16">
        {post.sections.map((section, idx) => renderSection(section, idx))}
      </article>

      <div className="mx-auto max-w-3xl px-6 pb-20 md:px-10">
        <a href="/blog" className="text-sm text-[#4fd8e8] underline-offset-4 hover:underline">
          ← Back to all posts
        </a>
      </div>
    </div>
  );
}

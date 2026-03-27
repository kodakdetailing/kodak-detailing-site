import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  const packages = [
    {
      name: "Maintenance Detail",
      price: "$80–$120",
      description:
        "Perfect for keeping your vehicle consistently clean without needing a full reset.",
      features: [
        "Exterior wash",
        "Wheel + tire clean",
        "Light vacuum",
        "Interior wipe down",
      ],
    },
    {
      name: "Full Detail",
      price: "$250–$350",
      description:
        "Our most popular service. A complete interior and exterior reset that brings your vehicle back to life.",
      features: [
        "Deep interior clean",
        "Stain removal included",
        "Exterior wash",
        "Windows + trim",
      ],
      featured: true,
    },
    {
      name: "Interior Reset",
      price: "$180–$250",
      description:
        "Ideal for heavily used interiors needing deep cleaning, extraction, and odor removal.",
      features: [
        "Deep vacuum",
        "Full extraction",
        "Odor removal",
        "Stain treatment",
      ],
    },
    {
      name: "Premium Detail",
      price: "$350–$450",
      description:
        "For owners who want their vehicle looking as close to new as possible with a high-end finish.",
      features: [
        "Full detail",
        "Full extraction",
        "Paint protection",
        "Interior protection",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Ivan M.",
      quote:
        "Anthony did an amazing job, couldn’t be happier with my detail. Would highly recommend him.",
    },
    {
      name: "Nicolas L.",
      quote:
        "Very professional and did a fantastic job. Easy process and great results every time.",
    },
    {
      name: "Tyler B.",
      quote:
        "Goes above and beyond for your car. Honest, reliable, and worth every dollar.",
    },
  ];

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="flex flex-col items-center text-center">
            <img
              src="/logo.png"
              alt="Kodak Detailing logo"
              className="h-20 w-auto object-contain md:h-24"
            />
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.35em] text-white/50 md:text-xs">
              Proudly Serving the Southwestern Suburbs of Chicago
            </p>
          </div>

          <div className="absolute right-6 top-8 md:right-10">
            <a
              href="#booking"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:opacity-95"
            >
              Book Now
            </a>
          </div>

          <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
             
              <h2
                className={`${playfair.className} mt-7 max-w-3xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] md:text-7xl`}
              >
                Premium Mobile Detailing
                <span className="block text-white/92">
                  Trusted by Local Car Owners
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
                High-end mobile detailing for daily drivers, luxury vehicles, and
                weekend cars — delivered directly to your home with premium care
                and professional results.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#booking"
                  className="rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-[1.02] hover:opacity-95"
                >
                  Book Your Detail
                </a>

                <a
                  href="#packages"
                  className="rounded-full border border-white/15 px-7 py-4 font-medium text-white transition hover:bg-white/5"
                >
                  View Packages
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/58">
                <span>⭐ 5.0 Rated</span>
                <span>✔ Mobile Service</span>
                <span>✔ Trusted on High-End Vehicles</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
              <img
                src="/hero-car.jpg"
                alt="Detailed luxury car"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
            Why Kodak
          </p>
          <h3
            className={`${playfair.className} mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl`}
          >
            Why Choose Kodak Mobile Detailing
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/62">
            We bring professional, high-end detailing directly to your home.
            Trusted by local car owners for consistent service, clean finishes,
            and results that stand out.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 shadow-lg shadow-black/20">
            <h4 className={`${playfair.className} text-xl font-semibold tracking-[-0.02em]`}>
              Convenience
            </h4>
            <p className="mt-4 leading-8 text-white/62">
              We come to your home, apartment, or office so you do not have to
              waste time driving, waiting, or changing your schedule.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 shadow-lg shadow-black/20">
            <h4 className={`${playfair.className} text-xl font-semibold tracking-[-0.02em]`}>
              Premium Results
            </h4>
            <p className="mt-4 leading-8 text-white/62">
              Every vehicle is treated with care, whether it is your daily
              driver, weekend car, or a higher-end performance vehicle.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 shadow-lg shadow-black/20">
            <h4 className={`${playfair.className} text-xl font-semibold tracking-[-0.02em]`}>
              Trusted Service
            </h4>
            <p className="mt-4 leading-8 text-white/62">
              Built on quality, professionalism, and consistency, Kodak Mobile
              Detailing is trusted by repeat customers who expect real results.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
              Portfolio
            </p>
            <h3
              className={`${playfair.className} mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl`}
            >
              Real Results
            </h3>
            <p className="mt-5 text-lg leading-8 text-white/62">
              Trusted by owners of luxury and performance vehicles.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 shadow-xl shadow-black/30">
              <img
                src="/before-after-1.jpg"
                alt="Before and after detailing result 1"
                className="h-[340px] w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 shadow-xl shadow-black/30 lg:mr-2">
              <img
                src="/before-after-2.jpg"
                alt="Before and after detailing result 2"
                className="h-[340px] w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 shadow-xl shadow-black/30 lg:ml-2">
              <img
                src="/before-after-3.jpg"
                alt="Before and after detailing result 3"
                className="h-[340px] w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 shadow-xl shadow-black/30">
              <img
                src="/before-after-4.jpg"
                alt="Before and after detailing result 4"
                className="h-[340px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
            Services
          </p>
          <h3
            className={`${playfair.className} mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl`}
          >
            Detailing Packages
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/62">
            Clear, simple options designed to get you booked fast with the level
            of detail your vehicle needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-[1.75rem] border p-7 shadow-xl ${
                pkg.featured
                  ? "border-white bg-white text-black shadow-white/5"
                  : "border-white/10 bg-white/[0.03] text-white shadow-black/20"
              }`}
            >
              <h4 className={`${playfair.className} text-2xl font-semibold tracking-[-0.03em]`}>
                {pkg.name}
              </h4>
              <p className="mt-3 text-3xl font-bold">{pkg.price}</p>
              <p className="mt-4 text-[15px] leading-7 opacity-80">{pkg.description}</p>

              <ul className="mt-6 space-y-3 text-sm">
                {pkg.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`mt-7 inline-block rounded-full px-5 py-3 font-medium transition hover:opacity-90 ${
                  pkg.featured ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                Select
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
              Reviews
            </p>
            <h3
              className={`${playfair.className} mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl`}
            >
              Trusted by Local Car Owners
            </h3>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-[1.75rem] bg-zinc-900 p-7 shadow-xl shadow-black/25"
              >
                <div className="mb-5 text-yellow-400">★★★★★</div>
                <p className="text-lg leading-8 text-white/92">“{testimonial.quote}”</p>
                <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-white/55">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
            Booking
          </p>
          <h3
            className={`${playfair.className} mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl`}
          >
            Book Your Detail
          </h3>
          <p className="mt-5 text-lg leading-8 text-white/62">
            Fill out the form below and we’ll confirm your appointment quickly.
          </p>
        </div>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mt-12 grid gap-4"
        >
          <input
            name="name"
            placeholder="Full Name"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white outline-none placeholder:text-white/35"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white outline-none placeholder:text-white/35"
          />

          <input
            name="vehicle"
            placeholder="Vehicle (Year/Make/Model)"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white outline-none placeholder:text-white/35"
          />

          <input
            name="address"
            placeholder="Service Address"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white outline-none placeholder:text-white/35"
          />

          <select
            name="package"
            defaultValue=""
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white outline-none"
          >
            <option value="" disabled className="text-black">
              Select Package
            </option>
            <option className="text-black">Maintenance Detail</option>
            <option className="text-black">Full Detail</option>
            <option className="text-black">Interior Reset</option>
            <option className="text-black">Premium Detail</option>
          </select>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="date"
              placeholder="Preferred Date"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white outline-none placeholder:text-white/35"
            />

            <input
              name="time"
              placeholder="Preferred Time"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white outline-none placeholder:text-white/35"
            />
          </div>

          <textarea
            name="notes"
            rows="5"
            placeholder="Notes / Condition of vehicle"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white outline-none placeholder:text-white/35"
          />

          <button
            type="submit"
            className="rounded-2xl bg-white py-5 font-semibold text-black transition hover:scale-[1.01] hover:opacity-95"
          >
            Request Booking
          </button>

          <p className="text-center text-sm text-white/45">
            Submissions will be sent to kodakdetailing21@gmail.com
          </p>
        </form>
      </section>
    </div>
  );
}
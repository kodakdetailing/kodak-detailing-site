export default function Home() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --navy: #0d1b2e;
          --cyan: #4DD8DC;
          --cyan-dark: #2ab8bc;
          --white: #ffffff;
          --gray: #f5f7fa;
          --text: #1a1a2e;
          --muted: #6b7280;
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; color: var(--text); background: var(--white); }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(13,27,46,0.97); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px; height: 68px;
        }
        .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .nav-brand { color: #fff; font-size: 15px; font-weight: 600; letter-spacing: 1px; line-height: 1.2; }
        .nav-brand span { color: var(--cyan); display: block; font-size: 10px; letter-spacing: 2px; font-weight: 400; }
        .nav-links { display: flex; gap: 32px; list-style: none; }
        .nav-links a { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 14px; transition: color 0.2s; }
        .nav-links a:hover { color: var(--cyan); }
        .nav-cta { background: var(--cyan); color: var(--navy); padding: 10px 24px; border-radius: 4px; text-decoration: none; font-size: 14px; font-weight: 600; transition: background 0.2s; }
        .nav-cta:hover { background: var(--cyan-dark); }

        .hero { min-height: 100vh; background: var(--navy); display: flex; align-items: center; padding: 100px 40px 60px; position: relative; overflow: hidden; }
        .hero-content { max-width: 1200px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .hero-eyebrow { color: var(--cyan); font-size: 12px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px; }
        .hero-title { color: #fff; font-size: clamp(38px, 5vw, 62px); font-weight: 700; line-height: 1.1; margin-bottom: 20px; }
        .hero-title span { color: var(--cyan); }
        .hero-sub { color: rgba(255,255,255,0.65); font-size: 18px; line-height: 1.7; margin-bottom: 36px; }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
        .btn-primary { background: var(--cyan); color: var(--navy); padding: 14px 32px; border-radius: 4px; text-decoration: none; font-size: 15px; font-weight: 700; display: inline-block; transition: background 0.2s; }
        .btn-primary:hover { background: var(--cyan-dark); }
        .btn-outline { border: 1.5px solid rgba(77,216,220,0.4); color: var(--cyan); padding: 14px 32px; border-radius: 4px; text-decoration: none; font-size: 15px; font-weight: 600; display: inline-block; transition: all 0.2s; }
        .btn-outline:hover { border-color: var(--cyan); background: rgba(77,216,220,0.08); }
        .hero-badges { display: flex; gap: 24px; margin-top: 40px; flex-wrap: wrap; }
        .badge { display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.6); font-size: 13px; }
        .badge-dot { width: 8px; height: 8px; background: var(--cyan); border-radius: 50%; }
        .hero-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(77,216,220,0.15); border-radius: 12px; padding: 32px; }
        .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .stat { text-align: center; padding: 20px; background: rgba(77,216,220,0.05); border-radius: 8px; border: 1px solid rgba(77,216,220,0.1); }
        .stat-num { color: var(--cyan); font-size: 32px; font-weight: 700; }
        .stat-label { color: rgba(255,255,255,0.5); font-size: 12px; margin-top: 4px; letter-spacing: 0.5px; }
        .hero-loc { margin-top: 20px; padding: 16px 20px; background: rgba(77,216,220,0.05); border-radius: 8px; border: 1px solid rgba(77,216,220,0.1); display: flex; align-items: center; gap: 12px; }
        .hero-loc-text { color: rgba(255,255,255,0.7); font-size: 13px; }
        .hero-loc-text strong { color: #fff; display: block; font-size: 14px; }

        section { padding: 100px 40px; }
        .section-inner { max-width: 1200px; margin: 0 auto; }
        .section-label { color: var(--cyan); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px; }
        .section-title { font-size: clamp(28px, 3.5vw, 42px); font-weight: 700; color: var(--navy); margin-bottom: 16px; }
        .section-sub { color: var(--muted); font-size: 17px; max-width: 520px; line-height: 1.7; margin-bottom: 60px; }

        .why { background: var(--gray); }
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .why-card { background: #fff; border-radius: 12px; padding: 36px 28px; border: 1px solid #e5e7eb; transition: all 0.25s; }
        .why-card:hover { transform: translateY(-4px); border-color: var(--cyan); box-shadow: 0 12px 32px rgba(77,216,220,0.1); }
        .why-icon { width: 48px; height: 48px; background: rgba(77,216,220,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .why-card h3 { font-size: 18px; font-weight: 600; color: var(--navy); margin-bottom: 10px; }
        .why-card p { color: var(--muted); font-size: 15px; line-height: 1.7; }

        .services { background: #fff; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .svc { border: 1.5px solid #e5e7eb; border-radius: 12px; padding: 32px 28px; transition: all 0.25s; position: relative; overflow: hidden; }
        .svc:hover { border-color: var(--cyan); box-shadow: 0 8px 28px rgba(77,216,220,0.12); }
        .svc.featured { border-color: var(--cyan); background: var(--navy); }
        .svc.featured .svc-name, .svc.featured .svc-price { color: #fff; }
        .svc.featured .svc-desc, .svc.featured .svc-includes li { color: rgba(255,255,255,0.65); }
        .svc.featured .svc-includes li::before { color: var(--cyan); }
        .featured-badge { position: absolute; top: 0; right: 0; background: var(--cyan); color: var(--navy); font-size: 11px; font-weight: 700; padding: 5px 14px; border-radius: 0 12px 0 8px; letter-spacing: 1px; }
        .svc-name { font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
        .svc-desc { color: var(--muted); font-size: 14px; line-height: 1.6; margin-bottom: 20px; }
        .svc-price { font-size: 22px; font-weight: 700; color: var(--navy); margin-bottom: 20px; }
        .svc-price span { font-size: 13px; font-weight: 400; color: var(--muted); }
        .svc.featured .svc-price span { color: rgba(255,255,255,0.5); }
        .svc-includes { list-style: none; margin-bottom: 28px; display: flex; flex-direction: column; gap: 8px; }
        .svc-includes li { font-size: 14px; color: var(--muted); display: flex; align-items: flex-start; gap: 8px; }
        .svc-includes li::before { content: '✦'; color: var(--cyan); font-size: 10px; margin-top: 3px; flex-shrink: 0; }
        .svc-btn { display: block; text-align: center; padding: 12px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; transition: all 0.2s; border: 1.5px solid var(--cyan); color: var(--cyan); }
        .svc-btn:hover { background: var(--cyan); color: var(--navy); }
        .svc.featured .svc-btn { background: var(--cyan); color: var(--navy); border-color: var(--cyan); }
        .svc.featured .svc-btn:hover { background: var(--cyan-dark); }
        .svc-note { text-align: center; margin-top: 32px; color: var(--muted); font-size: 14px; }
        .svc-note a { color: var(--cyan); text-decoration: none; }

        .areas { background: var(--navy); }
        .areas .section-title { color: #fff; }
        .areas .section-sub { color: rgba(255,255,255,0.55); }
        .areas-grid { display: flex; flex-wrap: wrap; gap: 12px; }
        .area-tag { background: rgba(77,216,220,0.08); border: 1px solid rgba(77,216,220,0.2); color: rgba(255,255,255,0.8); padding: 8px 18px; border-radius: 50px; font-size: 14px; }
        .area-tag.hl { background: rgba(77,216,220,0.15); border-color: var(--cyan); color: var(--cyan); }

        .reviews { background: var(--gray); }
        .reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .review { background: #fff; border-radius: 12px; padding: 32px 28px; border: 1px solid #e5e7eb; }
        .stars { color: #f59e0b; font-size: 18px; margin-bottom: 16px; }
        .review-text { color: var(--muted); font-size: 15px; line-height: 1.7; margin-bottom: 20px; font-style: italic; }
        .reviewer { font-weight: 600; color: var(--navy); font-size: 14px; }

        .booking { background: #fff; }
        .booking-inner { max-width: 680px; margin: 0 auto; text-align: center; }
        .booking-inner .section-title, .booking-inner .section-label { text-align: center; }
        .booking-inner .section-sub { margin: 0 auto 48px; }
        form { display: flex; flex-direction: column; gap: 16px; text-align: left; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        input, select, textarea { width: 100%; padding: 14px 16px; border: 1.5px solid #e5e7eb; border-radius: 8px; font-size: 15px; font-family: inherit; color: var(--text); background: #fff; transition: border-color 0.2s; outline: none; }
        input:focus, select:focus, textarea:focus { border-color: var(--cyan); }
        textarea { resize: vertical; min-height: 100px; }
        .form-submit { background: var(--cyan); color: var(--navy); border: none; padding: 16px; border-radius: 8px; font-size: 16px; font-weight: 700; cursor: pointer; transition: background 0.2s; width: 100%; }
        .form-submit:hover { background: var(--cyan-dark); }
        .form-note { text-align: center; color: var(--muted); font-size: 13px; }

        footer { background: var(--navy); padding: 48px 40px 28px; border-top: 1px solid rgba(77,216,220,0.1); }
        .footer-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: flex-start; gap: 40px; flex-wrap: wrap; }
        .footer-brand { color: #fff; font-size: 16px; font-weight: 600; margin-bottom: 8px; }
        .footer-brand span { color: var(--cyan); }
        .footer-tagline { color: rgba(255,255,255,0.4); font-size: 13px; }
        .footer-links { display: flex; flex-direction: column; gap: 8px; }
        .footer-links a { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 14px; transition: color 0.2s; }
        .footer-links a:hover { color: var(--cyan); }
        .footer-bottom { max-width: 1200px; margin: 32px auto 0; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between; }
        .footer-bottom p { color: rgba(255,255,255,0.3); font-size: 13px; }

        @media (max-width: 900px) {
          .hero-content, .why-grid, .services-grid, .reviews-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          nav { padding: 0 20px; }
          .nav-links { display: none; }
          section { padding: 80px 20px; }
          .hero { padding: 100px 20px 60px; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          <svg width="36" height="36" viewBox="0 0 52 52" fill="none">
            <rect width="22" height="30" x="5" y="11" fill="#4DD8DC"/>
            <rect width="22" height="30" x="14" y="11" fill="#0d1b2e"/>
            <path d="M27 11 L47 26 L27 41 Z" fill="#4DD8DC"/>
          </svg>
          <div className="nav-brand">KODAK AUTO DETAILING <span>NAPERVILLE, IL</span></div>
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#areas">Service Area</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#booking">Contact</a></li>
        </ul>
        <a href="#booking" className="nav-cta">Book Now</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div>
            <p className="hero-eyebrow">Premium Mobile Detailing</p>
            <h1 className="hero-title">We Come<br/><span>To You.</span></h1>
            <p className="hero-sub">Professional auto detailing delivered straight to your driveway. No drop-off, no hassle — just a showroom finish wherever you are in the western Chicago suburbs.</p>
            <div className="hero-actions">
              <a href="#booking" className="btn-primary">Book Your Detail</a>
              <a href="#services" className="btn-outline">View Services</a>
            </div>
            <div className="hero-badges">
              <div className="badge"><div className="badge-dot"></div> 5.0 Star Rated</div>
              <div className="badge"><div className="badge-dot"></div> Mobile Service</div>
              <div className="badge"><div className="badge-dot"></div> Luxury Vehicles Welcome</div>
            </div>
          </div>
          <div>
            <div className="hero-card">
              <div className="stat-grid">
                <div className="stat"><div className="stat-num">100+</div><div className="stat-label">CARS DETAILED</div></div>
                <div className="stat"><div className="stat-num">5.0</div><div className="stat-label">STAR RATING</div></div>
                <div className="stat"><div className="stat-num">3+</div><div className="stat-label">YEARS EXPERIENCE</div></div>
                <div className="stat"><div className="stat-num">0</div><div className="stat-label">DROP-OFF NEEDED</div></div>
              </div>
              <div className="hero-loc">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4DD8DC" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                <div className="hero-loc-text"><strong>Naperville, IL</strong>Serving the western Chicago suburbs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <div className="section-inner">
          <p className="section-label">Why Kodak</p>
          <h2 className="section-title">Why Choose Kodak Auto Detailing</h2>
          <p className="section-sub">We bring professional, high-end detailing directly to you. Trusted by owners of Ferraris, Porsches, Range Rovers, and everyday cars alike.</p>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <svg width="24" height="24" fill="none" stroke="#4DD8DC" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3>We Come To You</h3>
              <p>We come to your home, apartment, or office so you don&apos;t waste time driving or waiting. Premium service at your doorstep.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg width="24" height="24" fill="none" stroke="#4DD8DC" strokeWidth="2" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3>Premium Results</h3>
              <p>Every vehicle is treated with professional-grade products — whether it&apos;s your daily driver, weekend car, or a high-end exotic.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg width="24" height="24" fill="none" stroke="#4DD8DC" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Trusted &amp; Reliable</h3>
              <p>Built on quality, professionalism, and consistency. Trusted by repeat customers across Naperville and the western suburbs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-inner">
          <p className="section-label">Services</p>
          <h2 className="section-title">Detailing Packages</h2>
          <p className="section-sub">Clear, simple pricing for every level of detail your vehicle needs. All services come to you.</p>
          <div className="services-grid">

            <div className="svc">
              <div className="svc-name">Maintenance Detail</div>
              <div className="svc-desc">Perfect for keeping your vehicle consistently clean. Quick, efficient, and done in about an hour.</div>
              <div className="svc-price">$120 <span>flat rate</span></div>
              <ul className="svc-includes">
                <li>Exterior hand wash</li>
                <li>Wheel &amp; tire clean</li>
                <li>Light interior vacuum</li>
                <li>Interior wipe down</li>
              </ul>
              <a href="#booking" className="svc-btn">Book Now</a>
            </div>

            <div className="svc">
              <div className="svc-name">Interior Detail</div>
              <div className="svc-desc">A thorough deep clean of your entire interior — seats, carpets, dashboard, doors, and every surface in between.</div>
              <div className="svc-price">From $150 <span>by vehicle size</span></div>
              <ul className="svc-includes">
                <li>Full deep vacuum</li>
                <li>All surfaces cleaned</li>
                <li>Dashboard &amp; door panels</li>
                <li>Windows cleaned inside</li>
              </ul>
              <a href="#booking" className="svc-btn">Book Now</a>
            </div>

            <div className="svc featured">
              <div className="featured-badge">POPULAR</div>
              <div className="svc-name">Full Detail</div>
              <div className="svc-desc">Our most popular package — a complete interior and exterior reset that brings your vehicle back to life.</div>
              <div className="svc-price">From $300 <span>by vehicle size</span></div>
              <ul className="svc-includes">
                <li>Complete interior deep clean</li>
                <li>Exterior hand wash</li>
                <li>Wheel &amp; tire clean</li>
                <li>Windows &amp; trim</li>
              </ul>
              <a href="#booking" className="svc-btn">Book Now</a>
            </div>

            <div className="svc">
              <div className="svc-name">Exterior Detail</div>
              <div className="svc-desc">Hand wash, clay bar treatment to remove contaminants, and a one-step polish to restore gloss and remove light swirls.</div>
              <div className="svc-price">From $175 <span>by vehicle size</span></div>
              <ul className="svc-includes">
                <li>Thorough hand wash</li>
                <li>Clay bar treatment</li>
                <li>One-step polish</li>
                <li>Tire dressing &amp; trim</li>
              </ul>
              <a href="#booking" className="svc-btn">Book Now</a>
            </div>

            <div className="svc">
              <div className="svc-name">Paint Correction</div>
              <div className="svc-desc">Two-step paint correction to remove deeper scratches, swirl marks, and oxidation — restoring your paint to a showroom finish.</div>
              <div className="svc-price">From $275 <span>by vehicle size</span></div>
              <ul className="svc-includes">
                <li>Clay bar treatment</li>
                <li>Compound cut pass</li>
                <li>Finishing polish pass</li>
                <li>Paint inspection included</li>
              </ul>
              <a href="#booking" className="svc-btn">Book Now</a>
            </div>

            <div className="svc">
              <div className="svc-name">Carpet &amp; Upholstery Shampoo</div>
              <div className="svc-desc">Deep shampoo and extraction of carpets, floor mats, and fabric seats — leaves your interior fresh and stain-free.</div>
              <div className="svc-price">From $100 <span>by vehicle size</span></div>
              <ul className="svc-includes">
                <li>Hot water extraction</li>
                <li>Stain treatment</li>
                <li>Floor mats shampooed</li>
                <li>Fabric seats treated</li>
              </ul>
              <a href="#booking" className="svc-btn">Book Now</a>
            </div>

            <div className="svc">
              <div className="svc-name">Odor Elimination</div>
              <div className="svc-desc">Eliminate pet odors, smoke, food smells, and more. We treat the source so the smell doesn&apos;t come back.</div>
              <div className="svc-price">$100–$150</div>
              <ul className="svc-includes">
                <li>Source identification</li>
                <li>Deep treatment applied</li>
                <li>Interior refreshed</li>
                <li>Long-lasting results</li>
              </ul>
              <a href="#booking" className="svc-btn">Book Now</a>
            </div>

            <div className="svc">
              <div className="svc-name">Ceramic Coating</div>
              <div className="svc-desc">Long-lasting protection bonded to your paint. Repels water, resists light scratches, and keeps your car looking freshly detailed for years.</div>
              <div className="svc-price">From $500 <span>quoted per vehicle</span></div>
              <ul className="svc-includes">
                <li>Paint decontamination</li>
                <li>Surface prep &amp; polish</li>
                <li>Ceramic coating applied</li>
                <li>Multi-year protection</li>
              </ul>
              <a href="#booking" className="svc-btn">Book Now</a>
            </div>

          </div>
          <p className="svc-note">Pricing varies by vehicle size — sedans, SUVs, trucks, and exotics all priced accordingly. <a href="#booking">Contact us</a> for an exact quote.</p>
        </div>
      </section>

      {/* AREAS */}
      <section className="areas" id="areas">
        <div className="section-inner">
          <p className="section-label">Service Area</p>
          <h2 className="section-title">Serving the Western Chicago Suburbs</h2>
          <p className="section-sub">Based in Naperville, IL — we travel throughout the western suburbs to bring the detail shop to your driveway.</p>
          <div className="areas-grid">
            {['Naperville','Hinsdale','Oak Brook','Burr Ridge','Wheaton','Glen Ellyn','Downers Grove','Elmhurst','Lisle','Warrenville','Clarendon Hills','Western Springs','La Grange','St. Charles','Geneva','Batavia','Lombard','Westmont'].map((area, i) => (
              <div key={area} className={`area-tag${i < 4 ? ' hl' : ''}`}>{area}</div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews" id="reviews">
        <div className="section-inner">
          <p className="section-label">Reviews</p>
          <h2 className="section-title">Trusted by Local Car Owners</h2>
          <p className="section-sub">Real results from real customers across the western Chicago suburbs.</p>
          <div className="reviews-grid">
            <div className="review">
              <div className="stars">★★★★★</div>
              <p className="review-text">&ldquo;Anthony did an amazing job, couldn&apos;t be happier with my detail. Would highly recommend him.&rdquo;</p>
              <div className="reviewer">Ivan M.</div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p className="review-text">&ldquo;Very professional and did a fantastic job. Easy process and great results every time.&rdquo;</p>
              <div className="reviewer">Nicolas L.</div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p className="review-text">&ldquo;Goes above and beyond for your car. Honest, reliable, and worth every dollar.&rdquo;</p>
              <div className="reviewer">Tyler B.</div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="booking" id="booking">
        <div className="booking-inner">
          <p className="section-label">Book Your Detail</p>
          <h2 className="section-title">Ready for a Fresh Detail?</h2>
          <p className="section-sub">Fill out the form below and we&apos;ll confirm your appointment quickly. We serve Naperville and the surrounding western suburbs.</p>
          <form action="mailto:kodakdetailing21@gmail.com" method="post" encType="text/plain">
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="tel" name="phone" placeholder="Phone Number" required />
            </div>
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="text" name="vehicle" placeholder="Vehicle (Year, Make, Model)" required />
            <select name="service" required>
              <option value="" disabled>Select a Service</option>
              <option>Maintenance Detail — $120</option>
              <option>Interior Detail — From $150</option>
              <option>Full Detail — From $300</option>
              <option>Exterior Detail (Clay Bar + One-Step Polish) — From $175</option>
              <option>Paint Correction (Two-Step) — From $275</option>
              <option>Carpet &amp; Upholstery Shampoo — From $100</option>
              <option>Odor Elimination — $100–$150</option>
              <option>Ceramic Coating — From $500</option>
            </select>
            <input type="text" name="location" placeholder="Your Address / City" required />
            <textarea name="notes" placeholder="Any additional notes or questions?"></textarea>
            <button type="submit" className="form-submit">Request Booking</button>
            <p className="form-note">Submissions sent to kodakdetailing21@gmail.com · We respond within the hour</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-brand">KODAK <span>AUTO DETAILING</span></div>
            <div className="footer-tagline">Premium Mobile Detailing · Naperville, IL</div>
          </div>
          <div className="footer-links">
            <a href="tel:6305287990">(630) 528-7990</a>
            <a href="mailto:kodakdetailing21@gmail.com">kodakdetailing21@gmail.com</a>
            <a href="https://kodakdetailing.com">kodakdetailing.com</a>
          </div>
          <div>
            <div style={{color:'rgba(255,255,255,0.5)',fontSize:'13px',marginBottom:'8px'}}>Serving the western suburbs</div>
            <div style={{color:'rgba(255,255,255,0.3)',fontSize:'13px'}}>Naperville · Hinsdale · Oak Brook · Burr Ridge &amp; more</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Kodak Auto Detailing. All rights reserved.</p>
          <p>Naperville, IL · Western Chicago Suburbs</p>
        </div>
      </footer>
    </>
  );
}

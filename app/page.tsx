"use client";

import { useState } from "react";

// ─── Google Fonts: Playfair Display (serif headings) + Source Serif 4 (body) ──
const fontLink = (
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

// ─── Colour & type tokens ──────────────────────────────────────────────────
const t = {
  pageBg:        "#FAF9F7",   // warm off-white
  navBg:         "rgba(250,249,247,0.92)",
  navBorder:     "#D8D3CC",
  cardBg:        "#FFFFFF",
  cardBorder:    "#E4DED7",
  cardHover:     "#1A1A1A",
  ink:           "#1A1A1A",   // near-black for headings
  body:          "#3D3A35",   // warm dark for body text
  muted:         "#7A756E",   // captions, dates
  rule:          "#D8D3CC",   // horizontal rules
  accent:        "#B22222",   // NYT-inspired deep red — used sparingly
  accentHover:   "#8B1A1A",
  tagBg:         "#F3F0EB",
  certBg:        "#F3F0EB",
  certBorder:    "#D8D3CC",
  serif:         "'Playfair Display', Georgia, serif",
  serifBody:     "'Source Serif 4', Georgia, serif",
  sans:          "'Inter', system-ui, sans-serif",
};

const cardBase = {
  background: t.cardBg,
  border: `1px solid ${t.cardBorder}`,
  borderRadius: "4px",         // NYT uses very subtle rounding
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export default function Portfolio() {
  const [openRole, setOpenRole] = useState(null);
  const toggleRole = (role) => setOpenRole(openRole === role ? null : role);

  const experiences = [
    {
      id: "Interac",
      title: "Lead, Application Operations – Debit",
      company: "Interac",
      location: "Toronto",
      period: "Mar 2026 – Present",
      bullets: [
        "Manage the Debit Platform ensuring optimum availability and transaction success rate.",
        "Lead incident resolution, root cause analysis, and preventive measures to minimise disruptions.",
        "Participate in UAT and Go-Live processes.",
        "Collaborate with developers on enhancements and production fixes, monitoring via AppDynamics, Dynatrace, Splunk, and PagerDuty.",
        "Conduct audits and performance tuning to optimise efficiency and reliability.",
      ],
    },
    {
      id: "mufg",
      title: "Lead, Application Management",
      company: "MUFG Investor Services",
      location: "Toronto",
      period: "Sep 2024 – Mar 2026",
      bullets: [
        "Provided expert support for business-critical applications, ensuring seamless performance.",
        "Led incident resolution, root cause analysis, and preventive measures to minimise disruptions.",
        "Managed UAT and Go-Live readiness for upgrades and rollouts.",
        "Collaborated with developers on enhancements and production fixes; monitoring via Dynatrace, Kibana, and Datadog.",
        "Conducted audits and performance tuning to optimise efficiency and reliability.",
      ],
    },
    {
      id: "fcmb",
      title: "Head, IT Business Application Support",
      company: "FCMB",
      location: "Lagos",
      period: "Jun 2022 – Jul 2024",
      bullets: [
        "Directed a multifunctional unit supporting mobile, internet, USSD, Postilion CMS, ATMs, and interbank transfer platforms.",
        "Improved platform NPS from 48% to 70% through proactive monitoring and faster issue resolution.",
        "Oversaw redesign initiatives achieving 99.5% mobile login success and 99% interbank transaction success.",
        "Led DR planning, change management, and Oracle database upgrade from 11g to 19c.",
        "Developed BRDs/FRDs, provided SME advisory, and mentored junior staff into leadership roles.",
        "Played a key role in core and non-core infrastructure modernisation programmes.",
      ],
    },
    {
      id: "firstbank",
      title: "Team Lead, Channels Support",
      company: "FirstBank",
      location: "Lagos",
      period: "Jul 2018 – Jun 2022",
      bullets: [
        "Managed support for Mobile, Internet, USSD, Finacle, and Card Management platforms.",
        "Resolved production incidents promptly while maintaining stakeholder communication.",
        "Reduced incidents through automation, middleware tuning, REST API optimisation, and IBM MQ improvements.",
        "Supported transaction reconciliation within strict settlement windows.",
        "Reviewed and signed off BRDs/FRDs to align delivery with business goals.",
        "Recognised with MVP nomination and commendations for mobile development and migration projects.",
      ],
    },
    {
      id: "interswitch",
      title: "Team Lead, Channels Support",
      company: "Interswitch",
      location: "Lagos",
      period: "Jun 2015 – Jul 2018",
      bullets: [
        "Provided third-level support for payment platforms including Mobile Banking, Internet Banking, USSD, CMS, and Payment Gateway.",
        "Led root cause analysis and incident management to minimise downtime.",
        "Conducted post-deployment checks ensuring stability and smooth transaction processing.",
        "Built proactive dashboards using ELK, Splunk, Grafana, and Dynatrace.",
        "Automated data tasks, improving accuracy and reducing manual effort.",
      ],
    },
  ];

  const skills = [
    "Platform Management", "Systems Integration", "Java",
    "Python", "PL/SQL & SQL", "Data Analytics",
    "Stakeholder Management", "Agile / Scrum",
    "API Integration", "Digital Transformation",
    "Data Visualisation & Storytelling", "Switching & Payment Processing",
    "Incident & Change Management", "Solution Architecture", "Innovation",
  ];

  const certs = [
    "TOGAF",
    "ITIL Foundation V4",
    "Lean Six Sigma – Yellow Belt",
    "Advanced Postilion Training – Payments & CMS",
    "Advanced ATM APP Training – Payments & Terminal Management",
    "Postilion Payment Basic Training (PBT)",
  ];

  const portfolio = [
    {
      youtubeId: "5X13XCB3ZSs",
      tag: "Narrative / Systems Thinking",
      title: "The Broken Contract",
      desc: "The Broken Contract examines the rising cost of housing rent in the Greater Toronto Area from 1982 to today. It highlights how average rent increased from approximately $375 to over $2,500, while real wages grew by only about 20%. The project explores the growing gap between income levels and housing affordability over time. Overall, the piece presents a data-driven narrative on affordability, inequality, and the future of work.",
      link: "https://www.youtube.com/watch?v=5X13XCB3ZSs",
      linkLabel: "▶ Watch on YouTube",
    },
    {
      img: "/images/nightingale.jpg",
      tag: "Data Visualisation",
      title: "Florence Nightingale Chart Redesign",
      desc: "Florence Nightingale’s coxcomb diagram is a landmark example of data visualization used for social reform. It clearly showed that preventable diseases caused more deaths than battle wounds. This project reimagines her work using modern interactive charts to improve clarity, comparison, and usability while preserving the original message.",
      link: "/docs/Redesign_Florence_Nightingale_Chart.pdf",
      linkLabel: "📄 View PDF",
    },
    {
      img: "/images/arsenal.jpg",
      tag: "Sports Analytics",
      title: "Arsenal – 22-Year Analysis",
      desc: "Arsenal Football Club was founded in 1886 by workers at the Royal Arsenal factory in South East London, growing from humble beginnings into one of England’s most historic clubs. Their last Premier League title came in the legendary 2003/04 “Invincibles” season under Arsène Wenger, when they went unbeaten with 26 wins and 12 draws. Since then, Arsenal have faced a long title drought while striving to return to the top of English football.",
      link: "/docs/arsenal.pdf",
      linkLabel: "📄 View PDF",
    },
    {
      img: "/images/IsraelIranWar.jpg",
      tag: "Geopolitical Impact Analysis",
      title: "The Israel-Iran War Infographic",
      desc: "The Israel–Iran conflict, which escalated in 2026 after years of tension over nuclear ambitions and regional influence, has triggered military strikes and retaliatory attacks across the Middle East. Disruptions to the Strait of Hormuz and damage to Gulf oil infrastructure have reduced supply, causing global gas prices to rise sharply. The war is increasing economic uncertainty, straining regional stability, and affecting energy markets worldwide. Restoring oil prices to normal levels would require a ceasefire, secure shipping routes, repaired infrastructure, and renewed diplomatic efforts to stabilize the region.",
      link: "/docs/IsraelIranWar.pdf",
      linkLabel: "📄 View PDF",
    },
    {
      img: "/images/gapminder.jpg",
      tag: "Global Development Trends",
      title: "Gapminder Bubble Chart – Inspirations",
      desc: "An interactive visualization comparing countries over time using income, life expectancy, and population size to reveal global development trends. Inspired by the Gapminder Bubble Chart, this project demonstrates how multiple data dimensions can be combined into one dynamic view. It allows users to observe how nations evolve over time and how key indicators are interconnected.",
      link: "https://www.gapminder.org/tools/#$chart-type=bubbles&url=v2",
      linkLabel: "▶ View Reference",
    },
  ];

  const navLinks = [
    ["#about", "About"],
    ["#experience", "Experience"],
    ["#education", "Education"],
    ["#certificates", "Certification"],
    ["#skills", "Skills"],
    ["#portfolio", "Portfolio"],
    ["#contact", "Contact"],
  ];

  return (
    <>
      {fontLink}
      <div style={{ minHeight: "100vh", background: t.pageBg, color: t.ink, fontFamily: t.serifBody }}>

        {/* ── Top rule ── */}
        <div style={{ height: "3px", background: t.ink }} />
        <div style={{ height: "1px", background: t.ink, marginTop: "3px" }} />

        {/* ── Navigation ── */}
        <nav style={{
          position: "sticky", top: 0, zIndex: 50,
          backdropFilter: "blur(10px)",
          background: t.navBg,
          borderBottom: `1px solid ${t.navBorder}`,
        }}>
          <div style={{
            maxWidth: "72rem", margin: "0 auto",
            padding: "0.75rem 1.5rem",
            display: "flex", flexWrap: "wrap", gap: "1.5rem",
            alignItems: "center",
          }}>
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                style={{
                  fontFamily: t.sans,
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: t.body,
                  textDecoration: "none",
                  transition: "color 0.15s",
                  fontWeight: 500,
                }}
                onMouseEnter={e => e.target.style.color = t.accent}
                onMouseLeave={e => e.target.style.color = t.body}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>

          {/* ── Hero ── */}
          <section style={{ padding: "4rem 0 3rem", borderBottom: `1px solid ${t.rule}` }}>
            {/* Kicker line */}
            <p style={{
              fontFamily: t.sans,
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: t.accent,
              fontWeight: 500,
              marginBottom: "1rem",
            }}>
              Technology Leader · Financial Services & IT
            </p>

            <h1 style={{
              fontFamily: t.serif,
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 8vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: t.ink,
              marginBottom: "1.25rem",
            }}>
              Emmanuel<br />Onwuhafua
            </h1>

            {/* Thin rule with red accent */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: "2.5rem", height: "2px", background: t.accent }} />
              <div style={{ flex: 1, height: "1px", background: t.rule }} />
            </div>

            <p style={{
              fontFamily: t.serifBody,
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: t.body,
              lineHeight: 1.75,
              maxWidth: "52rem",
              fontStyle: "italic",
            }}>
              IT Application Management · Solution Architect · Data & Business Analyst ·
              Digital Transformation Leader · Business Analytics & Artificial Intelligence
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "5rem", paddingBottom: "2rem" }}>

            {/* ── About ── */}
            <section id="about" style={{ paddingTop: "3rem" }}>
              <SectionHeading label="About" tokens={t} />
              <p style={{ fontFamily: t.serifBody, color: t.body, lineHeight: 2, maxWidth: "62rem", margin: 0, fontSize: "1.05rem" }}>
                Technology leader with 15+ years of experience in financial services and IT,
                specialising in application management, core banking systems, and digital platforms.
                Adept at bridging business needs with technical solutions, I have led teams through
                infrastructure upgrades, platform redesigns, and complex system migrations that
                improved uptime, reduced failures, and enhanced customer satisfaction. Recognised
                for delivering scalable, resilient systems, I excel in incident management,
                stakeholder engagement, and process optimisation.
              </p>
            </section>

            {/* ── Experience ── */}
            <section id="experience">
              <SectionHeading label="Experience" tokens={t} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>

                {experiences.map(({ id, title, company, location, period, bullets }) => {
                  const open = openRole === id;
                  return (
                    <div
                      key={id}
                      style={{
                        ...cardBase,
                        borderColor: open ? t.ink : t.cardBorder,
                        boxShadow: open ? `2px 2px 0 ${t.ink}` : "none",
                        overflow: "hidden",
                      }}
                    >
                      <button
                        onClick={() => toggleRole(id)}
                        aria-expanded={open}
                        style={{
                          width: "100%", textAlign: "left",
                          padding: "1.1rem 1.4rem",
                          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                          background: open ? "#F5F3EF" : "none",
                          border: "none", cursor: "pointer",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={e => { if (!open) e.currentTarget.style.background = "#F5F3EF"; }}
                        onMouseLeave={e => { if (!open) e.currentTarget.style.background = "none"; }}
                      >
                        <div>
                          <h3 style={{
                            fontFamily: t.serif,
                            fontSize: "1.05rem",
                            fontWeight: 700,
                            color: t.ink,
                            margin: 0,
                          }}>{title}</h3>
                          <p style={{
                            fontFamily: t.sans,
                            fontSize: "0.78rem",
                            color: t.muted,
                            marginTop: "0.3rem",
                            marginBottom: 0,
                            letterSpacing: "0.03em",
                          }}>
                            {company} · {location} · {period}
                          </p>
                        </div>
                        <span style={{
                          fontFamily: t.serif,
                          color: open ? t.accent : t.muted,
                          fontSize: "1.5rem",
                          lineHeight: 1,
                          userSelect: "none",
                          display: "inline-block",
                          transform: open ? "rotate(45deg)" : "rotate(0deg)",
                          transition: "transform 0.2s, color 0.2s",
                          flexShrink: 0,
                          marginLeft: "1rem",
                          marginTop: "0.1rem",
                        }}>+</span>
                      </button>

                      {open && (
                        <div style={{
                          padding: "1rem 1.4rem 1.25rem",
                          borderTop: `1px solid ${t.rule}`,
                          background: "#FDFCFB",
                        }}>
                          {bullets.map((b, i) => (
                            <div key={i} style={{
                              display: "flex",
                              gap: "0.75rem",
                              margin: "0.45rem 0",
                            }}>
                              <span style={{ color: t.accent, fontWeight: 700, flexShrink: 0, marginTop: "0.1rem", fontSize: "0.9rem" }}>—</span>
                              <p style={{
                                fontFamily: t.serifBody,
                                color: t.body,
                                fontSize: "0.9rem",
                                lineHeight: 1.75,
                                margin: 0,
                              }}>{b}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Earlier roles */}
                <div
                  style={cardBase}
                  onMouseEnter={e => e.currentTarget.style.borderColor = t.ink}
                  onMouseLeave={e => e.currentTarget.style.borderColor = t.cardBorder}
                >
                  <div style={{ padding: "1.1rem 1.4rem" }}>
                    <h3 style={{
                      fontFamily: t.serif,
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: t.ink,
                      marginTop: 0,
                      marginBottom: "1rem",
                    }}>Earlier Career</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                      {[
                        {
                          org: "Access Bank PLC",
                          role: "Team Member, Corporate Applications · 2014 – 2015",
                          desc: "Supported corporate and retail internet banking, stabilised platforms, integrated 2FA, and improved transaction success rates.",
                        },
                        {
                          org: "Finance Applications and Systems Ltd (FASYL)",
                          role: "Technical Consultant · 2010 – 2014",
                          desc: "Deployed and supported FLEXCUBE Core Banking, GCP, BPM systems, Oracle PL/SQL development, and banking solution delivery.",
                        },
                      ].map(({ org, role, desc }) => (
                        <div key={org}>
                          <span style={{ fontFamily: t.serif, fontWeight: 700, color: t.ink, fontSize: "0.95rem" }}>{org}</span>
                          <span style={{ fontFamily: t.sans, fontSize: "0.75rem", color: t.muted, marginLeft: "0.6rem" }}>{role}</span>
                          <p style={{ fontFamily: t.serifBody, marginTop: "0.2rem", marginBottom: 0, fontSize: "0.875rem", color: t.body, lineHeight: 1.7 }}>{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* ── Education ── */}
            <section id="education">
              <SectionHeading label="Education" tokens={t} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  {
                    degree: "Master of Business Analytics & AI",
                    school: "Ontario Tech University",
                    period: "Starting January 2026",
                    note: "Focus: Data analytics, machine learning, AI strategy, business intelligence and digital innovation.",
                  },
                  {
                    degree: "B.Sc. Computer Science & Mathematics",
                    school: "Federal University of Technology Owerri, Nigeria",
                    period: "2003 – 2008",
                    note: null,
                  },
                ].map(({ degree, school, period, note }) => (
                  <div key={degree} style={cardBase}>
                    <div style={{ padding: "1.1rem 1.4rem" }}>
                      <h3 style={{ fontFamily: t.serif, fontSize: "1.05rem", fontWeight: 700, color: t.ink, margin: 0 }}>{degree}</h3>
                      <p style={{ fontFamily: t.sans, fontSize: "0.78rem", color: t.muted, marginTop: "0.3rem", marginBottom: 0, letterSpacing: "0.03em" }}>
                        {school} · {period}
                      </p>
                      {note && <p style={{ fontFamily: t.serifBody, fontSize: "0.85rem", color: t.body, marginTop: "0.5rem", marginBottom: 0, fontStyle: "italic" }}>{note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Certification ── */}
            <section id="certificates">
              <SectionHeading label="Certification" tokens={t} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {certs.map((cert) => (
                  <span
                    key={cert}
                    style={{
                      fontFamily: t.sans,
                      padding: "0.35rem 0.85rem",
                      background: t.certBg,
                      color: t.body,
                      border: `1px solid ${t.certBorder}`,
                      borderRadius: "2px",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </section>

            {/* ── Skills ── */}
            <section id="skills">
              <SectionHeading label="Skills" tokens={t} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: t.sans,
                      padding: "0.35rem 0.85rem",
                      background: t.tagBg,
                      border: `1px solid ${t.certBorder}`,
                      borderRadius: "2px",
                      fontSize: "0.78rem",
                      color: t.body,
                      transition: "border-color 0.15s, color 0.15s, background 0.15s",
                      cursor: "default",
                      fontWeight: 400,
                    }}
                    onMouseEnter={e => {
                      e.target.style.borderColor = t.ink;
                      e.target.style.background = t.ink;
                      e.target.style.color = t.pageBg;
                    }}
                    onMouseLeave={e => {
                      e.target.style.borderColor = t.certBorder;
                      e.target.style.background = t.tagBg;
                      e.target.style.color = t.body;
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>

            {/* ── Portfolio ── */}
            <section id="portfolio">
              <SectionHeading label="Portfolio" tokens={t} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {portfolio.map(({ img, youtubeId, tag, title, desc, link, linkLabel }) => (
                  <div
                    key={title}
                    style={{ ...cardBase, overflow: "hidden" }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = t.ink;
                      e.currentTarget.style.boxShadow = `3px 3px 0 ${t.ink}`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = t.cardBorder;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* YouTube embed OR static image */}
                    {youtubeId ? (
                      <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}`}
                          title={title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{
                            position: "absolute", top: 0, left: 0,
                            width: "100%", height: "100%",
                            border: "none", display: "block",
                          }}
                        />
                      </div>
                    ) : (
                      <img src={img} alt={title} style={{ height: "11rem", width: "100%", objectFit: "cover", display: "block", filter: "grayscale(15%)" }} />
                    )}
                    {/* Red category rule */}
                    <div style={{ height: "2px", background: t.accent }} />
                    <div style={{ padding: "1rem 1.1rem 1.2rem" }}>
                      <p style={{
                        fontFamily: t.sans,
                        fontSize: "0.67rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: t.accent,
                        fontWeight: 500,
                        margin: "0 0 0.4rem",
                      }}>{tag}</p>
                      <h3 style={{
                        fontFamily: t.serif,
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: t.ink,
                        lineHeight: 1.3,
                        margin: "0 0 0.5rem",
                      }}>{title}</h3>
                      <p style={{ fontFamily: t.serifBody, fontSize: "0.83rem", color: t.body, lineHeight: 1.65, margin: "0 0 0.75rem" }}>{desc}</p>
                      {/* Only show the external link for non-YouTube cards — video is already inline */}
                      {!youtubeId && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontFamily: t.sans, color: t.accent, fontSize: "0.78rem", fontWeight: 500, textDecoration: "none", letterSpacing: "0.03em" }}
                          onMouseEnter={e => e.target.style.textDecoration = "underline"}
                          onMouseLeave={e => e.target.style.textDecoration = "none"}
                        >
                          {linkLabel}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Contact ── */}
            <section id="contact" style={{ paddingBottom: "5rem" }}>
              <SectionHeading label="Contact" tokens={t} />
              <p style={{ fontFamily: t.serifBody, color: t.body, marginBottom: "1.75rem", fontSize: "1.05rem", fontStyle: "italic" }}>
                Open to consulting, architecture leadership, and transformation opportunities.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {[
                  { href: "mailto:eonwuhafua@gmail.com", label: "✉  Email" },
                  { href: "https://www.linkedin.com/in/onwuhafua", label: "LinkedIn →" },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: t.sans,
                      padding: "0.6rem 1.4rem",
                      border: `1px solid ${t.ink}`,
                      borderRadius: "2px",
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: t.ink,
                      textDecoration: "none",
                      fontWeight: 500,
                      transition: "background 0.15s, color 0.15s",
                    }}
                    onMouseEnter={e => { e.target.style.background = t.ink; e.target.style.color = t.pageBg; }}
                    onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = t.ink; }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* ── Footer ── */}
        <div style={{ borderTop: `3px solid ${t.ink}` }} />
        <footer style={{
          background: t.ink,
          padding: "1.5rem",
          textAlign: "center",
          fontFamily: t.sans,
          fontSize: "0.75rem",
          letterSpacing: "0.06em",
          color: "#888880",
        }}>
          © {new Date().getFullYear()} EMMANUEL ONWUHAFUA — ALL RIGHTS RESERVED
        </footer>

      </div>
    </>
  );
}

// ─── Section heading: serif title + red rule ─────────────────────────────────
function SectionHeading({ label, tokens: t }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h2 style={{
        fontFamily: t.serif,
        fontSize: "1.6rem",
        fontWeight: 700,
        color: t.ink,
        margin: "0 0 0.5rem",
        letterSpacing: "-0.01em",
      }}>{label}</h2>
      <div style={{ display: "flex", gap: 0 }}>
        <div style={{ width: "2.5rem", height: "2px", background: t.accent }} />
        <div style={{ flex: 1, height: "1px", background: t.rule, marginTop: "0.5px" }} />
      </div>
    </div>
  );
}
export default function Home() {
  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "GraphQL",
    "Docker",
    "AWS",
  ];

  const projects = [
    {
      title: "Realtime Ops Dashboard",
      summary:
        "A high-performance monitoring dashboard with live event streaming, role-based controls, and anomaly alerts.",
      stack: "Next.js, WebSockets, Redis, PostgreSQL",
    },
    {
      title: "Checkout Reliability Suite",
      summary:
        "End-to-end tests and observability pipelines that reduced checkout regressions and improved deploy confidence.",
      stack: "Playwright, Node.js, OpenTelemetry",
    },
    {
      title: "Knowledge Search API",
      summary:
        "A semantic search service with vector indexing, caching, and usage analytics for internal support teams.",
      stack: "TypeScript, Fastify, pgvector, Docker",
    },
  ];

  const experience = [
    {
      role: "Senior Software Developer",
      company: "Northline Labs",
      period: "2023 - Present",
      detail:
        "Leading full-stack development for customer-facing SaaS products and mentoring engineers on architecture decisions.",
    },
    {
      role: "Software Developer",
      company: "Atlas Systems",
      period: "2020 - 2023",
      detail:
        "Built internal platforms, shipped API integrations, and improved CI/CD pipelines across multiple teams.",
    },
  ];

  return (
    <main className="portfolio">
      <section className="hero">
        <p className="eyebrow">Software Developer Portfolio</p>
        <h1>
          Building reliable products with clean architecture and fast user
          experiences.
        </h1>
        <p className="lead">
          I design and ship web applications from backend foundations to
          polished frontend interfaces, with a focus on performance and
          maintainability.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button primary">
            View Projects
          </a>
          <a href="#contact" className="button ghost">
            Contact Me
          </a>
        </div>
      </section>

      <section className="panel" id="about">
        <h2>About</h2>
        <p>
          I am a software developer who enjoys turning complex business needs
          into production-grade systems. My work combines practical product
          thinking, strong engineering standards, and collaboration across
          design and operations.
        </p>
      </section>

      <section className="panel" id="skills">
        <h2>Core Skills</h2>
        <ul className="skill-grid">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="panel" id="projects">
        <h2>Featured Projects</h2>
        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="stack">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel" id="experience">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.role + item.company} className="timeline-item">
              <p className="period">{item.period}</p>
              <h3>
                {item.role} · {item.company}
              </h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel contact" id="contact">
        <h2>Let&apos;s Build Something</h2>
        <p>
          Available for freelance and full-time opportunities. Reach out to
          discuss your product goals and technical roadmap.
        </p>
        <a href="mailto:hello@yourname.dev" className="button primary">
          hello@yourname.dev
        </a>
      </section>
    </main>
  );
}

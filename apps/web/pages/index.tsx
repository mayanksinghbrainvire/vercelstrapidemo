import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`)
      .then(res => res.json())
      .then(json => setArticles(json.data || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a202c 0%, #4fd1c5 100%)",
      color: "#fff",
      fontFamily: "Inter, sans-serif"
    }}>
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2rem 4vw 1rem 4vw"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src="https://nextjs.org/static/favicon/favicon-32x32.png" alt="Next.js" width={32} height={32} />
          <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>Next.js</span>
          <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>+</span>
          <img src="https://strapi.io/assets/favicon-32x32.png" alt="Strapi" width={32} height={32} />
          <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>Strapi</span>
        </div>
        <a
          href="https://github.com/vercel/next.js/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            background: "rgba(0,0,0,0.2)",
            padding: "0.5rem 1rem",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 500,
            transition: "background 0.2s"
          }}
        >
          GitHub
        </a>
      </header>
      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "40vh",
        textAlign: "center",
        padding: "2rem 4vw"
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: 800,
          marginBottom: "1rem",
          letterSpacing: "-0.03em",
          background: "linear-gradient(90deg, #fff 60%, #4fd1c5 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Build Modern Web Apps <br />with <span style={{ color: "#4fd1c5" }}>Next.js</span> & <span style={{ color: "#fff" }}>Strapi</span>
        </h1>
        <p style={{
          fontSize: "1.25rem",
          maxWidth: "600px",
          margin: "0 auto 2rem auto",
          color: "#e2e8f0"
        }}>
          Lightning-fast, headless, and fully customizable. <br />
          This landing page demonstrates the seamless integration of <b>Next.js</b> frontend with <b>Strapi</b> CMS backend.
        </p>
        <a
          href="https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#fff",
            color: "#1a202c",
            padding: "0.75rem 2rem",
            borderRadius: "999px",
            fontWeight: 700,
            fontSize: "1.1rem",
            textDecoration: "none",
            boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
            transition: "background 0.2s"
          }}
        >
          Learn More
        </a>
      </section>
      <section style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: "2rem 2rem 0 0",
        marginTop: "3rem",
        padding: "2rem 4vw",
        boxShadow: "0 -2px 24px rgba(0,0,0,0.08)"
      }}>
        <h2 style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "1.5rem",
          color: "#fff"
        }}>
          Latest Articles
        </h2>
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem"
        }}>
          {articles.map((a: any) => (
            <li key={a.id} style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "1rem",
              padding: "1.5rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              minHeight: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <h3 style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                margin: 0,
                color: "#4fd1c5"
              }}>
                {a.attributes?.title}
              </h3>
              <p style={{
                fontSize: "1rem",
                color: "#e2e8f0",
                margin: "0.5rem 0 0 0"
              }}>
                {a.attributes?.description || "No description available."}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <footer style={{
        textAlign: "center",
        padding: "2rem 0",
        color: "#cbd5e1",
        fontSize: "1rem"
      }}>
        © {new Date().getFullYear()} Next.js + Strapi Demo. Crafted with ❤️
      </footer>
    </div>
  );
}
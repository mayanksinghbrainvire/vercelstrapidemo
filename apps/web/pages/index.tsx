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
    <main style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Strapi + Next.js on Vercel</h1>
      <ul>
        {articles.map((a: any) => (
          <li key={a.id} style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee" }}>
            {a.attributes?.title}
          </li>
        ))}
      </ul>
    </main>
  );
}

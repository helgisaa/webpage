import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
      <div className="content-block accent-brand" style={{ maxWidth: "48rem", margin: "0 auto" }}>
        <div>
          <span>Síða fannst ekki</span>
          <h1>Þessi síða er ekki til.</h1>
        </div>
        <p>Farðu aftur á forsíðuna eða veldu annan hluta vefsins.</p>
        <Link className="button" href="/is">
          Fara á forsíðu
        </Link>
      </div>
    </section>
  );
}
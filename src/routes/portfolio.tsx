import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Cappie } from "@/components/site/Cappie";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — Fitsum Mulugeta" },
      {
        name: "description",
        content:
          "Selected engineering work: payment integration hubs, logistics operations suites, clinic record platforms and core system modernisation.",
      },
      { property: "og:title", content: "Portfolio & Case Studies — Fitsum Mulugeta" },
      {
        property: "og:description",
        content: "Enterprise systems delivered across finance, logistics and healthcare.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
          Systems in daily use by real operators
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Client names are withheld where agreements require it. Full case studies and references
          are available on request.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.slug} className="rounded-xl border border-border bg-surface p-7">
              <p className="font-code text-xs uppercase tracking-widest text-muted-foreground">
                {p.category}
              </p>
              <h2 className="mt-3 font-heading text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.subtitle}</p>
              <p className="mt-5 border-l-2 border-primary pl-3 text-sm">{p.result}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3 py-1 font-code text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-background p-8 text-center">
          <h2 className="text-2xl font-bold">Curious how yours would be built?</h2>
          <Link to="/contact" className="btn-base btn-primary mt-6">
            Discuss your project
          </Link>
        </div>
      </main>
      <SiteFooter />
      <Cappie />
    </div>
  );
}

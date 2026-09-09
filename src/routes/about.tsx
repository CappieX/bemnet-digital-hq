import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Cappie } from "@/components/site/Cappie";
import { skills, timeline, site } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Fitsum Mulugeta — Systems Architect in Addis Ababa" },
      {
        name: "description",
        content:
          "Ten years of full-stack engineering and IT systems architecture: career timeline, core skills and the way Fitsum Mulugeta works with clients.",
      },
      { property: "og:title", content: "About Fitsum Mulugeta — Systems Architect" },
      {
        property: "og:description",
        content: "Career timeline, technical skills and working approach of Fitsum Mulugeta Tesfaye.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              I design systems other engineers can maintain
            </h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I'm {site.name}, a full-stack software engineer and IT systems architect based in{" "}
              {site.location}. For over ten years I have delivered platforms where correctness and
              uptime matter: payment flows, operational consoles, records systems and the
              infrastructure underneath them.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              My work usually starts with a hard look at the current state — data model, integration
              points, failure modes — before a line of code is written. Clients get documentation,
              tests and a delivery pipeline alongside the product, so their team can keep going
              without me.
            </p>
          </div>
          <img
            src="/fitsum-portrait.jpg"
            alt="Fitsum Mulugeta Tesfaye in his office"
            className="w-full rounded-2xl border border-border object-cover"
            width={880}
            height={1180}
          />
        </div>

        <section className="mt-20">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-3 text-3xl font-bold">Career timeline</h2>
          <ol className="mt-8 space-y-6 border-l border-border pl-6">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span
                  className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <p className="font-code text-xs uppercase tracking-widest text-primary">{t.year}</p>
                <h3 className="mt-1 font-heading text-lg font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20">
          <p className="eyebrow">Toolkit</p>
          <h2 className="mt-3 text-3xl font-bold">Core skills</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm">
                  <span>{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 rounded-xl border border-border bg-surface p-8 text-center">
          <h2 className="text-2xl font-bold">Want the full CV?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ask for a detailed CV and references and it will be sent over by email.
          </p>
          <Link to="/contact" className="btn-base btn-primary mt-6">
            Request CV
          </Link>
        </div>
      </main>
      <SiteFooter />
      <Cappie />
    </div>
  );
}

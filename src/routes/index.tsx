import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, Code2, CreditCard, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Cappie } from "@/components/site/Cappie";
import { services, projects, site } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fitsum Mulugeta — Software Engineer & Systems Architect" },
      {
        name: "description",
        content:
          "Full-stack engineering and IT systems architecture for enterprise platforms, payments and integrations. Based in Addis Ababa, working worldwide.",
      },
      { property: "og:title", content: "Fitsum Mulugeta — Software Engineer & Systems Architect" },
      {
        property: "og:description",
        content:
          "Enterprise web platforms, payment integrations and architecture consulting by  Bemnet Admasu Zeleke ",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { icon: Code2, title: "Platform engineering", body: "TypeScript products built to survive real production load." },
  { icon: CreditCard, title: "Payments & integrations", body: "Telebirr, Chapa, banks and third-party APIs, reconciled." },
  { icon: Cloud, title: "Cloud architecture", body: "Right-sized infrastructure with automated delivery pipelines." },
  { icon: ShieldCheck, title: "Security & audit", body: "Access control, encryption and audit trails from day one." },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:py-28">
            <div>
              <p className="eyebrow">{site.role}</p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl">
                Fitsum Mulugeta
                <span className="block text-primary">Tesfaye</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                A decade of building scalable systems and enterprise solutions — from payment
                infrastructure to operations platforms — for teams that cannot afford downtime.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-base btn-primary">
                  Book consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/portfolio" className="btn-base btn-outline">
                  View portfolio
                </Link>
              </div>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
                {[
                  ["10+", "Years building"],
                  ["40+", "Systems shipped"],
                  ["99.9%", "Uptime target"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-heading text-2xl font-bold text-primary">{value}</dt>
                    <dd className="text-xs text-muted-foreground">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-2xl bg-primary/15 blur-2xl" aria-hidden="true" />
              <img
                src="/fitsum-portrait.jpg"
                alt="Portrait of  Bemnet Admasu Zeleke  at his workstation"
                className="relative rounded-2xl border border-border object-cover red-glow"
                width={880}
                height={1180}
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">What I do</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Engineering that holds up in production</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/60"
              >
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-heading text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border/60 bg-surface/40">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Services</p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Ways we can work together</h2>
              </div>
              <Link to="/services" className="btn-base btn-outline">
                All services
              </Link>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {services.slice(0, 4).map((s) => (
                <article key={s.slug} className="rounded-xl border border-border bg-background p-6">
                  <p className="font-code text-xs uppercase tracking-widest text-muted-foreground">
                    {s.category}
                  </p>
                  <h3 className="mt-3 font-heading text-lg font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                  <p className="mt-4 font-heading text-sm font-semibold text-primary">{s.price}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Results, not just repositories</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <article key={p.slug} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="font-heading text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.subtitle}</p>
                <p className="mt-4 border-l-2 border-primary pl-3 text-sm">{p.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Have a system that needs building?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Share the problem and you will get an honest assessment, a realistic timeline and a
              clear price — usually within one working day.
            </p>
            <Link to="/contact" className="btn-base btn-primary mt-8">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <Cappie />
    </div>
  );
}

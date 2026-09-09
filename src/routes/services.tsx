import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Cappie } from "@/components/site/Cappie";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Fitsum Mulugeta" },
      {
        name: "description",
        content:
          "Web platform development, systems architecture consulting, payment integration and team augmentation, with indicative pricing and timelines.",
      },
      { property: "og:title", content: "Services & Pricing — Fitsum Mulugeta" },
      {
        property: "og:description",
        content: "Development, consulting, payment integration and training services with clear pricing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow">Services</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
          Clear scope, clear price, delivered on schedule
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Prices below are indicative starting points. Every engagement begins with a short
          discovery call and a written proposal before any commitment.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              className="flex flex-col rounded-xl border border-border bg-surface p-7 transition-colors hover:border-primary/60"
            >
              <p className="font-code text-xs uppercase tracking-widest text-muted-foreground">
                {s.category} • {s.timeline}
              </p>
              <h2 className="mt-3 font-heading text-xl font-semibold">{s.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{s.summary}</p>
              <ul className="mt-5 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <span className="font-heading font-semibold text-primary">{s.price}</span>
                <Link to="/contact" className="btn-base btn-outline py-2">
                  Request quote
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-xl border border-border bg-background p-8">
          <h2 className="text-2xl font-bold">Payment options</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Invoices can be settled by Telebirr, Chapa or a direct transfer to Commercial Bank of
            Ethiopia. International clients can pay by card or bank transfer in USD. Exact details
            are confirmed on each invoice.
          </p>
        </section>
      </main>
      <SiteFooter />
      <Cappie />
    </div>
  );
}

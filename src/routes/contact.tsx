import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Cappie } from "@/components/site/Cappie";
import { services, site } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Consultation — Fitsum Mulugeta" },
      {
        name: "description",
        content:
          "Tell Fitsum Mulugeta about your project and book a consultation. Replies within one working day, Addis Ababa time.",
      },
      { property: "og:title", content: "Contact & Book a Consultation — Fitsum Mulugeta" },
      {
        property: "og:description",
        content: "Share your project brief and book a consultation with Fitsum Mulugeta Tesfaye.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (message.length < 20) next.message = "Please describe your project in at least 20 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${String(data.get("service") ?? "")}\nBudget: ${String(
        data.get("budget") ?? "",
      )}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Project enquiry from ${name}`,
    )}&body=${body}`;
    setSent(true);
  };

  const field =
    "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary";

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">Book a consultation</h1>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Describe what you're building or the problem you're stuck on. You'll get a reply
              within one working day with next steps.
            </p>

            {sent ? (
              <div className="mt-10 rounded-xl border border-primary/50 bg-surface p-8">
                <h2 className="font-heading text-xl font-semibold">Your email is ready to send</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your mail app should have opened with the details filled in. If it didn't, write
                  directly to {site.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="mt-10 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">
                      Full name
                    </label>
                    <input id="name" name="name" maxLength={100} className={field} />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input id="email" name="email" type="email" maxLength={255} className={field} />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="service" className="text-sm font-medium">
                      Service
                    </label>
                    <select id="service" name="service" className={field}>
                      {services.map((s) => (
                        <option key={s.slug}>{s.name}</option>
                      ))}
                      <option>Something else</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="text-sm font-medium">
                      Indicative budget
                    </label>
                    <select id="budget" name="budget" className={field}>
                      <option>Under 100,000 ETB</option>
                      <option>100,000 – 300,000 ETB</option>
                      <option>300,000 ETB and above</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Project details
                  </label>
                  <textarea id="message" name="message" rows={6} maxLength={2000} className={field} />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-base btn-primary">
                  Send enquiry
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="eyebrow">Direct</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href={`mailto:${site.email}`} className="hover:text-primary">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  {site.location}
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-primary" />
                  <a href={site.linkedin} className="hover:text-primary">
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-primary" />
                  <a href={site.github} className="hover:text-primary">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="eyebrow">Response time</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Enquiries are answered within one working day, Monday to Friday, 9:00–18:00 EAT.
              </p>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
      <Cappie />
    </div>
  );
}

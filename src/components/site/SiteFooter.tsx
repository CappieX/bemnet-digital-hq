import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-heading text-base font-semibold">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            {site.role} building dependable systems from {site.location}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.github}
              aria-label="GitHub profile"
              className="rounded border border-border p-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={site.linkedin}
              aria-label="LinkedIn profile"
              className="rounded border border-border p-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Send an email"
              className="rounded border border-border p-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-foreground">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{site.email}</li>
            <li>{site.location}</li>
            <li>Mon–Fri, 9:00–18:00 EAT</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}

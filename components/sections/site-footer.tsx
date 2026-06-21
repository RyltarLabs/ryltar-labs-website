import { NAV_LINKS } from "@/lib/config/navigation";
import { SITE_CONFIG } from "@/lib/config/site";

export function SiteFooter() {
  const footerLinks = NAV_LINKS.filter(link => link.href !== "/#contato");

  return (
    <footer className="border-t border-border bg-bg-primary px-6 py-10 lg:px-[clamp(24px,5vw,64px)]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <span className="font-mono text-[15px] font-medium text-text-primary">{SITE_CONFIG.name.toLowerCase().replace(' ', '-')}</span>

        <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {footerLinks.map((l) => (
            <a key={l.href} href={l.href} className="font-mono text-[14px] text-text-tertiary transition-colors duration-200 hover:text-text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <span className="font-mono text-[14px] text-text-tertiary text-center">© {new Date().getFullYear()} {SITE_CONFIG.name}</span>
      </div>
    </footer>
  );
}
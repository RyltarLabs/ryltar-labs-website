export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-primary px-6 py-7 lg:px-[clamp(24px,5vw,64px)]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <span className="font-mono text-[13px] font-medium text-text-primary">
          ryltar-labs
        </span>

        <nav className="flex gap-6">
          {[
            { href: "/#sobre", label: "sobre" },
            { href: "/#servicos", label: "serviços" },
            //{ href: "/#cases", label: "cases" },
            { href: "/#contato", label: "contato" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] text-text-tertiary transition-colors duration-200 hover:text-text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <span className="font-mono text-[11px] text-text-tertiary">
          © 2024 Ryltar Labs
        </span>
      </div>
    </footer>
  );
}

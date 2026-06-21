function WindowChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-border bg-bg-hover px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      <span className="ml-2 font-mono text-[10px] text-text-tertiary">
        {title}
      </span>
    </div>
  );
}

export function DashboardMock() {
  return (
    <div className="h-full w-full overflow-hidden rounded-[6px] border border-border bg-bg-primary">
      <WindowChrome title="ryltar · operational-dashboard" />
      <div className="grid grid-cols-[64px_1fr] gap-2 p-3">
        <div className="flex flex-col gap-1.5">
          <span className="h-2 w-full rounded-[2px] bg-accent/30" />
          <span className="h-2 w-full rounded-[2px] bg-border-subtle" />
          <span className="h-2 w-full rounded-[2px] bg-border-subtle" />
          <span className="h-2 w-full rounded-[2px] bg-border-subtle" />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-[3px] border border-border-subtle p-1.5">
              <span className="block h-1.5 w-1/2 rounded-full bg-accent/50" />
              <span className="mt-1 block h-1 w-3/4 rounded-full bg-border-subtle" />
            </div>
            <div className="rounded-[3px] border border-border-subtle p-1.5">
              <span className="block h-1.5 w-2/5 rounded-full bg-emerald-500/50" />
              <span className="mt-1 block h-1 w-3/4 rounded-full bg-border-subtle" />
            </div>
          </div>
          <div className="flex h-12 items-end gap-1 rounded-[3px] border border-border-subtle p-1.5">
            {[40, 60, 48, 75, 55, 85, 70, 100, 65].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-[1px] ${
                  h > 70 ? "bg-accent/80" : "bg-accent/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AutomationMock() {
  return (
    <div className="h-full w-full overflow-hidden rounded-[6px] border border-border bg-bg-primary">
      <WindowChrome title="ryltar · whatsapp-automation" />
      <div className="relative p-3">
        <div className="rounded-[4px] border border-border-subtle bg-bg-surface p-2.5">
          <span className="block h-2 w-1/2 rounded-full bg-accent/40" />
          <span className="mt-1.5 block h-1.5 w-3/4 rounded-full bg-border-subtle" />
          <span className="mt-1.5 block h-1.5 w-2/5 rounded-full bg-border-subtle" />
        </div>
        <div className="absolute -bottom-1 -right-1 flex h-[72px] w-11 flex-col gap-1 rounded-[6px] border border-accent/25 bg-bg-hover p-1.5">
          <span className="block h-1 w-full rounded-full bg-accent/50" />
          <span className="block h-1 w-full rounded-full bg-border-subtle" />
          <span className="block h-1 w-full rounded-full bg-border-subtle" />
          <span className="block h-1 w-2/3 rounded-full bg-accent/50" />
        </div>
      </div>
    </div>
  );
}

export function DataMock() {
  return (
    <div className="h-full w-full overflow-hidden rounded-[6px] border border-border bg-bg-primary">
      <WindowChrome title="ryltar · analytics-pipeline" />
      <div className="grid grid-cols-[56px_1fr] gap-1.5 p-3">
        <div className="flex flex-col gap-1.5">
          <span className="h-2 w-full rounded-[2px] bg-accent/40" />
          <span className="h-2 w-full rounded-[2px] bg-border-subtle" />
          <span className="h-2 w-full rounded-[2px] bg-border-subtle" />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-[3px] border border-border-subtle p-1.5">
              <span className="block h-1.5 w-3/5 rounded-full bg-accent/50" />
            </div>
            <div className="rounded-[3px] border border-border-subtle p-1.5">
              <span className="block h-1.5 w-2/5 rounded-full bg-emerald-500/50" />
            </div>
          </div>
          <div className="flex h-12 items-end gap-1 rounded-[3px] border border-border-subtle p-1.5">
            {[30, 50, 70, 45, 85, 60, 100].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-[1px] ${
                  h > 80 ? "bg-accent" : "bg-accent/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

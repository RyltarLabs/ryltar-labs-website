import { Code2, Pencil, Wrench, BarChart3, Search } from "lucide-react";

function base(children: React.ReactNode) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
    >
      {children}
    </svg>
  );
}

export function CodeIcon() {
  return base(
    <>
      <polyline points="9 18 4 12 9 6" />
      <polyline points="15 6 20 12 15 18" />
    </>
  );
}

export function PencilIcon() {
  return base(
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </>
  );
}

export function WrenchIcon() {
  return base(
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94L9.41 17.6a2 2 0 0 1-2.83-2.83l4.18-4.18a6 6 0 0 1 7.94-7.94Z" />
  );
}

export function ChartIcon() {
  return base(
    <>
      <path d="M3 3v18h18" />
      <path d="M7 16v-4" />
      <path d="M12 16V8" />
      <path d="M17 16v-7" />
    </>
  );
}

export function SearchIcon() {
  return base(
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </>
  );
}

export const ICON_MAP = {
  code: Code2,
  pencil: Pencil,
  wrench: Wrench,
  chart: BarChart3,
  search: Search,
} as const;
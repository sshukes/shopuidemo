import Link from "next/link";

const links = [
  { href: "/", label: "Overview" },
  { href: "/ui/shadcn", label: "shadcn/ui" },
  { href: "/ui/chakra", label: "Chakra UI" },
  { href: "/ui/mui", label: "MUI" },
];

export function TopNav() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="text-lg font-semibold text-slate-900">UI Library Evaluation</div>
        <nav className="flex gap-3 text-sm font-medium text-slate-700">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1 transition hover:bg-slate-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

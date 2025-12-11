import Link from "next/link";

const libraries = [
  {
    name: "shadcn/ui",
    href: "/ui/shadcn",
    summary:
      "Tailwind-first components built on Radix primitives. Great for consistent design tokens and flexibility.",
  },
  {
    name: "Chakra UI",
    href: "/ui/chakra",
    summary:
      "Component library with sensible defaults and design tokens out of the box; strong accessibility story.",
  },
  {
    name: "MUI",
    href: "/ui/mui",
    summary:
      "Material Design-inspired system with a large component surface area and theming options.",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Overview</p>
        <h1 className="text-3xl font-bold text-slate-900">UI library comparison demo</h1>
        <p className="max-w-3xl text-lg text-slate-700">
          This Next.js app showcases three popular React UI libraries side by side. Each page contains a
          mini-dashboard with navigation, buttons, cards, tables, forms, and a dialog so stakeholders can compare
          defaults, theming, and developer experience.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {libraries.map((lib) => (
          <div key={lib.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">{lib.name}</h2>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                Demo
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-700">{lib.summary}</p>
            <Link
              href={lib.href}
              className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View page →
            </Link>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">How to use</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Run <code className="rounded bg-slate-100 px-1">npm install</code> to install dependencies.</li>
          <li>Start the dev server with <code className="rounded bg-slate-100 px-1">npm run dev</code>.</li>
          <li>Navigate between the landing page and the three library demos using the top navigation.</li>
        </ol>
      </section>
    </div>
  );
}

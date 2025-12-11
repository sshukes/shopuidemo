"use client";

import { useState } from "react";
import Link from "next/link";

const cards = [
  { title: "Revenue", value: "$82,400", description: "↑ 12% from last month" },
  { title: "Active Users", value: "2,341", description: "Weekly active" },
  { title: "Support Tickets", value: "14", description: "Open items" },
];

const tableData = [
  { name: "Starter", status: "Active", usage: "120", renewal: "Mar 14" },
  { name: "Growth", status: "Paused", usage: "58", renewal: "Feb 28" },
  { name: "Enterprise", status: "Trial", usage: "12", renewal: "Apr 02" },
];

export default function ShadcnPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">shadcn/ui</p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Tailwind-native components</h1>
            <p className="text-slate-700">
              Radix primitives styled with Tailwind utility classes. Great for teams that want design tokens with full
              control.
            </p>
          </div>
          <Link
            href="https://ui.shadcn.com/"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Docs
          </Link>
        </div>
        <div className="flex gap-3 text-sm font-medium">
          <button className="rounded-md bg-slate-900 px-4 py-2 text-white shadow-sm transition hover:bg-slate-800">
            Primary button
          </button>
          <button className="rounded-md border border-slate-200 bg-white px-4 py-2 text-slate-900 shadow-sm transition hover:bg-slate-50">
            Secondary button
          </button>
          <button
            className="rounded-md border border-slate-200 bg-white px-4 py-2 text-slate-900 shadow-sm transition hover:bg-slate-50"
            onClick={() => setOpen(true)}
          >
            Open dialog
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md"
          >
            <p className="text-sm font-medium text-slate-500">{card.title}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{card.value}</p>
            <p className="mt-1 text-sm text-emerald-600">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h2 className="text-lg font-semibold text-slate-900">Plans</h2>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-sm text-slate-600">
            <tr>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Seats</th>
              <th className="px-5 py-3 font-medium">Renewal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {tableData.map((row) => (
              <tr key={row.name} className="hover:bg-slate-50">
                <td className="px-5 py-3 font-semibold text-slate-900">{row.name}</td>
                <td className="px-5 py-3">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                    {row.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-slate-700">{row.usage}</td>
                <td className="px-5 py-3 text-slate-700">{row.renewal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Quick form</h3>
          <form className="mt-4 space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-inner focus:border-slate-400 focus:outline-none"
                placeholder="Acme Inc"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700" htmlFor="plan">
                Plan
              </label>
              <select
                id="plan"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-inner focus:border-slate-400 focus:outline-none"
              >
                <option>Starter</option>
                <option>Growth</option>
                <option>Enterprise</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Design notes</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Composable primitives styled with Tailwind classes.</li>
            <li>Ships minimal styles; tailor to your design system.</li>
            <li>Ideal if you want full control and use Radix for accessibility.</li>
          </ul>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" role="dialog" aria-modal>
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Dialog</p>
                <h4 className="text-xl font-semibold text-slate-900">shadcn/ui-styled dialog</h4>
                <p className="mt-2 text-sm text-slate-700">
                  This modal uses Tailwind utility classes to mirror the look and feel of shadcn/ui components.
                </p>
              </div>
              <button
                aria-label="Close dialog"
                className="rounded-md bg-slate-100 px-2 py-1 text-slate-700 hover:bg-slate-200"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

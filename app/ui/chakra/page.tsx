"use client";

import Link from "next/link";
import { useState } from "react";

const cards = [
  { title: "New signups", value: "421", helper: "Past 7 days" },
  { title: "Avg. session", value: "4m 12s", helper: "Time on site" },
  { title: "NPS", value: "+42", helper: "Surveyed users" },
];

const rows = [
  { name: "North America", status: "Healthy", usage: "72%", change: "+8%" },
  { name: "EMEA", status: "Watching", usage: "63%", change: "+2%" },
  { name: "APAC", status: "At risk", usage: "54%", change: "-5%" },
];

export default function ChakraPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Chakra UI</p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Sensible defaults with theme tokens</h1>
            <p className="text-slate-700">
              Chakra offers baked-in spacing, typography, and accessibility. The examples below mimic Chakra styling with
              teal accents and soft shadows.
            </p>
          </div>
          <Link
            href="https://chakra-ui.com/"
            className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
          >
            Docs
          </Link>
        </div>
        <div className="flex gap-3 text-sm font-medium">
          <button className="rounded-md bg-teal-600 px-4 py-2 text-white shadow-md transition hover:bg-teal-700">
            Primary button
          </button>
          <button className="rounded-md border border-teal-200 bg-white px-4 py-2 text-teal-700 shadow-md transition hover:bg-teal-50">
            Secondary button
          </button>
          <button
            className="rounded-md border border-teal-200 bg-white px-4 py-2 text-teal-700 shadow-md transition hover:bg-teal-50"
            onClick={() => setOpen(true)}
          >
            Open modal
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-teal-100 bg-white p-5 shadow-md shadow-teal-50 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <p className="text-sm font-medium text-teal-700">{card.title}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{card.value}</p>
            <p className="mt-1 text-sm text-slate-600">{card.helper}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-teal-100 bg-white shadow-md shadow-teal-50">
        <div className="border-b border-teal-100 px-5 py-4">
          <h2 className="text-lg font-semibold text-slate-900">Regional health</h2>
        </div>
        <table className="w-full text-left">
          <thead className="bg-teal-50 text-sm text-teal-800">
            <tr>
              <th className="px-5 py-3 font-medium">Region</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Usage</th>
              <th className="px-5 py-3 font-medium">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-teal-50 text-sm">
            {rows.map((row) => (
              <tr key={row.name} className="hover:bg-teal-50/50">
                <td className="px-5 py-3 font-semibold text-slate-900">{row.name}</td>
                <td className="px-5 py-3">
                  <span className="inline-flex items-center rounded-full bg-teal-100 px-2 py-1 text-xs font-semibold text-teal-800">
                    {row.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-slate-700">{row.usage}</td>
                <td className="px-5 py-3 font-semibold text-teal-700">{row.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-teal-100 bg-white p-6 shadow-md shadow-teal-50">
          <h3 className="text-lg font-semibold text-slate-900">Contact form</h3>
          <form className="mt-4 space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-800" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                className="w-full rounded-lg border border-teal-100 bg-white px-3 py-2 text-slate-900 shadow-inner focus:border-teal-300 focus:outline-none"
                placeholder="Alex Doe"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-800" htmlFor="contact-tier">
                Tier
              </label>
              <select
                id="contact-tier"
                className="w-full rounded-lg border border-teal-100 bg-white px-3 py-2 text-slate-900 shadow-inner focus:border-teal-300 focus:outline-none"
              >
                <option>Free</option>
                <option>Pro</option>
                <option>Enterprise</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-teal-700"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6 shadow-md shadow-teal-50">
          <h3 className="text-lg font-semibold text-slate-900">Chakra traits</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Theme tokens for color, spacing, and typography.</li>
            <li>Accessible primitives with logical defaults.</li>
            <li>Great ergonomics when you prefer prop-driven styling.</li>
          </ul>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" role="dialog" aria-modal>
          <div className="w-full max-w-md rounded-2xl border border-teal-100 bg-white p-6 shadow-xl shadow-teal-100">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Modal</p>
                <h4 className="text-xl font-semibold text-slate-900">Chakra-inspired dialog</h4>
                <p className="mt-2 text-sm text-slate-700">
                  This dialog uses soft shadows, rounded corners, and teal accents to reflect Chakra UI defaults.
                </p>
              </div>
              <button
                aria-label="Close dialog"
                className="rounded-md bg-teal-50 px-2 py-1 text-teal-700 hover:bg-teal-100"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="rounded-md border border-teal-200 px-3 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

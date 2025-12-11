"use client";

import Link from "next/link";
import { useState } from "react";

const cards = [
  { title: "Orders", value: "1,284", helper: "Today" },
  { title: "Conversion", value: "3.4%", helper: "vs 3.1% last week" },
  { title: "Churn", value: "1.2%", helper: "Rolling 30d" },
];

const rows = [
  { name: "A12-1392", state: "Shipped", amount: "$142.00", eta: "Mar 22" },
  { name: "A12-1393", state: "Processing", amount: "$91.20", eta: "Mar 23" },
  { name: "A12-1394", state: "Pending", amount: "$51.00", eta: "Mar 24" },
];

export default function MuiPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">MUI</p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Material-inspired components</h1>
            <p className="text-slate-700">
              MUI ships a large component set with Material Design defaults. These examples use indigo accents and sharp
              elevations.
            </p>
          </div>
          <Link
            href="https://mui.com/"
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Docs
          </Link>
        </div>
        <div className="flex gap-3 text-sm font-medium">
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-white shadow-md transition hover:bg-indigo-700">
            Primary button
          </button>
          <button className="rounded-md border border-indigo-200 bg-white px-4 py-2 text-indigo-700 shadow-md transition hover:bg-indigo-50">
            Secondary button
          </button>
          <button
            className="rounded-md border border-indigo-200 bg-white px-4 py-2 text-indigo-700 shadow-md transition hover:bg-indigo-50"
            onClick={() => setOpen(true)}
          >
            Launch dialog
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-indigo-100 bg-white p-5 shadow-md shadow-indigo-50 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <p className="text-sm font-medium text-indigo-700">{card.title}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{card.value}</p>
            <p className="mt-1 text-sm text-slate-600">{card.helper}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-indigo-100 bg-white shadow-md shadow-indigo-50">
        <div className="border-b border-indigo-100 px-5 py-4">
          <h2 className="text-lg font-semibold text-slate-900">Recent orders</h2>
        </div>
        <table className="w-full text-left">
          <thead className="bg-indigo-50 text-sm text-indigo-800">
            <tr>
              <th className="px-5 py-3 font-medium">Order</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">ETA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-indigo-50 text-sm">
            {rows.map((row) => (
              <tr key={row.name} className="hover:bg-indigo-50/50">
                <td className="px-5 py-3 font-semibold text-slate-900">{row.name}</td>
                <td className="px-5 py-3">
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold text-indigo-800">
                    {row.state}
                  </span>
                </td>
                <td className="px-5 py-3 text-slate-700">{row.amount}</td>
                <td className="px-5 py-3 text-slate-700">{row.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-indigo-100 bg-white p-6 shadow-md shadow-indigo-50">
          <h3 className="text-lg font-semibold text-slate-900">Customer form</h3>
          <form className="mt-4 space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-800" htmlFor="customer-name">
                Name
              </label>
              <input
                id="customer-name"
                type="text"
                className="w-full rounded-lg border border-indigo-100 bg-white px-3 py-2 text-slate-900 shadow-inner focus:border-indigo-300 focus:outline-none"
                placeholder="Jamie Lee"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-800" htmlFor="customer-tier">
                Tier
              </label>
              <select
                id="customer-tier"
                className="w-full rounded-lg border border-indigo-100 bg-white px-3 py-2 text-slate-900 shadow-inner focus:border-indigo-300 focus:outline-none"
              >
                <option>Standard</option>
                <option>Priority</option>
                <option>VIP</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-md shadow-indigo-50">
          <h3 className="text-lg font-semibold text-slate-900">MUI traits</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Material Design defaults with a wide component surface area.</li>
            <li>Strong theming story; swap palettes quickly.</li>
            <li>Works well when you need a mature ecosystem and patterns.</li>
          </ul>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" role="dialog" aria-modal>
          <div className="w-full max-w-md rounded-2xl border border-indigo-100 bg-white p-6 shadow-xl shadow-indigo-100">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Dialog</p>
                <h4 className="text-xl font-semibold text-slate-900">MUI-style dialog</h4>
                <p className="mt-2 text-sm text-slate-700">
                  Uses crisp elevations and indigo accents to mirror MUI defaults.
                </p>
              </div>
              <button
                aria-label="Close dialog"
                className="rounded-md bg-indigo-50 px-2 py-1 text-indigo-700 hover:bg-indigo-100"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="rounded-md border border-indigo-200 px-3 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

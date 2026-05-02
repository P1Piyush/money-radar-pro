"use client";

import { useState, useEffect } from "react";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [insight, setInsight] = useState("");

  useEffect(() => {
    // Mocking the data for preview
    setTransactions([
      { id: 1, title: "Starbucks", amount: -15.5, category: "Dining", date: "2026-05-02" },
      { id: 2, title: "Salary", amount: 5000, category: "Income", date: "2026-05-01" },
    ]);
    setInsight("Your spending in 'Dining' is high this week.");
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 flex justify-between items-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Money-Radar-Pro
          </h1>
          <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg">
             Balance: <span className="text-green-400 font-mono">$4,984.50</span>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 text-zinc-400">AI Insight</h2>
            <p className="text-lg italic text-zinc-200">"{insight}"</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-center">
            <button className="bg-blue-600 hover:bg-blue-500 transition-colors py-3 rounded-xl font-bold">
              Add Transaction
            </button>
          </div>
        </section>

        <section className="bg-zinc-900/30 border border-zinc-800 rounded-3xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-800">
                <th className="px-6 py-4 text-zinc-400 uppercase text-xs">Title</th>
                <th className="px-6 py-4 text-zinc-400 uppercase text-xs text-right">Amount</th>
                <th className="px-6 py-4 text-zinc-400 uppercase text-xs">Category</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors">
                  <td className="px-6 py-4">{t.title}</td>
                  <td className={`px-6 py-4 text-right font-mono ${t.amount < 0 ? 'text-red-400' : 'text-green-400'}`}>
                    {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-300">{t.category}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import {
  Banknote,
  TrendingUp,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  ArrowUpRight,
  Search,
} from "lucide-react";

// ── Mock Data ────────────────────────────────────────────────────────────────

const stats = [
  {
    icon: Banknote,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    label: "Total Earnings",
    value: "৳48,500",
    trend: "+ 14%",
    trendUp: true,
  },
  {
    icon: CheckCircle2,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    label: "Completed Appointments",
    value: "62",
    trend: "+ 8%",
    trendUp: true,
  },
  {
    icon: Clock,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-100",
    label: "Pending Payout",
    value: "৳4,200",
    trend: "- 3%",
    trendUp: false,
  },
  {
    icon: TrendingUp,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
    label: "This Month Revenue",
    value: "৳1,24,000",
    trend: "+ 21%",
    trendUp: true,
  },
];

// Bar chart data — weekly earnings
const weeklyData = [
  { day: "1 Sep", weekly: 2800, monthly: 3200 },
  { day: "3 Sep", weekly: 1800, monthly: 2100 },
  { day: "5 Sep", weekly: 3100, monthly: 3400 },
  { day: "7 Sep", weekly: 2500, monthly: 2900 },
  { day: "9 Sep", weekly: 3600, monthly: 3900 },
  { day: "11 Sep", weekly: 2200, monthly: 2600 },
  { day: "14 Sep", weekly: 4100, monthly: 4500 },
  { day: "16 Sep", weekly: 3800, monthly: 4100 },
  { day: "18 Sep", weekly: 2900, monthly: 3300 },
  { day: "21 Sep", weekly: 3300, monthly: 3700 },
  { day: "23 Sep", weekly: 4800, monthly: 5200 },
  { day: "26 Sep", weekly: 3500, monthly: 3900 },
];

const transactions = [
  { id: 1, name: "Rahim Ahmed", specialty: "Mirha Vidas",   amount: "৳800", date: "30 Sep", avatar: "RA", color: "bg-blue-100 text-blue-700",   status: "Paid" },
  { id: 2, name: "Karim Hasan",  specialty: "Dahlia Khers",  amount: "৳600", date: "29 Sep", avatar: "KH", color: "bg-purple-100 text-purple-700", status: "Paid" },
  { id: 3, name: "Nadia Rahman", specialty: "Dhruv James",   amount: "৳900", date: "28 Sep", avatar: "NR", color: "bg-emerald-100 text-emerald-700", status: "Paid" },
  { id: 4, name: "Ayesha Islam", specialty: "Edit Vic Viola", amount: "৳700", date: "27 Sep", avatar: "AI", color: "bg-orange-100 text-orange-700", status: "Pending" },
  { id: 5, name: "Mahfuz Alam",  specialty: "Saffrey Khavs", amount: "৳650", date: "26 Sep", avatar: "MA", color: "bg-pink-100 text-pink-700",     status: "Paid" },
  { id: 6, name: "Sadia Begum",  specialty: "Orthopaedics",  amount: "৳1,100", date: "25 Sep", avatar: "SB", color: "bg-teal-100 text-teal-700",  status: "Pending" },
  { id: 7, name: "Tanvir Khan",  specialty: "Neurology",     amount: "৳800", date: "24 Sep", avatar: "TK", color: "bg-indigo-100 text-indigo-700", status: "Paid" },
];

const MAX_BAR = 5200;

export default function RevenuePage() {
  const [chartMode, setChartMode] = useState("weekly"); // "weekly" | "monthly"
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTxn = transactions.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* ── Page Header ──────────────────────────────────────── */}
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2">
            <Banknote className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-[#0c1e3a]">Revenue &amp; Payouts</h1>
          </div>
          <p className="text-gray-500 text-sm mt-1">Financial overview and transaction history.</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            id="revenue-period-select"
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* ── Stat Cards ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between h-32 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${s.iconBg}`}>
                    <Icon className={`w-4 h-4 ${s.iconColor}`} />
                  </div>
                  <span className="text-xs font-semibold text-gray-500">{s.label}</span>
                </div>
                <MoreHorizontal className="w-4 h-4 text-gray-300 cursor-pointer" />
              </div>
              <div className="flex items-end justify-between mt-2">
                <h2 className="text-2xl font-bold text-[#0c1e3a]">{s.value}</h2>
                <div className={`flex items-center gap-0.5 text-xs font-bold ${s.trendUp ? "text-emerald-500" : "text-red-500"}`}>
                  <ArrowUpRight className="w-3 h-3" />
                  <span>{s.trend}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Charts Row ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Earnings Overview bar chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-bold text-[#0c1e3a]">Earnings Overview</h2>
            <div className="flex gap-2">
              {["weekly", "monthly"].map((mode) => (
                <button
                  key={mode}
                  id={`btn-chart-${mode}`}
                  onClick={() => setChartMode(mode)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    chartMode === mode
                      ? "bg-[#1b64f2] text-white shadow-sm shadow-blue-200"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Bar chart */}
          <div className="flex items-end gap-1.5 h-44">
            {weeklyData.map((d) => {
              const val = chartMode === "weekly" ? d.weekly : d.monthly;
              const heightPct = (val / MAX_BAR) * 100;
              return (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1 group">
                  <div
                    className="w-full bg-[#1b64f2] rounded-t-md transition-all duration-500 hover:bg-[#1450c8] cursor-pointer relative"
                    style={{ height: `${heightPct}%` }}
                    title={`৳${val.toLocaleString()}`}
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#0c1e3a] text-white text-[9px] font-semibold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      ৳{val.toLocaleString()}
                    </div>
                  </div>
                  <span className="text-[9px] text-gray-400 rotate-0 leading-none">{d.day}</span>
                </div>
              );
            })}
          </div>

          {/* Y-axis labels (decorative) */}
          <div className="mt-2 flex justify-between text-[9px] text-gray-300 px-0.5">
            <span>৳0</span>
            <span>৳1k</span>
            <span>৳2k</span>
            <span>৳3k</span>
            <span>৳4k</span>
            <span>৳5k</span>
          </div>
        </div>

        {/* Recent Transactions mini panel */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
          <h2 className="text-base font-bold text-[#0c1e3a] mb-4">Recent Transactions</h2>
          <div className="flex-1 space-y-3 overflow-hidden">
            {transactions.slice(0, 5).map((t) => (
              <div key={t.id} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${t.color}`}>
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-800 truncate">{t.name}</p>
                  <p className="text-[10px] text-gray-400 truncate">{t.specialty}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs font-bold text-[#0c1e3a]">{t.amount}</p>
                  <p className="text-[10px] text-gray-400">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Full Transactions Table ───────────────────────────── */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-bold text-[#0c1e3a]">All Transactions</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="txn-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search transactions..."
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-52"
              />
            </div>
            <button
              id="btn-export-csv"
              className="flex items-center gap-1.5 bg-[#1b64f2] hover:bg-[#1450c8] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm"
            >
              Export CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Specialty</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTxn.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-gray-400 text-sm">
                    No transactions found.
                  </td>
                </tr>
              ) : (
                filteredTxn.map((t) => (
                  <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-sm text-gray-500">{t.id}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${t.color}`}>
                          {t.avatar}
                        </div>
                        <span className="text-sm font-medium text-gray-800">{t.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">{t.specialty}</td>
                    <td className="py-4 px-6 text-sm font-bold text-[#0c1e3a]">{t.amount}</td>
                    <td className="py-4 px-6 text-sm text-gray-500">{t.date}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        t.status === "Paid"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-orange-100 text-orange-700"
                      }`}>
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <button className="p-2 border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1.5 border border-blue-600 bg-blue-600 text-white font-medium rounded-md text-sm cursor-pointer">1</button>
            <button className="px-3 py-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-md text-sm cursor-pointer">2</button>
            <button className="px-3 py-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-md text-sm cursor-pointer">3</button>
            <span className="px-2 text-gray-400 text-sm">...</span>
            <button className="p-2 border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

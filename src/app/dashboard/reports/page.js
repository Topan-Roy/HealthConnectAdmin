"use client";

import { useState } from "react";
import {
  BarChart3,
  Users,
  Calendar,
  Banknote,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  RefreshCw,
  Download,
  TrendingUp,
  Activity,
} from "lucide-react";

// ── Mock Data ─────────────────────────────────────────────────────────────────

const statCards = [
  {
    icon: Users,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-100",
    label: "Total Users",
    sub: "All Roles",
    value: "13,390",
    trendA: { label: "Patients", val: "+5%", up: true },
    trendB: { label: "Doctors", val: "+12%", up: true },
  },
  {
    icon: Calendar,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    label: "Appointments",
    sub: "Completed",
    value: "8,920",
    trendA: { label: "vs last", val: "+11%", up: true },
    trendB: { label: "Pending", val: "8%", up: false },
  },
  {
    icon: Banknote,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    label: "Revenue",
    sub: "৳6,892",
    value: "৳12.5M",
    trendA: { label: "vs last", val: "+18%", up: true },
    trendB: { label: "Target", val: "95%", up: true },
  },
];

// Line chart — monthly user growth (Jan–Sep)
const lineDataWeekly = [120, 95, 180, 160, 210, 175, 240, 195, 280];
const lineDataMonthly = [800, 950, 1100, 1300, 1150, 1400, 1600, 1500, 1900];
const lineLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

// Donut chart data
const specialties = [
  { label: "Cardiology",  pct: 31, color: "#1b64f2" },
  { label: "Dermatology", pct: 18, color: "#f97316" },
  { label: "Neurology",   pct: 18, color: "#a855f7" },
  { label: "Orthopedics", pct: 13, color: "#14b8a6" },
  { label: "Others",      pct: 20, color: "#94a3b8" },
];

// Build SVG donut segments
function buildDonutSegments(data, cx, cy, r) {
  let cumPct = 0;
  const circumference = 2 * Math.PI * r;
  return data.map((item) => {
    const dash = (item.pct / 100) * circumference;
    const gap = circumference - dash;
    const rotation = (cumPct / 100) * 360 - 90;
    cumPct += item.pct;
    return { ...item, dash, gap, rotation };
  });
}

// Build SVG polyline for line chart
function buildPolyline(data, width, height, padX = 30, padY = 20) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = (width - padX * 2) / (data.length - 1);
  return data.map((v, i) => {
    const x = padX + i * stepX;
    const y = padY + ((max - v) / range) * (height - padY * 2);
    return `${x},${y}`;
  });
}

const DONUT_CX = 80, DONUT_CY = 80, DONUT_R = 58, DONUT_STROKE = 22;
const segments = buildDonutSegments(specialties, DONUT_CX, DONUT_CY, DONUT_R);

export default function ReportsPage() {
  const [period, setPeriod] = useState("This Month");
  const [lineMode, setLineMode] = useState("weekly");

  const lineData = lineMode === "weekly" ? lineDataWeekly : lineDataMonthly;
  const polyPoints = buildPolyline(lineData, 480, 160);
  const polyStr = polyPoints.join(" ");

  // Area fill — close the path below
  const areaStr = `${polyPoints[0]} ${polyPoints.join(" ")} ${polyPoints[polyPoints.length - 1].split(",")[0]},160 30,160`;

  return (
    <div className="space-y-6">

      {/* ── Page Header ─────────────────────────────────────────── */}
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-[#0c1e3a]">Reports &amp; Analytics</h1>
          </div>
          <p className="text-gray-500 text-sm mt-1">Platform-wide performance and growth metrics.</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            id="reports-period-select"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {["This Month", "Last Month", "Last 3 Months", "This Year"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <button
            id="btn-refresh-reports"
            className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
            title="Refresh"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            id="btn-export-reports"
            className="flex items-center gap-1.5 bg-[#1b64f2] hover:bg-[#1450c8] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* ── Stat Cards ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {statCards.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${s.iconBg}`}>
                    <Icon className={`w-4 h-4 ${s.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500">{s.label}</p>
                    <p className="text-[10px] text-gray-400">{s.sub}</p>
                  </div>
                </div>
                <MoreHorizontal className="w-4 h-4 text-gray-300 cursor-pointer" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#0c1e3a] leading-none mb-3">{s.value}</h2>
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-0.5 text-xs font-semibold ${s.trendA.up ? "text-emerald-500" : "text-red-500"}`}>
                  {s.trendA.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {s.trendA.val}
                  <span className="text-gray-400 font-normal ml-1">{s.trendA.label}</span>
                </div>
                <div className={`flex items-center gap-0.5 text-xs font-semibold ${s.trendB.up ? "text-emerald-500" : "text-orange-500"}`}>
                  {s.trendB.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {s.trendB.val}
                  <span className="text-gray-400 font-normal ml-1">{s.trendB.label}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Charts Row ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Line Chart — User Growth Overview */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-600" />
              <h2 className="text-base font-bold text-[#0c1e3a]">User Seen Overview</h2>
            </div>
            <div className="flex gap-2">
              {["weekly", "monthly"].map((m) => (
                <button
                  key={m}
                  id={`btn-line-${m}`}
                  onClick={() => setLineMode(m)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    lineMode === m
                      ? "bg-[#1b64f2] text-white shadow-sm"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Line Chart */}
          <div className="w-full overflow-hidden">
            <svg viewBox="0 0 480 180" className="w-full" preserveAspectRatio="none" style={{ height: 180 }}>
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line key={i} x1="30" y1={20 + i * 35} x2="450" y2={20 + i * 35} stroke="#f1f5f9" strokeWidth="1" />
              ))}

              {/* Area fill */}
              <polygon
                points={areaStr}
                fill="url(#areaGrad)"
                opacity="0.35"
              />

              {/* Gradient def */}
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1b64f2" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#1b64f2" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Line */}
              <polyline
                points={polyStr}
                fill="none"
                stroke="#1b64f2"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {/* Dots */}
              {polyPoints.map((pt, i) => {
                const [x, y] = pt.split(",").map(Number);
                return (
                  <circle key={i} cx={x} cy={y} r="4" fill="white" stroke="#1b64f2" strokeWidth="2.5">
                    <title>{lineData[i].toLocaleString()}</title>
                  </circle>
                );
              })}

              {/* X labels */}
              {lineLabels.map((lbl, i) => {
                const stepX = (480 - 60) / (lineLabels.length - 1);
                return (
                  <text key={lbl} x={30 + i * stepX} y={175} textAnchor="middle" fontSize="9" fill="#94a3b8">
                    {lbl}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Donut Chart — Popular Specialties */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-500" />
              <h2 className="text-base font-bold text-[#0c1e3a]">Popular Specialties</h2>
            </div>
          </div>

          {/* Donut */}
          <div className="flex flex-col items-center gap-5">
            <svg width={DONUT_CX * 2} height={DONUT_CY * 2} viewBox={`0 0 ${DONUT_CX * 2} ${DONUT_CY * 2}`}>
              {segments.map((seg, i) => (
                <circle
                  key={i}
                  cx={DONUT_CX}
                  cy={DONUT_CY}
                  r={DONUT_R}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth={DONUT_STROKE}
                  strokeDasharray={`${seg.dash} ${seg.gap}`}
                  strokeDashoffset={0}
                  transform={`rotate(${seg.rotation} ${DONUT_CX} ${DONUT_CY})`}
                  className="transition-all duration-700"
                >
                  <title>{seg.label}: {seg.pct}%</title>
                </circle>
              ))}
              {/* Center label */}
              <text x={DONUT_CX} y={DONUT_CY - 5} textAnchor="middle" fontSize="18" fontWeight="800" fill="#0c1e3a">
                {lineData[lineData.length - 1].toLocaleString()}
              </text>
              <text x={DONUT_CX} y={DONUT_CY + 12} textAnchor="middle" fontSize="8" fill="#94a3b8">
                Total
              </text>
            </svg>

            {/* Legend */}
            <div className="w-full space-y-2">
              {specialties.map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                    <span className="text-xs text-gray-600">{s.label}</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-700">{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Additional Stats Row ─────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Top Doctors by Appointments */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-base font-bold text-[#0c1e3a] mb-4">Top Doctors by Appointments</h2>
          <div className="space-y-3">
            {[
              { name: "Dr. Sarah Ahmed",   specialty: "Cardiology",   count: 320, pct: 100, color: "bg-blue-500" },
              { name: "Dr. Tania Akter",   specialty: "Dermatology",  count: 280, pct: 87,  color: "bg-purple-500" },
              { name: "Dr. Rahman Islam",  specialty: "Neurology",    count: 245, pct: 76,  color: "bg-emerald-500" },
              { name: "Dr. Farhan Hossain",specialty: "Orthopedics",  count: 198, pct: 62,  color: "bg-orange-500" },
              { name: "Dr. Lutful Hasan",  specialty: "Pediatrics",   count: 173, pct: 54,  color: "bg-pink-500" },
            ].map((d) => (
              <div key={d.name} className="flex items-center gap-4">
                <div className="w-28 flex-shrink-0">
                  <p className="text-xs font-semibold text-gray-700 truncate">{d.name}</p>
                  <p className="text-[10px] text-gray-400">{d.specialty}</p>
                </div>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className={`h-full ${d.color} rounded-full transition-all duration-700`} style={{ width: `${d.pct}%` }} />
                </div>
                <span className="text-xs font-semibold text-gray-600 w-8 text-right flex-shrink-0">{d.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-base font-bold text-[#0c1e3a] mb-4">Quick Summary</h2>
          <div className="space-y-3">
            {[
              { label: "New Registrations", value: "1,240", color: "text-blue-600", bg: "bg-blue-50" },
              { label: "Avg. Session Time", value: "8 min",  color: "text-purple-600", bg: "bg-purple-50" },
              { label: "Cancellation Rate", value: "4.2%",   color: "text-orange-600", bg: "bg-orange-50" },
              { label: "Repeat Patients",   value: "68%",    color: "text-emerald-600", bg: "bg-emerald-50" },
              { label: "Support Tickets",   value: "23",     color: "text-red-500", bg: "bg-red-50" },
            ].map((item) => (
              <div key={item.label} className={`flex items-center justify-between px-3 py-2 rounded-xl ${item.bg}`}>
                <span className="text-xs text-gray-600">{item.label}</span>
                <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

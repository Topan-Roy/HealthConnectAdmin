"use client";

import { useState } from "react";
import {
  Headphones,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Plus,
  MoreHorizontal,
  AlertCircle,
  Clock,
  CheckCircle2,
  Circle,
  MessageSquare,
  Users,
  Stethoscope,
} from "lucide-react";

// ── Mock Data ─────────────────────────────────────────────────────────────────

const tickets = [
  {
    id: "#001",
    subject: "Login Issue",
    detail: null,
    userType: "Patient",
    user: "Rahim Ahmed",
    avatar: "RA",
    avatarColor: "bg-blue-100 text-blue-700",
    priority: "High",
    status: "Open",
    date: "30 Sep 2026",
  },
  {
    id: "#002",
    subject: "Payment failed",
    detail: null,
    userType: "Patient",
    user: "Nadia Rahman",
    avatar: "NR",
    avatarColor: "bg-purple-100 text-purple-700",
    priority: "Medium",
    status: "In Progress",
    date: "29 Sep 2026",
  },
  {
    id: "#003",
    subject: "Doctor verification",
    detail: null,
    userType: "Doctor",
    user: "Dr. Farhan Hossain",
    avatar: "FH",
    avatarColor: "bg-emerald-100 text-emerald-700",
    priority: "High",
    status: "Open",
    date: "28 Sep 2026",
  },
  {
    id: "#004",
    subject: "App not working",
    detail: null,
    userType: "Patient",
    user: "Ayesha Islam",
    avatar: "AI",
    avatarColor: "bg-orange-100 text-orange-700",
    priority: "Low",
    status: "Resolved",
    date: "27 Sep 2026",
  },
  {
    id: "#005",
    subject: "Refund request",
    detail: "Side adjusta it 11",
    userType: "Patient",
    user: "Mahfuz Alam",
    avatar: "MA",
    avatarColor: "bg-pink-100 text-pink-700",
    priority: "Medium",
    status: "In Progress",
    date: "26 Sep 2026",
  },
  {
    id: "#006",
    subject: "Appointment reschedule",
    detail: null,
    userType: "Patient",
    user: "Sadia Begum",
    avatar: "SB",
    avatarColor: "bg-teal-100 text-teal-700",
    priority: "Low",
    status: "Resolved",
    date: "25 Sep 2026",
  },
  {
    id: "#007",
    subject: "Wrong prescription uploaded",
    detail: null,
    userType: "Doctor",
    user: "Dr. Tania Akter",
    avatar: "TA",
    avatarColor: "bg-indigo-100 text-indigo-700",
    priority: "High",
    status: "Open",
    date: "24 Sep 2026",
  },
  {
    id: "#008",
    subject: "Account suspended",
    detail: null,
    userType: "Patient",
    user: "Tanvir Khan",
    avatar: "TK",
    avatarColor: "bg-red-100 text-red-700",
    priority: "Medium",
    status: "In Progress",
    date: "23 Sep 2026",
  },
];

const statCards = [
  { icon: Circle,       iconColor: "text-blue-600",    iconBg: "bg-blue-100",    label: "Open Tickets",      value: "3"  },
  { icon: Clock,        iconColor: "text-orange-500",  iconBg: "bg-orange-100",  label: "In Progress",       value: "3"  },
  { icon: CheckCircle2, iconColor: "text-emerald-600", iconBg: "bg-emerald-100", label: "Resolved",          value: "2"  },
  { icon: MessageSquare,iconColor: "text-purple-600",  iconBg: "bg-purple-100",  label: "Total Tickets",     value: "8"  },
];

const priorityStyles = {
  High:   { bg: "bg-red-50",    text: "text-red-500",    border: "border-red-100" },
  Medium: { bg: "bg-orange-50", text: "text-orange-500", border: "border-orange-100" },
  Low:    { bg: "bg-emerald-50",text: "text-emerald-600",border: "border-emerald-100" },
};

const statusStyles = {
  Open:        { bg: "bg-blue-50",    text: "text-blue-600",   border: "border-blue-200" },
  "In Progress":{ bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
  Resolved:    { bg: "bg-purple-50",  text: "text-purple-600", border: "border-purple-200" },
};

export default function SupportPage() {
  const [search, setSearch]           = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterUser, setFilterUser]   = useState("All");

  const filtered = tickets.filter((t) => {
    const q = search.toLowerCase();
    const matchSearch =
      t.subject.toLowerCase().includes(q) ||
      t.user.toLowerCase().includes(q) ||
      t.id.toLowerCase().includes(q);
    const matchStatus   = filterStatus   === "All" || t.status   === filterStatus;
    const matchPriority = filterPriority === "All" || t.priority === filterPriority;
    const matchUser     = filterUser     === "All" || t.userType === filterUser;
    return matchSearch && matchStatus && matchPriority && matchUser;
  });

  return (
    <div className="space-y-6">

      {/* ── Page Header ─────────────────────────────────────────── */}
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
            <Headphones className="w-4 h-4" />
            <span>All Tickets</span>
            <span>/</span>
            <span className="text-[#0c1e3a] font-semibold">Open for Dispute</span>
          </div>
          <h1 className="text-2xl font-bold text-[#0c1e3a]">Support / Help Desk</h1>
          <p className="text-gray-500 text-sm mt-1">Manage and resolve platform support tickets.</p>
        </div>
        <button
          id="btn-new-ticket"
          className="flex items-center gap-2 bg-[#1b64f2] hover:bg-[#1450c8] text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm shadow-blue-200"
        >
          <Plus className="w-4 h-4" />
          New Ticket
        </button>
      </div>

      {/* ── Stat Cards ───────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {statCards.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${s.iconBg}`}>
                  <Icon className={`w-4 h-4 ${s.iconColor}`} />
                </div>
                <span className="text-xs font-semibold text-gray-500">{s.label}</span>
              </div>
              <p className="text-3xl font-extrabold text-[#0c1e3a]">{s.value}</p>
            </div>
          );
        })}
      </div>

      {/* ── Tickets Table Card ───────────────────────────────────── */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-bold text-[#0c1e3a]">All Tickets</h2>
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="support-search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tickets..."
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-44"
              />
            </div>
            {/* User Type */}
            <div className="flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                id="filter-user-type"
                value={filterUser}
                onChange={(e) => setFilterUser(e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="All">All Users</option>
                <option>Patient</option>
                <option>Doctor</option>
              </select>
            </div>
            {/* Priority */}
            <select
              id="filter-priority"
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="All">All Priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            {/* Status */}
            <select
              id="filter-status"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="All">All Status</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject / Name</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-14 text-gray-400 text-sm">
                    <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    No tickets found.
                  </td>
                </tr>
              ) : (
                filtered.map((t) => {
                  const pStyle = priorityStyles[t.priority];
                  const sStyle = statusStyles[t.status];
                  const UserIcon = t.userType === "Doctor" ? Stethoscope : Users;
                  return (
                    <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      {/* ID */}
                      <td className="py-4 px-6 text-sm font-semibold text-gray-500">{t.id}</td>

                      {/* Avatar */}
                      <td className="py-4 px-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${t.avatarColor}`}>
                          {t.avatar}
                        </div>
                      </td>

                      {/* Subject */}
                      <td className="py-4 px-4">
                        <p className="text-sm font-semibold text-gray-800">{t.subject}</p>
                        {t.detail && <p className="text-xs text-gray-400 mt-0.5">{t.detail}</p>}
                        <p className="text-xs text-gray-400">{t.user}</p>
                      </td>

                      {/* User Type */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1.5">
                          <UserIcon className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-sm text-gray-600">{t.userType}</span>
                        </div>
                      </td>

                      {/* Priority */}
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${pStyle.bg} ${pStyle.text} ${pStyle.border}`}>
                          {t.priority}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${sStyle.bg} ${sStyle.text} ${sStyle.border}`}>
                          {t.status}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-6 text-sm text-gray-400 whitespace-nowrap">{t.date}</td>

                      {/* Actions */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button className="text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap">
                            View
                          </button>
                          <button className="text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 p-1.5 rounded-lg transition-colors cursor-pointer">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-white">
          <p className="text-xs text-gray-400">Showing {filtered.length} of {tickets.length} tickets</p>
          <div className="flex items-center gap-1">
            <button className="p-2 border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1.5 border border-blue-600 bg-blue-600 text-white font-medium rounded-md text-sm cursor-pointer">1</button>
            <button className="px-3 py-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-md text-sm cursor-pointer">2</button>
            <button className="p-2 border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

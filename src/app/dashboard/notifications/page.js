"use client";

import { useState } from "react";
import {
  Bell,
  Users,
  Calendar,
  CreditCard,
  Settings,
  CheckCheck,
  Trash2,
  Stethoscope,
  ShieldCheck,
  AlertCircle,
  UserPlus,
  RefreshCw,
} from "lucide-react";

// ── Mock Notifications ────────────────────────────────────────────────────────

const allNotifications = [
  {
    id: 1,
    category: "Users",
    icon: UserPlus,
    iconBg: "bg-emerald-500",
    title: "New doctor registration",
    detail: "Dr. Rahman Kamal has submitted registration.",
    time: "2h ago",
    read: false,
  },
  {
    id: 2,
    category: "Users",
    icon: Users,
    iconBg: "bg-orange-400",
    title: "Patient harassment — MBBS Issue follow detected",
    detail: "Patient harassment report filed by user #4821.",
    time: "18h ago",
    read: false,
  },
  {
    id: 3,
    category: "Appointments",
    icon: Calendar,
    iconBg: "bg-orange-500",
    title: "New appointment — 10:30 AM with Dr. Suhana",
    detail: "Patient: Ayesha Islam · Cardiology",
    time: "1h ago",
    read: false,
  },
  {
    id: 4,
    category: "Users",
    icon: ShieldCheck,
    iconBg: "bg-blue-600",
    title: "Doctor verification completed — Dr. Farhana Akter",
    detail: "Documents reviewed and approved by admin.",
    time: "2h ago",
    read: true,
  },
  {
    id: 5,
    category: "System",
    icon: RefreshCw,
    iconBg: "bg-blue-500",
    title: "System update — Maintenance scheduled tonight",
    detail: "Scheduled downtime: 2:00 AM – 3:00 AM.",
    time: "4h ago",
    read: true,
  },
  {
    id: 6,
    category: "Payments",
    icon: CreditCard,
    iconBg: "bg-purple-500",
    title: "Payment received — ৳1,200 from Rahim Ahmed",
    detail: "Transaction ID: TXN-20260920-0042",
    time: "5h ago",
    read: true,
  },
  {
    id: 7,
    category: "Payments",
    icon: AlertCircle,
    iconBg: "bg-red-500",
    title: "Payout failed — Dr. Tanvir Khan",
    detail: "Bank transfer rejected. Please update account info.",
    time: "6h ago",
    read: false,
  },
  {
    id: 8,
    category: "Appointments",
    icon: Calendar,
    iconBg: "bg-teal-500",
    title: "Appointment cancelled — Nadia Rahman",
    detail: "Slot opened: 3:00 PM · Dr. Sarah Ahmed · Cardiology",
    time: "8h ago",
    read: true,
  },
  {
    id: 9,
    category: "System",
    icon: Settings,
    iconBg: "bg-gray-500",
    title: "New admin role assigned — Mehedi Hasan",
    detail: "Role: Moderator · Assigned by Super Admin.",
    time: "10h ago",
    read: true,
  },
  {
    id: 10,
    category: "Users",
    icon: Stethoscope,
    iconBg: "bg-indigo-500",
    title: "New doctor verification pending — Dr. Mahfuz Alam",
    detail: "Documents uploaded. Awaiting admin review.",
    time: "12h ago",
    read: false,
  },
];

const tabs = ["All", "Users", "Appointments", "Payments", "System"];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [notifications, setNotifications] = useState(allNotifications);

  const filtered = activeTab === "All"
    ? notifications
    : notifications.filter((n) => n.category === activeTab);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* ── Page Header ─────────────────────────────────────────── */}
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2">
            <Bell className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-[#0c1e3a]">Notifications</h1>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full leading-none">
                {unreadCount}
              </span>
            )}
          </div>
          <p className="text-gray-500 text-sm mt-1">Stay updated on platform activity and alerts.</p>
        </div>
        {unreadCount > 0 && (
          <button
            id="btn-mark-all-read"
            onClick={markAllRead}
            className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-4 py-2 rounded-lg font-medium transition-all"
          >
            <CheckCheck className="w-4 h-4" />
            Mark all as read
          </button>
        )}
      </div>

      {/* ── Main Card ─────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Tab Bar */}
        <div className="flex items-center gap-1 px-5 pt-4 border-b border-gray-100">
          {tabs.map((tab) => {
            const tabCount = tab === "All"
              ? notifications.filter((n) => !n.read).length
              : notifications.filter((n) => n.category === tab && !n.read).length;

            return (
              <button
                key={tab}
                id={`tab-${tab.toLowerCase()}`}
                onClick={() => setActiveTab(tab)}
                className={`relative flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-all rounded-t-lg ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab}
                {tabCount > 0 && (
                  <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                    {tabCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Notification List */}
        <div className="divide-y divide-gray-50">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <Bell className="w-10 h-10 mb-3 opacity-30" />
              <p className="text-sm">No notifications here.</p>
            </div>
          ) : (
            filtered.map((n) => {
              const Icon = n.icon;
              return (
                <div
                  key={n.id}
                  onClick={() => markRead(n.id)}
                  className={`flex items-start gap-4 px-6 py-4 cursor-pointer group transition-colors ${
                    n.read ? "hover:bg-gray-50" : "bg-blue-50/40 hover:bg-blue-50"
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-full ${n.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className={`text-sm leading-snug ${n.read ? "text-gray-700 font-medium" : "text-[#0c1e3a] font-semibold"}`}>
                          {n.title}
                          {!n.read && (
                            <span className="ml-2 inline-block w-2 h-2 bg-blue-500 rounded-full align-middle" />
                          )}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{n.detail}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-gray-400 whitespace-nowrap">{n.time}</span>
                        <button
                          onClick={(e) => { e.stopPropagation(); deleteNotification(n.id); }}
                          className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {filtered.length > 0 && (
          <div className="px-6 py-3 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Showing {filtered.length} of {notifications.length} notifications
            </p>
            <button className="text-xs text-blue-600 hover:underline font-medium">
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

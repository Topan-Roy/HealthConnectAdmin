"use client";

import {
  LayoutDashboard,
  Users,
  Stethoscope,
  ClipboardCheck,
  CalendarDays,
  Building2,
  Syringe,
  CreditCard,
  Banknote,
  Star,
  BarChart3,
  Bell,
  Headphones,
  UserCog,
  ShieldCheck,
  Settings,
  LogOut,
  User,
  Bot
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarGroups = [
  {
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "Users",
    items: [
      { name: "Patients", href: "/dashboard/patients", icon: Users },
      { name: "Doctors", href: "/dashboard/doctors", icon: Stethoscope },
      { name: "Doctor Verification", href: "/dashboard/doctor-verification", icon: ClipboardCheck },
      { name: "Appointments", href: "/dashboard/appointments", icon: CalendarDays },
    ],
  },
  {
    label: "Medical",
    items: [
      { name: "Hospitals / Clinics", href: "/dashboard/hospitals", icon: Building2 },
      { name: "Specialties", href: "/dashboard/specialties", icon: Syringe },
    ],
  },
  {
    label: "Finance",
    items: [
      { name: "Payments", href: "/dashboard/payments", icon: CreditCard },
      { name: "Revenue & Payouts", href: "/dashboard/revenue", icon: Banknote },
      { name: "Reviews & Ratings", href: "/dashboard/reviews", icon: Star },
    ],
  },
  {
    label: "Management",
    items: [
      { name: "AI Assistant", href: "/dashboard/ai", icon: Bot },
      { name: "Reports & Analytics", href: "/dashboard/reports", icon: BarChart3 },
      { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
      { name: "Support / Help Desk", href: "/dashboard/support", icon: Headphones },
    ],
  },
  {
    label: "Admin",
    items: [
      { name: "Admin Management", href: "/dashboard/admins", icon: UserCog },
      { name: "Roles & Permissions", href: "/dashboard/roles", icon: ShieldCheck },
      { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#0c1e3a] text-white flex flex-col flex-shrink-0 h-full">
      {/* Logo */}
      <div className="px-6 py-5 flex items-center space-x-3 border-b border-[#163057]">
        <Image src="/logo.png" alt="HealthConnect Logo" width={32} height={32} className="w-8 h-8 object-contain" />
        <div>
          <p className="text-base font-bold tracking-wide leading-none">HealthConnect</p>
          <p className="text-xs text-gray-400 mt-0.5">Admin Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-5 overflow-y-auto scrollbar-hide">
        {sidebarGroups.map((group, idx) => (
          <div key={idx}>
            {group.label && (
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-3 mb-2">
                {group.label}
              </p>
            )}
            <div className="space-y-0.5">
              {group.items.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all text-sm ${
                      isActive
                        ? "bg-[#1b64f2] text-white font-semibold"
                        : "text-gray-400 hover:bg-[#163057] hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom - Profile + Logout */}
      <div className="border-t border-[#163057] p-3 space-y-0.5">
        <Link
          href="/dashboard/profile"
          className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-[#163057] hover:text-white transition-all text-sm"
        >
          <User className="w-4 h-4 flex-shrink-0" />
          <span>Admin Profile</span>
        </Link>
        <Link
          href="/login"
          className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all text-sm"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}

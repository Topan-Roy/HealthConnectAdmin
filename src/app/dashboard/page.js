"use client";

import { Users, Stethoscope, Calendar, CreditCard } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import AppointmentsChart from "@/components/dashboard/AppointmentsChart";
import UserDistributionChart from "@/components/dashboard/UserDistributionChart";
import RecentActivities from "@/components/dashboard/RecentActivities";
import PendingVerifications from "@/components/dashboard/PendingVerifications";

export default function DashboardPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-[#0c1e3a] flex items-center gap-2">
            Welcome, Admin <span className="text-2xl">👋</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">Here's what's happening today.</p>
        </div>
        <div className="text-sm font-semibold text-gray-500">
          {currentDate}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Users} iconColor="text-emerald-500" iconBg="bg-emerald-100"
          title="Total Patients" value="12,540" trend="+ 12%" trendUp={true}
        />
        <StatCard 
          icon={Stethoscope} iconColor="text-blue-500" iconBg="bg-blue-100"
          title="Total Doctors" value="850" trend="+ 8%" trendUp={true}
        />
        <StatCard 
          icon={Calendar} iconColor="text-orange-500" iconBg="bg-orange-100"
          title="Appointments" value="8,920" trend="+ 10%" trendUp={true}
        />
        <StatCard 
          icon={CreditCard} iconColor="text-blue-600" iconBg="bg-blue-100"
          title="Revenue" value="৳12.5M" trend="+ 16%" trendUp={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AppointmentsChart />
        <UserDistributionChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentActivities />
        <PendingVerifications />
      </div>

    </div>
  );
}

"use client";

import { 
  Users, 
  Stethoscope, 
  Calendar, 
  CreditCard,
  UserPlus,
  ArrowUpRight,
  MoreHorizontal
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

// Mock Data
const appointmentData = [
  { name: 'Jan', completed: 65, canceled: 20 },
  { name: 'Feb', completed: 75, canceled: 15 },
  { name: 'Mar', completed: 90, canceled: 25 },
  { name: 'Apr', completed: 80, canceled: 18 },
  { name: 'May', completed: 105, canceled: 30 },
  { name: 'Jun', completed: 110, canceled: 20 },
  { name: 'Jul', completed: 95, canceled: 15 },
  { name: 'Aug', completed: 105, canceled: 22 },
  { name: 'Sep', completed: 125, canceled: 28 },
];

const userDistributionData = [
  { name: 'Patients', value: 72 },
  { name: 'Doctors', value: 28 },
];
const COLORS = ['#1b64f2', '#9ca3af'];

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
        {/* Appointments Overview Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[#0c1e3a]">Appointments Overview</h3>
            <div className="flex items-center space-x-4 text-xs font-medium">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1b64f2]"></div>
                <span className="text-gray-600">Completed</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                <span className="text-gray-600">Canceled</span>
              </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={appointmentData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ stroke: '#f3f4f6', strokeWidth: 2 }}
                />
                <Line type="monotone" dataKey="completed" stroke="#1b64f2" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="canceled" stroke="#d1d5db" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Distribution Pie Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#0c1e3a] mb-6">User Distribution</h3>
          <div className="h-48 relative flex items-center justify-center">
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {userDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <Users className="w-6 h-6 text-[#1b64f2] opacity-80" />
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {userDistributionData.map((item, index) => (
              <div key={item.name} className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[index] }}></div>
                  <span className="font-medium text-gray-700">{item.name}</span>
                </div>
                <span className="font-bold text-[#0c1e3a]">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[#0c1e3a]">Recent Activities</h3>
            <button className="text-sm font-semibold text-[#1b64f2] hover:underline">View All &rarr;</button>
          </div>
          <div className="space-y-5">
            <ActivityItem 
              icon={UserPlus} iconBg="bg-emerald-100" iconColor="text-emerald-500"
              title="New doctor registration - Dr. Rahman Ahmed" time="2m ago"
            />
            <ActivityItem 
              icon={CreditCard} iconBg="bg-blue-100" iconColor="text-blue-500"
              title="Payment received - ৳800 from Rahim Ahmed" time="1h ago"
            />
            <ActivityItem 
              icon={Calendar} iconBg="bg-blue-100" iconColor="text-blue-500"
              title="New appointment - 10:30 AM with Dr. Sultana" time="2h ago"
            />
          </div>
        </div>

        {/* Pending Verifications */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[#0c1e3a]">Pending Verifications</h3>
            <button className="text-sm font-semibold text-[#1b64f2] hover:underline">View All &rarr;</button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="font-medium text-gray-700 text-sm">Doctors</span>
              <span className="font-bold text-[#0c1e3a] bg-white px-3 py-1 rounded-lg shadow-sm">12</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="font-medium text-gray-700 text-sm">Documents</span>
              <span className="font-bold text-[#0c1e3a] bg-white px-3 py-1 rounded-lg shadow-sm">8</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

// Reusable Components for this page
function StatCard({ icon: Icon, iconColor, iconBg, title, value, trend, trendUp }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between h-32">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-lg ${iconBg}`}>
            <Icon className={`w-4 h-4 ${iconColor}`} />
          </div>
          <span className="text-xs font-semibold text-gray-500">{title}</span>
        </div>
        <MoreHorizontal className="w-4 h-4 text-gray-300 cursor-pointer" />
      </div>
      <div className="flex items-end justify-between mt-4">
        <h2 className="text-2xl font-bold text-[#0c1e3a]">{value}</h2>
        <div className={`flex items-center space-x-1 text-xs font-bold ${trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
          <ArrowUpRight className="w-3 h-3" />
          <span>{trend}</span>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ icon: Icon, iconBg, iconColor, title, time }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className={`p-2.5 rounded-full ${iconBg}`}>
          <Icon className={`w-4 h-4 ${iconColor}`} />
        </div>
        <span className="text-sm font-medium text-gray-700">{title}</span>
      </div>
      <span className="text-xs font-semibold text-gray-400 whitespace-nowrap ml-4">{time}</span>
    </div>
  );
}

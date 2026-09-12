"use client";

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from "recharts";

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

export default function AppointmentsChart() {
  return (
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
  );
}

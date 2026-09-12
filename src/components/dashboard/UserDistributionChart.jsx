"use client";

import { Users } from "lucide-react";
import { 
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const userDistributionData = [
  { name: 'Patients', value: 72 },
  { name: 'Doctors', value: 28 },
];
const COLORS = ['#1b64f2', '#9ca3af'];

export default function UserDistributionChart() {
  return (
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
  );
}

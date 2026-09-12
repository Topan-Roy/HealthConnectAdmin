import { ArrowUpRight, MoreHorizontal } from "lucide-react";

export default function StatCard({ icon: Icon, iconColor, iconBg, title, value, trend, trendUp }) {
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

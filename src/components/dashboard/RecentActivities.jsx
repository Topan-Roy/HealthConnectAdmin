import { UserPlus, CreditCard, Calendar } from "lucide-react";

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

export default function RecentActivities() {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-[#0c1e3a]">Recent Activities</h3>
        <button className="text-sm font-semibold text-[#1b64f2] hover:underline cursor-pointer">View All &rarr;</button>
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
  );
}

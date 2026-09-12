import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 flex-shrink-0">
      
      {/* Search */}
      <div className="flex items-center w-96 relative">
        <Search className="w-5 h-5 text-gray-400 absolute left-3" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-black"
        />
      </div>

      {/* Right Header Actions */}
      <div className="flex items-center space-x-6">
        <button className="text-gray-500 hover:text-gray-700 relative cursor-pointer">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">A</span>
          </div>
          <span className="text-sm font-semibold text-gray-700">Admin</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
}

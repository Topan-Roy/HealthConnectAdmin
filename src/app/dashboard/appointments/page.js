"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("Today");

  const tabs = [
    { name: "Today", count: 8 },
    { name: "Upcoming", count: 12 },
    { name: "Completed", count: 45 },
    { name: "Cancelled", count: 3 },
  ];

  const appointments = [
    { id: 1, patientName: "Rahim Ahmed", doctorName: "Dr. Sarah Ahmed", datetime: "30 Sep, 09:00 AM", type: "Video", status: "Confirmed" },
    { id: 2, patientName: "Karim Hasan", doctorName: "Dr. Rahman Islam", datetime: "30 Sep, 10:30 AM", type: "In-Person", status: "Pending" },
    { id: 3, patientName: "Nadia Rahman", doctorName: "Dr. Tania Akter", datetime: "30 Sep, 02:00 PM", type: "Video", status: "Confirmed" },
    { id: 4, patientName: "Ayesha Islam", doctorName: "Dr. Farhan Hossain", datetime: "30 Sep, 04:30 PM", type: "In-Person", status: "Completed" },
    { id: 5, patientName: "Mahfuz Alam", doctorName: "Dr. Lutful Hasan", datetime: "30 Sep, 06:00 PM", type: "Video", status: "Cancelled" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-orange-100 text-orange-700";
      case "Completed":
        return "bg-emerald-100 text-emerald-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 relative z-20">
        <CalendarDays className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === tab.name
                ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-900 bg-gray-50 hover:bg-gray-100"
            }`}
          >
            {tab.name} ({tab.count})
          </button>
        ))}
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-visible">
        <div className="overflow-visible min-h-[300px]">
          <table className="w-full">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 w-16">#</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Patient</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Doctor</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Date & Time</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Type</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr key={apt.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 text-sm text-gray-600 font-medium">{apt.id}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100 overflow-hidden">
                        {apt.patientName.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{apt.patientName}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">{apt.doctorName}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-700">{apt.datetime}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{apt.type}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(apt.status)}`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => alert(`Viewing appointment ${apt.id}`)}
                        className="text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                      >
                        View
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 p-1.5 rounded-lg transition-colors cursor-pointer">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-gray-100 bg-white rounded-b-2xl">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button className="p-1.5 sm:p-2 border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 sm:py-1.5 border border-blue-600 bg-blue-600 text-white font-medium rounded-md text-sm cursor-pointer">1</button>
            <button className="px-3 py-1 sm:py-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-md text-sm transition-colors cursor-pointer">2</button>
            <button className="px-3 py-1 sm:py-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-md text-sm transition-colors cursor-pointer">3</button>
            <span className="px-2 text-gray-400">...</span>
            <button className="p-1.5 sm:p-2 border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

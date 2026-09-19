"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function DoctorVerificationPage() {
  const [activeTab, setActiveTab] = useState("Pending");

  const verificationRequests = [
    { id: 1, name: "Dr. Rafiq Islam", specialty: "Neurology", documents: "3/3", submitted: "30 Sep 2026", status: "Pending" },
    { id: 2, name: "Dr. Nabila Rahman", specialty: "Dermatology", documents: "3/3", submitted: "29 Sep 2026", status: "Pending" },
    { id: 3, name: "Dr. Kamrul Hasan", specialty: "Orthopedics", documents: "2/3", submitted: "28 Sep 2026", status: "Pending" },
    { id: 4, name: "Dr. Farhana Akter", specialty: "Pediatrics", documents: "3/3", submitted: "27 Sep 2026", status: "Pending" },
    { id: 5, name: "Dr. Masud Rana", specialty: "General Surgery", documents: "3/3", submitted: "26 Sep 2026", status: "Pending" },
  ];

  const tabs = [
    { name: "Pending", count: 12 },
    { name: "Approved", count: 48 },
    { name: "Rejected", count: 15 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Breadcrumb / Header */}
      <div className="flex items-center text-sm text-gray-500 mb-6 font-medium">
        <Link href="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-gray-900 font-semibold">Doctor Verification</span>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6 bg-gray-50 p-1.5 rounded-xl w-max">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === tab.name
                ? "bg-white text-blue-700 shadow-sm"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Doctor</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Specialty</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Documents</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Submitted</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {verificationRequests.map((request) => (
                <tr key={request.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 text-sm text-gray-600 font-medium">{request.id}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100 overflow-hidden">
                        {request.name.charAt(4)}
                      </div>
                      <span className="text-sm font-semibold text-gray-800">{request.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-600">{request.specialty}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-600">{request.documents}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-600">{request.submitted}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => alert(`Reviewing documents for ${request.name}`)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-blue-200 cursor-pointer"
                      >
                        Review
                      </button>
                      <button 
                        onClick={() => alert(`Rejecting ${request.name}`)}
                        className="bg-white hover:bg-red-50 text-red-500 border border-red-200 px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm cursor-pointer"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder (if needed) */}
        <div className="px-6 py-4 border-t border-gray-100 bg-white rounded-b-2xl flex justify-center text-sm text-gray-500">
           {/* Add pagination if necessary */}
        </div>
      </div>
    </div>
  );
}

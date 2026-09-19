"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, MoreHorizontal, Stethoscope } from "lucide-react";
import Link from "next/link";

export default function DoctorsPage() {
  const doctors = [
    { id: 1, name: "Dr. Sarah Ahmed", specialty: "Cardiology", rating: "4.8", status: "Active", verification: "Approved" },
    { id: 2, name: "Dr. Rahman Islam", specialty: "Neurology", rating: "4.6", status: "Active", verification: "Approved" },
    { id: 3, name: "Dr. Tania Akter", specialty: "Dermatology", rating: "4.7", status: "Active", verification: "Approved" },
    { id: 4, name: "Dr. Farhan Hossain", specialty: "Orthopedics", rating: "4.5", status: "Active", verification: "Pending" },
    { id: 5, name: "Dr. Lutful Hasan", specialty: "Pediatrics", rating: "4.4", status: "Inactive", verification: "Rejected" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6 relative z-20">
        <div className="flex items-center gap-3">
          <Stethoscope className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Doctors</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search doctors..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 cursor-pointer shadow-sm">
            <span>+</span>
            <span>Add Doctor</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-visible">
        <div className="overflow-visible min-h-[300px]">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 w-16">#</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Specialty</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Rating</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Verification</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-sm text-gray-600 font-medium">{doctor.id}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-200 overflow-hidden">
                        {/* Placeholder avatar */}
                        <svg className="w-full h-full text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-800">{doctor.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">{doctor.specialty}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-700">{doctor.rating}</td>
                  <td className="py-4 px-6">
                    <span className={`text-sm font-medium ${
                      doctor.status === "Active" ? "text-green-600" : "text-red-500"
                    }`}>
                      {doctor.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      doctor.verification === "Approved" ? "bg-green-100 text-green-700" :
                      doctor.verification === "Pending" ? "bg-orange-100 text-orange-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {doctor.verification}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/dashboard/doctors/${doctor.id}`}
                        className="text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                      >
                        View
                      </Link>
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
        <div className="flex items-center justify-end px-6 py-4 border-t border-gray-100 bg-white">
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

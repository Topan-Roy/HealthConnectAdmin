"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, MoreHorizontal, Building2 } from "lucide-react";
import Link from "next/link";

export default function HospitalsPage() {
  const hospitals = [
    { id: 1, name: "Square Hospital", location: "Panthapath, Dhaka", type: "Hospital", contact: "10616", status: "Active" },
    { id: 2, name: "United Hospital", location: "Gulshan, Dhaka", type: "Hospital", contact: "10666", status: "Active" },
    { id: 3, name: "Labaid Specialized Hospital", location: "Dhanmondi, Dhaka", type: "Hospital", contact: "10606", status: "Active" },
    { id: 4, name: "Popular Diagnostic Centre", location: "Mirpur, Dhaka", type: "Clinic/Diagnostic", contact: "09613787801", status: "Active" },
    { id: 5, name: "Apollo Clinics", location: "Uttara, Dhaka", type: "Clinic", contact: "01755-555555", status: "Inactive" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-20">
        <div className="flex items-center gap-3">
          <Building2 className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Hospitals / Clinics</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search hospitals..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 cursor-pointer shadow-sm">
            <span>+</span>
            <span>Add Facility</span>
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-visible">
        <div className="overflow-visible min-h-[300px]">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 w-16">#</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Facility Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Location</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Type</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Contact</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {hospitals.map((hospital) => (
                <tr key={hospital.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-sm text-gray-600 font-medium">{hospital.id}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0 border border-blue-100 overflow-hidden">
                        {hospital.name.charAt(0)}
                      </div>
                      <span className="text-sm font-bold text-gray-800">{hospital.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">{hospital.location}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-700">{hospital.type}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{hospital.contact}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      hospital.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>
                      {hospital.status === "Active" && <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>}
                      {hospital.status === "Inactive" && <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5"></span>}
                      {hospital.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => alert(`Viewing details for ${hospital.name}`)}
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
        <div className="flex items-center justify-end px-6 py-4 border-t border-gray-100 bg-white rounded-b-xl">
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

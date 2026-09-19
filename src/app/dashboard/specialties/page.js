"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, MoreHorizontal, Syringe, Activity, Brain, Heart, Eye, Bone } from "lucide-react";
import Link from "next/link";

export default function SpecialtiesPage() {
  const specialties = [
    { id: 1, name: "Cardiology", description: "Heart and cardiovascular system disorders.", doctorsCount: 45, status: "Active", icon: Heart, color: "text-red-500", bg: "bg-red-50" },
    { id: 2, name: "Neurology", description: "Disorders of the nervous system and brain.", doctorsCount: 32, status: "Active", icon: Brain, color: "text-purple-500", bg: "bg-purple-50" },
    { id: 3, name: "Orthopedics", description: "Musculoskeletal system issues, bones, and joints.", doctorsCount: 28, status: "Active", icon: Bone, color: "text-orange-500", bg: "bg-orange-50" },
    { id: 4, name: "Ophthalmology", description: "Eye and vision care, surgeries, and treatments.", doctorsCount: 15, status: "Active", icon: Eye, color: "text-blue-500", bg: "bg-blue-50" },
    { id: 5, name: "General Medicine", description: "Primary care, general health, and wellness.", doctorsCount: 85, status: "Active", icon: Activity, color: "text-green-500", bg: "bg-green-50" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-20">
        <div className="flex items-center gap-3">
          <Syringe className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Specialties</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search specialties..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 cursor-pointer shadow-sm">
            <span>+</span>
            <span>Add Specialty</span>
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
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Specialty Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Description</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Doctors</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {specialties.map((specialty) => {
                const IconComponent = specialty.icon;
                return (
                  <tr key={specialty.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-sm text-gray-600 font-medium">{specialty.id}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${specialty.bg} ${specialty.color} flex items-center justify-center shrink-0 border border-gray-100/50`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-bold text-gray-800">{specialty.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 max-w-xs truncate">{specialty.description}</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-700">
                      <div className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs mr-2">
                          {specialty.doctorsCount}
                        </span>
                        Doctors
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        specialty.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}>
                        {specialty.status === "Active" && <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>}
                        {specialty.status === "Inactive" && <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5"></span>}
                        {specialty.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => alert(`Viewing details for ${specialty.name}`)}
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
                );
              })}
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

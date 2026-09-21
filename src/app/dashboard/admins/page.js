"use client";

import { useState } from "react";
import { UserPlus, ChevronLeft, ChevronRight, Edit2, Trash2, UserCog } from "lucide-react";
import Link from "next/link";

export default function AdminsPage() {
  const admins = [
    { id: 1, name: "Super Admin", email: "admin@healthconnect.com", role: "Super Admin", status: "Active" },
    { id: 2, name: "Rahim Admin", email: "rahim@healthconnect.com", role: "Doctor Manager", status: "Active" },
    { id: 3, name: "Shanto Admin", email: "shanto@healthconnect.com", role: "Finance Manager", status: "Active" },
    { id: 4, name: "Karim Admin", email: "karim@healthconnect.com", role: "Support Manager", status: "Active" },
  ];




  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6 relative z-20">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-800">Admin Users</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 cursor-pointer shadow-sm">
            <UserPlus className="w-4 h-4" />
            <span>Add Admin</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-visible">
        <div className="overflow-visible min-h-[300px]">
          <table className="w-full">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 w-16">#</th>
                <th className="text-left py-4 px-2 text-sm font-semibold text-gray-600 w-12"></th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Email</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Role</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 text-sm text-gray-600 font-medium">{admin.id}</td>
                  <td className="py-4 px-2">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100 overflow-hidden">
                      <UserCog className="w-4 h-4 text-blue-400" />
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-800">{admin.name}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{admin.email}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{admin.role}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${admin.status === "Active" ? "bg-green-50 text-green-600 border border-green-100" : "bg-red-50 text-red-600 border border-red-100"
                      }`}>
                      {admin.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-blue-600 p-1.5 rounded-lg transition-colors cursor-pointer">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-600 p-1.5 rounded-lg transition-colors cursor-pointer">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-white">
          <span className="text-sm text-gray-500">0</span>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 rounded-md transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

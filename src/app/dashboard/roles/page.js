"use client";

import { useState } from "react";
import { ShieldAlert, Stethoscope, DollarSign, Headphones, ShieldCheck, Check } from "lucide-react";

export default function RolesPermissionsPage() {
  const [activeRole, setActiveRole] = useState("super_admin");

  const roles = [
    { id: "super_admin", name: "Super Admin", icon: ShieldAlert },
    { id: "doctor_manager", name: "Doctor Manager", icon: Stethoscope },
    { id: "finance_manager", name: "Finance Manager", icon: DollarSign },
    { id: "support_manager", name: "Support Manager", icon: Headphones },
  ];

  const allPermissions = [
    { id: "manage_users", label: "Manage all users" },
    { id: "manage_doctors", label: "Manage doctors" },
    { id: "manage_payments", label: "Manage payments" },
    { id: "view_reports", label: "View reports" },
    { id: "system_settings", label: "System settings" },
  ];

  // Simple state for checkboxes
  const [permissions, setPermissions] = useState(
    allPermissions.reduce((acc, perm) => ({ ...acc, [perm.id]: true }), {})
  );

  const togglePermission = (id) => {
    setPermissions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6 relative z-20">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-800">Roles & Permissions</h1>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex overflow-hidden min-h-[500px]">
        {/* Left Sidebar - Roles */}
        <div className="w-1/3 border-r border-gray-100 p-4 bg-gray-50/30">
          <div className="flex flex-col gap-2">
            {roles.map((role) => {
              const Icon = role.icon;
              const isActive = activeRole === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-400"}`} />
                  {role.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content - Permissions */}
        <div className="w-2/3 p-8 flex flex-col">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Permissions</h2>
          
          <div className="flex-1 space-y-4">
            {allPermissions.map((perm) => (
              <div key={perm.id} className="flex items-center">
                <button
                  type="button"
                  onClick={() => togglePermission(perm.id)}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                      permissions[perm.id]
                        ? "bg-blue-600 border border-blue-600"
                        : "bg-white border border-gray-300 group-hover:border-blue-400"
                    }`}
                  >
                    {permissions[perm.id] && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className="text-gray-700 font-medium text-sm select-none">
                    {perm.label}
                  </span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors cursor-pointer shadow-sm">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

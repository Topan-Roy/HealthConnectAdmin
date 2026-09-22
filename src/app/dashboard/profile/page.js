"use client";

import { User, Mail, Phone, MapPin, Shield, Calendar, Edit3, Camera } from "lucide-react";






export default function AdminProfilePage() {
  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen">
      <div className="mb-8 relative z-20 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Admin Profile</h1>
          <p className="text-gray-500 mt-1">View and manage your administrative profile.</p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5">
          <Edit3 className="w-4 h-4" />
          <span>Edit Profile</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - ID Card Style */}
        <div className="lg:col-span-1">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/50 border border-white p-8 relative overflow-hidden flex flex-col items-center text-center">
            {/* Decorative background */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-t-3xl -z-10"></div>

            <div className="relative mt-8 mb-4 group cursor-pointer">
              <div className="w-32 h-32 rounded-full bg-white p-1.5 shadow-xl relative z-10">
                <div className="w-full h-full rounded-full bg-blue-50 flex items-center justify-center overflow-hidden border-2 border-dashed border-blue-200">
                  <User className="w-12 h-12 text-blue-300" />
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-1.5 backdrop-blur-sm">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-2">Super Admin</h2>
            <p className="text-blue-600 font-medium text-sm flex items-center justify-center gap-1.5 mt-1">
              <Shield className="w-4 h-4" /> Administrator
            </p>

            <div className="w-full mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">admin@healthconnect.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">+880 1234-567890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-left">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/50 border border-white p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -z-10 translate-x-1/3 -translate-y-1/3"></div>

            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-indigo-500" />
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">First Name</p>
                <p className="font-semibold text-gray-900">Super</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Last Name</p>
                <p className="font-semibold text-gray-900">Admin</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
                <p className="font-semibold text-gray-900">January 1, 1990</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Gender</p>
                <p className="font-semibold text-gray-900">Male</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/50 border border-white p-8 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -z-10 -translate-x-1/3 translate-y-1/3"></div>

            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              Account Status
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <p className="text-sm text-blue-600/80 mb-1">Role</p>
                <p className="font-bold text-blue-900">Super Admin</p>
              </div>
              <div className="p-4 rounded-2xl bg-green-50 border border-green-100 flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm text-green-600/80 mb-1">Status</p>
                <p className="font-bold text-green-900">Active</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-sm text-purple-600/80 mb-1">Joined</p>
                <p className="font-bold text-purple-900">Aug 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

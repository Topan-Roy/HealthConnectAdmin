"use client";

import { useState } from "react";
import { User, Lock, Bell, Globe, Save, ShieldCheck, Mail, Smartphone, Monitor } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);

  const tabs = [
    { id: "general", label: "General", icon: User, desc: "Personal info & details" },
    { id: "security", label: "Security", icon: Lock, desc: "Password & authentication" },
    { id: "notifications", label: "Notifications", icon: Bell, desc: "Alerts & email preferences" },
    { id: "preferences", label: "Preferences", icon: Globe, desc: "Language & regional settings" },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 800);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen">
      <div className="mb-8 relative z-20">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account settings and preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Sidebar - Tabs */}
        <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 text-left border ${
                  isActive
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-transparent shadow-lg shadow-blue-500/30 scale-100"
                    : "bg-white text-gray-700 border-gray-100 hover:border-blue-200 hover:shadow-md hover:scale-[1.02]"
                }`}
              >
                <div className={`p-2 rounded-xl mt-1 shrink-0 ${isActive ? 'bg-white/20' : 'bg-blue-50 text-blue-600'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>{tab.label}</h3>
                  <p className={`text-xs mt-1 ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>{tab.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Content - Form Area */}
        <div className="w-full lg:w-2/3 xl:w-3/4">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/50 border border-white p-8 relative overflow-hidden transition-all duration-500">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {activeTab === "general" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
                    <p className="text-sm text-gray-500 mt-1">Update your personal details here.</p>
                  </div>
                  
                  <div className="flex items-center gap-6 pb-6 border-b border-gray-100">
                    <div className="relative group">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 p-1 shadow-md">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <User className="w-10 h-10 text-blue-300" />
                        </div>
                      </div>
                      <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
                        <User className="w-4 h-4" />
                      </button>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Profile Picture</h3>
                      <p className="text-xs text-gray-500 mt-1 mb-3">PNG, JPG up to 10MB</p>
                      <div className="flex gap-3">
                        <button className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">Upload</button>
                        <button className="text-sm font-medium text-gray-600 bg-gray-50 px-4 py-1.5 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">Remove</button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-sm font-semibold text-gray-700">First Name</label>
                      <input type="text" defaultValue="Super" className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 group-hover:bg-white" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-sm font-semibold text-gray-700">Last Name</label>
                      <input type="text" defaultValue="Admin" className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 group-hover:bg-white" />
                    </div>
                    <div className="space-y-2 col-span-1 md:col-span-2 group">
                      <label className="text-sm font-semibold text-gray-700">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="email" defaultValue="admin@healthconnect.com" className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 group-hover:bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Change Password</h2>
                    <p className="text-sm text-gray-500 mt-1">Ensure your account is using a long, random password.</p>
                  </div>
                  
                  <div className="space-y-5 max-w-lg">
                    <div className="space-y-2 group">
                      <label className="text-sm font-semibold text-gray-700">Current Password</label>
                      <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 group-hover:bg-white" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-sm font-semibold text-gray-700">New Password</label>
                      <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 group-hover:bg-white" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-sm font-semibold text-gray-700">Confirm New Password</label>
                      <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 group-hover:bg-white" />
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-3 mt-4">
                    <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Two-Factor Authentication</h4>
                      <p className="text-sm text-blue-700/80 mt-1">Add an extra layer of security to your account.</p>
                      <button className="mt-3 text-sm font-semibold text-blue-700 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-shadow">Enable 2FA</button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Notification Preferences</h2>
                    <p className="text-sm text-gray-500 mt-1">Choose what we can notify you about.</p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { title: "Email Notifications", desc: "Receive system updates via email.", icon: Mail, checked: true },
                      { title: "SMS Alerts", desc: "Receive important alerts on your phone.", icon: Smartphone, checked: false },
                      { title: "Push Notifications", desc: "Show notifications in browser.", icon: Monitor, checked: true },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-xl ${item.checked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{item.title}</p>
                            <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked={item.checked} />
                          <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-indigo-600 shadow-inner"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === "preferences" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">System Preferences</h2>
                    <p className="text-sm text-gray-500 mt-1">Customize your workspace experience.</p>
                  </div>
                  
                  <div className="space-y-6 max-w-lg">
                    <div className="space-y-2 group">
                      <label className="text-sm font-semibold text-gray-700">Language</label>
                      <select className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 group-hover:bg-white appearance-none">
                        <option>English</option>
                        <option>Bengali</option>
                        <option>Spanish</option>
                      </select>
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-sm font-semibold text-gray-700">Timezone</label>
                      <select className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 group-hover:bg-white appearance-none">
                        <option>(GMT+06:00) Dhaka</option>
                        <option>(GMT+00:00) London</option>
                        <option>(GMT-05:00) New York</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={handleSave}
                  className={`bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 ${isSaving ? 'opacity-90 cursor-wait' : 'cursor-pointer'}`}
                >
                  <Save className={`w-5 h-5 ${isSaving ? 'animate-bounce' : ''}`} />
                  <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

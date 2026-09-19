"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, CreditCard } from "lucide-react";

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState("Transactions");

  const tabs = [
    { name: "Transactions" },
    { name: "Payouts" },
  ];

  const transactions = [
    { id: 1, date: "30 Sep 2026", patient: "Rahim Ahmed", amount: "৳800", method: "bKash", status: "Completed" },
    { id: 2, date: "29 Sep 2026", patient: "Karim Hasan", amount: "৳800", method: "Nagad", status: "Completed" },
    { id: 3, date: "28 Sep 2026", patient: "Nadia Rahman", amount: "৳800", method: "Card", status: "Completed" },
    { id: 4, date: "27 Sep 2026", patient: "Ayesha Islam", amount: "৳800", method: "bKash", status: "Pending" },
    { id: 5, date: "26 Sep 2026", patient: "Mahfuz Alam", amount: "৳800", method: "Nagad", status: "Completed" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 relative z-20">
        <CreditCard className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Payments</h1>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6 bg-white w-max rounded-t-lg">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-6 py-3 text-sm font-medium transition-all duration-200 cursor-pointer rounded-t-lg ${
              activeTab === tab.name
                ? "text-blue-700 bg-white border-b-2 border-blue-600 shadow-[0_-2px_5px_-3px_rgba(0,0,0,0.1)]"
                : "text-gray-500 hover:text-gray-900 bg-gray-50 hover:bg-gray-100"
            }`}
          >
            {tab.name}
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
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Patient</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Amount</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Method</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 text-sm text-gray-600 font-medium">{tx.id}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-600">{tx.date}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-800">{tx.patient}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-700">{tx.amount}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{tx.method}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      tx.status === "Completed" ? "bg-green-100 text-green-700 border border-green-200" :
                      tx.status === "Pending" ? "bg-orange-100 text-orange-700 border border-orange-200" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {tx.status}
                    </span>
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

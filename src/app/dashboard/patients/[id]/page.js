"use client";

import Link from "next/link";
import { ChevronLeft, Edit, MessageSquare } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

// Mock data to match the image
const mockPatientData = {
  1: {
    id: 1,
    name: "Rahim Ahmed",
    gender: "Male",
    age: 29,
    bloodGroup: "B+",
    status: "Active",
    email: "rahim@gmail.com",
    phone: "01712-345678",
    address: "Dinajpur, Bangladesh",
    emergencyContact: "01811-223344",
    allergies: "None",
    medicalConditions: "None",
    notes: "No special notes",
  },
  2: { id: 2, name: "Karim Hasan", gender: "Male", age: 32, bloodGroup: "A+", status: "Active", email: "karim@gmail.com", phone: "01823-456789", address: "Chittagong, Bangladesh", emergencyContact: "01999-888777", allergies: "Penicillin", medicalConditions: "Asthma", notes: "Regular checkups needed" },
  3: { id: 3, name: "Nadia Rahman", gender: "Female", age: 28, bloodGroup: "B+", status: "Active", email: "nadia@gmail.com", phone: "01798-765432", address: "Sylhet, Bangladesh", emergencyContact: "01555-444333", allergies: "None", medicalConditions: "None", notes: "" },
  4: { id: 4, name: "Ayesha Islam", gender: "Female", age: 50, bloodGroup: "AB+", status: "Active", email: "ayesha@gmail.com", phone: "01687-654321", address: "Rajshahi, Bangladesh", emergencyContact: "01777-666555", allergies: "Dust", medicalConditions: "Hypertension", notes: "Prescribed BP meds" },
  5: { id: 5, name: "Mahfuz Alam", gender: "Male", age: 38, bloodGroup: "O-", status: "Active", email: "mahfuz@gmail.com", phone: "01911-223344", address: "Khulna, Bangladesh", emergencyContact: "01888-222111", allergies: "None", medicalConditions: "None", notes: "Fit for surgery" },
};

export default function PatientDetailsPage() {
  const params = useParams();
  const id = params.id;
  const patient = mockPatientData[id] || mockPatientData[1];

  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Patient Details</h1>
      </div>

      <div className="mb-6">
        <Link
          href="/dashboard/patients"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Patients
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl font-bold text-blue-600 shrink-0 border border-blue-100 shadow-inner overflow-hidden">
              {/* Fallback avatar if no image */}
              {patient.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{patient.name}</h2>
              <div className="text-sm text-gray-500 mb-2 flex items-center">
                {patient.gender} <span className="mx-2">•</span> {patient.age} years <span className="mx-2">•</span> Blood Group: <span className="font-medium text-gray-700 ml-1">{patient.bloodGroup}</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600 border border-green-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                {patient.status}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 font-medium transition-colors shadow-sm">
              <Edit className="w-4 h-4" />
              Edit
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-sm shadow-blue-200">
              <MessageSquare className="w-4 h-4" />
              Message
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {["Overview", "Appointments", "Medical History", "Documents"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab
                  ? "border-blue-600 text-blue-700"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "Overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h3>
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="w-40 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Email</div>
                <div className="text-sm text-gray-900 font-medium">{patient.email}</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center border-t border-gray-50 pt-5">
                <div className="w-40 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Phone</div>
                <div className="text-sm text-gray-900 font-medium">{patient.phone}</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center border-t border-gray-50 pt-5">
                <div className="w-40 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Address</div>
                <div className="text-sm text-gray-900 font-medium">{patient.address}</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center border-t border-gray-50 pt-5">
                <div className="w-40 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Emergency Contact</div>
                <div className="text-sm text-gray-900 font-medium">{patient.emergencyContact}</div>
              </div>
            </div>
          </div>

          {/* Health Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Health Information</h3>
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="w-40 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Allergies</div>
                <div className="text-sm text-gray-900 font-medium">{patient.allergies}</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center border-t border-gray-50 pt-5">
                <div className="w-40 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Medical Conditions</div>
                <div className="text-sm text-gray-900 font-medium">{patient.medicalConditions}</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center border-t border-gray-50 pt-5">
                <div className="w-40 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Notes</div>
                <div className="text-sm text-gray-900 font-medium">{patient.notes}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab !== "Overview" && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center text-gray-500 flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-400">
            {/* simple placeholder icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          </div>
          <p className="text-lg font-medium text-gray-900 mb-1">{activeTab}</p>
          <p className="text-sm">Information is currently not available or under construction.</p>
        </div>
      )}
    </div>
  );
}

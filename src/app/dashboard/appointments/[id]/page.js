"use client";

import Link from "next/link";
import { ChevronLeft, CalendarDays, CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";

// Mock data matching the image
const mockAppointmentData = {
  1: {
    id: 1,
    patientName: "Rahim Ahmed",
    patientGender: "Male",
    patientAge: "28 years",
    status: "Confirmed",
    datetime: "30 Sep 2026, 09:00 AM",
    doctorName: "Dr. Sarah Ahmed",
    doctorSpecialty: "Cardiologist",
    type: "Video Consultation",
    fee: "৳800",
    paymentStatus: "Paid (bKash)",
  }
};

export default function AppointmentDetailsPage() {
  const params = useParams();
  const id = params.id;
  const appointment = mockAppointmentData[id] || mockAppointmentData[1]; // fallback

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/dashboard/appointments" className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <CalendarDays className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Appointment Details</h1>
      </div>

      {/* Details Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        
        {/* Top Section: Patient Info & Status */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-6 mb-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-2xl font-bold text-blue-600 border border-blue-100 shadow-inner overflow-hidden shrink-0">
              {appointment.patientName.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{appointment.patientName}</h2>
              <p className="text-sm text-gray-500">{appointment.patientGender}, {appointment.patientAge}</p>
            </div>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors cursor-pointer">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            {appointment.status}
          </button>
        </div>

        {/* Info Grid */}
        <div className="space-y-5 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="w-48 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Date & Time</div>
            <div className="text-sm font-medium text-gray-900">{appointment.datetime}</div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center border-t border-gray-50 pt-5">
            <div className="w-48 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Doctor</div>
            <div className="text-sm font-medium text-gray-900">{appointment.doctorName} <span className="text-gray-500 font-normal">({appointment.doctorSpecialty})</span></div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center border-t border-gray-50 pt-5">
            <div className="w-48 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Type</div>
            <div className="text-sm font-medium text-gray-900">{appointment.type}</div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center border-t border-gray-50 pt-5">
            <div className="w-48 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Fee</div>
            <div className="text-sm font-medium text-gray-900">{appointment.fee}</div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center border-t border-gray-50 pt-5">
            <div className="w-48 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Payment</div>
            <div className="text-sm font-medium text-green-600">{appointment.paymentStatus}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-gray-100">
          <button 
            onClick={() => alert("Starting consultation...")}
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200 cursor-pointer"
          >
            Start Consultation
          </button>
          
          <button 
            onClick={() => alert("Reschedule functionality")}
            className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 border border-blue-200 rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
          >
            Reschedule
          </button>
          
          <button 
            onClick={() => alert("Cancel functionality")}
            className="w-full sm:w-auto px-8 py-3 bg-white text-red-500 border border-red-200 rounded-xl font-medium hover:bg-red-50 transition-colors shadow-sm cursor-pointer sm:ml-auto"
          >
            Cancel
          </button>
        </div>
        
      </div>
    </div>
  );
}

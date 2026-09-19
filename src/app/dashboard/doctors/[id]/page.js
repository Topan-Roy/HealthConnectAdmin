"use client";

import Link from "next/link";
import { ChevronLeft, Edit, FileText, Phone, Star, CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";

// Mock data to match the image
const mockDoctorData = {
  1: {
    id: 1,
    name: "Dr. Sarah Ahmed",
    specialty: "Cardiologist",
    phone: "+880 1712-345678",
    rating: 4.8,
    reviewsCount: 114,
    qualification: "MBBS, MD (Cardiology)",
    experience: "8 Years",
    hospital: "Square Hospital, Dhaka",
    consultationFee: "৳800",
    languages: "English, Bangla",
    about: "Dr. Sarah Ahmed is a dedicated cardiologist with extensive experience in diagnosing and treating cardiovascular diseases. She is committed to providing compassionate care and utilizing the latest medical advancements to ensure the best possible outcomes for her patients.",
    verificationStatus: "Documents Verified",
    verifiedItems: ["License", "Degree", "NID/Passport"],
    joinedDate: "12 Jan 2024"
  }
};

export default function DoctorDetailsPage() {
  const params = useParams();
  const id = params.id;
  // Use mock data or fallback to the first doctor
  const doctor = mockDoctorData[id] || mockDoctorData[1];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Back Navigation */}
      <div className="mb-6">
        <Link
          href="/dashboard/doctors"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Doctors
        </Link>
      </div>

      {/* Top Profile Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <div className="w-28 h-28 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl font-bold text-blue-600 shrink-0 border border-blue-100 shadow-inner overflow-hidden">
            {doctor.name.charAt(4)} {/* S for Dr. Sarah */}
          </div>
          
          {/* Basic Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{doctor.name}</h1>
            <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
            
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <Phone className="w-4 h-4 mr-2 text-blue-500" />
              {doctor.phone}
            </div>
            
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current text-gray-300" /> {/* Half or empty star mockup */}
              </div>
              <span className="text-sm font-medium text-gray-700">({doctor.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button 
            onClick={() => alert('Edit profile functionality to be implemented.')}
            className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition-colors shadow-sm shadow-blue-200 cursor-pointer"
          >
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
          <button 
            onClick={() => alert('View documents functionality to be implemented.')}
            className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition-colors shadow-sm shadow-blue-200 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            View Documents
          </button>
        </div>
      </div>

      {/* Bottom Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Main Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-50 pb-4">
              <div className="w-48 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Qualification</div>
              <div className="text-sm text-gray-900 font-medium">{doctor.qualification}</div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-50 pb-4">
              <div className="w-48 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Experience</div>
              <div className="text-sm text-gray-900 font-medium">{doctor.experience}</div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-50 pb-4">
              <div className="w-48 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Hospital</div>
              <div className="text-sm text-gray-900 font-medium">{doctor.hospital}</div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-50 pb-4">
              <div className="w-48 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Consultation Fee</div>
              <div className="text-sm text-gray-900 font-medium">{doctor.consultationFee}</div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-50 pb-4">
              <div className="w-48 text-sm font-medium text-gray-500 mb-1 sm:mb-0">Languages</div>
              <div className="text-sm text-gray-900 font-medium">{doctor.languages}</div>
            </div>

            <div className="pt-2">
              <h3 className="text-sm font-medium text-gray-900 mb-3">About {doctor.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                "{doctor.about}"
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Verification & Stats */}
        <div className="lg:col-span-1 space-y-6">
          {/* Verification Status Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Verification Status</h3>
            
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-lg text-sm font-medium bg-green-50 text-green-700 border border-green-100">
                <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                {doctor.verificationStatus}
              </span>
            </div>
            
            <div className="space-y-4">
              {doctor.verifiedItems.map((item, index) => (
                <div key={index} className="flex items-center text-sm font-medium text-gray-700">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-bold text-gray-900 mb-1">Joined</h4>
              <p className="text-sm font-medium text-gray-600">{doctor.joinedDate}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

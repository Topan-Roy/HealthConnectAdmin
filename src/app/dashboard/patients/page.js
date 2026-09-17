"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function PatientsPage() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const patients = [
    { id: 1, name: "Rahim Ahmed", email: "rahim@gmail.com", phone: "01712-345678", status: "Active", age: 45, address: "Dhaka, Bangladesh", bloodGroup: "O+" },
    { id: 2, name: "Karim Hasan", email: "karim@gmail.com", phone: "01823-456789", status: "Active", age: 32, address: "Chittagong, Bangladesh", bloodGroup: "A+" },
    { id: 3, name: "Nadia Rahman", email: "nadia@gmail.com", phone: "01798-765432", status: "Active", age: 28, address: "Sylhet, Bangladesh", bloodGroup: "B+" },
    { id: 4, name: "Ayesha Islam", email: "ayesha@gmail.com", phone: "01687-654321", status: "Active", age: 50, address: "Rajshahi, Bangladesh", bloodGroup: "AB+" },
    { id: 5, name: "Mahfuz Alam", email: "mahfuz@gmail.com", phone: "01911-223344", status: "Active", age: 38, address: "Khulna, Bangladesh", bloodGroup: "O-" },
  ];

  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 relative z-20">
        <h1 className="text-2xl font-bold text-gray-800">Patients</h1>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search patients..." 
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <span>+</span>
            <span>Add Patient</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-visible">
        <div className="overflow-visible min-h-[300px]">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">#</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Email</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Phone</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-sm text-gray-600">{patient.id}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-800">{patient.name}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{patient.email}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{patient.phone}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button 
                      onClick={() => handleViewPatient(patient)}
                      className="text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md text-sm font-medium transition-colors inline-block relative z-20"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-gray-100 bg-white gap-4">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">5</span> of <span className="font-medium text-gray-900">50</span> results
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button className="p-1.5 sm:p-2 border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-2.5 sm:px-3 py-1 sm:py-1.5 border border-blue-600 bg-blue-600 text-white font-medium rounded-md text-sm">1</button>
            <button className="px-2.5 sm:px-3 py-1 sm:py-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-md text-sm transition-colors">2</button>
            <button className="px-2.5 sm:px-3 py-1 sm:py-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-md text-sm transition-colors">3</button>
            <span className="px-1 sm:px-2 text-gray-400">...</span>
            <button className="p-1.5 sm:p-2 border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-md transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Patient Details Modal */}
      {isModalOpen && selectedPatient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800">Patient Details</h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  {selectedPatient.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{selectedPatient.name}</h4>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 mt-1">
                    {selectedPatient.status}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 border-b border-gray-50 pb-4">
                  <div className="col-span-1 text-sm text-gray-500 font-medium">Email</div>
                  <div className="col-span-2 text-sm text-gray-800">{selectedPatient.email}</div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-gray-50 pb-4">
                  <div className="col-span-1 text-sm text-gray-500 font-medium">Phone</div>
                  <div className="col-span-2 text-sm text-gray-800">{selectedPatient.phone}</div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-gray-50 pb-4">
                  <div className="col-span-1 text-sm text-gray-500 font-medium">Age</div>
                  <div className="col-span-2 text-sm text-gray-800">{selectedPatient.age} years</div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-gray-50 pb-4">
                  <div className="col-span-1 text-sm text-gray-500 font-medium">Blood Group</div>
                  <div className="col-span-2 text-sm text-gray-800">{selectedPatient.bloodGroup}</div>
                </div>
                <div className="grid grid-cols-3 gap-4 pb-2">
                  <div className="col-span-1 text-sm text-gray-500 font-medium">Address</div>
                  <div className="col-span-2 text-sm text-gray-800">{selectedPatient.address}</div>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end space-x-3">
              <button 
                onClick={closeModal}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 bg-gray-100 rounded-lg transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Edit Patient
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

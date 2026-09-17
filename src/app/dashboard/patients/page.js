import { Search, MoreHorizontal } from "lucide-react";

export default function PatientsPage() {
  const patients = [
    { id: 1, name: "Rahim Ahmed", email: "rahim@gmail.com", phone: "01712-345678", status: "Active" },
    { id: 2, name: "Karim Hasan", email: "karim@gmail.com", phone: "01823-456789", status: "Active" },
    { id: 3, name: "Nadia Rahman", email: "nadia@gmail.com", phone: "01798-765432", status: "Active" },
    { id: 4, name: "Ayesha Islam", email: "ayesha@gmail.com", phone: "01687-654321", status: "Active" },
    { id: 5, name: "Mahfuz Alam", email: "mahfuz@gmail.com", phone: "01911-223344", status: "Active" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
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

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
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
                    <div className="flex items-center space-x-3">
                      <button className="text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md text-sm font-medium transition-colors">
                        View
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1 text-gray-500 hover:bg-gray-100 rounded-md">&lt;</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md">1</button>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-md">2</button>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-md">3</button>
            <span className="px-2 text-gray-400">...</span>
            <button className="px-3 py-1 text-gray-500 hover:bg-gray-100 rounded-md">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

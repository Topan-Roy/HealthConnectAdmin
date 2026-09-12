export default function PendingVerifications() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-[#0c1e3a]">Pending Verifications</h3>
        <button className="text-sm font-semibold text-[#1b64f2] hover:underline cursor-pointer">View All &rarr;</button>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
          <span className="font-medium text-gray-700 text-sm">Doctors</span>
          <span className="font-bold text-[#0c1e3a] bg-white px-3 py-1 rounded-lg shadow-sm">12</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
          <span className="font-medium text-gray-700 text-sm">Documents</span>
          <span className="font-bold text-[#0c1e3a] bg-white px-3 py-1 rounded-lg shadow-sm">8</span>
        </div>
      </div>
    </div>
  );
}

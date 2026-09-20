"use client";

import { useState } from "react";
import {
  Star,
  Search,
  ThumbsUp,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Filter,
  MessageSquare,
  TrendingUp,
  Award,
} from "lucide-react";

// ── Mock Data ─────────────────────────────────────────────────────────────────

const ratingBreakdown = [
  { stars: 5, pct: 78 },
  { stars: 4, pct: 16 },
  { stars: 3, pct: 6 },
  { stars: 2, pct: 2 },
  { stars: 1, pct: 1 },
];

const reviews = [
  {
    id: 1,
    patient: "Rahim Ahmed",
    doctor: "Dr. Sarah Ahmed",
    specialty: "Cardiology",
    avatar: "RA",
    avatarColor: "bg-blue-100 text-blue-700",
    rating: 5,
    date: "30 Sep 2026",
    comment: "Very helpful doctor. Explained everything clearly and took time to answer all my questions. Highly recommend!",
    likes: 12,
    status: "Published",
  },
  {
    id: 2,
    patient: "Nadia Rahman",
    doctor: "Dr. Rahman Islam",
    specialty: "Neurology",
    avatar: "NR",
    avatarColor: "bg-emerald-100 text-emerald-700",
    rating: 4,
    date: "28 Sep 2026",
    comment: "Professional and friendly. The appointment was on time and the doctor was very thorough.",
    likes: 8,
    status: "Published",
  },
  {
    id: 3,
    patient: "Karim Hasan",
    doctor: "Dr. Tania Akter",
    specialty: "Dermatology",
    avatar: "KH",
    avatarColor: "bg-purple-100 text-purple-700",
    rating: 4,
    date: "25 Sep 2026",
    comment: "Good experience overall. Treatment was effective and follow-up care was excellent.",
    likes: 5,
    status: "Published",
  },
  {
    id: 4,
    patient: "Ayesha Islam",
    doctor: "Dr. Farhan Hossain",
    specialty: "Orthopedics",
    avatar: "AI",
    avatarColor: "bg-orange-100 text-orange-700",
    rating: 3,
    date: "22 Sep 2026",
    comment: "Average experience. The waiting time was a bit long but the consultation was helpful.",
    likes: 2,
    status: "Pending",
  },
  {
    id: 5,
    patient: "Mahfuz Alam",
    doctor: "Dr. Lutful Hasan",
    specialty: "Pediatrics",
    avatar: "MA",
    avatarColor: "bg-pink-100 text-pink-700",
    rating: 5,
    date: "20 Sep 2026",
    comment: "Excellent doctor! My child felt very comfortable and the diagnosis was spot on.",
    likes: 19,
    status: "Published",
  },
  {
    id: 6,
    patient: "Sadia Begum",
    doctor: "Dr. Sarah Ahmed",
    specialty: "Cardiology",
    avatar: "SB",
    avatarColor: "bg-teal-100 text-teal-700",
    rating: 5,
    date: "18 Sep 2026",
    comment: "Outstanding service. Dr. Ahmed is very knowledgeable and caring.",
    likes: 15,
    status: "Published",
  },
  {
    id: 7,
    patient: "Tanvir Khan",
    doctor: "Dr. Tania Akter",
    specialty: "Dermatology",
    avatar: "TK",
    avatarColor: "bg-indigo-100 text-indigo-700",
    rating: 2,
    date: "15 Sep 2026",
    comment: "The prescription helped but the doctor seemed rushed during the appointment.",
    likes: 1,
    status: "Pending",
  },
];

const stats = [
  { icon: Star, iconColor: "text-yellow-500", iconBg: "bg-yellow-100", label: "Avg. Rating", value: "4.8", trend: "+0.2", trendUp: true },
  { icon: MessageSquare, iconColor: "text-blue-600", iconBg: "bg-blue-100", label: "Total Reviews", value: "1,346", trend: "+38", trendUp: true },
  { icon: TrendingUp, iconColor: "text-emerald-600", iconBg: "bg-emerald-100", label: "5★ Reviews", value: "78%", trend: "+4%", trendUp: true },
  { icon: Award, iconColor: "text-purple-600", iconBg: "bg-purple-100", label: "Top Doctor", value: "Dr. Sarah Ahmed", trend: "4.9★", trendUp: true },
];

function StarRow({ filled }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= filled ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}`}
        />
      ))}
    </div>
  );
}

function BigStarRow({ filled }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-7 h-7 ${i <= filled ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterRating, setFilterRating] = useState("All");

  const filtered = reviews.filter((r) => {
    const matchSearch =
      r.patient.toLowerCase().includes(search.toLowerCase()) ||
      r.doctor.toLowerCase().includes(search.toLowerCase()) ||
      r.comment.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || r.status === filterStatus;
    const matchRating = filterRating === "All" || r.rating === Number(filterRating);
    return matchSearch && matchStatus && matchRating;
  });

  return (
    <div className="space-y-6">

      {/* ── Page Header ─────────────────────────────────────────── */}
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-400" />
            <h1 className="text-2xl font-bold text-[#0c1e3a]">Reviews &amp; Ratings</h1>
          </div>
          <p className="text-gray-500 text-sm mt-1">Monitor patient feedback and doctor ratings.</p>
        </div>
      </div>

      {/* ── Stat Cards ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${s.iconBg}`}>
                    <Icon className={`w-4 h-4 ${s.iconColor}`} />
                  </div>
                  <span className="text-xs font-semibold text-gray-500">{s.label}</span>
                </div>
                <MoreHorizontal className="w-4 h-4 text-gray-300 cursor-pointer" />
              </div>
              <div className="flex items-end justify-between mt-2">
                <h2 className="text-xl font-bold text-[#0c1e3a] leading-tight">{s.value}</h2>
                <span className={`text-xs font-bold ${s.trendUp ? "text-emerald-500" : "text-red-500"}`}>
                  {s.trend}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Rating Overview + Latest Reviews ─────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Rating Breakdown Card — matches screenshot */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-[#0c1e3a]">Rating Overview</h2>
            <MoreHorizontal className="w-4 h-4 text-gray-300 cursor-pointer" />
          </div>

          {/* Big score */}
          <div className="flex items-end gap-3 mb-5">
            <span className="text-5xl font-extrabold text-[#0c1e3a] leading-none">4.8</span>
            <div className="pb-1">
              <BigStarRow filled={4} />
              <p className="text-xs text-gray-400 mt-1">1,346 reviews</p>
            </div>
          </div>

          {/* Bar breakdown */}
          <div className="space-y-2.5">
            {ratingBreakdown.map(({ stars, pct }) => (
              <div key={stars} className="flex items-center gap-3">
                <span className="text-xs font-semibold text-gray-500 w-6 text-right flex-shrink-0">{stars}★</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full transition-all duration-700"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-gray-500 w-8 text-right flex-shrink-0">{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Reviews Panel — matches screenshot */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-base font-bold text-[#0c1e3a] mb-4">Latest Reviews</h2>
          <div className="space-y-5">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.id} className="flex gap-4 pb-5 border-b border-gray-50 last:border-0 last:pb-0">
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${r.avatarColor}`}>
                  {r.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{r.patient}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <StarRow filled={r.rating} />
                        <span className="text-xs text-gray-400">· {r.specialty}</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400 flex-shrink-0 mt-0.5">{r.date}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{r.comment}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-blue-500 transition-colors">
                      <ThumbsUp className="w-3 h-3" /> {r.likes}
                    </button>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      r.status === "Published" ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"
                    }`}>
                      {r.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── All Reviews Table ─────────────────────────────────────── */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-bold text-[#0c1e3a]">All Reviews</h2>
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="review-search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search reviews..."
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
              />
            </div>
            {/* Status Filter */}
            <div className="flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                id="review-status-filter"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>All</option>
                <option>Published</option>
                <option>Pending</option>
              </select>
            </div>
            {/* Rating Filter */}
            <select
              id="review-rating-filter"
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="All">All Stars</option>
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>{n} Star</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Doctor</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Review</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-12 text-gray-400 text-sm">
                    No reviews found.
                  </td>
                </tr>
              ) : (
                filtered.map((r) => (
                  <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-sm text-gray-400">{r.id}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${r.avatarColor}`}>
                          {r.avatar}
                        </div>
                        <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{r.patient}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="text-sm font-medium text-gray-800 whitespace-nowrap">{r.doctor}</p>
                        <p className="text-xs text-gray-400">{r.specialty}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <StarRow filled={r.rating} />
                    </td>
                    <td className="py-4 px-6 max-w-xs">
                      <p className="text-xs text-gray-500 truncate">{r.comment}</p>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-400 whitespace-nowrap">{r.date}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        r.status === "Published"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-orange-100 text-orange-700"
                      }`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {r.status === "Pending" && (
                          <button className="text-emerald-600 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap">
                            Approve
                          </button>
                        )}
                        <button className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-100 px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer">
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <button className="p-2 border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1.5 border border-blue-600 bg-blue-600 text-white font-medium rounded-md text-sm cursor-pointer">1</button>
            <button className="px-3 py-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-md text-sm cursor-pointer">2</button>
            <button className="px-3 py-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-md text-sm cursor-pointer">3</button>
            <span className="px-2 text-gray-400 text-sm">...</span>
            <button className="p-2 border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

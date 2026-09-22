"use client";

import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-[#f3f4f6] p-4 sm:p-8 lg:p-12 items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">

        {/* Left Side - Branding */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-[#0c1e3a] p-12 text-white relative overflow-hidden">
          <div className="flex flex-col items-center z-10 space-y-4 text-center mt-10">
            <Image src="/logo.png" alt="HealthConnect Logo" width={80} height={80} className="w-20 h-20 mb-2 object-contain" />
            <div>
              <h1 className="text-3xl font-bold tracking-wide">HealthConnect</h1>
              <p className="text-xs font-light text-gray-300 mt-2 tracking-widest uppercase">
                Better Care &bull; Healthier Life
              </p>
            </div>

            {/* Doctor Illustration */}
            <div className="mt-12 bg-[#163057] rounded-3xl shadow-xl relative overflow-hidden w-72 h-72 flex-shrink-0 border border-[#1b64f2]/20">
              <Image 
                src="/doctor_illustration.jpg" 
                alt="Doctor Illustration" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:p-14 lg:p-20">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-3xl font-bold text-[#0c1e3a] mb-2">Admin Login</h2>
            <p className="text-gray-500 mb-10 text-sm">Access your admin dashboard</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0c1e3a]" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="admin@healthconnect.com"
                  className="w-full px-4 py-3 text-sm text-black rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0c1e3a]" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 text-sm text-black rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all pr-10 placeholder:text-gray-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1b64f2] hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors mt-6 text-sm shadow-lg shadow-blue-500/30 cursor-pointer"
              >
                Login
              </button>
            </form>

            <div className="mt-8 text-center">
              <Link href="/forgot-password" className="text-sm font-semibold text-[#1b64f2] hover:text-blue-700 transition-colors">
                Forgot Password?
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

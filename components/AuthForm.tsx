"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

interface AuthFormProps {
  mode: "login" | "signup";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === "login";

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center">
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      {/* Form */}
      <form className="space-y-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">or</span>
        </div>
      </div>

      {/* Google OAuth Button */}
      <button
        type="button"
        onClick={() => {}} // Do nothing for now
        className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
      >
        <FcGoogle className="w-5 h-5" />
        Continue with Google
      </button>

      {/* Toggle Login/Signup */}
      <div className="text-center text-sm">
        <span className="text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </span>{" "}
        <Link
          href={isLogin ? "/signup" : "/login"}
          className="text-blue-600 hover:underline font-medium"
        >
          {isLogin ? "Sign up" : "Login"}
        </Link>
      </div>
    </div>
  );
}

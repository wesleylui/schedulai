import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">AI Semester Planner 📅</h1>
      <p className="text-center max-w-xl">
        Automatically extract assignments, exams, and deadlines from your
        syllabi and organize them into a smart semester calendar.
      </p>

      <div className="flex space-x-4">
        <Link
          href="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}

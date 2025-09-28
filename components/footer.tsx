import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Logo */}
          <div className="mb-4 text-center md:mb-0 md:text-left">
            <h2 className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-lg font-bold text-transparent">
              SleepTracker
            </h2>
            <p className="text-sm text-gray-600">
              Track your sleep, improve your health.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-purple-600"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SleepTracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

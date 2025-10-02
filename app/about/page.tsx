import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 font-sans text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-gray-100 px-8 py-16 text-center">
        <h1 className="text-headings mb-4 text-4xl font-bold md:text-5xl">
          About Sleep Tracker
        </h1>
        <p className="text-lg md:text-xl">
          Your ultimate companion for tracking sleep and improving your health.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white px-8 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Mission</h2>
        <p className="mx-auto max-w-3xl text-center text-gray-600">
          At SleepTracker, our mission is to empower everyone to understand and
          improve their sleep. We believe that quality rest is the foundation
          for a healthy mind and body. By making sleep tracking simple and
          insightful, we help you build better habits and wake up refreshed
          every day.
        </p>
      </section>

      {/* Features  Section */}
      <section className="bg-gray-100 px-8 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-blue-800">
          Why Choose SleepTracker?
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-md bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Easy Sleep Logging</h3>
            <p className="text-gray-600">
              Quickly record your sleep each night with just a few taps—no
              complicated setup required.
            </p>
          </div>

          <div className="rounded-md bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Smart Analytics</h3>
            <p className="text-gray-600">
              Instantly see trends and patterns in your sleep, so you know
              what’s working and what needs improvement.
            </p>
          </div>

          <div className="rounded-md bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Privacy First</h3>
            <p className="text-gray-600">
              Your sleep data is yours alone. We use strong encryption and never
              share your information.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white px-8 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Story</h2>
        <p className="mx-auto max-w-3xl text-center text-gray-600">
          SleepTracker started because we wanted an easy way to improve our
          sleep. After struggling with restless nights, we built a simple tool
          to track sleep and see what helps. Now, SleepTracker helps people
          everywhere get better rest and feel healthier.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 px-8 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-indigo-500">
          Ready to Sleep Better?
        </h2>
        <p className="mb-6 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-300 bg-clip-text text-lg text-transparent">
          Join SleepTracker today and take the first step towards better sleep
          and a healthier life.
        </p>

        <Link
          href="/sign-up"
          className="inline-block rounded-md bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-blue-800"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}

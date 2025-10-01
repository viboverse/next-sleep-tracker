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
          At SleepTracker, we aim to help individuals achieve better sleep and
          overall well-being by providing insights into their sleep patterns.
          Better sleep leads to a healthier, happier life, and we’re here to
          guide you every step of the way.
        </p>
      </section>

      {/* Features  Section */}
      <section className="bg-gray-100 px-8 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-blue-800">
          Why Choose SleepTracker?
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-md bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Comprehensive Tracking</h3>
            <p className="text-gray-600">
              Monitor your sleep patterns and identify areas for improvement.
            </p>
          </div>

          <div className="rounded-md bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Personalized Insights</h3>
            <p className="text-gray-600">
              Receive tailored recommendations to enhance your sleep quality.
            </p>
          </div>

          <div className="rounded-md bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold">User-Friendly Design</h3>
            <p className="text-gray-600">
              Enjoy an intuitive and seamless experience across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white px-8 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Story</h2>
        <p className="mx-auto max-w-3xl text-center text-gray-600">
          SleepTracker was created to address the growing need for better sleep
          management tools. Our team of sleep experts and technologists
          developed a platform that combines cutting-edge technology with
          actionable insights. Since our launch, we&apos;ve helped countless
          users achieve better sleep and improve their overall health.
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

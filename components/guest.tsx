import { SignInButton } from "@clerk/nextjs";
import HeroSectionImage from "@/public/hero-section-image.png";
import Image from "next/image";

export default function Guest() {
  return (
    <div className="bg-gray-100 font-sans text-gray-800">
      {/* Hero section */}
      <section className="flex flex-col items-center justify-between border-b-2 border-gray-300 bg-gray-100 p-3 pt-20 md:flex-row md:p-16">
        <div className="mb-8 flex-1 xl:pl-10">
          <h1 className="text-headings mb-4 text-2xl font-bold">
            Welcome to Sleep Tracker
          </h1>
          <p className="mb-6 md:text-lg">
            Track your sleep, improve your health, and wake up feeling refreshed
            with SleepTracker.
            <br /> Join thousands of satisfied users and start your better sleep
            journey today!
          </p>

          <SignInButton>
            <button className="bg-amethyst-600 hover:bg-amethyst-800 w-full max-w-2xl cursor-pointer rounded-md px-6 py-3 font-medium text-white transition hover:scale-105 md:w-auto">
              Start Tracking Now
            </button>
          </SignInButton>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <Image
            src={HeroSectionImage}
            alt="Finnish girl sleeping"
            className="w-full rounded-tl-3xl rounded-br-3xl shadow-lg sm:max-w-md"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-b-2 border-gray-300 bg-gray-50 px-8 py-16">
        <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
          What Our Users Say
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4">
              <div className="mb-2 flex text-yellow-400">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 italic">
                SleepTracker completely changed my sleep routine. I now sleep 8
                hours consistently and wake up feeling amazing!
              </p>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-800">Aino Virtanen</h4>
              <p className="text-sm text-gray-500">Marketing Manager</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4">
              <div className="mb-2 flex text-yellow-400">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 italic">
                The insights from SleepTracker helped me identify my sleep
                patterns. My productivity has increased by 40%!
              </p>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-800">Eero Lahti</h4>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4">
              <div className="mb-2 flex text-yellow-400">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 italic">
                Simple, effective, and life-changing. I wish I had found
                SleepTracker sooner!
              </p>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-800">Liisa Mäkinen</h4>
              <p className="text-sm text-gray-500">Teacher</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="border-b-2 border-gray-300 bg-white px-8 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h3 className="text-xl font-bold">What is Sleep Tracker?</h3>
            <p className="text-gray-600 italic">
              SleepTracker is a powerful tool designed to help you monitor your
              sleep patterns and improve your overall health.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              How do I start tracking my sleep with SleepTracker?
            </h3>
            <p className="text-gray-600 italic">
              Simply sign up, log in, and enter your sleep data each morning.
              SleepTracker will automatically analyze your patterns and show
              your progress.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              Can I use SleepTracker on my phone or tablet?
            </h3>
            <p className="text-gray-600 italic">
              Absolutely. SleepTracker works great on all devices—just open it
              in your browser and start tracking!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

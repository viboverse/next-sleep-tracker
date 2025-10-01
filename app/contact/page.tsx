"use client";

import { redirect } from "next/navigation";
import { useRef } from "react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleContactMessage(event: React.FormEvent) {
    event.preventDefault();

    const formData = new FormData(formRef.current!);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const mailTo = `mailto:vahab.afsharian94@gmail.com?subject=Message from ${encodeURIComponent(
      name,
    )}&body=From: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(
      message,
    )}`;

    window.location.href = mailTo;

    redirect("/");
  }
  return (
    <div className="bg-gray-100 font-sans text-gray-800">
      {/* Hero section */}
      <section className="flex flex-col items-center justify-center bg-gray-100 px-8 py-16 text-center">
        <h1 className="text-headings mb-4 text-4xl font-bold md:text-5xl">
          Contact SleepTracker
        </h1>
        <p className="text-amethyst-500 text-lg md:text-xl">
          Have questions or need help? Get in touch with us!
        </p>
      </section>

      {/* Contact Form */}
      <section className="bg-white px-8 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-blue-800">
          Get in Touch
        </h2>
        <form
          onSubmit={handleContactMessage}
          ref={formRef}
          className="mx-auto max-w-3xl space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name..."
              className="mt-1 w-full rounded-md px-4 py-2 shadow-lg outline outline-gray-300 focus:outline-purple-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email..."
              className="mt-1 w-full rounded-md px-4 py-2 shadow-lg outline outline-gray-300 focus:outline-purple-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your message..."
              className="mt-1 w-full rounded-md px-4 py-2 shadow-lg outline outline-gray-300 focus:outline-purple-500"
              required
            />
          </div>

          <button className="bg-amethyst-800 hover:bg-amethyst-900 w-full cursor-pointer rounded-md px-4 py-2 font-medium text-white shadow-lg transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-100 px-8 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Contact Information
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-xl font-bold">Email</h3>
            <p className="text-gray-600">vahab.afsharian94@gmail.com</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Phone</h3>
            <p className="text-gray-600">+41 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Address</h3>
            <p className="text-gray-600">40100 Jyväskylä</p>
          </div>
        </div>
      </section>
    </div>
  );
}

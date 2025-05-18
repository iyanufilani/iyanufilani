import Image from "C:/Users/iyanu/Documents/Personal Projects/Professional Website/rccglogo";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!name) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-900 text-white py-6 px-4 text-center">
        <div className="flex flex-col items-center">
          <Image src="/logo.png" alt="RCCG Redemption Parish" width={100} height={100} loading="lazy" />
          <h1 className="text-3xl font-bold mt-4">RCCG Redemption Parish</h1>
          <p className="text-lg">We are a great family. You are welcome to our church.</p>
        </div>
      </header>

      <section className="py-10 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">Worship Services</h2>
        <ul className="text-center text-lg">
          <li>Wednesdays - Midweek Service</li>
          <li>Saturdays - Special Programs</li>
        </ul>
      </section>

      <section className="py-10 px-4 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded"
            onChange={handleChange}
            value={form.name}
            required
          />

          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-2 rounded"
            onChange={handleChange}
            value={form.email}
            required
          />

          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            className="w-full border border-gray-300 px-4 py-2 rounded"
            rows="4"
            onChange={handleChange}
            value={form.message}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            Send Message
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Or email us directly at <a href="mailto:rccgsacto@gmail.com" className="text-blue-700">rccgsacto@gmail.com</a>
        </p>
      </section>

      <footer className="bg-blue-900 text-white text-center py-4 mt-10">
        <p>&copy; {new Date().getFullYear()} RCCG Redemption Parish. All rights reserved.</p>
      </footer>
    </main>
  );
}

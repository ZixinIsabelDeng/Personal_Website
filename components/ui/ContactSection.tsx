"use client";

export default function ContactSection() {
  return (
    <section className="relative isolate bg-[#fadcd9] px-6 py-24 sm:py-32 lg:px-8 mt-16 rounded-2xl shadow">
      {/* heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contact Me
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          Got a project idea, job opportunity, or just want to say hi? Let’s
          talk.
        </p>
      </div>

      {/* form */}
      <form
        action="https://formspree.io/f/xldwzbbp"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm 
                           placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm 
                           placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm 
                           placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm 
                           placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-pink-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white 
                 shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Let’s talk
          </button>
        </div>
      </form>
    </section>
  );
}

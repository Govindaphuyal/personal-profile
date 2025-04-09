import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Container */}
      <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Let's Talk
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Feature request? Suggestion? Or maybe you'd like to be our critic!
            Here's a form just for that.
          </p>
        </div>

        {/* Form Section */}
        <form className="mx-auto mt-10 sm:mt-20 max-w-xl">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Your First Name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Your Last Name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Company */}
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  placeholder="Your Company Name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Your Email Address"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  placeholder="Your Phone Number"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Share your thoughts..."
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md py-3 text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We're here to answer all your questions and help you find the best
            medical care.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Address
            </h2>
            <p className="text-lg text-gray-600">Al Shifa Medical Center</p>
            <p className="text-lg text-gray-600">
              123 Rue de la Santé, Casablanca, Morocco
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Contact
            </h2>
            <p className="text-lg text-gray-600">
              Email :{" "}
              <a
                href="mailto:contact@centre-medical-alshifa.com"
                className="text-blue-500"
              >
                contact@centre-medical-alshifa.com
              </a>
            </p>
            <p className="text-lg text-gray-600">
              Phone :{" "}
              <a href="tel:+33123456789" className="text-blue-500">
                +212 06 12 34 56 78
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Send Us a Message
          </h2>
          <form className="max-w-3xl p-8 mx-auto bg-white rounded-lg shadow-lg">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

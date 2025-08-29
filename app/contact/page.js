"use client";
import React, { useState } from "react";
import Link from "next/link";

const ContactPage = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    formData.append("subject", "New message from portfolio"); // optional

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms error:", json);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit failed", err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-primary-bg">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center mb-6">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-status-dark"></span>
                </span>
                <span className="text-sm font-medium text-secondary-text">
                  Let's Connect
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Get in Touch
                <span className="block text-accent-text">
                  Let's Build Together
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-text mb-8 max-w-md mx-auto lg:mx-0">
                I'm always open to new opportunities and collaborations. Whether
                you have a project idea or just want to say hi, feel free to
                reach out!
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="" />{" "}
                {/* optional; set from JS instead */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary-text "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-btn focus:border-primary-btn sm:text-sm"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-text"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-btn focus:border-primary-btn sm:text-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-btn focus:border-primary-btn sm:text-sm"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-primary-btn text-light-text font-semibold rounded-lg hover:bg-primary-btn-hover transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {status === "success" && (
                  <p className="text-green-600 mt-2">Thanks — message sent!</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 mt-2">
                    Something went wrong. Try again later.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-decor-light rounded-full -z-10 opacity-50 transform translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-decor-blue rounded-full -z-10 opacity-50 transform -translate-x-1/4 translate-y-1/4 blur-2xl" />
      </section>
    </div>
  );
};

export default ContactPage;

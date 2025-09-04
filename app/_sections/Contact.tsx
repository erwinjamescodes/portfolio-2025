"use client";

import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Effect to clear status messages after 5 seconds
  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);

      // Clean up the timer when component unmounts or status changes
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", name: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-light py-8 sm:py-16 ">
      <h2 className="text-primary text-2xl sm:text-4xl font-archivo-black mb-2">
        Let&apos;s build amazing things together
      </h2>

      <p className="text-primary text-base sm:text-xl font-roboto mb-8 sm:mb-16 max-w-4xl">
        Ready to talk about your next project? Let&apos;s discuss how I can help
        bring your ideas to life
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your email address"
            className="w-full p-3 sm:p-4 border-2 border-primary bg-transparent text-primary placeholder-gray-500 text-base sm:text-lg font-roboto focus:outline-none focus:ring-0"
            required
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="your name"
            className="w-full p-3 sm:p-4 border-2 border-primary bg-transparent text-primary placeholder-gray-500 text-base sm:text-lg font-roboto focus:outline-none focus:ring-0"
            required
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="tell me something about your brilliant idea"
          rows={8}
          className="w-full p-3 sm:p-4 border-2 border-primary bg-transparent text-primary placeholder-gray-500 text-base sm:text-lg font-roboto resize-none focus:outline-none focus:ring-0"
          required
        />

        {submitStatus === "success" && (
          <div className="p-4 bg-gray-100 border border-gray-400 text-gray-700  mb-4">
            Message sent successfully! Thank you and I will get back to you
            soon!
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-gray-100 border border-gray-400 text-gray-700  mb-4">
            Failed to send message. Please try again later.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 sm:py-2 text-md sm:text-xl font-archivo-black tracking-wider transform transition-all origin-center ${
            isSubmitting
              ? "bg-gray-300 text-light/60 cursor-not-allowed"
              : "bg-primary text-light hover:shadow-[5px_5px_0px_0px_#808080] cursor-pointer"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              SENDING MESSAGE...
            </span>
          ) : (
            "SEND MESSAGE"
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;

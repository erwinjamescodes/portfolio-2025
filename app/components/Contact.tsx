"use client";

import React, { useState } from "react";

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
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
          <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded mb-4">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded mb-4">
            ✗ Failed to send message. Please try again or contact us directly.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 sm:py-2 text-md sm:text-xl font-archivo-black tracking-wider transform transition-all origin-center ${
            isSubmitting 
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
              : 'bg-primary text-light hover:shadow-[5px_5px_0px_0px_#808080] cursor-pointer'
          }`}
        >
          {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </form>
    </section>
  );
};

export default Contact;

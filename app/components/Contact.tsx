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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full bg-light py-16 ">
      <h2 className="text-primary text-4xl font-archivo-black mb-2">
        Let's build amazing things together
      </h2>

      <p className="text-primary text-xl font-roboto mb-16 max-w-4xl">
        Ready to talk about your next project? Let's discuss how I can help
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
            className="w-full p-4 border-2 border-primary bg-transparent text-primary placeholder-gray-500 text-lg font-roboto focus:outline-none focus:ring-0"
            required
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="your name"
            className="w-full p-4 border-2 border-primary bg-transparent text-primary placeholder-gray-500 text-lg font-roboto focus:outline-none focus:ring-0"
            required
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="tell me something about your brilliant idea"
          rows={8}
          className="w-full p-4 border-2 border-primary bg-transparent text-primary placeholder-gray-500 text-lg font-roboto resize-none focus:outline-none focus:ring-0"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary text-light py-2 text-xl font-archivo-black tracking-wider hover:bg-primary/90 transition-colors cursor-pointer"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;

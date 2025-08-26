"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const contactRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);

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
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        titleRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          subtitleRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          formRef.current,
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={contactRef} className="w-full bg-light py-16 ">
      <h2
        ref={titleRef}
        className="text-primary text-4xl font-archivo-black mb-2"
      >
        Let&apos;s build amazing things together
      </h2>

      <p
        ref={subtitleRef}
        className="text-primary text-xl font-roboto mb-16 max-w-4xl"
      >
        Ready to talk about your next project? Let&apos;s discuss how I can help
        bring your ideas to life
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
          className="w-full bg-primary text-light py-2 text-xl font-archivo-black tracking-wider hover:shadow-[5px_5px_0px_0px_#808080] transform transition-all cursor-pointer origin-center"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;

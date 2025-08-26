"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BlogPage() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-light text-dark">
      <div className="max-w-7xl mx-auto px-8 pt-[100px] py-16">
        <h1
          ref={titleRef}
          className="text-primary text-4xl font-archivo-black mb-16"
        >
          Blog
        </h1>

        <div ref={contentRef} className="max-w-3xl">
          <p className="text-xl text-gray-600 mb-8">
            Coming soon! This is where I'll share insights about development, automation, and building products that make a difference.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
            <h3 className="font-archivo-black text-lg mb-4">What to expect:</h3>
            <ul className="space-y-2 text-lg">
              <li>• Technical deep dives on full-stack development</li>
              <li>• Automation and AI integration strategies</li>
              <li>• Product development lessons learned</li>
              <li>• Tools and workflows that boost productivity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
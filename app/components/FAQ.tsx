"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What types of projects do you specialize in?",
      answer:
        "I specialize in building full-stack web applications, SaaS platforms, and AI-powered solutions. My expertise spans e-commerce platforms, learning management systems, real estate applications, and fintech solutions. I focus on cloud-native architectures and integrating AI automations to streamline business processes.",
    },
    {
      question: "What's your experience with AI and automation?",
      answer:
        "I have extensive experience integrating AI capabilities into web applications, including natural language processing for content enhancement, voice recognition systems using speech-to-text APIs, and intelligent chatbots for customer support. I develop AI automations that help businesses streamline workflows, reduce manual tasks, and improve user experiences through smart, data-driven solutions.",
    },
    {
      question: "Which technologies and frameworks do you work with?",
      answer:
        "My technical stack includes Next.js, React.js, React Native, Node.js, and modern JavaScript/TypeScript for development. For cloud infrastructure, I use AWS services like Lambda, S3, and DynamoDB. In AI automation, I also work with n8n, OpenAI and Gemini APIs, GoHighLevel, and custom AI integrations.",
    },
    {
      question: "Are you available for freelance or consulting work?",
      answer:
        "Yes, I'm available for both full-time opportunities and consulting projects. I work with startups, established companies, and individual entrepreneurs who need technical expertise in web development or AI integration.",
    },
    {
      question: "How do you approach new projects?",
      answer:
        "I start by understanding the business problem and target users, then design scalable technical solutions that align with your goals and budget. My process includes market research, technical planning, iterative development, and performance optimization. I focus on building maintainable code and ensuring solutions can scale as your business grows.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-light py-8 sm:py-16 mt-8 sm:mt-16">
      <h2 className="text-primary text-2xl sm:text-4xl font-archivo-black mb-8 sm:mb-16">
        You might be asking
      </h2>

      <div className="space-y-0 max-w-7xl mx-auto w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-primary">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-start py-4 sm:py-8 px-4 sm:px-8 text-left transition-colors cursor-pointer ${
                openIndex === index
                  ? "bg-primary text-light"
                  : "bg-transparent text-primary hover:bg-primary/5 "
              }`}
            >
              <h3 className="text-lg sm:text-2xl font-archivo-black pr-2">
                {faq.question}
              </h3>
              <span className="text-2xl sm:text-3xl font-light ml-2 sm:ml-4 flex-shrink-0 -mt-1">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`bg-primary text-light px-4 sm:px-8 overflow-hidden transition-all duration-300  ${
                openIndex === index ? " pb-4 sm:pb-8" : "max-h-0"
              }`}
            >
              <p className="text-lg sm:text-xl font-roboto leading-relaxed lowercase pt-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

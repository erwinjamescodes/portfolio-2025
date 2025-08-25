"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.fromTo(
        titleRef.current,
        { y: 25, opacity: 0 },
        { y: 0.5, opacity: 1, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0.5, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.8"
        )
        .fromTo(
          buttonRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.6"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={heroRef}
      className="flex-1 flex flex-col items-center text-center pt-[10%] min-h-[calc(100vh-100px)]"
    >
      <h1
        ref={titleRef}
        className="text-6xl md:text-8xl lg:text-9xl font-archivo-black"
      >
        ERWINJAMES
      </h1>

      <p
        ref={subtitleRef}
        className="text-2xl md:text-3xl lg:text-7xl mb-12 max-w-4xl font-roboto font-normal leading-none"
      >
        software developer and ai automation specialist
      </p>

      <button
        ref={buttonRef}
        className="bg-primary text-white px-8 py-4 text-3xl uppercase tracking-wide hover:shadow-[5px_5px_0px_0px_#808080] transform transition-all font-archivo-black cursor-pointer origin-center"
      >
        LET&apos;S BUILD SOMETHING
      </button>
    </main>
  );
}

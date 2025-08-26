"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProjectNav() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [logoRef.current, backRef.current],
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-8 h-[80px] px-8 bg-primary"
    >
      <Link ref={logoRef} href="/" className="w-8 h-8 relative cursor-pointer">
        <Image
          src="/assets/logo-white.png"
          alt="EJ Logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </Link>
      
      <Link
        ref={backRef}
        href="/"
        className="font-archivo-black text-light text-sm uppercase cursor-pointer hover:opacity-70 transition-opacity"
      >
        Back to Home
      </Link>
    </nav>
  );
}

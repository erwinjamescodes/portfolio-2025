"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Nav() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [logoRef.current, menuRef.current],
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex justify-between items-center py-8 h-[100px]"
    >
      <div ref={logoRef} className="w-12 h-12 relative">
        <Image
          src="/assets/logo.png"
          alt="EJ Logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div ref={menuRef} className="w-12 h-12 relative">
        <Image
          src="/assets/menu.png"
          alt="Menu"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
    </nav>
  );
}

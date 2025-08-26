"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function Nav() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll logic on home page
      if (pathname === "/") {
        const heroSection = document.querySelector(
          ".hero-section"
        ) as HTMLElement;
        if (heroSection) {
          const heroHeight = heroSection.offsetHeight;
          setHasScrolled(window.scrollY > heroHeight - 200);
        }
      } else {
        // Always show primary background on non-home pages
        setHasScrolled(true);
      }
    };

    // Set initial state based on current page
    if (pathname !== "/") {
      setHasScrolled(true);
    } else {
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navOffset = 100; // Account for fixed navbar height
      const elementPosition = section.offsetTop - navOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-8 h-[80px] px-8 transition-colors duration-500 ${
        hasScrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <Link
        ref={logoRef}
        href="/"
        className="w-8 h-8 relative cursor-pointer"
      >
        <Image
          src={hasScrolled ? "/assets/logo-white.png" : "/assets/logo.png"}
          alt="EJ Logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </Link>
      <button
        ref={menuRef}
        onClick={handleMenuClick}
        className="w-8 h-8 relative cursor-pointer "
      >
        <Image
          src={hasScrolled ? "/assets/menu-white.png" : "/assets/menu.png"}
          alt="Menu"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </button>

      {/* Full Screen Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-screen bg-primary z-[60] transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full text-light">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 w-8 h-8 cursor-pointer"
          >
            <Image
              src="/assets/close-white.png"
              alt="Close"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </button>

          <ul className="flex flex-col space-y-12 text-4xl font-archivo-black">
            <li>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:opacity-70 transition-opacity cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="hover:opacity-70 transition-opacity cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="hover:opacity-70 transition-opacity cursor-pointer"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:opacity-70 transition-opacity cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

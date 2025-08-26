"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
    // If not on home page and trying to navigate to home sections, go to home first
    if (pathname !== "/" && ["home", "projects"].includes(sectionId)) {
      window.location.href = `/#${sectionId}`;
      setIsMenuOpen(false);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const navOffset = sectionId === "projects" ? 150 : 100; // Account for fixed navbar height
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
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-8 h-[80px] px-8 transition-colors duration-500 ${
        hasScrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <Link href="/" className="w-8 h-8 relative cursor-pointer">
        <Image
          src={hasScrolled ? "/assets/logo-white.png" : "/assets/logo.png"}
          alt="EJ Logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </Link>
      <button
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
              <button
                onClick={() => handleNavClick("home")}
                className="hover:opacity-70 transition-opacity cursor-pointer"
              >
                Home
              </button>
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

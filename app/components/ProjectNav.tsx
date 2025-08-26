"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProjectNav() {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-8 h-[80px] px-8 bg-primary">
      <Link href="/" className="w-8 h-8 relative cursor-pointer">
        <Image
          src="/assets/logo-white.png"
          alt="EJ Logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </Link>
      
      <Link
        href="/"
        className="font-archivo-black text-light text-sm uppercase cursor-pointer hover:opacity-70 transition-opacity"
      >
        Back to Home
      </Link>
    </nav>
  );
}

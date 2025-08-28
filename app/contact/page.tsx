import Link from "next/link";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-light px-6 md:px-8 ">
      <div className="max-w-7xl mx-auto py-16 pt-36">
        <div className=" ">
          <nav className="flex items-center space-x-2 text-xs">
            <Link
              href="/"
              className="text-primary hover:underline uppercase font-archivo-black"
            >
              Home
            </Link>
            <span className="text-primary">&gt;</span>
            <span className="text-primary uppercase font-archivo-black">
              Contact
            </span>
          </nav>
        </div>
        <Contact />
      </div>
    </div>
  );
}

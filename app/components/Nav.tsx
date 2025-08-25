import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-8 h-[100px]">
      <div className="w-12 h-12 relative">
        <Image
          src="/assets/logo.png"
          alt="EJ Logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-8 h-8 relative">
        <Image
          src="/assets/menu.png"
          alt="Menu"
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      </div>
    </nav>
  );
}

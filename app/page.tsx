import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto">
      <div className="hero-section">
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <nav className="flex justify-between items-center p-8 h-[100px]">
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
          {/* Hero Section */}
          <main className="flex-1 flex flex-col items-center text-center pt-[10%] min-h-[calc(100vh-100px)]">
            <h1 className="text-6xl md:text-8xl lg:text-9xl   font-archivo-black ">
              ERWINJAMES
            </h1>

            <p className="text-2xl md:text-3xl lg:text-7xl mb-12 max-w-4xl font-roboto font-normal leading-none ">
              software developer and ai automation specialist
            </p>

            <button className="bg-primary text-white px-8 py-4 text-3xl uppercase tracking-wide hover:bg-gray-800 transition-colors font-archivo-black">
              LET'S BUILD SOMETHING
            </button>
          </main>
        </div>
      </div>
    </div>
  );
}

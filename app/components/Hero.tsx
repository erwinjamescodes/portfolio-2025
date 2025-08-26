"use client";

export default function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center text-center pt-[10%] min-h-[60vh] sm:min-h-[calc(100vh-80px)] px-4">
      <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-archivo-black leading-tight">
        ERWINJAMES
      </h1>

      <p className="text-3xl lg:text-7xl mb-8 sm:mb-12 max-w-4xl font-roboto font-normal leading-tight sm:leading-none">
        software developer and ai automation specialist
      </p>

      <button className="bg-primary text-white px-4 sm:px-8 py-3 sm:py-4 text-lg sm:text-2xl md:text-3xl uppercase tracking-wide hover:shadow-[5px_5px_0px_0px_#808080] transform transition-all font-archivo-black cursor-pointer origin-center">
        LET&apos;S BUILD SOMETHING
      </button>
    </main>
  );
}

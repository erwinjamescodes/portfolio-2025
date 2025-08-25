export default function Hero() {
  return (
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
  );
}
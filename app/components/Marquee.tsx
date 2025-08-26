import React from "react";

const Marquee = () => {
  return (
    <div className="w-full bg-primary overflow-hidden p-4 sm:p-8">
      <p className="text-light text-2xl sm:text-4xl md:text-5xl font-archivo-black whitespace-nowrap animate-marquee">
        LET’S BUILD AMAZING THINGS TOGETHER * LET’S BUILD AMAZING THINGS
        TOGETHER * LET’S BUILD AMAZING THINGS TOGETHER * LET’S BUILD AMAZING
        THINGS TOGETHER * LET’S BUILD AMAZING THINGS TOGETHER *
      </p>
    </div>
  );
};

export default Marquee;

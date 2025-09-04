"use client";

const GithubButton = ({ link }: { link: string }) => {
  return (
    <button
      className="border-2 px-4 py-2 sm:p-2 border-primary text-primary font-archivo-black uppercase hover:shadow-[5px_5px_0px_0px_#808080] transform transition-all origin-center cursor-pointer text-sm sm:text-base"
      onClick={() => window.open(link, "_blank")}
    >
      View Code
    </button>
  );
};

export default GithubButton;

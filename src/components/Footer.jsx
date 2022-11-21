import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-700">
      <div className="max-w-[min(1100px,90%)] mx-auto flex justify-center py-3">
        <p className="p-3 rounded-lg  text-slate-300/90 hover:text-white hover:bg-zinc-700/40">
          by{" "}
          <a
            href="https://marcosfitzsimons-portfolio.vercel.app"
            target="_blank"
            className="italic"
          >
            Marcos Valentín Fitzsimons
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

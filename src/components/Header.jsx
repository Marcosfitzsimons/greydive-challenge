import React from "react";
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-zinc-700">
      <div className="max-w-[min(1100px,90%)] mx-auto flex items-center justify-between py-6 lg:justify-center">
        <h1 className="text-3xl font-bold lg:text-5xl">
          <Link to="/">
            Simula<span className="font-semibold">cr.</span>
          </Link>
        </h1>
        <div className="cursor-pointer rounded-lg p-2 text-slate-300/90 hover:bg-slate-300/10 hover:text-white lg:hidden">
          <TbMenu2 className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;

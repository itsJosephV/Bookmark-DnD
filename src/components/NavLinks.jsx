import React from "react";

const NavLinks = () => {
  return (
    <nav className="flex flex-row justify-end py-3 px-5 gap-3 font-mono text-[13px] border-b-[1px] border-zinc-800">
        <p className="text-zinc-600">
          By
          <span className="text-zinc-400 hover:text-white duration-200 ml-1">
            <a href="">JosephV</a>
          </span>
        </p>

        <a className="text-zinc-400 hover:text-white duration-200" href="">Source</a>
    </nav>
  );
};

export default NavLinks;

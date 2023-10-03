import React from "react";
import { BookmarkIcon } from "../Icons";

const Header = () => {
  return (
    <header className="mb-5">
      <h1 className="text-3xl font-semibold flex items-center mb-2">
        <span>
          <BookmarkIcon height={".9em"} width={".9em"} fill={"white"} />
        </span>
        Bookmark
      </h1>

      <p className="text-zinc-500">
        Your desktop app to save your favorites sites and links.
      </p>
    </header>
  );
};

export default Header;

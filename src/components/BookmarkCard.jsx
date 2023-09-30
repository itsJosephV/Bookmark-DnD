import React from "react";
import { cardTitleGenerator } from "../utils/cardTitleGenerator";

const BookmarkCard = ({ bookmark, handleDelete }) => {

  const cardTitle = cardTitleGenerator(bookmark)

  return (
    <li className="flex flex-col h-[120px]">
      <a
        href={bookmark.bmUrl}
        target="_blank"
        className="border border-zinc-800 bg-zinc-900 rounded-lg flex flex-row justify-center items-center mb-1 h-[80px]"
      >
        <p
          className={`text-5xl font-semibold`}
          style={{ color: `${bookmark.randomColor}` }}
        >
          {cardTitle}
        </p>
      </a>
      <button onDoubleClick={() => handleDelete(bookmark.id)}>
        <p className="text-center text-[12px] break-words line-clamp-2 text-zinc-400 leading-4">
          {" "}
          {bookmark.bmTitle}
        </p>
      </button>
    </li>
  );
};

export default BookmarkCard;

// text-zinc-200

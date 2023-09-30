import React from "react";
import { cardTitleGenerator } from "../utils/cardTitleGenerator";

const BookmarkCard = ({ bookmark, handleDelete }) => {
  const cardTitle = cardTitleGenerator(bookmark);

  return (
    <div className="relative mb-7">
      <a
        href={bookmark.bmUrl}
        target="_blank"
        className="border border-zinc-800 bg-zinc-900 rounded-lg flex flex-row justify-center items-center h-[80px] mb-[8px]"
      >
        <p
          className={`text-5xl font-semibold`}
          style={{ color: `${bookmark.randomColor}` }}
        >
          {cardTitle}
        </p>
      </a>
      <a
        role="button"
        className="text-center text-[12px] break-words line-clamp-2 text-zinc-400 leading-4 w-[80px] absolute select-none"
        onDoubleClick={() => handleDelete(bookmark.id)}
      >
        {bookmark.bmTitle}
      </a>
    </div>
  );
};

export default BookmarkCard;

// text-zinc-200

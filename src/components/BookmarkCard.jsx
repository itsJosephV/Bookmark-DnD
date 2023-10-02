import React, { useEffect, useState } from "react";
import { cardTitleGenerator } from "../utils/cardTitleGenerator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ToReadIcon } from "../Icons";
ToReadIcon;

const BookmarkCard = ({ bookmark, handleDelete }) => {
  const cardTitle = cardTitleGenerator(bookmark);

  // const [pointerEvent, setPointerEvent] = useState('none')

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: bookmark.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...(isDragging && { pointerEvents: "none" }),
  };

  useEffect(() => { // TO DEBUG
    console.log(isDragging);
  }, [isDragging]);

  return (
    <div
      style={style}
      className="relative mb-10"
      {...attributes}
      {...listeners}
      ref={setNodeRef}
    >
      <a
        href={bookmark.bmUrl}
        target="_blank"
        className="border border-zinc-800 bg-zinc-900 rounded-lg flex flex-row justify-center items-center h-[80px] relative"
      >
        <p
          className={`text-5xl font-semibold`}
          style={{ color: `${bookmark.randomColor}` }}
        >
          {cardTitle}
        </p>
        {bookmark.bmToRead ? (
          <div className="absolute top-[3px] right-[3px] p-[1px] rounded-[4px] bg-zinc-600">
            <ToReadIcon width={".9em"} height={".9em"} fill={"#e4e4e7"} />
          </div>
        ) : null}
      </a>
      <a
        role="button"
        className="text-center w-full text-[12px] break-words line-clamp-2 text-zinc-400 leading-4 absolute select-none mt-[8px]"
        onDoubleClick={() => handleDelete(bookmark.id)}
      >
        {bookmark.bmTitle}
      </a>
    </div>
  );
};

export default BookmarkCard;

// text-zinc-200

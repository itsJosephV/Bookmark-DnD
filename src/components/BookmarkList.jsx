import React from "react";
import BookmarkCard from "./BookmarkCard";
import EmptyList from "./EmptyList";

const BookmarkList = ({ bookmarks, handleDelete }) => {
  return (
    <section>
      <div className="mb-5">
        <h1 className="text-2xl font-semibold">Your list</h1>
      </div>
      {bookmarks.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-3">
          {bookmarks.map((bookmark) => (
            <BookmarkCard
              key={bookmark.id}
              bookmark={bookmark}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <EmptyList />
      )}
    </section>
  );
};

export default BookmarkList;

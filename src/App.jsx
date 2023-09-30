import React, { useState } from "react";
import BookmarkList from "./components/BookmarkList";
import { BookmarkIcon } from "./Icons";
import BookmarkModal from "./components/BookmarkModal";
import Header from "./components/Header";
import { useBookmarksLS } from "./hooks/useBookmarksLS";

function App() {
  const [bookmarks, setBookmarks] = useBookmarksLS("bookmarks", []);
  const [modal, setModal] = useState(false);

  const addBookmark = (bookmark) => {
    setBookmarks((prev) => [
      ...prev,
      {
        id: bookmark.id,
        bmTitle: bookmark.bmTitle,
        bmUrl: bookmark.bmUrl,
        randomColor: bookmark.randomColor
        //...bookmark
      },
    ]);
    setModal(false);
  };

  // console.log(bookmarks);

  const handleDelete = (id) => {
    setBookmarks((prev) => prev.filter((item) => item.id !== id));
    console.log("bookmark deleted", id);
  };

  return (
    <>
    <Header />
    <div className="max-w-[768px] mx-auto h-full py-12 px-4">
      <div className="mb-3">
        <h1 className="text-3xl font-semibold flex items-center gap-1 mb-2">
          <span>
            <BookmarkIcon height={".9em"} width={".9em"} fill={"white"} />
          </span>
          My Bookmark
        </h1>
        <p className="text-zinc-500">
          Your desktop app to save your favourites sites and links.
        </p>
      </div>
      <div className="mb-7">
        <button
          className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md flex items-center text-zinc-500 hover:text-white hover:border-white duration-200"
          onClick={() => {
            setModal(true);
          }}
        >
          <small>Add Bookmark</small>
        </button>
      </div>
      <BookmarkList bookmarks={bookmarks} handleDelete={handleDelete} setBookmarks={setBookmarks} />
      <BookmarkModal addBookmark={addBookmark} modal={modal} setModal={setModal} />
    </div>
    </>
  );
}

export default App;

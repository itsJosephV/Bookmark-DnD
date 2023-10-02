import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { randomColorGenerator as randomColor } from "../utils/randomColorGenerator";

const BookmarkModal = ({ modal, addBookmark, setModal }) => {
  const [bookmarkTitle, setBookmarkTitle] = useState("");
  const [bookmarkUrl, setBookmarkUrl] = useState("");
  const [bookmarkToRead, setBookmarkToRead] = useState(false);

  const inputRef = useRef(null);

  const handleTitleChange = (e) => {
    setBookmarkTitle(e.target.value);
  };

  const handleUrlChange = (e) => {
    setBookmarkUrl(e.target.value);
  };

  const handleToReadCB = () => {
    setBookmarkToRead(true);
  };

  const handleBmSubmit = (e) => {
    e.preventDefault();
    addBookmark({
      id: uuid(),
      bmTitle: bookmarkTitle,
      bmUrl: bookmarkUrl,
      bmToRead: bookmarkToRead,
      randomColor: randomColor(),
    });
    setBookmarkTitle("");
    setBookmarkUrl("");
    setBookmarkToRead(false);
  };

  const handleCancel = () => {
    setModal(false);
    setBookmarkTitle("");
    setBookmarkUrl("");
    setBookmarkToRead(false);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, [modal]);

  console.log(bookmarkToRead);

  return modal ? (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-lg flex flex-col justify-center items-center p-5 gap-7">
      <form
        className="border border-zinc-700 rounded-lg p-3 flex flex-col w-full max-w-[420px]"
        onSubmit={handleBmSubmit}
      >
        <div className="mb-5">
          <h1 className="text-2xl font-semibold text-center">Add Bookmark</h1>
        </div>
        <div className="flex flex-col gap-4 mb-3">
          <div>
            <label
              htmlFor="bookmark-title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              ref={inputRef}
              id="bookmark-title"
              value={bookmarkTitle}
              onChange={handleTitleChange}
              type="text"
              placeholder="Enter a title"
              className="block w-full p-2 bg-zinc-950 border-zinc-700 border rounded-lg text-xs placeholder-zinc-400"
              maxLength={50}
              required
            />
          </div>
          <div>
            <label
              htmlFor="bookmark-url"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              URL
            </label>
            <input
              id="bookmark-url"
              value={bookmarkUrl}
              onChange={handleUrlChange}
              type="text"
              placeholder="e.g., https://www.example.com"
              className="block w-full p-2 bg-zinc-950 border-zinc-700 border rounded-lg text-xs  placeholder-zinc-400"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="toread"
              className="text-sm font-medium text-gray-900 dark:text-white"
            >
              To Read?{" "}
            </label>
            <input
              type="checkbox"
              value={bookmarkToRead}
              onChange={handleToReadCB}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <button
            type="submit"
            className="text-white w-full bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-2 mr-2 mb-2 cursor-pointer"
          >
            Create
          </button>
          <button
            className="text-white w-full bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-2 mb-2 cursor-pointer"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
      <div className="text-[12px] text-zinc-700 inline-block">
        <p>→ Keep your title as short as possible</p>
        <p>→ Title characters capacity is 50</p>
        <p>→ Paste a valid URL</p>
      </div>
    </div>
  ) : null;
};

export default BookmarkModal;

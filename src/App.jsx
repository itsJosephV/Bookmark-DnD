import React, { useEffect, useState } from "react";
import BookmarkList from "./components/BookmarkList";
import BookmarkModal from "./components/BookmarkModal";
import NavLinks from "./components/NavLinks";
import { useBookmarksLS } from "./hooks/useBookmarksLS";
import AddButton from "./components/AddButton";
import Header from "./components/Header";
import MobileWarn from "./components/MobileWarn";

function App() {
  const [bookmarks, setBookmarks] = useBookmarksLS("bookmarks", []);
  const [modal, setModal] = useState(false);
  const [showMobileWarn, setShowMobileWarn] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setShowMobileWarn(true);
    }
  }, [window.innerWidth]);

  const addBookmark = (bookmark) => {
    setBookmarks((prev) => [
      ...prev,
      {
        id: bookmark.id,
        bmTitle: bookmark.bmTitle,
        bmUrl: bookmark.bmUrl,
        bmToRead: bookmark.bmToRead,
        randomColor: bookmark.randomColor,
        //...bookmark
      },
    ]);
    setModal(false);
  };

  const handleDelete = (id) => {
    setBookmarks((prev) => prev.filter((item) => item.id !== id));
    console.log("bookmark deleted", id);
  };

  //console.log(bookmarks);

  return (
    <main className="min-h-screen">
      <NavLinks />
      <div className="max-w-[768px] mx-auto h-full py-12 px-4">
        <Header />
        <AddButton setModal={setModal} />
        <BookmarkList
          bookmarks={bookmarks}
          handleDelete={handleDelete}
          setBookmarks={setBookmarks}
        />
        <BookmarkModal
          addBookmark={addBookmark}
          modal={modal}
          setModal={setModal}
        />
        {showMobileWarn && (
          <MobileWarn />
        )}
      </div>
    </main>
  );
}

export default App;

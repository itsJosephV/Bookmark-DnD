import { useState } from "react";
import BookmarkCard from "./BookmarkCard";
import EmptyList from "./EmptyList";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  // MouseSensor,
  // TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

const BookmarkList = ({ bookmarks, handleDelete, setBookmarks }) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDragEnd = (e) => {
    const { active, over } = e;
    setBookmarks((bookmarks) => {
      const oldIndex = bookmarks.findIndex((bm) => bm.id === active.id);
      const newIndex = bookmarks.findIndex((bm) => bm.id === over?.id);
      return arrayMove(bookmarks, oldIndex, newIndex);
    });
  };

  return (
    <section>
      <div className="mb-5">
      </div>
      {bookmarks.length > 0 ? (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={bookmarks} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-3">
              {bookmarks.map((bookmark) => (
                <BookmarkCard
                  key={bookmark.id}
                  bookmark={bookmark}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      ) : (
        <EmptyList />
      )}
    </section>
  );
};

export default BookmarkList;

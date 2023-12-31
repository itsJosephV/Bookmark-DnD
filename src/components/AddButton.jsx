import React from "react";

const AddButton = ({setModal}) => {
  return (
    <div>
      <button
        className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md flex items-center text-white hover:text-white/70 hover:border-white/20 duration-200"
        onClick={() => {
          setModal(true);
        }}
      >
        <small>Add Bookmark</small>
      </button>
    </div>
  );
};

export default AddButton;

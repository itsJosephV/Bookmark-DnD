import React from "react";

const EmptyList = () => {
  return (
    <div className="flex p-12">
      <p className="border border-zinc-600 mx-auto text-zinc-600 py-2 px-3 rounded-lg">
        Your bookmark list seems empty
      </p>
    </div>
  );
};

export default EmptyList;

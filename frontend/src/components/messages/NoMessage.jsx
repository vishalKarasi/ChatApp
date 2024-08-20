import React from "react";
import { TiMessage } from "react-icons/ti";

const NoMessage = () => {
  return (
    <section className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 opacity-75">
        <p>
          Welcome
          <span className="text-blue-500 text-2xl md:text-3xl">
            {""} Vishal karasi
          </span>
        </p>
        <p>Select a chat to start messaging</p>
        <TiMessage className="text-3xl md:text-6xl text-center" />
      </div>
    </section>
  );
};

export default NoMessage;

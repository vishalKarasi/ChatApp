import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoMessage from "./NoMessage";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <main className="md:min-w-[500px] flex flex-col">
      {noChatSelected ? (
        <NoMessage />
      ) : (
        <>
          <header className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">Vishal Karasi</span>
          </header>
          <Messages />
          <MessageInput />
        </>
      )}
    </main>
  );
};

export default MessageContainer;

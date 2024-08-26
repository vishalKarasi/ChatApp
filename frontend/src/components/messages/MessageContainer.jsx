import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoMessage from "./NoMessage";
import useConversation from "@zustand/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  return (
    <main className="md:min-w-[550px] flex flex-col">
      {!selectedConversation ? (
        <NoMessage />
      ) : (
        <>
          <header className="flex items-center gap-2 p-4 mb-2 bg-slate-500">
            <span className="text-l">To:</span>
            <span className="text-gray-900 font-bold text-xl">
              {selectedConversation.fullname}
            </span>
          </header>
          <Messages />
          <MessageInput />
        </>
      )}
    </main>
  );
};

export default MessageContainer;

import useConversation from "@zustand/useConversation";
import React from "react";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation?._id;

  return (
    <article
      className={`flex gap-6 items-center p-2 hover:bg-sky-500 cursor-pointer border-b border-slate-500  ${
        isSelected && "bg-sky-500"
      }`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={conversation.profilePic} alt="user avatar" />
        </div>
      </div>
      <p className="font-bold text-gray-200">{conversation.fullname}</p>
    </article>
  );
};

export default Conversation;

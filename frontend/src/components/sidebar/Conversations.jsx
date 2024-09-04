import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "@hooks/useGetConversations";
import ConversationSkeleton from "@components/skeletons/ConversationSkeleton";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <section className="py-2 flex flex-col flex-1 overflow-auto">
      {loading ? (
        <ConversationSkeleton />
      ) : !conversations || conversations.length === 0 ? (
        <div className="flex justify-center items-center h-full text-2xl text-red-500">
          No Friends
        </div>
      ) : (
        conversations.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} />
        ))
      )}
    </section>
  );
};

export default Conversations;

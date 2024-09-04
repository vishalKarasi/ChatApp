import { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "@hooks/useGetMessage";
import MessageSkeleton from "@components/skeletons/MessageSkeleton";
import useListenMessages from "@hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessage();
  const messagesEndRef = useRef(null);

  useListenMessages();

  useEffect(() => {
    if (!loading) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  return (
    <section className="p-4 flex-1 overflow-auto">
      {loading ? (
        <MessageSkeleton />
      ) : !messages || messages.length === 0 ? (
        <div className="flex justify-center items-center h-full text-2xl text-red-500">
          No Messages
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <Message key={message._id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </>
      )}
    </section>
  );
};

export default Messages;

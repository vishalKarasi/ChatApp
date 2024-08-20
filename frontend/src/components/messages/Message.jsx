import React from "react";

const Message = () => {
  return (
    <article className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="avatar"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">Hi! what's up</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:40
      </div>
    </article>
  );
};

export default Message;

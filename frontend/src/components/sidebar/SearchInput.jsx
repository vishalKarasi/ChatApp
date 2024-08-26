import useGetConversations from "@hooks/useGetConversations";
import useConversation from "@zustand/useConversation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    if (searchTerm.length < 3)
      return toast.error("Search Input must be at least 3 characters long");
    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!conversation) toast.error("No user found");
    setSelectedConversation(conversation);
  };

  return (
    <form
      className="flex items-center py-2 gap-2 border-b border-slate-500"
      onSubmit={handleSubmit}
    >
      <div
        className={`flex items-center rounded-full pl-4 bg-[#14191E] ${
          isFocused ? "outline outline-2 outline-blue-500" : ""
        }`}
      >
        <input
          type="text"
          placeholder="Search user..."
          className="bg-transparent outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button
          type="submit"
          className="btn btn-circle hover:bg-sky-500 text-white"
        >
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;

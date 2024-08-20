import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";

const Sidebar = () => {
  return (
    <section className=" border-r border-slate-500 px-4 pt-4 flex flex-col">
      <SearchInput />
      <Conversations />
      <LogoutBtn />
    </section>
  );
};

export default Sidebar;

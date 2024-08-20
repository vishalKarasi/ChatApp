import MessageContainer from "@src/components/messages/MessageContainer";
import Sidebar from "@src/components/sidebar/Siderbar";
import React from "react";

const Home = () => {
  return (
    <main className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </main>
  );
};

export default Home;

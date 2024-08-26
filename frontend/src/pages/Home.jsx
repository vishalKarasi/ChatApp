import React from "react";
import MessageContainer from "@components/messages/MessageContainer";
import Sidebar from "@components/sidebar/Siderbar";

const Home = () => {
  return (
    <main className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-[0_0_1em_0.25em_#242424]">
      <Sidebar />
      <MessageContainer />
    </main>
  );
};

export default Home;

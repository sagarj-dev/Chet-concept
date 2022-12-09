import React from "react";
import ChatScreen from "./chatScreen/chatScreen";
import LeftSidebar from "./leftSidebar/leftSidebar";
import RightSidebar from "./rightSidebar/rightSidebar";

export default function Screen() {
  return (
    <main className="root">
      <LeftSidebar />

      <ChatScreen />

      <RightSidebar />
    </main>
  );
}

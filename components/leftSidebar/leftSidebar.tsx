import React from "react";
import ChatList from "./chatList/chatList";
import LeftSidebarNav from "./leftSidebarNav";
import LeftSidebarSearch from "./leftSidebarSearch";
import Story from "./story/story";

export default function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <LeftSidebarNav />
      <LeftSidebarSearch />
      <Story />
      <ChatList />
    </div>
  );
}

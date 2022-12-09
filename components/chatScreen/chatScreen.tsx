import React from "react";
import ChatBox from "./chatBox";
import ChatScreenHeader from "./chatScreenHeader";

export default function ChatScreen() {
  return (
    <div className="chatScreen">
      <ChatScreenHeader />
      <ChatBox />
    </div>
  );
}

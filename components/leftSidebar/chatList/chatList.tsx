import React from "react";
import ChatListSingle from "./chatListSingle";

export default function ChatList() {
  return (
    <div className="chatList">
      <h5 className="chatListTitle">
        ALL CHAT <span>PRIVATE</span>
      </h5>
      <div className="allchats">
        <ChatListSingle
          isActive={true}
          msg="Thank you very much, I am wai ..."
          status={true}
        />
        <ChatListSingle msg="What time are we there? " />
        <ChatListSingle
          isUnread={true}
          unreadCount={12}
          status={true}
          msg="You: I will send you the work file"
        />
        <ChatListSingle msg="You: I will send you the work file" />
        <ChatListSingle msg="You: I will send you the work file" />
      </div>
    </div>
  );
}

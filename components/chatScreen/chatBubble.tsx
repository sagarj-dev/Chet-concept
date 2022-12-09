import React from "react";
import { BsCheckAll } from "react-icons/bs";

type ChatBubbleType = {
  msg: string;
  time: string;
  isUser?: boolean;
  isRead?: boolean;
};
export default function ChatBubble({
  msg,
  time,
  isUser,
  isRead,
}: ChatBubbleType) {
  return (
    <div className={`chatBubble ${isUser ? "chatBubble-user" : ""}`}>
      <p className="chatMsg">
        {msg}
        <span className={`${isRead ? "msgRead" : ""}`}>
          <BsCheckAll />
        </span>
      </p>
      <p className="chatMsgTime">{time}</p>
    </div>
  );
}

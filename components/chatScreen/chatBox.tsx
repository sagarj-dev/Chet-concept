import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { BiMicrophone } from "react-icons/bi";
import ChatBubble from "./chatBubble";
export default function ChatBox() {
  return (
    <div className="chatBox">
      <div className="chats">
        <ChatBubble msg="Hi there, How are you?" time="12:24 PM" isRead />
        <ChatBubble
          msg="Waiting for your reply. As I have to go back soon. I have to travel long distance."
          time="12:25 PM"
          isRead={true}
        />
        <ChatBubble
          msg="Hi, I am coming there in few minutes. Please wait!! I am in taxi right now."
          time="12:28 PM"
          isUser={true}
        />
        <ChatBubble
          msg="Thank you very much, I am waiting here at StarBuck cafe."
          time="12:35 PM"
        />
      </div>
      <div className="addMsg">
        <div className="msgBox">
          <BsEmojiSmile />
          <input placeholder="Type a massage" />
          <ImAttachment />
        </div>
        <div className="voicIcon">
          <BiMicrophone />
        </div>
      </div>
    </div>
  );
}

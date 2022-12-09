import React, { useEffect, useState } from "react";

type ChatListSingleType = {
  isActive?: boolean;
  isUnread?: boolean;
  unreadCount?: number;
  msg: string;
  status?: boolean;
};

type UserDataType = {
  name?: string;
  image?: string;
};

export default function ChatListSingle({
  isActive,
  isUnread,
  unreadCount,
  msg,
  status,
}: ChatListSingleType) {
  const [user, setUser] = useState<UserDataType>({});
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((data) => data.json())
      .then((data) => {
        // setUser(data.results[0]);
        setUser({
          name: data.results[0].name.first,
          image: data.results[0].picture.medium,
        });
      });
  }, []);
  return (
    <>
      {user && (
        <div className={`chatListSingle ${isActive ? "activeChat" : ""}`}>
          <div className="userImage">
            <img src={user.image} />
            {status && <span></span>}
          </div>
          <div className="chatDetails">
            <div className="chatNameTime">
              <h5>{user.name}</h5>
              <div>
                {unreadCount && <p className="unreadCount">{unreadCount}</p>}
                <p>12:35 PM</p>
              </div>
            </div>
            <p className={`chatmsg ${isUnread ? "unreadMsg" : ""}`}>{msg}</p>
          </div>
        </div>
      )}
    </>
  );
}

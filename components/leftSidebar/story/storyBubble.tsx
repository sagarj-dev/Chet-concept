import React, { useEffect, useState } from "react";
type UserDataType = {
  name?: string;
  image?: string;
};
export default function StoryBubble() {
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
    <div className="storyBubblecontainer">
      {user && (
        <>
          <div className="storyBubble">
            <img src={user.image} width="100%" />
          </div>
          <h5>{user.name}</h5>
        </>
      )}
    </div>
  );
}

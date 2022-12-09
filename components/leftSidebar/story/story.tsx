import React from "react";
import { BiPlus } from "react-icons/bi";
import StoryBubble from "./storyBubble";
export default function Story() {
  return (
    <div className="story">
      <h5>STATUS</h5>
      <div className="stories">
        <div className="addStory">
          <div className="addStoryBubble">
            <BiPlus />
          </div>
          <h5>Add</h5>
        </div>
        <StoryBubble />
        <StoryBubble />
        <StoryBubble />
        <StoryBubble />
      </div>
    </div>
  );
}

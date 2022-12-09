import React from "react";
import ProfileInfo from "./profileInfo";
import RightSidebarHeader from "./rightSidebarHeader";

export default function RightSidebar() {
  return (
    <div className="rightSidebar">
      <RightSidebarHeader />
      <ProfileInfo />
    </div>
  );
}

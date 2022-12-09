import React from "react";

import { CiSearch } from "react-icons/ci";
export default function LeftSidebarSearch() {
  return (
    <div className="leftSidebarSearch">
      <div className="leftSidebarSearch-container">
        <CiSearch />
        <input placeholder="Search or start new chat" />
      </div>
    </div>
  );
}

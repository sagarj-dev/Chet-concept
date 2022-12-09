import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";
import { FiSun } from "react-icons/fi";
import useAppContext from "../utility/useAppContext";

export default function LeftSidebarNav() {
  const { toggleTheme } = useAppContext();
  return (
    <div className="leftSidebarNav">
      <div className="nav-dots">
        <span className="red" />
        <span className="yellow" />
        <span className="green" />
      </div>
      <div className="leftSidebar-Menu">
        <AiFillEdit />
        <FiSun onClick={toggleTheme} />
        <RxCaretDown />
      </div>
    </div>
  );
}

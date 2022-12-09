import React from "react";
import RoundIconButton from "../common/RoundIconButton";
import { HiVideoCamera, HiDotsHorizontal } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
export default function ChatScreenHeader() {
  return (
    <div className="chatScreenHeader">
      <div className="chatScreenHeader-left">
        <img
          src="https://randomuser.me/api/portraits/med/women/32.jpg"
          alt=""
        />{" "}
        <div>
          <h5>Zilam</h5>
          <p>online</p>
        </div>
      </div>

      <div className="chatScreenHeader-right">
        <RoundIconButton>
          <HiVideoCamera />
        </RoundIconButton>
        <RoundIconButton>
          <IoCall />
        </RoundIconButton>
        <RoundIconButton>
          <HiDotsHorizontal />
        </RoundIconButton>
      </div>
    </div>
  );
}

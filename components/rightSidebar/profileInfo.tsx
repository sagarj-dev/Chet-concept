import React from "react";
import RoundIconButton from "../common/RoundIconButton";
import { HiVideoCamera } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { BiBlock } from "react-icons/bi";
import { TbThumbDown } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import ActionButton from "../common/actionButton";
import ToogleSwitch from "../common/toogleSwitch";
export default function ProfileInfo() {
  return (
    <div className="profileInfo">
      <div className="profile">
        <img
          src="https://randomuser.me/api/portraits/med/women/32.jpg"
          alt=""
        />
        <h5>Zilan</h5>
        <p>Online</p>
        <div>
          <RoundIconButton>
            <HiVideoCamera />
          </RoundIconButton>
          <RoundIconButton>
            <IoCall />
          </RoundIconButton>
        </div>
      </div>
      <div className="profileAbout">
        <h5>About</h5>
        <p>Hello My name is Zilan ...</p>
      </div>
      <div className="profileMedia">
        <h5>Media,links and doc</h5>
        <div>
          <img src="https://picsum.photos/id/112/200" alt="" />
          <img src="https://picsum.photos/id/113/200" alt="" />
          <img src="https://picsum.photos/id/114/200" alt="" />
          <img src="https://picsum.photos/id/115/200" alt="" />
        </div>
      </div>
      <div className="profileMuteNotification">
        <h5>Mute notifications</h5>
        <ToogleSwitch />
      </div>
      <div className="disMsg">
        <h5>Disappearing messages</h5>
        <p>Off</p>
      </div>

      <div className="rightSidebarActions">
        <ActionButton icon={BiBlock} title="Block Zilan" />
        <ActionButton icon={TbThumbDown} title="Report Zilan" />
        <ActionButton icon={RiDeleteBin6Line} title="Delete Zilan" />
      </div>
    </div>
  );
}

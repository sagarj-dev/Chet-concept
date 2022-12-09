import React from "react";

export default function ToogleSwitch() {
  return (
    <div className="toogleSwitch">
      <input type="checkbox" id="switch" />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
}

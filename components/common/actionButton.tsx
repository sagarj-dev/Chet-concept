import React, { FC } from "react";
type ActionButtonType = {
  icon: FC;
  title: string;
};
export default function ActionButton({ icon: Icon, title }: ActionButtonType) {
  return (
    <div className="actionButtonPink">
      <Icon /> <h5>{title}</h5>
    </div>
  );
}

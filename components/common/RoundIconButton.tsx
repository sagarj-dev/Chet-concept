import React, { ReactNode } from "react";

type RoundIconButtonType = {
  children: ReactNode,
};

export default function RoundIconButton({ children }: RoundIconButtonType) {
  return <div className="roundIconButton">{children}</div>;
}

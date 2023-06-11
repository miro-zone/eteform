"use client";

import { MouseEventHandler, ReactNode, useState } from "react";

export function Dropdown({
  children,
  Toggler,
}: {
  children: ReactNode;
  Toggler: ({ onClick }: { onClick: MouseEventHandler }) => JSX.Element;
}) {
  const [show, setShow] = useState(false);

  const clickHandler = () => setShow(cur => !cur);
  return (
    <>
      <Toggler onClick={clickHandler} />
      <ul className={`dropdown-menu ${show && "show"}`}>{children}</ul>
    </>
  );
}

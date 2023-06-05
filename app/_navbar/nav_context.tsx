"use client";

import { ReactNode, createContext, useState } from "react";

export const NavContext = createContext({
  isActive: false,
  switchStatus: (status?: boolean) => {},
});

export function NavProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isActive, setActive] = useState(false);

  /**
   * Work as toggler incase no status are passed
   */
  const switchStatus = (status?: boolean) => {
    setActive((cur) => status ?? !cur);
  };

  return (
    <NavContext.Provider value={{ isActive, switchStatus }}>
      {children}
    </NavContext.Provider>
  );
}

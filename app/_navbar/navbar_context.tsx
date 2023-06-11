"use client";

import { createContext, useState } from "react";

const NavContext = createContext({
  show: false,
  showHandler: (status?: boolean) => {},
});

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  const stateCallback = (status?: boolean) => (currentState: boolean) =>
    status ?? !currentState;

  const showHandler = (status?: boolean) => setShow(stateCallback(status));
  return (
    <NavContext.Provider value={{ show, showHandler }}>
      {children}
    </NavContext.Provider>
  );
}

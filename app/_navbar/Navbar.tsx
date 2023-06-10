"use client";
import { ReactNode, createContext, useContext, useState } from "react";

const NavContext = createContext({
  show: false,
  showHandler: (status?: boolean) => {},
});

function NavItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { show, showHandler } = useContext(NavContext);

  const clickHandler = () => showHandler(false);

  return (
    <li className={className ?? ""} onClick={clickHandler}>
      {children}
    </li>
  );
}

function Navbar({ list }: { list: any[] }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <NavItem className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </NavItem>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <NavItem>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </NavItem>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default function NavProvider({ list }: { list: any[] }) {
  const [show, setShow] = useState(false);
  const stateCallback = (status?: boolean) => (currentState: boolean) =>
    status ?? !currentState;
  const showHandler = (status?: boolean) => setShow(stateCallback(status));
  return (
    <NavContext.Provider value={{ show, showHandler }}>
      <Navbar list={list} />
    </NavContext.Provider>
  );
}

"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

export interface IRoute {
  content: { title: string; icon?: JSX.Element };
  href?: string;
  routes?: this[];
}

type NavbarProps = { routes: IRoute[] };

function NavbarDropdown(props: IRoute) {
  const { content, routes } = props;
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        aria-expanded="false"
      >
        {content.title}
      </a>
      <ul className="dropdown-menu show">{routes!.map(NavbarNestedLink)}</ul>
    </li>
  );
}

function NavbarNestedLink(props: IRoute) {
  const { routes, content, href } = props;
  if (routes) return <NavbarDropdown {...props} />;

  return (
    <li>
      <Link className="dropdown-item" href={href!}>
        {content.title}
      </Link>
    </li>
  );
}

function NavbarLink(props: IRoute) {
  const { href, content, routes } = props;
  if (routes) return <NavbarDropdown {...props} />;

  return (
    <li className="nav-item">
      <Link className="nav-link" href={href!}>
        {content.title}
      </Link>
    </li>
  );
}

export function Navbar({ routes }: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">{routes.map(NavbarLink)}</ul>
        </div>
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      </div>
    </nav>
  );
}

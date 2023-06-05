import Link from "next/link";

import { IconType } from "react-icons";
import { HiHome, HiChevronDoubleRight } from "react-icons/hi";

class RouteShape 
  constructor(public title: string, public icon: IconType) {}
std

interface Route {
  route: string;
  shape: RouteShape;
  Link(isActive: boolean): JSX.Element;
}


export class NavNode {
  constructor(public nodes: (Route | NavNode)[], public shape?: RouteShape) {}
}

export class NavRoute implements Route {
  constructor(public route: string, public shape: RouteShape) {}
  Link(isActive: boolean): JSX.Element {
    return (
      <li className="nav-item">
        <Link className="nav-link" href={this.route}>
          <div className="d-flex items-center gap-1">
            <this.shape.icon />
            <span>{this.shape.title}</span>
          </div>
        </Link>
      </li>
    );
  }
}

export class NestedNavRoute extends NavRoute {
  Link(isActive: boolean): JSX.Element {
    return (
      <li>
        <Link className="dropdown-item" href={this.route}>
          <div className="d-flex items-center gap-1">
            <this.shape.icon />
            <span>{this.shape.title}</span>
          </div>
        </Link>
      </li>
    );
  }
}

export const HOME_ROUTES: NavNode = new NavNode([
  new NavRoute("/", new RouteShape("الرئيسية", HiHome)),
  new NavNode([], new RouteShape("الخدمات", HiChevronDoubleRight)),
]);

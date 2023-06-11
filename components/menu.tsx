"use client";

import { MouseEventHandler, ReactNode, RefObject, useRef } from "react";
import { useClickout } from "../hooks/use_clickout";

type JsxWithClass<T = {}> = (props: T & { className: string }) => JSX.Element;
type JsxWithClick<T = {}> = JsxWithClass<T & { onClick: MouseEventHandler }>;

export type MenuContainer = JsxWithClass<{
  ref: RefObject<any>;
  children: ReactNode;
}>;

export type MenuToggler = JsxWithClick;

export type MenuListWrapper = JsxWithClick<{ children: ReactNode }>;

export function Menu(Container: MenuContainer) {
  return (Toggler: MenuToggler) =>
    (ListWrapper: MenuListWrapper) =>
    ({ children }: { children: ReactNode }) => {
      const containerRef = useRef(null);
      const { show, setShow } = useClickout(containerRef);

      const handleToggling = (status?: boolean) => () =>
        setShow(cur => status ?? !cur);
      return (
        <Container className="" ref={containerRef}>
          <Toggler className="" onClick={handleToggling()} />
          <ListWrapper
            className={`${show ? "show" : ""}`}
            onClick={handleToggling(false)}
          >
            {children}
          </ListWrapper>
        </Container>
      );
    };
}

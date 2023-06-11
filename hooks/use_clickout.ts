import { RefObject, useCallback, useEffect, useState } from "react";

export function useClickout(ref: RefObject<HTMLElement>) {
  const [show, setShow] = useState(false);

  const clickOutHandler = useCallback((event: MouseEvent) => {
    if (ref.current!.contains(event.target as HTMLElement)) return;
    if (show) setShow(false);
  }, []);

  const cleanUp = () => {
    document.removeEventListener("click", clickOutHandler);
  };

  useEffect(() => {
    if (!ref.current) return;

    document.addEventListener("click", clickOutHandler, true);

    return cleanUp;
  }, [ref]);

  return { show, setShow };
}

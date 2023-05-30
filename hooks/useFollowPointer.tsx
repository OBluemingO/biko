import { useState, useEffect, RefObject } from "react";
import { IPos } from "@/typs/mouseTracking";

export const useFollowPointer = (ref: RefObject<HTMLDivElement>) => {
  const [pos, setPos] = useState<IPos>({x:0,y:0});

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      if(!(ref.current instanceof HTMLDivElement)) return

      const element = ref.current
      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;

      setPos({ x, y });
    };

    window.addEventListener("mousemove", handlePointerMove);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  return pos;
}
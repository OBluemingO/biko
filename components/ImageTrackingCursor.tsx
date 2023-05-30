"use client"
import { useFollowPointer } from "@/hooks/useFollowPointer";
import { motion } from "framer-motion";
import { useEffect , useRef } from "react";

interface IProps {
  show: boolean;
  current: number;
}

const ImageTrackingCursor: React.FC<IProps> = ({
  show,
  current,
}: IProps): JSX.Element => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const clickCurSorRef = useRef<HTMLDivElement | null>(null);
  const { x, y } = useFollowPointer(cursorRef);
  const { x:X, y:Y } = useFollowPointer(clickCurSorRef);

  useEffect(() => {
    const element =  cursorRef.current 
    if(!(element)) return
    const height = element?.offsetHeight
    element?.scrollTo({top: current*height, behavior:"smooth"})
  },[current])

  return (
    <>
      <motion.div
        ref={(el) => (cursorRef.current = el)}
        className=" overflow-hidden w-[250px] h-[250px] pointer-events-none bg-black fixed select-none"
        initial={{ scale: 0 }}
        animate={{ x, y, scale: show ? 1 : 0 }}
        transition={{ ease: "easeOut", scale: { delay: show ? 0 : 0.5 } }}
      >
        <div className="h-full w-full bg-green-200"></div>
        <div className="h-full w-full bg-red-200"></div>
        <div className="h-full w-full bg-black"></div>
      </motion.div>
      <motion.div
        className="pointer-events-none fixed w-[100px] h-[50px] bg-white rounded-full grid place-items-center"
        ref={(el) => (clickCurSorRef.current = el)}
        initial={{ scale: 0 }}
        animate={{ x:X, y:Y, scale: show ? 1 : 0 }}
        transition={{ ease: "easeOut", scale: { delay: show ? 0 : 0.5 } }}
      > click me </motion.div>
    </>
  );
};

export default ImageTrackingCursor
"use client"
import { useFollowPointer } from "@/hooks/useFollowPointer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect , useRef } from "react";
import ImageBiko from '../public/images/man-biko.jpg'

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
              className=" pointer-events-none fixed hidden h-[250px] w-[250px] select-none overflow-hidden bg-black lg:block"
              initial={{ scale: 0 }}
              animate={{ x, y, scale: show ? 1 : 0 }}
              transition={{
                  scale: { ease: "easeOut", scale: { delay: show ? 0 : 0.5 } },
              }}
          >
              <div className="h-full w-full bg-green-200"></div>
              <div className="h-full w-full bg-red-200"></div>
              <div className="relative h-full w-full overflow-hidden grayscale">
                  <Image
                      className="absolute"
                      fill
                      alt="biko-man"
                      src={ImageBiko}
                  />
              </div>
          </motion.div>
          <motion.div
              className="pointer-events-none fixed hidden h-[50px] w-[100px] place-items-center rounded-full bg-white lg:grid"
              ref={(el) => (clickCurSorRef.current = el)}
              initial={{ scale: 0 }}
              animate={{ x: X, y: Y, scale: show ? 1 : 0 }}
              // transition={{ ease: "easeOut", scale: { delay: show ? 0 : 0.5 } }}
              transition={{
                  scale: { ease: "easeOut", scale: { delay: show ? 0 : 0.5 } },
              }}
          >
              {" "}
              click me{" "}
          </motion.div>
      </>
  );
};

export default ImageTrackingCursor
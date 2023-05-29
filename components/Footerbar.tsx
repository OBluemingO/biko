"use client";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import clsx from 'clsx'
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Footerbar: React.FC = () => {
    const [show, setShow] = useState(false);
    const [showFooterBar, setShowFooterBar] = useState(false)
    const [currentHover, setCurrentHover] = useState(0)
    const { scrollYProgress } = useScroll();
    const menuRef = useRef<(HTMLDivElement | null)[]>([])

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const percentScrollY = latest * 100;
        if (percentScrollY >= 2) return setShow(true)
        
        return setShow(false)
    });
    // ? note: example seque animation
  //   useEffect(() => {
  //    if (isPresent) {
  //      const enterAnimation = async () => {
  //        await animate(scope.current, { opacity: 1 })
  //        await animate("li", { opacity: 1, x: 0 })
  //      }
  //      enterAnimation()

  //    } else {
  //      const exitAnimation = async () => {
  //        await animate("li", { opacity: 0, x: -100 })
  //        await animate(scope.current, { opacity: 0 })
  //        safeToRemove()
  //      }
       
  //      exitAnimation()
  //    }
  // }, [isPresent])

    return (
      <>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: show ? 1 : 0 }}
          transition={{ type: "spring" }}
          className={clsx(
            "grid place-items-center fixed h-[80px] bottom-[30px] w-[80px] mix-blend-difference right-[3%] z-[200] cursor-pointer bg-white rounded-full"
          )}
          onClick={() => setShowFooterBar((prev) => !prev)}
        >
          <GiHamburgerMenu
            className="mix-blend-difference w-2/4 h-2/4"
            color="white"
          />
        </motion.div>
        <motion.div className="fixed z-[199] flex justify-center items-center bottom-0 bg-green-200 w-full h-[140px]">
          <div className=" text-center relative border-2 flex text-white uppercase overflow-hidden items-center rounded-full border-white  w-[calc(100vw-30%)] h-[80px] transition-all bg-[#141415]">
            <div className="w-1/4 cursor-pointer" onMouseOver={() => setCurrentHover(0)}>
              Home
            </div>
            <div
              className="w-1/4 border-l-[1px] cursor-pointer"
              onMouseOver={() => setCurrentHover(1)}
            >
              About Us
            </div>
            <div
              className="w-1/4 border-l-[1px] cursor-pointer"
              onMouseOver={() => setCurrentHover(2)}
            >
              Benefits
            </div>
            <div
              className="w-1/4 border-l-[1px] cursor-pointer"
              onMouseOver={() => setCurrentHover(3)}
            >
              Contact
            </div>
            <motion.div
              className="pointer-events-none absolute w-1/4 h-2/4  flex justify-center rounded-full"
              initial={{ left: "0%" }}
              animate={{ left: `calc(25% * ${currentHover})` }}
              transition={{ type: "spring" }}
            >
              <div className="w-3/4 h-full mix-blend-difference rounded-full bg-white "></div>
            </motion.div>
          </div>
        </motion.div>
      </>
    );
};

export default Footerbar;

"use client";
import { useMotionValueEvent, useScroll, motion, useInView } from "framer-motion";
import clsx from 'clsx'
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useModalStore } from "@/stores/store";

const MenuBar: React.FC = () => {
    const [show, setShow] = useState(false);
    const [showFooterBar, setShowFooterBar] = useState(false)
    const [currentHover, setCurrentHover] = useState(0)
    const action_modal_auth = useModalStore((state) => state.action_modal_auth);
    const modal_auth = useModalStore((state) => state.modal_auth);

    useEffect(() => {
      if(modal_auth) {
        setShowFooterBar(false)
      }
    },[modal_auth])

    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      const percentScrollY = latest * 100;
      if (percentScrollY >= 2) return setShow(true);

      setShow(false);
      setShowFooterBar(false);
    });

    const variants = {
      hidden: { scale:0, y:[0, 50, 0] },
      animate: { scale: [0,0.5,1], y: [0, 50, 0] },
    }

    return (
        <>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: show ? [0, 1, 1.2, 1] : 0 }}
                transition={show ? { type: "spring" } : { ease: "easeOut" }}
                className={clsx(
                    "fixed right-[3%] top-[3%] z-[7000] grid h-[30px] w-[30px] lg:h-[80px] lg:w-[80px] cursor-pointer select-none place-items-center rounded-full bg-white mix-blend-difference lg:bottom-[30px]"
                )}
                onClick={() => {
                    if (!modal_auth) setShowFooterBar((prev) => !prev);
                }}
            >
                <GiHamburgerMenu
                    className="h-2/4 w-2/4 mix-blend-difference"
                    color="white"
                />
            </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={showFooterBar ? "animate" : "hidden"}
                transition={{ ease: "easeOut" }}
                className="fixed bottom-0 z-[5000] flex h-[140px] w-full items-center justify-center bg-transparent"
            >
                <div className="relative flex h-[80px] w-[calc(100vw-2.5%)] items-center overflow-hidden rounded-full border-2 border-white bg-[#141415] text-center text-menu-footer uppercase text-white transition-all lg:w-[calc(100vw-30%)]">
                    <div
                        className="w-1/4 cursor-pointer"
                        onMouseOver={() => setCurrentHover(0)}
                    >
                        Home
                    </div>
                    <div
                        className="w-1/4 cursor-pointer border-l-[1px]"
                        onMouseOver={() => setCurrentHover(1)}
                    >
                        Benifits
                    </div>
                    <div
                        className="w-1/4 cursor-pointer border-l-[1px]"
                        onMouseOver={() => setCurrentHover(2)}
                    >
                        Contact
                    </div>
                    <div
                        className="w-1/4 cursor-pointer border-l-[1px]"
                        onMouseOver={() => setCurrentHover(3)}
                        onClick={() => action_modal_auth(true)}
                    >
                        Login
                    </div>
                    <motion.div
                        className="pointer-events-none absolute flex h-2/4  w-1/4 justify-center rounded-full"
                        initial={{ left: "0%" }}
                        animate={{ left: `calc(25% * ${currentHover})` }}
                        transition={{ type: "spring" }}
                    >
                        <div className="h-full w-3/4 rounded-full bg-white mix-blend-difference "></div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default  MenuBar;

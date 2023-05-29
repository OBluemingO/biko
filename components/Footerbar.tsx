"use client";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import clsx from 'clsx'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Footerbar = () => {
    const [show, setShow] = useState(false);
    const [showFooterBar, setShowFooterBar] = useState(false)
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const percentScrollY = latest * 100;
        if (percentScrollY >= 2) return setShow(true)
        
        return setShow(false)
    });

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
            {/* <motion.div className="fixed z-[199] flex justify-center items-center bottom-0 bg-green-200 w-full h-[140px]">
                <div className="border-2 flex text-white uppercase overflow-hidden items-center rounded-full border-white  w-[calc(100vw-30%)] h-[80px] transition-all bg-[#141415]">
                    <div className="w-[30%] flex justify-center ">
                        Home
                    </div>
                    <div className="flex text-center items-center w-[70%] h-full">
                        <div className="w-2/6">About Us</div>
                        <div className="w-2/6">Benefits</div>
                        <div className="w-2/6">Contact</div>
                    </div>
                </div>
            </motion.div> */}
        </>
    );
};

export default Footerbar;

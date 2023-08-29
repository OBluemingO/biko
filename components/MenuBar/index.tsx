"use client";
import {
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";
import clsx from "clsx";
import { useState, useEffect, useLayoutEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMenuBarStore, useModalStore } from "@/stores/store";
import { usePathname } from "next/navigation";
import EachSelectMenu from "./eachSelectMenu";
import { useSession } from "next-auth/react";



const MenuBar: React.FC = () => {

  const initValue = ["Home", "Products", "Contact", "Login"]

  const [show, setShow] = useState(false);
  const [menuList, setMenuList] = useState<string[]>(initValue) 
  const [currentHover, setCurrentHover] = useState(0);
  const modal_auth = useModalStore((state) => state.modal_auth);
  const showFooterBar = useMenuBarStore((state) => state.is_show_menu)
  const action_modal_auth = useModalStore((state) => state.action_modal_auth);
  const action_show_menu = useMenuBarStore((state) => state.action_show_menu);

  const pathname = usePathname()
  useLayoutEffect(() => {
    switch(pathname) {
      case '/products':
        setCurrentHover(1)
        break
      default:
        setCurrentHover(0)
    }
  },[])

  useEffect(() => {
    if (modal_auth) {
      action_show_menu(false);
    }
  }, [modal_auth]);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const percentScrollY = latest * 100;
    if (percentScrollY >= 2) return setShow(true);

    setShow(false);
  });

  const variants = {
    hidden: { scale: 0, y: [0, 50, 0] },
    animate: { scale: [0, 0.5, 1], y: [0, 50, 0] },
  };

  const { status } = useSession()

  useEffect(() => {
    if(status == 'authenticated') setMenuList(prev => {
      prev.pop()
      return [...prev, 'Profile']
    }) 
    else setMenuList(initValue)
  },[status])


  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: show ? [0, 1, 1.2, 1] : 0 }}
        transition={show ? { type: "spring" } : { ease: "easeOut" }}
        className={clsx(
          "fixed right-[3%] top-[3%] z-[7000] grid h-[30px] w-[30px] cursor-pointer select-none place-items-center rounded-full bg-white mix-blend-difference lg:bottom-[30px] lg:h-[80px] lg:w-[80px]"
        )}
        onClick={() => {
          if (!modal_auth) action_show_menu(!showFooterBar);
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
          {
            menuList.map((item, idx) => <EachSelectMenu key={`menu-bar-${idx}`} {...{idx, setCurrentHover, name:item }} />)
          }
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

export default MenuBar;
